/**
 * Duel 1v1 "reference" arena: layout from 1v1spawns.json.
 * Blocks are generated from the JSON (floor + wall prefabs only) – floor only where the map has tiles,
 * so holes (drop to level below) stay open. No extra ground planes.
 * See tools/generateDuelRefFromJson.js to regenerate from an updated JSON.
 */
import { DUEL_1V1_REF_BLOCKS } from "./duel1v1RefGenerated.js";
const HALF_X = 22;
const HALF_Z = 20;
let cachedStaticWorld = null;
export function buildDuel1v1RefStaticWorld() {
    if (!cachedStaticWorld) {
        cachedStaticWorld = { blocks: [...DUEL_1V1_REF_BLOCKS] };
    }
    return cachedStaticWorld;
}
/** Spawn points from the reference JSON (all on upper level y≈6.2). */
export function getDuel1v1RefSpawnPoints() {
    return [
        { position: [-20, 6.2, 2], rotation: 90 },
        { position: [-20, 6.2, 18], rotation: 180 },
        { position: [20, 6.2, -13], rotation: 270 },
        { position: [19, 6.2, 18], rotation: 270 },
    ];
}
export const DUEL_1V1_REF_HALF_X = HALF_X;
export const DUEL_1V1_REF_HALF_Z = HALF_Z;
export const DUEL_1V1_REF_SIZE_X = HALF_X * 2;
export const DUEL_1V1_REF_SIZE_Z = HALF_Z * 2;
