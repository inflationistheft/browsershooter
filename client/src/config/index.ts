/**
 * Central client config and feature flags.
 */

import type { AnimationClipId } from "shared";

export interface PovMovementTuning {
  moveFactorSmoothTau: number;
  phaseSpeedSmoothTau: number;
  rootApplyTau: number;
  bobAmplitudeY: number;
  bobAmplitudeX: number;
  bobAmplitudeRoll: number;
  bobAmplitudePitch: number;
  bobPhaseOffsetX: number;
  bobFrequency: number;
  bobCrouchMultiplier?: number;
  bobCrouchFreqMultiplier?: number;
  bobCrouchAmpMultiplier?: number;
  swayLookFactor: number;
  swaySmoothTau: number;
  swayDeltaSmoothTau?: number;
  swayReturnDamping: number;
  swaySlideReduce: number;
  bobSlideReduce?: number;
  strafeLeanX?: number;
  strafeLeanRoll?: number;
  forwardLeanZ?: number;
  strafeLeanTau?: number;
  strafeBobYReduce?: number;
  strafeBobXBoost?: number;
  strafeBobRollBoost?: number;
  idleBreathingAmplitudeY?: number;
  idleBreathingAmplitudeX?: number;
  idleBreathingPeriod?: number;
  idlePitchAmplitude?: number;
  idleRollAmplitude?: number;
  idleWalkReduce?: number;
  idleAirborneReduce?: number;
  jumpTakeoffDip?: number;
  jumpTakeoffDecay?: number;
  jumpAirborneFloatY?: number;
  jumpLandingDip?: number;
  jumpLandingSpringK?: number;
  jumpLandingSpringDamp?: number;
  jumpLandingRoll?: number;
  jumpInertiaZ?: number;
  swayAirborneReduce?: number;
  recoilKickPitch: number;
  recoilPullback: number;
  recoilRollVariation: number;
  recoilRecoveryTau: number;
  recoilSlideReduce: number;
  slideYOffset: number;
  slideZOffset: number;
  slideInwardTilt: number;
  slidePitchDown?: number;
  slideImpactDipAmp: number;
  slideImpactSpringK?: number;
  slideImpactSpringDamp?: number;
  slideWiggleRoll?: number;
  slideWiggleDuration?: number;
  slideReleaseBump?: number;
  slideReleaseBumpTau?: number;
  slideInTau: number;
  slideOutTau: number;
  // Reload override (procedural, not GLB)
  reloadYOffset?: number;
  reloadZOffset?: number;
  reloadPullback?: number;
  reloadPitchDown?: number;
  reloadRoll?: number;
  reloadYaw?: number;
  reloadOvershoot?: number;
  swayReloadReduce?: number;
  idleReloadReduce?: number;
  /** Dash: Z offset (viewmodel back = lunge feel). */
  dashOffsetZ?: number;
  /** Dash: pitch down (rad). */
  dashTiltPitch?: number;
  /** Dash: blend in/out tau (s). */
  dashBlendTau?: number;
}

export interface ThirdPersonWeaponOffset {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scale: number;
}

const COLYSEUS_PORT = 2567;
const rawServerUrl = (import.meta as unknown as { env?: { VITE_SERVER_URL?: string } }).env?.VITE_SERVER_URL;
function defaultServerUrl(): string {
  if (typeof window !== "undefined" && window.location?.hostname) {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    return `${protocol}//${window.location.hostname}:${COLYSEUS_PORT}`;
  }
  return `ws://localhost:${COLYSEUS_PORT}`;
}
export const clientConfig = {
  /** Server URL for Colyseus. With no env set, uses same host as the page and port 2567. */
  serverUrl: (typeof rawServerUrl === "string" && rawServerUrl.trim() !== "" ? rawServerUrl.trim() : defaultServerUrl()),

  /** Room to join: "arena_ffa" or "arena_1v1". Overridden by URL ?room=1v1 or ?room=arena_ffa. */
  roomName: (import.meta as unknown as { env?: { VITE_ARENA_ROOM?: string } }).env?.VITE_ARENA_ROOM ?? "arena_ffa",

  /** Enable debug overlay */
  debugOverlay: true,

  /** Log level: "error" | "warn" | "info" | "debug" */
  logLevel: "info" as const,

  /** GLB for all players (local + remote). Animations in this file drive bone-anchored hitboxes. */
  playerModelUrl: (import.meta as unknown as { env?: { VITE_PLAYER_MODEL_URL?: string } }).env?.VITE_PLAYER_MODEL_URL ?? "/models/player.glb",
  /** GLB for FPS viewmodel (arms only). Falls back to player.glb if empty or load fails. */
  viewmodelArmsUrl: ((import.meta as unknown as { env?: { VITE_VIEWMODEL_ARMS_URL?: string } }).env?.VITE_VIEWMODEL_ARMS_URL ?? "/models/vanguard_pov.glb").trim(),
  /** GLB for viewmodel weapon (anchored to RightHand bone). Empty = no weapon. Place in models/weapons/, e.g. battlerifle.glb. */
  viewmodelWeaponUrl: ((import.meta as unknown as { env?: { VITE_VIEWMODEL_WEAPON_URL?: string } }).env?.VITE_VIEWMODEL_WEAPON_URL ?? "/models/weapons/rifle.glb").trim(),
  /** Scale for viewmodel weapon. battlerifle: 24, riflewhite: 96. */
  viewmodelWeaponScale: Number(
    (import.meta as unknown as { env?: { VITE_VIEWMODEL_WEAPON_SCALE?: string } }).env?.VITE_VIEWMODEL_WEAPON_SCALE ?? "3.6"
  ) || 3.6,
  /** Two-point anchoring (RightHand + LeftHand/gripleft). Disabled. */
  viewmodelWeaponTwoPoint: false,
  /** Weapon offset (x, y, z) relative to RightHand. Used for decoupled POV weapon positioning. */
  viewmodelWeaponOffset: { x: 0.26, y: 0.23, z: 0.44 },
  /** Extra offset in viewmodel space: +x=right, +y=up, +z=forward. Added after hand position. */
  viewmodelWeaponPovOffset: { x: 0, y: -0.4, z: 0 },
  /** Shift weapon model so grip (Blender origin) aligns with hand. If GLB root ≠ object origin, tune this. */
  viewmodelWeaponGripOffset: { x: 0, y: 0, z: 0 },
  /** Extra X rotation (radians). Negative = tilt down. */
  viewmodelWeaponRotationX: -1.68,
  /** Extra Y rotation (radians). riflewhite: Math.PI to flip barrel direction. */
  viewmodelWeaponRotationY: 2.93,
  /** Extra Z rotation (radians). riflewhite: 5*Math.PI/2 for orientation. */
  viewmodelWeaponRotationZ: 2 * Math.PI,
  /** GLB for static dummies (optional, future use). Not used for playable characters. */
  dummyModelUrl: (import.meta as unknown as { env?: { VITE_DUMMY_MODEL_URL?: string } }).env?.VITE_DUMMY_MODEL_URL ?? "/models/dummy.glb",

  /** Skin ID for player (PNG in /models/skins/{id}.png). Empty = use embedded GLB texture. Default: orange. */
  playerSkin: ((import.meta as unknown as { env?: { VITE_PLAYER_SKIN?: string } }).env?.VITE_PLAYER_SKIN ?? "orange").trim(),

  /** Muzzle flash: PNG URLs. Empty = use procedural textures only. */
  muzzleFlashUrls: [] as string[],
  /** Muzzle flash display duration (ms). ~50ms is visible, 30ms very brief. */
  muzzleFlashDurationMs: 50,
  /** Muzzle flash sprite size in world units (POV). */
  muzzleFlashScalePov: 0.21,
  /** Muzzle flash sprite size for 3P (remote players). */
  muzzleFlashScale3P: 0.11,

  /** Bullet tracer visual config (client-only, no gameplay impact). */
  tracerEnabledDefault: true,
  tracerMaxLifetimeMs: 100,
  tracerEveryNthShot: 1,
  // Warm, aber etwas dunkler als Muzzle Flash, damit er das Ziel nicht überstrahlt.
  tracerColor: 0xffc070,
  /** Tracer line radius in world units (cylinder). 0.01 = schlanker Strahl. */
  tracerLineRadius: 0.01,
  tracerImpactLifetimeMs: 90,
  tracerImpactSize: 0.08,
  /** Horizontal offset (m) to nudge tracer origin toward screen center to hide parallax while strafing. */
  tracerMuzzleSideOffset: 0.03,
  /** Tracer length in meters for local first-person view. */
  tracerFirstPersonLength: 20,

  /**
   * Override animation clip names if your GLB uses different names.
   * Keys: idle, walk, walkBackwards, strafeLeft, strafeRight, strafeLeftFast, strafeRightFast,
   * run, jump, slide, crouchForward, crouchBackward, crouchLeft, crouchRight.
   */
  animationClipNames: {} as Partial<Record<string, string>>,

  /** Third-person weapon (remote players). Origin at RightHand. */
  thirdPersonWeaponOffset: { x: 0, y: 0, z: 0 },
  /** Grip alignment for 3P weapon. */
  thirdPersonWeaponGripOffset: { x: 0, y: 0, z: 0 },
  /** Scale for 3P weapon. */
  thirdPersonWeaponScale: 1,
  /** Extra rotation (rad) for 3P weapon. */
  thirdPersonWeaponRotationX: 0.19,
  thirdPersonWeaponRotationY: 3.16,
  thirdPersonWeaponRotationZ: 1.45,
  /** Client-side tuning (no functional change to gameplay – server is authoritative). */
  tuning: {
    /** Crouch eye-height transition: 1 - exp(-dt/TAU). ~120ms to 95%. */
    crouchTransitionTau: 0.04,
    /** Procedural viewmodel movement: Bob, Sway, Recoil, Slide. */
    povMovement: {
      moveFactorSmoothTau: 0.06,
      phaseSpeedSmoothTau: 0.08,
      rootApplyTau: 0.025,
      bobAmplitudeY: 0.01512,
      bobAmplitudeX: 0.0156,
      bobAmplitudeRoll: 0.0052,
      bobAmplitudePitch: 0.00258,
      bobPhaseOffsetX: 0.3,
      bobFrequency: 10,
      bobCrouchMultiplier: 0.5,
      swayLookFactor: 0.6,
      swaySmoothTau: 0.05,
      swayDeltaSmoothTau: 0.04,
      swayReturnDamping: 0.88,
      swaySlideReduce: 0.92,
      bobSlideReduce: 0.98,
      strafeLeanX: 0.2,
      strafeLeanRoll: 0.025,
      forwardLeanZ: 0.1,
      strafeLeanTau: 0.06,
      strafeBobYReduce: 0.7,
      strafeBobXBoost: 0.5,
      strafeBobRollBoost: 0.8,
      idleBreathingAmplitudeY: 0.008,
      idleBreathingAmplitudeX: 0.0024,
      idleBreathingPeriod: 4,
      idlePitchAmplitude: 0.0024,
      idleRollAmplitude: 0.0012,
      idleWalkReduce: 0.85,
      idleAirborneReduce: 0.3,
      jumpTakeoffDip: -0.008,
      jumpTakeoffDecay: 8,
      jumpAirborneFloatY: 0.032,
      jumpLandingDip: -0.06,
      jumpLandingSpringK: 60,
      jumpLandingSpringDamp: 14,
      jumpLandingRoll: 0.016,
      jumpInertiaZ: 0.016,
      swayAirborneReduce: 0.5,
      recoilKickPitch: 0.02,
      recoilPullback: 0.15,
      recoilRollVariation: 0.02,
      recoilRecoveryTau: 0.06,
      recoilSlideReduce: 0.5,
      slideYOffset: -0.2,
      slideZOffset: 0.1,
      slideInwardTilt: 0.38,
      slidePitchDown: -0.1,
      slideImpactDipAmp: -0.012,
      slideImpactSpringK: 80,
      slideImpactSpringDamp: 18,
      slideWiggleRoll: 0.005,
      slideWiggleDuration: 0.3,
      slideReleaseBump: 0,
      slideReleaseBumpTau: 0.1,
      slideInTau: 0.04,
      slideOutTau: 0.28,
      bobCrouchFreqMultiplier: 1,
      bobCrouchAmpMultiplier: 1,
      // Reload override (Tilt&Lower -> Hold -> Return). Slight outward roll + yaw right so it reads different from slide.
      reloadYOffset: -0.12,
      reloadZOffset: 0.12,
      reloadPullback: 0.06,
      reloadPitchDown: -0.3,
      reloadRoll: -0.14,
      reloadYaw: 0.18,
      reloadOvershoot: 0.08,
      swayReloadReduce: 0.8,
      idleReloadReduce: 0.4,
    } as PovMovementTuning,
    /** Remote player interpolation: 1 - exp(-dt/TAU). ~100ms to 95% of target. */
    remoteInterpTau: 0.05,
    /** Distance (m) before applying strong reconciliation correction. */
    reconcileThreshold: 0.05,
    /** Blend factor when reconciling (higher = faster correction). */
    reconcileLerp: 0.5,
    /** Minimal distance (m) to trigger any correction (avoids jitter). */
    reconcileMin: 0.01,
    /** Minimal vertical difference (m) before applying Y correction. Skips small vertical jitter. */
    reconcileYMin: 0.08,
    /** Blend factor for gentle correction when below threshold. */
    reconcileLerpGentle: 0.15,
  },

  /** Per-animation overrides for 3P weapon (slide, jump, etc. have different hand poses). */
  thirdPersonWeaponOffsets: {
    walkBackwards: { x: 0, y: 0, z: 0, rotX: 0.09, rotY: 3.39, rotZ: 1.45, scale: 1 },
    crouchForward: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
    crouchBackward: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
    crouchLeft: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
    crouchRight: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
  } as Partial<Record<AnimationClipId, ThirdPersonWeaponOffset>>,
};
