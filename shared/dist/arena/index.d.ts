/**
 * Arena geometry: wall AABBs, bounds. Used by client (collision) and server (validation).
 * 1 unit = 1 m. Matches SceneManager: 40x40 floor, walls 40x4x0.5.
 */
/** Wall height in meters (Y extent from ground). */
export declare const ARENA_WALL_HEIGHT = 4;
/** Walls: [xMin, xMax, zMin, zMax] in world (XZ footprint). */
export declare const ARENA_WALLS: ReadonlyArray<readonly [number, number, number, number]>;
export declare const ARENA_HALF = 20;
export declare const ARENA_SIZE: number;
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
export declare function resolveArenaWalls(px: number, pz: number, radius: number): ArenaWallResult;
/** Remove velocity component into the wall so player can slide off. */
export declare function applyWallVelocitySlide(velocity: {
    x: number;
    z: number;
}, result: ArenaWallResult): void;
/**
 * Ray vs arena walls. Returns smallest t in (0, maxT] where ray hits a wall, or null.
 * Used for LOS check: if ray hits wall before target, reject hit.
 */
export declare function rayArenaIntersection(ox: number, oy: number, oz: number, dx: number, dy: number, dz: number, maxT: number): {
    hit: boolean;
    t?: number;
};
//# sourceMappingURL=index.d.ts.map