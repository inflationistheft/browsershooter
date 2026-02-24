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
export const DEFAULT_MAX_HEALTH = 100;
