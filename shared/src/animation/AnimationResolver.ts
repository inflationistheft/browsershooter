/**
 * Resolves movement/input state to animation clip name.
 * Used by client (local player) and server (for remote player sync).
 */

export type AnimationResolverMovementState = "grounded" | "sliding" | "airborne";

export interface AnimationResolverInput {
  moveX: number;
  moveZ: number;
  sprint: boolean;
  /** True when crouching (slide key held) or when movementState is sliding (slide continues without holding). */
  crouching: boolean;
  movementState: AnimationResolverMovementState;
}

/** Clip name keys – map to actual GLB clip names via CLIP_NAMES. */
export const ANIMATION_CLIP_IDS = {
  idle: "idle",
  walk: "walk",
  walkBackwards: "walkBackwards",
  strafeLeft: "strafeLeft",
  strafeRight: "strafeRight",
  strafeLeftFast: "strafeLeftFast",
  strafeRightFast: "strafeRightFast",
  run: "run",
  jump: "jump",
  slide: "slide",
  crouchForward: "crouchForward",
  crouchBackward: "crouchBackward",
  crouchLeft: "crouchLeft",
  crouchRight: "crouchRight",
} as const;

export type AnimationClipId = (typeof ANIMATION_CLIP_IDS)[keyof typeof ANIMATION_CLIP_IDS];

/** Map clip IDs to actual GLB clip names (exact match from your GLB). */
export const DEFAULT_CLIP_NAMES: Record<AnimationClipId, string> = {
  idle: "idleaiming",
  walk: "walk",
  walkBackwards: "walkbackwards.001",
  strafeLeft: "strafeLeft",
  strafeRight: "strafeRight",
  strafeLeftFast: "strafeleftfast",
  strafeRightFast: "straferightfast",
  run: "run",
  jump: "jump",
  slide: "sliding",
  crouchForward: "crouchforward",
  crouchBackward: "crouchbackward",
  crouchLeft: "crouchleft",
  crouchRight: "crouchright",
};

const INPUT_THRESHOLD = 0.1;

/**
 * Resolves input + movement state to animation clip ID (use with CLIP_NAMES for actual name).
 * Priority: Slide > Jump > Crouch > Sprint-strafe > Run > Walk/Strafe > Idle.
 */
export function resolveAnimationClipId(input: AnimationResolverInput): AnimationClipId {
  const { moveX, moveZ, sprint, crouching, movementState } = input;

  if (movementState === "sliding") {
    return ANIMATION_CLIP_IDS.slide;
  }

  if (movementState === "airborne") {
    return ANIMATION_CLIP_IDS.jump;
  }

  if (crouching) {
    if (moveZ > INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.crouchForward;
    if (moveZ < -INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.crouchBackward;
    if (moveX < -INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.crouchLeft;
    if (moveX > INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.crouchRight;
    return ANIMATION_CLIP_IDS.crouchForward;
  }

  if (sprint && Math.abs(moveX) > INPUT_THRESHOLD) {
    if (moveX < 0) return ANIMATION_CLIP_IDS.strafeLeftFast;
    return ANIMATION_CLIP_IDS.strafeRightFast;
  }

  if (sprint && moveZ > INPUT_THRESHOLD) {
    return ANIMATION_CLIP_IDS.run;
  }

  if (moveZ > INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.walk;
  if (moveZ < -INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.walkBackwards;
  if (moveX < -INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.strafeLeftFast;
  if (moveX > INPUT_THRESHOLD) return ANIMATION_CLIP_IDS.strafeRightFast;

  return ANIMATION_CLIP_IDS.idle;
}

/** Resolves to the actual clip name string for Three.js AnimationClip.findByName. */
export function resolveAnimationClipName(
  input: AnimationResolverInput,
  clipNames: Record<AnimationClipId, string> = DEFAULT_CLIP_NAMES
): string {
  const id = resolveAnimationClipId(input);
  return clipNames[id];
}
