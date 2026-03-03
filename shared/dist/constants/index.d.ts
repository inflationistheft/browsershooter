/**
 * Shared constants (tickrate, dimensions, etc.).
 * Scale: 1 unit = 1 meter (for maps, prefabs, and movement).
 */
export declare const TICK_RATE = 30;
export declare const TICK_MS: number;
/** Player height in meters (for collision/rendering). */
export declare const PLAYER_HEIGHT = 1.8;
export declare const PLAYER_RADIUS = 0.4;
/** Eye height in meters (camera offset from feet). */
export declare const PLAYER_EYE_HEIGHT = 1.6;
/** Eye height when crouching (camera lower). */
export declare const CROUCH_EYE_HEIGHT = 1;
export declare const DEFAULT_MAX_HEALTH = 150;
/** Halo-like shield/health: max shield points. */
export declare const MAX_SHIELD = 100;
/** Halo-like shield/health: max health points (after shield). */
export declare const MAX_HEALTH = 50;
/** Hitscan: sphere center height above feet (meters). @deprecated Use HEAD/BODY hitbox constants. */
export declare const PLAYER_HITBOX_CENTER_HEIGHT = 0.9;
/** Hitscan: target sphere radius (meters). @deprecated Use HEAD_HITBOX_RADIUS / BODY_CAPSULE_RADIUS. */
export declare const HITSCAN_TARGET_RADIUS = 0.6;
/** Virtual bullet radius (m) for hitscan weapons to slightly widen the effective ray. */
export declare const BULLET_RADIUS = 0.06;
/** Head hitbox: center height above feet (meters). */
export declare const HEAD_HITBOX_HEIGHT = 1.6;
/** Head hitbox: sphere radius. Fits head with small margin (~0.11m head, 0.02m buffer). */
export declare const HEAD_HITBOX_RADIUS = 0.13;
/** Offset to align Head bone with visible head (model-dependent). */
export declare const HEAD_HITBOX_OFFSET_Y = 0;
export declare const HEAD_HITBOX_OFFSET_X = 0;
export declare const HEAD_HITBOX_OFFSET_Z = 0;
/** Forward offset (toward visor) in model's look direction. */
export declare const HEAD_HITBOX_OFFSET_FORWARD = 0.03;
/** Body capsule: bottom Y offset from feet (meters). */
export declare const BODY_CAPSULE_BOTTOM = 0.2;
/** Body capsule: top Y offset from feet (meters). Reduced when radius increases to keep total height constant. */
export declare const BODY_CAPSULE_TOP = 1.41;
/** Body capsule: radius (torso + shoulders + legs). */
export declare const BODY_CAPSULE_RADIUS = 0.29;
/** Extra height (m) above spineTop to cover neck gap. */
export declare const BODY_CAPSULE_TOP_EXTEND = 0.02;
/** Hitscan: max range in meters. */
export declare const HITSCAN_RANGE = 200;
/** Damage per hit. @deprecated Use HITSCAN_BODY_DAMAGE. */
export declare const HITSCAN_DAMAGE = 13;
/** Single-shot: body damage per hit. */
export declare const HITSCAN_BODY_DAMAGE = 25;
/** Headshot multiplier when shield == 0. No bonus when shield > 0. */
export declare const HITSCAN_HEAD_MULTIPLIER = 1.8;
/** Fire rate (shots/sec). Single-shot semi-auto. */
export declare const FIRE_RATE = 3.3;
/** Ticks between shots at FIRE_RATE. */
export declare const SHOT_INTERVAL_TICKS: number;
/** Reload duration in ticks (30 Hz). ~1.5 s. */
export declare const RELOAD_TICKS = 45;
/** Shield/health regen: delay after last damage (seconds) before regen starts. */
export declare const REGEN_DELAY_SEC = 3;
/** Shield/health regen: delay in ticks. */
export declare const REGEN_DELAY_TICKS: number;
/** Shield regeneration rate (points per second). */
export declare const SHIELD_REGEN_PER_SEC = 55;
/** Health regeneration rate (points per second). Only when shield is full. */
export declare const HEALTH_REGEN_PER_SEC = 30;
/** How long the health bar above a hit player stays visible (ms). ~1.25s */
export declare const HEALTH_BAR_VISIBILITY_MS = 1250;
/** Respawn delay after death (seconds). */
export declare const RESPAWN_DELAY_SEC = 3;
/** Debug: only head hitbox (body/legs disabled) for isolated head testing. */
export declare const DEBUG_HEAD_ONLY = false;
//# sourceMappingURL=index.d.ts.map