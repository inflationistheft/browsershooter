#!/usr/bin/env node
/**
 * Generates shared/src/arena/duel1v1RefGenerated.ts from a 1v1 map JSON.
 * Usage: node tools/generateDuelRefFromJson.js [path/to/1v1spawns.json]
 * Default path: 1v1spawns.json in current dir or ../Downloads/1v1spawns.json
 *
 * Converts floor_*, wall_*, solid_block, ceiling, drop_floor, ramp_1x4 to AABBs.
 * Floor/ceiling/drop_floor get a small margin to prevent fall-through at seams.
 * Decorative (e.g. wall_lamp_*) are skipped.
 */

const fs = require("fs");
const path = require("path");

const RAMP_BASE_HEIGHT = 0.2;
const FLOOR_SEAM_MARGIN = 0.02;

const sizes = {
  floor_2x2: [2, 0.2, 2],
  floor_4x4: [4, 0.2, 4],
  wall_4x4: [4, 6, 0.2],
  wall_2x4: [2, 6, 0.2],
  wall_4x1: [4, 1, 0.2],
  wall_4x2: [4, 2, 0.2],
  solid_block: [2, 2, 2],
  ceiling: [4, 0.2, 4],
  drop_floor: [1, 0.2, 1],
  ramp_1x4: [4, 1.2, 2],
};

const floorPrefabIds = new Set(["floor_2x2", "floor_4x4", "ceiling", "drop_floor"]);

const jsonPath =
  process.argv[2] ||
  path.join(process.cwd(), "1v1spawns.json") ||
  path.join(process.cwd(), "../Downloads/1v1spawns.json");

if (!fs.existsSync(jsonPath)) {
  console.error("Usage: node generateDuelRefFromJson.js <path/to/1v1spawns.json>");
  console.error("File not found:", jsonPath);
  process.exit(1);
}

const j = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const blocks = [];

for (const p of j.prefabs) {
  if (!sizes[p.id]) continue;
  const [sx, sy, sz] = sizes[p.id];
  const [cx, cy, cz] = p.position;
  const rot = ((p.rotation || 0) % 360 + 360) % 360;
  const rot90 = rot === 90 || rot === 270;
  const halfX = (rot90 ? sz : sx) / 2;
  const halfZ = (rot90 ? sx : sz) / 2;
  let minX = cx - halfX;
  let maxX = cx + halfX;
  let minY = cy - sy / 2;
  const maxY = cy + sy / 2;
  let minZ = cz - halfZ;
  let maxZ = cz + halfZ;

  const isRamp = p.id === "ramp_1x4";
  if (isRamp) {
    minY = cy - sy / 2 + RAMP_BASE_HEIGHT;
  }
  if (floorPrefabIds.has(p.id)) {
    minX -= FLOOR_SEAM_MARGIN;
    maxX += FLOOR_SEAM_MARGIN;
    minZ -= FLOOR_SEAM_MARGIN;
    maxZ += FLOOR_SEAM_MARGIN;
  }

  const block = { minX, maxX, minY, maxY, minZ, maxZ };
  if (isRamp) {
    block.rampAxis = rot90 ? "x" : "z";
    block.rampInverted = rot === 270 || rot === 180;
    block.walkableTopOnly = true;
  }
  blocks.push(block);
}

const outPath = path.join(process.cwd(), "shared/src/arena/duel1v1RefGenerated.ts");
const out =
  `/** Auto-generated from JSON - run: node tools/generateDuelRefFromJson.js <path/to/1v1spawns.json> */\n` +
  `import type { StaticBlockCollider } from "../world/StaticWorld.js";\n\n` +
  `export const DUEL_1V1_REF_BLOCKS: StaticBlockCollider[] = ` +
  JSON.stringify(blocks, null, 2) +
  `;\n`;

fs.writeFileSync(outPath, out);
console.log("Wrote", blocks.length, "blocks to", outPath);
