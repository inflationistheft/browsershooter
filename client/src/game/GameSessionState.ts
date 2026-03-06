/**
 * Mutable per-frame state shared between tick and render systems.
 * Created once in main, passed into all game systems.
 */

import type { HitboxPositionsInput } from "../systems/networking/inputMapping.js";
import type { HitboxPositions } from "../systems/animation/getHitboxPositions.js";

export interface GameSessionState {
  /** Consumed in render (viewmodel/tracer); set in tick when player shoots. */
  shotThisFrame: boolean;
  /** Last known local health for respawn detection. */
  lastLocalHealth: number | null;
  /** Seconds to keep camera snapped after respawn (no lerp). */
  localRespawnNoLerpTime: number;
  clientShootCooldownTicks: number;
  clientReloadTicks: number;
  inputTick: number;
  debugMode: boolean;
  /** Smoothed eye height (crouch/stand). */
  currentEyeHeight: number;
  lastHitboxPositions: HitboxPositionsInput | null;
  lastHitboxPositionsRaw: HitboxPositions | null;
}

export function createGameSessionState(initialEyeHeight: number): GameSessionState {
  return {
    shotThisFrame: false,
    lastLocalHealth: null,
    localRespawnNoLerpTime: 0,
    clientShootCooldownTicks: 0,
    clientReloadTicks: 0,
    inputTick: 0,
    debugMode: false,
    currentEyeHeight: initialEyeHeight,
    lastHitboxPositions: null,
    lastHitboxPositionsRaw: null,
  };
}
