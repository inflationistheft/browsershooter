/**
 * Arena geometry: wall AABBs, bounds. Used by client (collision) and server (validation).
 * 1 unit = 1 m. Matches SceneManager: 40x40 floor, walls 40x4x0.5.
 */

const HALF = 20;
const WALL_HALF_THICK = 0.25;
const MARGIN = 0.001;

/** Wall height in meters (Y extent from ground). */
export const ARENA_WALL_HEIGHT = 4;

/** Walls: [xMin, xMax, zMin, zMax] in world (XZ footprint). */
export const ARENA_WALLS: ReadonlyArray<readonly [number, number, number, number]> = [
  [-HALF, HALF, HALF - WALL_HALF_THICK, HALF + WALL_HALF_THICK],
  [-HALF, HALF, -HALF - WALL_HALF_THICK, -HALF + WALL_HALF_THICK],
  [HALF - WALL_HALF_THICK, HALF + WALL_HALF_THICK, -HALF, HALF],
  [-HALF - WALL_HALF_THICK, -HALF + WALL_HALF_THICK, -HALF, HALF],
];

export const ARENA_HALF = HALF;
export const ARENA_SIZE = HALF * 2;

export interface ArenaWallResult {
  x: number;
  z: number;
  /** Wall normal X: 1 = pushed from -x, -1 = from +x. Zero if no clamp on x. */
  normalX?: number;
  /** Wall normal Z: 1 = pushed from -z, -1 = from +z. Zero if no clamp on z. */
  normalZ?: number;
}

/**
 * Resolve player position against arena walls. Push outside wall volume.
 */
export function resolveArenaWalls(px: number, pz: number, radius: number): ArenaWallResult {
  let x = px;
  let z = pz;
  let normalX: number | undefined;
  let normalZ: number | undefined;
  const r = radius + MARGIN;
  for (const [xMin, xMax, zMin, zMax] of ARENA_WALLS) {
    if (x >= xMin - r && x <= xMax + r && z >= zMin - r && z <= zMax + r) {
      if (x < xMin + r) {
        x = xMin - r;
        normalX = 1;
      } else if (x > xMax - r) {
        x = xMax + r;
        normalX = -1;
      }
      if (z < zMin + r) {
        z = zMin - r;
        normalZ = 1;
      } else if (z > zMax - r) {
        z = zMax + r;
        normalZ = -1;
      }
    }
  }
  return { x, z, normalX, normalZ };
}

/** Remove velocity component into the wall so player can slide off. */
export function applyWallVelocitySlide(
  velocity: { x: number; z: number },
  result: ArenaWallResult
): void {
  if (result.normalX !== undefined && result.normalX !== 0 && velocity.x * result.normalX > 0) {
    velocity.x = 0;
  }
  if (result.normalZ !== undefined && result.normalZ !== 0 && velocity.z * result.normalZ > 0) {
    velocity.z = 0;
  }
}

/**
 * Ray-AABB intersection. Returns smallest t in (0, maxT] where ray hits the box, or null.
 * Box: [xMin, xMax] x [yMin, yMax] x [zMin, zMax].
 */
function rayBoxIntersection(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  zMin: number,
  zMax: number,
  maxT: number
): number | null {
  const eps = 1e-10;
  const t1 = Math.abs(dx) < eps ? (ox >= xMin && ox <= xMax ? -Infinity : Infinity) : (xMin - ox) / dx;
  const t2 = Math.abs(dx) < eps ? (ox >= xMin && ox <= xMax ? Infinity : -Infinity) : (xMax - ox) / dx;
  const t3 = Math.abs(dy) < eps ? (oy >= yMin && oy <= yMax ? -Infinity : Infinity) : (yMin - oy) / dy;
  const t4 = Math.abs(dy) < eps ? (oy >= yMin && oy <= yMax ? Infinity : -Infinity) : (yMax - oy) / dy;
  const t5 = Math.abs(dz) < eps ? (oz >= zMin && oz <= zMax ? -Infinity : Infinity) : (zMin - oz) / dz;
  const t6 = Math.abs(dz) < eps ? (oz >= zMin && oz <= zMax ? Infinity : -Infinity) : (zMax - oz) / dz;
  const tMinX = Math.min(t1, t2);
  const tMaxX = Math.max(t1, t2);
  const tMinY = Math.min(t3, t4);
  const tMaxY = Math.max(t3, t4);
  const tMinZ = Math.min(t5, t6);
  const tMaxZ = Math.max(t5, t6);
  const tEnter = Math.max(tMinX, tMinY, tMinZ);
  const tExit = Math.min(tMaxX, tMaxY, tMaxZ);
  if (tEnter > tExit || tExit < 0) return null;
  const t = tEnter >= 0 ? tEnter : tExit;
  if (t <= 0 || t > maxT) return null;
  return t;
}

/**
 * Ray vs arena walls. Returns smallest t in (0, maxT] where ray hits a wall, or null.
 * Used for LOS check: if ray hits wall before target, reject hit.
 */
export function rayArenaIntersection(
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  maxT: number
): { hit: boolean; t?: number } {
  let bestT: number | null = null;
  for (const [xMin, xMax, zMin, zMax] of ARENA_WALLS) {
    const t = rayBoxIntersection(
      ox,
      oy,
      oz,
      dx,
      dy,
      dz,
      xMin,
      xMax,
      0,
      ARENA_WALL_HEIGHT,
      zMin,
      zMax,
      maxT
    );
    if (t !== null && (bestT === null || t < bestT)) bestT = t;
  }
  return bestT !== null ? { hit: true, t: bestT } : { hit: false };
}
