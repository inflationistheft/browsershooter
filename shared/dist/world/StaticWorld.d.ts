import type { MapData } from "../types/index.js";
import type { ArenaWallResult } from "../arena/index.js";
export interface StaticBlockCollider {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
    /** When set, top surface is a slope along this axis. If rampInverted is false: low at axis min, high at axis max. If rampInverted is true: high at axis min, low at axis max. */
    rampAxis?: "x" | "z";
    /** When true, ramp high end is at axisMin (used for 90° and 180° so slope direction matches rotated mesh). */
    rampInverted?: boolean;
    /** When set, only the top surface is walkable; sides act as walls (no snapping up from the side). */
    walkableTopOnly?: boolean;
}
export interface StaticWorld {
    blocks: StaticBlockCollider[];
}
interface PrefabDefLike {
    collision: "box" | "trimesh" | "ramp" | "none";
    size: [number, number, number];
    walkableTopOnly?: boolean;
}
type PrefabDefsLike = Record<string, PrefabDefLike | undefined>;
/** Build list of kill-volume AABBs from map (prefabs with id "kill_volume"). Rotation applied like other prefabs. */
export declare function buildKillVolumesFromMap(map: MapData, prefabDefs: PrefabDefsLike): StaticBlockCollider[];
export declare function isPointInsideAabb(px: number, py: number, pz: number, b: StaticBlockCollider): boolean;
export declare function buildStaticWorldFromMap(map: MapData, prefabDefs: PrefabDefsLike): StaticWorld;
/** All horizontal surface heights at (px, pz): top and bottom of each block. Solid from both sides – no falling through, no jumping through.
 * Ramps: included over full XZ footprint (no axis seam skip) so we never fall through at ramp edges. */
export declare function getSurfaceHeightsAt(px: number, pz: number, world: StaticWorld, margin?: number): number[];
/** Surface height hit when moving from yFrom to yTo, or null if none crossed. Solid from both sides.
 * Excludes the surface we start on: when going up only surfaces strictly above yFrom; when going down only strictly below yFrom. */
export declare function getSurfaceHit(yFrom: number, yTo: number, surfaces: number[]): number | null;
/** Highest surface at or below y (for "floor under feet" when correcting small penetration). */
export declare function getHighestSurfaceAtOrBelow(y: number, surfaces: number[]): number | null;
/** Top Y of the highest block that contains (px, pz) in XZ. Same logic for floor (box) and ramp (slope): if (px,pz) is inside the block's XZ bounds, return the surface Y there. Returns -Infinity if no block.
 * When only one block contains (px,pz): return its topY (so adjacent ramp segments never yield -Infinity at the seam).
 * When multiple blocks overlap: only consider surfaces with topY <= py + RAMP_CONTINUITY_TOLERANCE so we don't snap up to a higher overlapping ramp.
 * For ramps, a block is only considered if (px,pz) is within its slope axis span (plus RAMP_AXIS_SEAM) so descending along the ramp stays smooth. */
export declare function getGroundYAt(px: number, pz: number, world: StaticWorld, margin?: number, py?: number): number;
/** True if the ground at (px, pz) is the top surface of a ramp (slope). Same inclusion rules as getGroundYAt. */
export declare function isOnRamp(px: number, pz: number, world: StaticWorld, margin?: number, py?: number): boolean;
export declare function resolveStaticWorldXZ(px: number, py: number, pz: number, radius: number, world: StaticWorld): ArenaWallResult;
export declare function rayStaticWorldIntersection(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, maxT: number, world: StaticWorld): {
    hit: boolean;
    t?: number;
};
export {};
//# sourceMappingURL=StaticWorld.d.ts.map