/**
 * Player-vs-player collision resolution. Used by server after movement step.
 * Treats players as XZ circles; pushes overlapping players apart and applies
 * a small separation impulse for bounce feel.
 */

export interface PlayerCollisionState {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

/** Impulse (m/s) applied when separating overlapping players for bounce feel. */
export const PLAYER_SEPARATION_IMPULSE = 0.4;

/** Default iterations for multi-player pile-up resolution. */
const DEFAULT_ITERATIONS = 3;

/** Map-like interface for player collection (MapSchema-compatible). */
export interface PlayerCollisionMap {
  get(id: string): PlayerCollisionState | undefined;
  forEach(cb: (p: PlayerCollisionState, id: string) => void): void;
}

/**
 * Resolve player-player overlaps in XZ plane. Mutates positions and velocities.
 * Excludes inactive players (e.g. dead). Iterates to handle 3+ player stacks.
 */
export function resolvePlayerCollisions(
  players: PlayerCollisionMap,
  isActive: (id: string) => boolean,
  playerRadius: number,
  iterations: number = DEFAULT_ITERATIONS
): void {
  const ids: string[] = [];
  players.forEach((_, id) => {
    if (isActive(id)) ids.push(id);
  });
  if (ids.length < 2) return;

  const minDist = 2 * playerRadius;
  const margin = 0.001;

  for (let iter = 0; iter < iterations; iter++) {
    for (let i = 0; i < ids.length; i++) {
      const aId = ids[i];
      const a = players.get(aId)!;
      for (let j = i + 1; j < ids.length; j++) {
        const bId = ids[j];
        const b = players.get(bId)!;

        const dx = b.x - a.x;
        const dz = b.z - a.z;
        const distXZ = Math.hypot(dx, dz) || 1e-8;

        if (distXZ >= minDist + margin) continue;

        const overlap = minDist + margin - distXZ;
        const ax = dx / distXZ;
        const az = dz / distXZ;

        // Push apart: each moves half
        const half = overlap * 0.5;
        a.x -= ax * half;
        a.z -= az * half;
        b.x += ax * half;
        b.z += az * half;

        // Separation impulse for bounce
        const imp = PLAYER_SEPARATION_IMPULSE;
        a.vx -= ax * imp;
        a.vz -= az * imp;
        b.vx += ax * imp;
        b.vz += az * imp;
      }
    }
  }
}
