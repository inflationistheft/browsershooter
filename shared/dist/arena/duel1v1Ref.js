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
/** Spawn points (placed via shoot-helper: upper y≈6.2, main y≈0.2, lower y≈-5.8). */
export function getDuel1v1RefSpawnPoints() {
    return [
        { position: [19.31, 6.2, 17.91], rotation: 227.15 },
        { position: [11.32, 6.2, 9.14], rotation: 231.07 },
        { position: [17.79, 6.2, 0.27], rotation: 269.13 },
        { position: [19.6, 6.2, -12.82], rotation: 303.19 },
        { position: [-11.61, 6.2, -9.57], rotation: 50.5 },
        { position: [-20.47, 6.2, -12.12], rotation: 59.38 },
        { position: [-18.77, 6.2, -0.27], rotation: 89.17 },
        { position: [-11.78, 6.2, 9.57], rotation: 129.08 },
        { position: [-19.76, 6.2, 17.79], rotation: 132 },
        { position: [-10.39, 0.2, -12.14], rotation: 40.55 },
        { position: [10.4, 0.2, -11.66], rotation: 318.28 },
        { position: [0.13, 0.2, 7.81], rotation: 180.94 },
        { position: [-19.43, 0.2, 0.66], rotation: 91.93 },
        { position: [18.8, 0.2, 0.14], rotation: 269.57 },
        { position: [0.17, -5.8, -1.96], rotation: 355.07 },
        { position: [0.06, -5.8, 13.47], rotation: 180.23 },
        { position: [0.15, -5.8, -11.23], rotation: 359.26 },
    ];
}
export const DUEL_1V1_REF_HALF_X = HALF_X;
export const DUEL_1V1_REF_HALF_Z = HALF_Z;
export const DUEL_1V1_REF_SIZE_X = HALF_X * 2;
export const DUEL_1V1_REF_SIZE_Z = HALF_Z * 2;
