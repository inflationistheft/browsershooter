/**
 * Shared constants (tickrate, dimensions, etc.).
 * Scale: 1 unit = 1 meter (for maps, prefabs, and movement).
 */

export const TICK_RATE = 30; // Hz, MVP
export const TICK_MS = 1000 / TICK_RATE;

/** Player height in meters (for collision/rendering). */
export const PLAYER_HEIGHT = 1.8;
export const PLAYER_RADIUS = 0.4;
/** Eye height in meters (camera offset from feet). */
export const PLAYER_EYE_HEIGHT = 1.6;
/** Eye height when crouching (camera lower). */
export const CROUCH_EYE_HEIGHT = 1.0;

export const DEFAULT_MAX_HEALTH = 150;

/** Hitscan: sphere center height above feet (meters). @deprecated Use HEAD/BODY hitbox constants. */
export const PLAYER_HITBOX_CENTER_HEIGHT = 0.9;
/** Hitscan: target sphere radius (meters). @deprecated Use HEAD_HITBOX_RADIUS / BODY_CAPSULE_RADIUS. */
export const HITSCAN_TARGET_RADIUS = 0.6;

/** Head hitbox: center height above feet (meters). */
export const HEAD_HITBOX_HEIGHT = 1.6;
/** Head hitbox: sphere radius. Fits head with small margin (~0.11m head, 0.02m buffer). */
export const HEAD_HITBOX_RADIUS = 0.13;
/** Offset to align Head bone with visible head (model-dependent). */
export const HEAD_HITBOX_OFFSET_Y = 0;
export const HEAD_HITBOX_OFFSET_X = 0;
export const HEAD_HITBOX_OFFSET_Z = 0;
/** Forward offset (toward visor) in model's look direction. */
export const HEAD_HITBOX_OFFSET_FORWARD = 0.03;

/** Body capsule: bottom Y offset from feet (meters). */
export const BODY_CAPSULE_BOTTOM = 0.2;
/** Body capsule: top Y offset from feet (meters). Slightly above 1.35 to cover neck gap. */
export const BODY_CAPSULE_TOP = 1.45;
/** Body capsule: radius (torso + shoulders). Covers strafe lean. */
export const BODY_CAPSULE_RADIUS = 0.45;
/** Extra height (m) above spineTop to cover neck gap. */
export const BODY_CAPSULE_TOP_EXTEND = 0.12;

/** Legs capsule: radius (covers both legs, generous for stride). */
export const LEGS_CAPSULE_RADIUS = 0.3;
/** Legs fallback: top Y offset from feet when no bone data. Full leg length. */
export const LEGS_FALLBACK_TOP = 0.85;
/** Hitscan: max range in meters. */
export const HITSCAN_RANGE = 200;
/** Damage per hit. */
export const HITSCAN_DAMAGE = 13;
/** Reload duration in ticks (30 Hz). ~1.5 s. */
export const RELOAD_TICKS = 45;

/** How long the health bar above a hit player stays visible (ms). ~1.25s */
export const HEALTH_BAR_VISIBILITY_MS = 1250;

/** Respawn delay after death (seconds). */
export const RESPAWN_DELAY_SEC = 3;

/** Debug: only head hitbox (body/legs disabled) for isolated head testing. */
export const DEBUG_HEAD_ONLY = true;
