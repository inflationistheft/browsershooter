/**
 * Shared constants (tickrate, dimensions, etc.).
 * Scale: 1 unit = 1 meter (for maps, prefabs, and movement).
 */
export const TICK_RATE = 30; // Hz, MVP
export const TICK_MS = 1000 / TICK_RATE;
/** Player height in meters (for collision/rendering). */
export const PLAYER_HEIGHT = 1.8;
export const PLAYER_RADIUS = 0.4;
/** Extra margin for ground XZ check (on top of PLAYER_RADIUS). Used in movement + debug. */
export const GROUND_CHECK_MARGIN_EXTRA = 0.03;
/** Eye height in meters (camera offset from feet). */
export const PLAYER_EYE_HEIGHT = 1.6;
/** Eye height when crouching (camera lower). */
export const CROUCH_EYE_HEIGHT = 1.0;
export const DEFAULT_MAX_HEALTH = 150;
/** Halo-like shield/health: max shield points. */
export const MAX_SHIELD = 100;
/** Halo-like shield/health: max health points (after shield). */
export const MAX_HEALTH = 50;
/** Hitscan: sphere center height above feet (meters). @deprecated Use HEAD/BODY hitbox constants. */
export const PLAYER_HITBOX_CENTER_HEIGHT = 0.9;
/** Hitscan: target sphere radius (meters). @deprecated Use HEAD_HITBOX_RADIUS / BODY_CAPSULE_RADIUS. */
export const HITSCAN_TARGET_RADIUS = 0.6;
/** Virtual bullet radius (m) for hitscan weapons to slightly widen the effective ray. */
export const BULLET_RADIUS = 0.06;
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
/** Body capsule: top Y offset from feet (meters). Reduced when radius increases to keep total height constant. */
export const BODY_CAPSULE_TOP = 1.41;
/** Body capsule: radius (torso + shoulders + legs). */
export const BODY_CAPSULE_RADIUS = 0.29;
/** Extra height (m) above spineTop to cover neck gap. */
export const BODY_CAPSULE_TOP_EXTEND = 0.02;
/** Hitscan: max range in meters. */
export const HITSCAN_RANGE = 200;
/** Damage per hit. @deprecated Use HITSCAN_BODY_DAMAGE. */
export const HITSCAN_DAMAGE = 13;
/** Single-shot: body damage per hit. */
export const HITSCAN_BODY_DAMAGE = 25;
/** Headshot multiplier when shield == 0. No bonus when shield > 0. */
export const HITSCAN_HEAD_MULTIPLIER = 1.8;
/** Fire rate (shots/sec). Single-shot semi-auto. */
export const FIRE_RATE = 3.3;
/** Ticks between shots at FIRE_RATE. */
export const SHOT_INTERVAL_TICKS = Math.ceil(TICK_RATE / FIRE_RATE);
/** Reload duration in ticks (30 Hz). ~1.5 s. */
export const RELOAD_TICKS = 45;
/** Shield/health regen: delay after last damage (seconds) before regen starts. */
export const REGEN_DELAY_SEC = 3;
/** Shield/health regen: delay in ticks. */
export const REGEN_DELAY_TICKS = Math.ceil(REGEN_DELAY_SEC * TICK_RATE);
/** Shield regeneration rate (points per second). */
export const SHIELD_REGEN_PER_SEC = 55;
/** Health regeneration rate (points per second). Only when shield is full. */
export const HEALTH_REGEN_PER_SEC = 30;
/** How long the health bar above a hit player stays visible (ms). ~1.25s */
export const HEALTH_BAR_VISIBILITY_MS = 1250;
/** Respawn delay after death (seconds). */
export const RESPAWN_DELAY_SEC = 3;
/** Debug: only head hitbox (body/legs disabled) for isolated head testing. */
export const DEBUG_HEAD_ONLY = false;
