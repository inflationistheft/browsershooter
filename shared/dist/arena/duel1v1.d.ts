/**
 * Duel 1v1 arena: floor + walls defined in code (no prefabs/JSON).
 * Symmetric layout, one floor, cover blocks. Used by server (collision) and client (scene).
 */
import type { StaticWorld } from "../world/StaticWorld.js";
/**
 * Returns the StaticWorld for the duel 1v1 arena. Cached.
 */
export declare function buildDuel1v1StaticWorld(): StaticWorld;
export interface Duel1v1SpawnPoint {
    position: [number, number, number];
    rotation: number;
}
/** Spawn points for 1v1 (one per side, facing center). */
export declare function getDuel1v1SpawnPoints(): Duel1v1SpawnPoint[];
/** Bounds for client scene (e.g. grid). */
export declare const DUEL_1V1_HALF = 10;
export declare const DUEL_1V1_SIZE: number;
//# sourceMappingURL=duel1v1.d.ts.map