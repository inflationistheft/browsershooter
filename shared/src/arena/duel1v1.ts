/**
 * Duel 1v1 arena: floor + walls defined in code (no prefabs/JSON).
 * Symmetric layout, one floor, cover blocks. Used by server (collision) and client (scene).
 */

import type { StaticWorld, StaticBlockCollider } from "../world/StaticWorld.js";

const HALF = 10;
const WALL_H = 6;
const WALL_T = 0.25;
const FLOOR_Y_TOP = 0.1;
const FLOOR_Y_BOT = -0.1;

function box(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  minZ: number,
  maxZ: number,
  walkableTopOnly?: boolean
): StaticBlockCollider {
  const b: StaticBlockCollider = { minX, maxX, minY, maxY, minZ, maxZ };
  if (walkableTopOnly) b.walkableTopOnly = true;
  return b;
}

/** All collision blocks for the duel 1v1 arena (floor + outer walls + cover). */
function duel1v1Blocks(): StaticBlockCollider[] {
  const blocks: StaticBlockCollider[] = [];

  // Floor
  blocks.push(box(-HALF, HALF, FLOOR_Y_BOT, FLOOR_Y_TOP, -HALF, HALF));

  // Outer walls (4 sides, 6m high)
  blocks.push(box(-HALF, HALF, 0, WALL_H, HALF - WALL_T, HALF + WALL_T));
  blocks.push(box(-HALF, HALF, 0, WALL_H, -HALF - WALL_T, -HALF + WALL_T));
  blocks.push(box(HALF - WALL_T, HALF + WALL_T, 0, WALL_H, -HALF, HALF));
  blocks.push(box(-HALF - WALL_T, -HALF + WALL_T, 0, WALL_H, -HALF, HALF));

  // Cover: two low walls (2m high) symmetric along X, so players can peek from sides
  const coverHalfW = 1;
  const coverH = 2;
  const coverT = 0.15;
  // Left side cover (center around x=-4, z=0)
  blocks.push(box(-4 - coverHalfW, -4 + coverHalfW, 0, coverH, -coverT, coverT));
  // Right side cover
  blocks.push(box(4 - coverHalfW, 4 + coverHalfW, 0, coverH, -coverT, coverT));
  // Back cover pillars (so there's something to hide behind in the back)
  blocks.push(box(-6 - coverT, -6 + coverT, 0, coverH, -2, 2));
  blocks.push(box(6 - coverT, 6 + coverT, 0, coverH, -2, 2));

  return blocks;
}

let cachedStaticWorld: StaticWorld | null = null;

/**
 * Returns the StaticWorld for the duel 1v1 arena. Cached.
 */
export function buildDuel1v1StaticWorld(): StaticWorld {
  if (!cachedStaticWorld) {
    cachedStaticWorld = { blocks: duel1v1Blocks() };
  }
  return cachedStaticWorld;
}

export interface Duel1v1SpawnPoint {
  position: [number, number, number];
  rotation: number;
}

/** Spawn points for 1v1 (one per side, facing center). */
export function getDuel1v1SpawnPoints(): Duel1v1SpawnPoint[] {
  return [
    { position: [-7, FLOOR_Y_TOP + 0.1, 0], rotation: 0 },
    { position: [7, FLOOR_Y_TOP + 0.1, 0], rotation: 180 },
  ];
}

/** Bounds for client scene (e.g. grid). */
export const DUEL_1V1_HALF = HALF;
export const DUEL_1V1_SIZE = HALF * 2;
