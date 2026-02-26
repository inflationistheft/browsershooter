/**
 * Resolves movement/input state to animation clip name.
 * Used by client (local player) and server (for remote player sync).
 */
export type AnimationResolverMovementState = "grounded" | "sliding" | "airborne";
export interface AnimationResolverInput {
    moveX: number;
    moveZ: number;
    sprint: boolean;
    /** True when crouching (slide key) or sliding. */
    crouching: boolean;
    movementState: AnimationResolverMovementState;
}
/** Clip name keys – map to actual GLB clip names via CLIP_NAMES. */
export declare const ANIMATION_CLIP_IDS: {
    readonly idle: "idle";
    readonly walk: "walk";
    readonly walkBackwards: "walkBackwards";
    readonly strafeLeft: "strafeLeft";
    readonly strafeRight: "strafeRight";
    readonly strafeLeftFast: "strafeLeftFast";
    readonly strafeRightFast: "strafeRightFast";
    readonly run: "run";
    readonly jump: "jump";
    readonly slide: "slide";
    readonly crouchForward: "crouchForward";
    readonly crouchBackward: "crouchBackward";
    readonly crouchLeft: "crouchLeft";
    readonly crouchRight: "crouchRight";
};
export type AnimationClipId = (typeof ANIMATION_CLIP_IDS)[keyof typeof ANIMATION_CLIP_IDS];
/** Map clip IDs to actual GLB clip names (exact match from your GLB). */
export declare const DEFAULT_CLIP_NAMES: Record<AnimationClipId, string>;
/**
 * Resolves input + movement state to animation clip ID (use with CLIP_NAMES for actual name).
 * Priority: Slide > Jump > Crouch > Sprint-strafe > Run > Walk/Strafe > Idle.
 */
export declare function resolveAnimationClipId(input: AnimationResolverInput): AnimationClipId;
/** Resolves to the actual clip name string for Three.js AnimationClip.findByName. */
export declare function resolveAnimationClipName(input: AnimationResolverInput, clipNames?: Record<AnimationClipId, string>): string;
//# sourceMappingURL=AnimationResolver.d.ts.map