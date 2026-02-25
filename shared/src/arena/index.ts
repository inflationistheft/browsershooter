/**
 * Arena geometry: wall AABBs, bounds. Used by client (collision) and server (validation).
 * 1 unit = 1 m. Matches SceneManager: 40x40 floor, walls 40x4x0.5.
 */

const HALF = 20;
const WALL_HALF_THICK = 0.25;
const MARGIN = 0.001;

/** Walls: [xMin, xMax, zMin, zMax] in world. */
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
