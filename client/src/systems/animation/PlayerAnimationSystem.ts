/**
 * Manages player animation: clip lookup, crossfade, mixer update.
 */

import * as THREE from "three";
import {
  ANIMATION_CLIP_IDS,
  DEFAULT_CLIP_NAMES,
  type AnimationClipId,
} from "shared";

const CROSSFADE_DURATION = 0.15;
/** Vertical velocity below which we hold apex pose (m/s). */
const JUMP_APEX_VY_THRESHOLD = 2.5;
/** Fraction of jump clip where "legs maximally drawn, settled" (apex) occurs. */
const JUMP_APEX_FRACTION = 0.5;
/** Don't play past this – last frames often look like T-Pose. */
const JUMP_MAX_FRACTION = 0.9;

/** Normalize clip name for fuzzy matching (lowercase, no spaces). */
function normalizeClipName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "");
}

export class PlayerAnimationSystem {
  private clipsById = new Map<string, THREE.AnimationClip>();
  private clipNames: Record<AnimationClipId, string>;
  private currentActions = new Map<THREE.AnimationMixer, THREE.AnimationAction>();
  private crossfadeDuration: number;

  constructor(
    clipNames: Partial<Record<AnimationClipId, string>> = {},
    crossfadeDuration = CROSSFADE_DURATION
  ) {
    this.clipNames = { ...DEFAULT_CLIP_NAMES, ...clipNames };
    this.crossfadeDuration = crossfadeDuration;
  }

  /**
   * Find idle clip using same logic as findIdleClip (Idle Aiming, Idle, or first clip).
   */
  private findIdleClip(animations: THREE.AnimationClip[]): THREE.AnimationClip | undefined {
    if (!animations.length) return undefined;
    const idleAiming = animations.find((c) => normalizeClipName(c.name) === "idleaiming");
    if (idleAiming) return idleAiming;
    const idle = animations.find((c) => normalizeClipName(c.name) === "idle");
    if (idle) return idle;
    return animations[0];
  }

  /**
   * Initialize clip map from loaded GLB animations.
   * Tries exact match first, then normalized name match. Idle uses findIdleClip fallback.
   */
  init(animations: THREE.AnimationClip[]): void {
    this.clipsById.clear();
    const byNormalizedName = new Map<string, THREE.AnimationClip>();
    for (const clip of animations) {
      byNormalizedName.set(normalizeClipName(clip.name), clip);
      const afterPipe = clip.name.split("|").pop();
      if (afterPipe && afterPipe !== clip.name) {
        byNormalizedName.set(normalizeClipName(afterPipe), clip);
      }
    }

    for (const [clipId, expectedName] of Object.entries(this.clipNames)) {
      const normExpected = normalizeClipName(expectedName);
      let found =
        animations.find((c) => c.name === expectedName) ??
        byNormalizedName.get(normExpected) ??
        animations.find((c) => {
          const n = normalizeClipName(c.name);
          const afterPipe = c.name.split("|").pop() ?? "";
          return n === normExpected || normalizeClipName(afterPipe) === normExpected;
        });
      if (found) {
        this.clipsById.set(clipId, found);
      }
    }

    const idleFallback = this.findIdleClip(animations);
    if (!this.clipsById.has("idle") && idleFallback) {
      this.clipsById.set("idle", idleFallback);
      if (import.meta.env?.DEV) {
        console.info("[PlayerAnimationSystem] Idle fallback used:", idleFallback.name);
      }
    }

    const slideFallback = animations.find((c) => normalizeClipName(c.name) === "slide");
    if (!this.clipsById.has("slide") && slideFallback) {
      this.clipsById.set("slide", slideFallback);
      if (import.meta.env?.DEV) {
        console.info("[PlayerAnimationSystem] Slide fallback used (sliding not found):", slideFallback.name);
      }
    }

    if (import.meta.env?.DEV && animations.length > 0) {
      const missing = (Object.keys(ANIMATION_CLIP_IDS) as AnimationClipId[]).filter(
        (id) => !this.clipsById.has(id)
      );
      const available = animations.map((a) => a.name);
      console.info("[PlayerAnimationSystem] GLB clips:", available.join(", "));
      if (missing.length > 0) {
        const expected = missing.map((id) => this.clipNames[id as AnimationClipId]).join(", ");
        console.warn(
          `[PlayerAnimationSystem] Missing: ${missing.join(", ")} (expected: ${expected}). Add to clientConfig.animationClipNames if your GLB uses different names.`
        );
      }
    }
  }

  /** Get clip by ID (from resolveAnimationClipId) or by exact name. */
  findClip(clipIdOrName: string): THREE.AnimationClip | undefined {
    return (
      this.clipsById.get(clipIdOrName) ??
      Array.from(this.clipsById.values()).find((c) => c.name === clipIdOrName)
    );
  }

  /**
   * Sync jump animation with vertical velocity: hold at apex when vy ≈ 0.
   * Never snap backward (time >= apex) to avoid leg wobble.
   * Cap at JUMP_MAX_FRACTION so we never show the last frame (often T-Pose).
   */
  private updateJumpSync(action: THREE.AnimationAction, clip: THREE.AnimationClip, vy: number): void {
    const apexTime = clip.duration * JUMP_APEX_FRACTION;
    const maxTime = clip.duration * JUMP_MAX_FRACTION;

    if (Math.abs(vy) < JUMP_APEX_VY_THRESHOLD) {
      action.timeScale = 0;
      if (action.time < apexTime) {
        action.time = apexTime;
      }
    } else {
      action.timeScale = 1;
      if (vy < 0 && action.time < apexTime) {
        action.time = apexTime;
      }
      if (action.time > maxTime) {
        action.time = maxTime;
        action.timeScale = 0;
      }
    }
  }

  /** Strafe Fast clips at 70% speed when not sprinting (A/D without Shift). */
  private static readonly STRAFE_SLOW_SCALE = 0.7;

  /**
   * Play clip on mixer with crossfade. Falls back to idle if clip not found (never T-Pose).
   * Only transitions when clip changes – avoid reset() every frame (caused T-Pose flash).
   * Context: vy for jump sync; sprint or timeScale for strafe speed (strafe without sprint = 30% slower).
   */
  playClip(
    mixer: THREE.AnimationMixer,
    clipIdOrName: string,
    context?: { vy?: number; sprint?: boolean; timeScale?: number }
  ): void {
    let clip = this.findClip(clipIdOrName);
    let effectiveClipId = clipIdOrName;
    if (!clip) {
      clip = this.findClip("idle");
      effectiveClipId = "idle";
      if (!clip) return;
    }

    const prevAction = this.currentActions.get(mixer);
    const nextAction = mixer.clipAction(clip);
    const clipChanged = prevAction !== nextAction;

    if (clipChanged) {
      nextAction.setLoop(
        effectiveClipId === "jump" ? THREE.LoopOnce : THREE.LoopRepeat,
        effectiveClipId === "jump" ? 1 : Infinity
      );
      const jumpClip = this.findClip("jump");
      const fromJump = prevAction && jumpClip && prevAction.getClip() === jumpClip;
      const fadeDur = fromJump ? 0.06 : this.crossfadeDuration;
      if (prevAction) {
        prevAction.fadeOut(fadeDur);
      }
      nextAction.reset().fadeIn(fadeDur).play();
      this.currentActions.set(mixer, nextAction);
    }

    if (effectiveClipId === "jump" && context?.vy !== undefined) {
      this.updateJumpSync(nextAction, clip, context.vy);
    }

    const isStrafeFast =
      effectiveClipId === "strafeLeftFast" || effectiveClipId === "strafeRightFast";
    if (isStrafeFast) {
      if (context?.timeScale !== undefined) {
        nextAction.timeScale = context.timeScale;
      } else if (context?.sprint === false) {
        nextAction.timeScale = PlayerAnimationSystem.STRAFE_SLOW_SCALE;
      } else {
        nextAction.timeScale = 1;
      }
    }
  }

  /** Update all mixers that have been used. Caller should pass mixers to update. */
  updateMixers(mixers: THREE.AnimationMixer[], dt: number): void {
    for (const mixer of mixers) {
      mixer.update(dt);
    }
  }
}
