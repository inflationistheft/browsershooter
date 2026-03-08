/**
 * Load map JSON and instantiate placeholder meshes + build StaticWorld collision.
 * Adjacent ramp segments (same rotation, consecutive in slope direction) are merged
 * into one mesh so normals are continuous and no visible seam/shading at edges.
 */

import type { MapData, MapSpawnPoint } from "shared";
import type { MapPrefabPlacement } from "shared";
import { buildStaticWorldFromMap, type StaticWorld } from "shared";
import * as THREE from "three";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import prefabDefsJson from "shared/src/data/prefabDefs.json";

type PrefabDef = {
  mesh: string;
  collision: "box" | "trimesh" | "ramp" | "none";
  size: [number, number, number];
};

const prefabDefs = prefabDefsJson as unknown as Record<string, PrefabDef | undefined>;

export interface LoadedMap {
  group: THREE.Group;
  staticWorld: StaticWorld;
  spawnPoints: MapSpawnPoint[];
}

/** Floor thickness = ramp flat base; wedge mesh is only the slope so visual is flush with floor. */
const RAMP_VISUAL_BASE = 0.2;

/** Wedge geometry: slope along +Z. Low at -Z, high at +Z. Bottom (yLo) at 0 so placement.y = floor. */
function createRampWedgeGeometry(
  width: number,
  height: number,
  depth: number
): THREE.BufferGeometry {
  const hw = width / 2;
  const hd = depth / 2;
  const slopeHeight = Math.max(0.01, height - RAMP_VISUAL_BASE);
  const yLo = 0;
  const yHi = slopeHeight;
  const vertices = new Float32Array([
    -hw, yLo, -hd, hw, yLo, -hd, hw, yLo, hd, -hw, yLo, hd,
    -hw, yLo, -hd, hw, yLo, -hd, hw, yHi, hd, -hw, yHi, hd,
  ]);
  const indices = new Uint16Array([
    0, 1, 2, 0, 2, 3, 4, 6, 5, 4, 7, 6,
    0, 5, 1, 0, 4, 5, 1, 6, 2, 1, 5, 6,
    3, 2, 6, 3, 6, 7, 0, 3, 7, 0, 7, 4,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  return geo;
}

function getPrefabColor(id: string): number {
  if (id.startsWith("floor") || id === "drop_floor") return 0x4488ff;
  if (id === "ceiling") return 0x3366aa;
  if (id.startsWith("wall")) return 0xd8d8dc;
  if (id.startsWith("wall_lamp_warm_yellow")) return 0xffe3a1;
  if (id.startsWith("wall_lamp_orange")) return 0xffb26b;
  if (id.startsWith("wall_lamp_cold_white")) return 0xdbe8ff;
  if (id.startsWith("wall_lamp_blue")) return 0x6aa7ff;
  if (id.startsWith("wall_lamp_purple")) return 0xb17cff;
  if (id === "ramp_1x4") return 0x88c060;
  if (id === "solid_block") return 0x888888;
  if (id === "ledge_half_cover" || id === "ledge_full_cover") return 0x6a8a6a;
  if (id === "spawn_point") return 0x00ff88;
  if (id === "kill_volume") return 0xff4444;
  return 0xffffff;
}

function createPrefabMesh(id: string): THREE.Mesh {
  const def = prefabDefs[id];
  const size = def?.size ?? [1, 1, 1];
  const isLamp = id.startsWith("wall_lamp_");
  const geo =
    id === "ramp_1x4"
      ? createRampWedgeGeometry(size[0], size[1], size[2])
      : new THREE.BoxGeometry(size[0], size[1], size[2]);
  const lampColor = getPrefabColor(id);
  const mat = new THREE.MeshStandardMaterial({
    color: isLamp ? 0x222222 : lampColor,
    emissive: isLamp ? lampColor : 0x000000,
    emissiveIntensity: isLamp ? 1.3 : 0,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = false;
  mesh.receiveShadow = true;

  if (isLamp) {
    const light = new THREE.PointLight(lampColor, 12, 7, 2);
    light.position.set(0, 0, size[2] * 0.75);
    mesh.add(light);
  }

  return mesh;
}

const RAMP_ID = "ramp_1x4";
const RAMP_DEPTH = (prefabDefs[RAMP_ID]?.size?.[2] ?? 2) as number;
const ADJACENT_EPS = 0.05;

/** Group ramp placements of same rotation into runs: consecutive along slope axis (step = depth). */
function getRampRuns(placements: MapPrefabPlacement[]): MapPrefabPlacement[][] {
  const ramps = placements.filter((p) => p.id === RAMP_ID);
  if (ramps.length === 0) return [];

  const runs: MapPrefabPlacement[][] = [];
  const byRot = new Map<number, MapPrefabPlacement[]>();
  for (const p of ramps) {
    const rot = ((p.rotation % 360) + 360) % 360;
    if (!byRot.has(rot)) byRot.set(rot, []);
    byRot.get(rot)!.push(p);
  }

  for (const [, list] of byRot) {
    const rot = list[0]!.rotation;
    const rotNorm = ((rot % 360) + 360) % 360;
    const slopeAxisZ = rotNorm === 0 || rotNorm === 180;
    const slopePositive = rotNorm === 0 || rotNorm === 90;
    list.sort((a, b) => {
      const [ax, , az] = a.position;
      const [bx, , bz] = b.position;
      if (slopeAxisZ) {
        const diff = az - bz;
        return slopePositive ? diff : -diff;
      }
      const diff = ax - bx;
      return slopePositive ? diff : -diff;
    });

    const rowKey = (p: MapPrefabPlacement) =>
      slopeAxisZ ? `${p.position[0].toFixed(2)}` : `${p.position[2].toFixed(2)}`;
    const step = (p: MapPrefabPlacement) => (slopeAxisZ ? p.position[2] : p.position[0]);

    const byRow = new Map<string, MapPrefabPlacement[]>();
    for (const p of list) {
      const key = rowKey(p);
      if (!byRow.has(key)) byRow.set(key, []);
      byRow.get(key)!.push(p);
    }

    for (const row of byRow.values()) {
      row.sort((a, b) => (slopePositive ? step(a) - step(b) : step(b) - step(a)));
      let run: MapPrefabPlacement[] = [row[0]!];
      for (let i = 1; i < row.length; i++) {
        const prev = row[i - 1]!;
        const cur = row[i]!;
        const prevStep = step(prev);
        const curStep = step(cur);
        const gap = Math.abs(curStep - prevStep - (slopePositive ? RAMP_DEPTH : -RAMP_DEPTH));
        if (gap <= ADJACENT_EPS) {
          run.push(cur);
        } else {
          if (run.length > 0) runs.push(run);
          run = [cur];
        }
      }
      if (run.length > 0) runs.push(run);
    }
  }

  return runs;
}

/** One merged ramp mesh (world-space vertices) per run; single ramp = run of 1. */
function buildMergedRampMeshes(placements: MapPrefabPlacement[]): THREE.Mesh[] {
  const runs = getRampRuns(placements);
  const def = prefabDefs[RAMP_ID];
  const size = (def?.size ?? [4, 1.2, 2]) as [number, number, number];
  const color = getPrefabColor(RAMP_ID);
  const meshes: THREE.Mesh[] = [];

  for (const run of runs) {
    const geometries: THREE.BufferGeometry[] = [];
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    for (const p of run) {
      const geo = createRampWedgeGeometry(size[0], size[1], size[2]).clone();
      const [x, y, z] = p.position;
      matrix.identity();
      matrix.makeRotationY(THREE.MathUtils.degToRad(p.rotation));
      matrix.setPosition(x, y, z);
      const posAttr = geo.getAttribute("position") as THREE.BufferAttribute;
      for (let i = 0; i < posAttr.count; i++) {
        position.fromBufferAttribute(posAttr, i);
        position.applyMatrix4(matrix);
        posAttr.setXYZ(i, position.x, position.y, position.z);
      }
      posAttr.needsUpdate = true;
      geo.deleteAttribute("normal");
      geometries.push(geo);
    }

    const merged = mergeGeometries(geometries, false);
    for (const g of geometries) g.dispose();
    if (!merged) continue;
    const welded = mergeVertices(merged, 1e-3);
    merged.dispose();
    welded.computeVertexNormals();
    const mat = new THREE.MeshStandardMaterial({ color });
    const mesh = new THREE.Mesh(welded, mat);
    mesh.castShadow = false;
    mesh.receiveShadow = true;
    meshes.push(mesh);
  }

  return meshes;
}

export function loadMapFromJSON(data: MapData): LoadedMap {
  const group = new THREE.Group();

  const rampPlacements: MapPrefabPlacement[] = [];
  for (const placement of data.prefabs) {
    if (placement.id === RAMP_ID) {
      rampPlacements.push(placement);
      continue;
    }
    const mesh = createPrefabMesh(placement.id);
    const [x, y, z] = placement.position;
    mesh.position.set(x, y, z);
    mesh.rotation.y = THREE.MathUtils.degToRad(placement.rotation);
    group.add(mesh);
  }

  for (const mesh of buildMergedRampMeshes(rampPlacements)) {
    group.add(mesh);
  }

  const staticWorld = buildStaticWorldFromMap(data, prefabDefs);
  const spawnPoints = data.spawnPoints ?? [];

  return { group, staticWorld, spawnPoints };
}

export async function loadMapFromURL(url: string): Promise<LoadedMap> {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load map JSON from ${url}: ${res.status} ${res.statusText}`);
  }
  const data: MapData = await res.json();
  return loadMapFromJSON(data);
}
