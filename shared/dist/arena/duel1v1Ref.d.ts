/**
 * Duel 1v1 "reference" arena: layout from 1v1spawns.json.
 * Blocks are generated from the JSON (floor + wall prefabs only) – floor only where the map has tiles,
 * so holes (drop to level below) stay open. No extra ground planes.
 * See tools/generateDuelRefFromJson.js to regenerate from an updated JSON.
 */
import type { StaticWorld } from "../world/StaticWorld.js";
export declare function buildDuel1v1RefStaticWorld(): StaticWorld;
export interface Duel1v1RefSpawnPoint {
    position: [number, number, number];
    rotation: number;
}
/** Spawn points from the reference JSON (all on upper level y≈6.2). */
export declare function getDuel1v1RefSpawnPoints(): Duel1v1RefSpawnPoint[];
export declare const DUEL_1V1_REF_HALF_X = 22;
export declare const DUEL_1V1_REF_HALF_Z = 20;
export declare const DUEL_1V1_REF_SIZE_X: number;
export declare const DUEL_1V1_REF_SIZE_Z: number;
//# sourceMappingURL=duel1v1Ref.d.ts.map