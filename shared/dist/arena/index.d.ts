/**
 * Arena geometry: wall AABBs, bounds. Used by client (collision) and server (validation).
 * 1 unit = 1 m. Matches SceneManager: 40x40 floor, walls 40x4x0.5.
 */
/** Walls: [xMin, xMax, zMin, zMax] in world. */
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
//# sourceMappingURL=index.d.ts.map