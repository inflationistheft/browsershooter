/**
 * Blockout map editor:
 * - Three.js scene with grid and orbit camera
 * - Placement/editing of blockout prefabs (floor, wall, ramp) with grid snapping + rotation
 * - Spawn points (T to switch tool); export MapData JSON (prefabs + spawnPoints)
 */

import * as THREE from "three";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import {
  stepPlayerMovement,
  tickMovementTimers,
  PLAYER_RADIUS,
  PLAYER_EYE_HEIGHT,
  CROUCH_EYE_HEIGHT,
  createDefaultExt,
  type StaticWorld,
  type StaticBlockCollider,
} from "shared";
import type { MapData, MapPrefabPlacement, MapSpawnPoint } from "shared";
import prefabDefsJson from "shared/src/data/prefabDefs.json";

type PrefabCollision = "box" | "trimesh" | "ramp" | "none";

interface PrefabDef {
  mesh: string;
  collision: PrefabCollision;
  size: [number, number, number];
  walkableTopOnly?: boolean;
}

const prefabDefs = prefabDefsJson as unknown as Record<string, PrefabDef>;

type PrefabId =
  | "floor_2x2"
  | "floor_4x4"
  | "wall_2x4"
  | "wall_4x4"
  | "ramp_1x4"
  | "solid_block"
  | "ledge_half_cover"
  | "ledge_full_cover"
  | "drop_floor"
  | "ceiling"
  | "spawn_point"
  | "kill_volume";

const GRID_SIZE = 1;
/** 1 Level = 1 m; Platzierung in dieser Höhe (Basis Y = level * GRID_SIZE). */
const PLACEMENT_LEVEL_STEP = 1;

const EDITOR_SETTINGS_KEY = "browsershooter_editor_settings";

function loadEditorSettings(): { placementHeightLevel: number; currentPrefab?: PrefabId; currentRotationDeg?: number } {
  try {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(EDITOR_SETTINGS_KEY) : null;
    if (raw) {
      const parsed = JSON.parse(raw) as { placementHeightLevel?: number; currentPrefab?: string; currentRotationDeg?: number };
      const level = typeof parsed.placementHeightLevel === "number" ? parsed.placementHeightLevel : 0;
      const prefab = parsed.currentPrefab as PrefabId | undefined;
      const rot = typeof parsed.currentRotationDeg === "number" ? parsed.currentRotationDeg : undefined;
      return { placementHeightLevel: level, currentPrefab: prefab, currentRotationDeg: rot };
    }
  } catch {
    // ignore
  }
  return { placementHeightLevel: 0 };
}

function saveEditorSettings(): void {
  try {
    if (typeof localStorage === "undefined") return;
    const payload = {
      placementHeightLevel,
      currentPrefab,
      currentRotationDeg,
    };
    localStorage.setItem(EDITOR_SETTINGS_KEY, JSON.stringify(payload));
  } catch {
    // ignore
  }
}

let placementHeightLevel = 0;

interface EditorPrefabInstance {
  id: PrefabId;
  position: [number, number, number];
  rotation: number; // Y degrees
}

/** Optional viewmodel: when provided (e.g. by client at ?editor=1), Player Mode uses real arms/weapon. */
export interface EditorViewmodelAPI {
  viewmodelState: unknown;
  updateViewmodelFrame(state: unknown, input?: unknown): void;
  /** Optional: run viewmodel skeleton animations (idle/walk) each frame so POV matches game. */
  updateViewmodelAnimation?(dt: number): void;
}

export interface EditorBootOptions {
  initViewmodel?: (camera: THREE.PerspectiveCamera) => Promise<EditorViewmodelAPI>;
}

/**
 * Boot the map editor into the given container (or #app).
 * Called from client via ?editor=1 or from tools/editor index.html.
 */
export function bootEditor(mountEl?: HTMLElement | null, options?: EditorBootOptions): void {
  const app = mountEl ?? document.getElementById("app");
  if (!app) throw new Error("No #app for editor");
  app.innerHTML = "";
  runEditor(app, options);
}

function runEditor(app: HTMLElement, bootOptions?: EditorBootOptions): void {
const canvas = document.createElement("canvas");
canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.style.display = "block";
canvas.setAttribute("tabindex", "0");
app.appendChild(canvas);

let infoPanelCollapsed = false;
const infoPanel = document.createElement("div");
infoPanel.style.position = "absolute";
infoPanel.style.left = "0";
infoPanel.style.top = "8px";
infoPanel.style.maxWidth = "320px";
infoPanel.style.background = "rgba(0,0,0,0.6)";
infoPanel.style.color = "#fff";
infoPanel.style.fontFamily = "system-ui, sans-serif";
infoPanel.style.fontSize = "12px";
infoPanel.style.borderRadius = "4px";
infoPanel.style.pointerEvents = "auto";
infoPanel.style.zIndex = "10";
infoPanel.style.overflow = "hidden";
const infoHeader = document.createElement("button");
infoHeader.type = "button";
infoHeader.textContent = "Hilfe \u25BC";
infoHeader.style.width = "100%";
infoHeader.style.padding = "6px 8px";
infoHeader.style.background = "transparent";
infoHeader.style.border = "none";
infoHeader.style.color = "#fff";
infoHeader.style.fontSize = "12px";
infoHeader.style.fontFamily = "inherit";
infoHeader.style.textAlign = "left";
infoHeader.style.cursor = "pointer";
const infoBody = document.createElement("div");
infoBody.style.padding = "6px 8px";
infoBody.style.whiteSpace = "pre-wrap";
infoPanel.appendChild(infoHeader);
infoPanel.appendChild(infoBody);
function toggleInfoPanel(): void {
  infoPanelCollapsed = !infoPanelCollapsed;
  infoBody.style.display = infoPanelCollapsed ? "none" : "block";
  infoHeader.textContent = "Hilfe " + (infoPanelCollapsed ? "\u25B6" : "\u25BC");
}
infoHeader.addEventListener("click", toggleInfoPanel);
app.appendChild(infoPanel);
const info = infoBody;

const playerHud = document.createElement("div");
playerHud.style.position = "absolute";
playerHud.style.left = "8px";
playerHud.style.bottom = "8px";
playerHud.style.padding = "6px 8px";
playerHud.style.background = "rgba(0,0,0,0.6)";
playerHud.style.color = "#fff";
playerHud.style.fontFamily = "system-ui, sans-serif";
playerHud.style.fontSize = "12px";
playerHud.style.borderRadius = "4px";
playerHud.style.pointerEvents = "none";
playerHud.style.display = "none";
app.appendChild(playerHud);

function doExportMap(): void {
  const data = exportMapJSON();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = (data.name || "map") + ".json";
  a.click();
  URL.revokeObjectURL(url);
}

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a2a35);

function getCanvasSize(): { w: number; h: number } {
  const w = canvas.clientWidth || window.innerWidth || 800;
  const h = canvas.clientHeight || window.innerHeight || 600;
  return { w, h };
}

const { w: initW, h: initH } = getCanvasSize();
const camera = new THREE.PerspectiveCamera(60, initW / initH || 16 / 9, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(initW, initH);
renderer.setPixelRatio(Math.min(window.devicePixelRatio ?? 1, 2));

// Simple orbit camera parameters (target at origin)
let camRadius = 20;
let camTheta = Math.PI / 4; // yaw
let camPhi = Math.PI / 4; // pitch

function updateCamera(): void {
  const r = Math.max(5, camRadius);
  const phi = Math.min(Math.max(0.1, camPhi), Math.PI / 2 - 0.05);
  const x = r * Math.sin(phi) * Math.cos(camTheta);
  const y = r * Math.cos(phi);
  const z = r * Math.sin(phi) * Math.sin(camTheta);
  camera.position.set(x, y, z);
  camera.lookAt(0, 0, 0);
}

updateCamera();

// Lighting
const ambient = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xffffff, 1.0);
dir.position.set(10, 15, 10);
scene.add(dir);

// Simple starry skybox similar to in-game scene
function createProceduralSkybox(): THREE.Mesh {
  const radius = 500;
  const geometry = new THREE.SphereGeometry(radius, 32, 24);
  const material = new THREE.ShaderMaterial({
    uniforms: {},
    vertexShader: `
      varying vec3 vDirection;
      void main() {
        vDirection = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vDirection;
      float hash(vec3 p) {
        return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453);
      }
      void main() {
        vec3 dir = normalize(vDirection);
        float t = dir.y * 0.5 + 0.5;
        vec3 top = vec3(0.15, 0.12, 0.25);
        vec3 bottom = vec3(0.02, 0.02, 0.06);
        vec3 base = mix(bottom, top, t);
        float star = step(0.9985, hash(floor(dir * 180.0)));
        star += step(0.9992, hash(floor(dir * 320.0))) * 0.6;
        base += vec3(star, star * 0.95, star) * 1.2;
        float galaxy = exp(-abs(dir.y) * 2.0) * 0.5 * (0.3 + 0.3 * sin(dir.x * 4.0 + dir.z * 3.0));
        base += vec3(galaxy * 0.4, galaxy * 0.35, galaxy * 0.5);
        gl_FragColor = vec4(base, 1.0);
      }
    `,
    side: THREE.BackSide,
    depthWrite: false,
  });
  const skybox = new THREE.Mesh(geometry, material);
  skybox.frustumCulled = false;
  return skybox;
}

scene.add(createProceduralSkybox());

// No default floor – you place floor prefabs yourself. Optional faint grid at y=0 for reference only.
const gridHelper = new THREE.GridHelper(40, 40, 0x444444, 0x333333);
gridHelper.position.y = 0;
const gridMat = Array.isArray(gridHelper.material)
  ? gridHelper.material
  : [gridHelper.material];
gridMat.forEach((m) => {
  m.transparent = true;
  m.opacity = 0.4;
});
scene.add(gridHelper);

// Ghost preview (follows mouse when prefab tool active)
let ghostPreviewMesh: THREE.Mesh | null = null;
let ghostPreviewPrefabId: PrefabId | null = null;
const lastMouseNDC = new THREE.Vector2(-2, -2);
const ghostPreviewGroup = new THREE.Group();
scene.add(ghostPreviewGroup);

// Prefab instances in the scene (no per-instance mesh; display built in prefabGroup with merged ramps)
const prefabInstances: EditorPrefabInstance[] = [];
const prefabGroup = new THREE.Group();
scene.add(prefabGroup);
const prefabOrder: PrefabId[] = [
  "floor_2x2",
  "floor_4x4",
  "wall_2x4",
  "wall_4x4",
  "ramp_1x4",
  "solid_block",
  "ledge_half_cover",
  "ledge_full_cover",
  "drop_floor",
  "ceiling",
  "spawn_point",
  "kill_volume",
];
const PREFAB_CATEGORIES: Record<string, PrefabId[]> = {
  Floor: ["floor_2x2", "floor_4x4", "drop_floor", "ceiling"],
  Wall: ["wall_2x4", "wall_4x4"],
  Ramp: ["ramp_1x4"],
  Block: ["solid_block"],
  Cover: ["ledge_half_cover", "ledge_full_cover"],
  Special: ["spawn_point", "kill_volume"],
};
let currentPrefab: PrefabId = "floor_4x4";
let currentRotationDeg = 0;

(function applySavedEditorSettings() {
  const saved = loadEditorSettings();
  placementHeightLevel = saved.placementHeightLevel;
  if (saved.currentPrefab && prefabOrder.includes(saved.currentPrefab)) currentPrefab = saved.currentPrefab;
  if (saved.currentRotationDeg !== undefined) currentRotationDeg = saved.currentRotationDeg;
})();

interface EditorSpawnPoint {
  team: number;
  position: [number, number, number];
  rotation: number;
  mesh: THREE.Mesh;
  valid: boolean;
}

const spawnPointsInternal: EditorSpawnPoint[] = [];

type ToolMode = "prefab" | "spawn";
let currentTool: ToolMode = "prefab";

let isPlayerMode = false;
let playerDebug = false;

interface PlayerMovementState {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  movementState: "grounded" | "sliding" | "airborne";
  ext: ReturnType<typeof createDefaultExt>;
}

let playerState: PlayerMovementState | null = null;
let playerYaw = 0;
let playerPitch = 0;

interface PlayerInputState {
  moveX: number;
  moveZ: number;
  jump: boolean;
  slide: boolean;
  crouch: boolean;
  dash: boolean;
}

const playerInput: PlayerInputState = {
  moveX: 0,
  moveZ: 0,
  jump: false,
  slide: false,
  crouch: false,
  dash: false,
};

const collisionDebugHelpers: THREE.Object3D[] = [];
let editorStaticWorld: StaticWorld | undefined;
let weaponPlaceholder: THREE.Group | null = null;
/** When set (client provides initViewmodel), Player Mode uses real viewmodel instead of placeholder. */
let editorViewModelApi: EditorViewmodelAPI | null = null;
/** Cached from localStorage when entering player mode (same key as arena). */
let editorCachedMouseSensitivity = 0.002;

function getPrefabColor(id: PrefabId): number {
  switch (id) {
    case "floor_4x4":
    case "floor_2x2":
    case "drop_floor":
      return 0x4488ff;
    case "ceiling":
      return 0x3366aa;
    case "wall_2x4":
    case "wall_4x4":
      return 0xe8e8ec;
    case "ramp_1x4":
      return 0x88c060;
    case "solid_block":
      return 0x888888;
    case "ledge_half_cover":
    case "ledge_full_cover":
      return 0x6a8a6a;
    case "spawn_point":
      return 0x00ff88;
    case "kill_volume":
      return 0xff4444;
    default:
      return 0xffffff;
  }
}

/** Floor thickness = ramp flat base; wedge is only the slope part so visual is flush with floor. */
const RAMP_VISUAL_BASE = 0.2;

/** Wedge geometry: slope along +Z (low at -Z, high at +Z). Uses height - RAMP_VISUAL_BASE for the slope so when offset up, bottom aligns with floor top. */
function createRampWedgeGeometry(width: number, height: number, depth: number): THREE.BufferGeometry {
  const hw = width / 2;
  const hd = depth / 2;
  const slopeHeight = Math.max(0.01, height - RAMP_VISUAL_BASE);
  const yLo = -slopeHeight / 2;
  const yHi = slopeHeight / 2;
  const vertices = new Float32Array([
    -hw, yLo, -hd, hw, yLo, -hd, hw, yLo, hd, -hw, yLo, hd,
    -hw, yLo, -hd, hw, yLo, -hd, hw, yHi, hd, -hw, yHi, hd,
  ]);
  const indices = new Uint16Array([
    0, 1, 2, 0, 2, 3,
    4, 6, 5, 4, 7, 6,
    0, 5, 1, 0, 4, 5,
    1, 6, 2, 1, 5, 6,
    3, 2, 6, 3, 6, 7,
    0, 3, 7, 0, 7, 4,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  geo.setIndex(new THREE.BufferAttribute(indices, 1));
  geo.computeVertexNormals();
  return geo;
}

function createPrefabMesh(id: PrefabId): THREE.Mesh {
  const def = prefabDefs[id] as PrefabDef | undefined;
  const size: [number, number, number] = def?.size ?? [1, 1, 1];
  const geo =
    id === "ramp_1x4"
      ? createRampWedgeGeometry(size[0], size[1], size[2])
      : new THREE.BoxGeometry(size[0], size[1], size[2]);
  const mat = new THREE.MeshStandardMaterial({ color: getPrefabColor(id) });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  return mesh;
}

const RAMP_ID: PrefabId = "ramp_1x4";
const RAMP_DEPTH = (prefabDefs[RAMP_ID]?.size?.[2] ?? 2) as number;
const ADJACENT_EPS = 0.05;

/** Group ramp instances of same rotation into runs: consecutive along slope axis. */
function getRampRuns(instances: EditorPrefabInstance[]): EditorPrefabInstance[][] {
  const ramps = instances.filter((p) => p.id === RAMP_ID);
  if (ramps.length === 0) return [];

  const runs: EditorPrefabInstance[][] = [];
  const byRot = new Map<number, EditorPrefabInstance[]>();
  for (const p of ramps) {
    const rot = ((p.rotation % 360) + 360) % 360;
    if (!byRot.has(rot)) byRot.set(rot, []);
    byRot.get(rot)!.push(p);
  }

  for (const [, list] of byRot) {
    const rotNorm = ((list[0]!.rotation % 360) + 360) % 360;
    const slopeAxisZ = rotNorm === 0 || rotNorm === 180;
    const slopePositive = rotNorm === 0 || rotNorm === 90;
    list.sort((a, b) => {
      const ax = a.position[0];
      const az = a.position[2];
      const bx = b.position[0];
      const bz = b.position[2];
      if (slopeAxisZ) {
        const diff = az - bz;
        return slopePositive ? diff : -diff;
      }
      const diff = ax - bx;
      return slopePositive ? diff : -diff;
    });

    const rowKey = (p: EditorPrefabInstance) =>
      slopeAxisZ ? p.position[0].toFixed(2) : p.position[2].toFixed(2);
    const step = (p: EditorPrefabInstance) => (slopeAxisZ ? p.position[2] : p.position[0]);

    const byRow = new Map<string, EditorPrefabInstance[]>();
    for (const p of list) {
      const key = rowKey(p);
      if (!byRow.has(key)) byRow.set(key, []);
      byRow.get(key)!.push(p);
    }

    for (const row of byRow.values()) {
      row.sort((a, b) => (slopePositive ? step(a) - step(b) : step(b) - step(a)));
      let run: EditorPrefabInstance[] = [row[0]!];
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

/** One merged ramp mesh (world-space vertices) per run. */
function buildMergedRampMeshes(instances: EditorPrefabInstance[]): THREE.Mesh[] {
  const runs = getRampRuns(instances);
  const size = (prefabDefs[RAMP_ID]?.size ?? [4, 1.2, 2]) as [number, number, number];
  const color = getPrefabColor(RAMP_ID);
  const meshes: THREE.Mesh[] = [];

  for (const run of runs) {
    const geometries: THREE.BufferGeometry[] = [];
    const matrix = new THREE.Matrix4();
    const position = new THREE.Vector3();
    for (const p of run) {
      const geo = createRampWedgeGeometry(size[0], size[1], size[2]).clone();
      const [x, y, z] = p.position;
      const rampYOffset = RAMP_VISUAL_BASE / 2;
      matrix.identity();
      matrix.makeRotationY(THREE.MathUtils.degToRad(p.rotation));
      matrix.setPosition(x, y + rampYOffset, z);
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
    geometries.forEach((g) => g.dispose());
    if (!merged) continue;
    const welded = mergeVertices(merged, 1e-4);
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

/** Which prefab instance (index) contains this world point; used for delete-after-raycast. */
function findPrefabInstanceIndexAt(worldX: number, worldY: number, worldZ: number): number | null {
  for (let i = 0; i < prefabInstances.length; i++) {
    const inst = prefabInstances[i]!;
    const def = prefabDefs[inst.id] as PrefabDef | undefined;
    if (!def || (def.collision !== "box" && def.collision !== "ramp")) continue;
    const [sx, sy, sz] = def.size;
    const [cx, cy, cz] = inst.position;
    const rot = ((inst.rotation % 360) + 360) % 360;
    const rot90 = rot === 90 || rot === 270;
    const halfX = (rot90 ? sz : sx) / 2;
    const halfZ = (rot90 ? sx : sz) / 2;
    const minX = cx - halfX;
    const maxX = cx + halfX;
    const minZ = cz - halfZ;
    const maxZ = cz + halfZ;
    if (worldX < minX || worldX > maxX || worldZ < minZ || worldZ > maxZ) continue;
    const minY = def.collision === "ramp" ? cy - sy / 2 + RAMP_VISUAL_BASE : cy - sy / 2;
    const maxY = cy + sy / 2;
    if (worldY >= minY && worldY <= maxY) return i;
  }
  return null;
}

function rebuildPrefabGroup(): void {
  while (prefabGroup.children.length > 0) {
    const child = prefabGroup.children[0];
    prefabGroup.remove(child);
    if (child instanceof THREE.Mesh && child.geometry) child.geometry.dispose();
    if (child instanceof THREE.Mesh && child.material) (child.material as THREE.Material).dispose();
  }

  const rampInstances: EditorPrefabInstance[] = [];
  for (const inst of prefabInstances) {
    if (inst.id === RAMP_ID) {
      rampInstances.push(inst);
      continue;
    }
    const mesh = createPrefabMesh(inst.id);
    mesh.position.set(inst.position[0], inst.position[1], inst.position[2]);
    mesh.rotation.y = THREE.MathUtils.degToRad(inst.rotation);
    prefabGroup.add(mesh);
  }

  for (const mesh of buildMergedRampMeshes(rampInstances)) {
    prefabGroup.add(mesh);
  }
}

function createGhostPreviewMesh(id: PrefabId): THREE.Mesh {
  const def = prefabDefs[id] as PrefabDef | undefined;
  const size: [number, number, number] = def?.size ?? [1, 1, 1];
  const geo =
    id === "ramp_1x4"
      ? createRampWedgeGeometry(size[0], size[1], size[2])
      : new THREE.BoxGeometry(size[0], size[1], size[2]);
  const mat = new THREE.MeshStandardMaterial({
    color: getPrefabColor(id),
    transparent: true,
    opacity: 0.45,
    depthWrite: false,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  mesh.renderOrder = 1;
  return mesh;
}

const _groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
const _raycaster = new THREE.Raycaster();
const _mouseNDC = new THREE.Vector2();
const _intersectTarget = new THREE.Vector3();

function getSnappedPlacePosition(ndcX: number, ndcY: number, prefabId: PrefabId): { x: number; z: number; centerY: number } | null {
  _mouseNDC.set(ndcX, ndcY);
  _raycaster.setFromCamera(_mouseNDC, camera);
  const hit = _raycaster.ray.intersectPlane(_groundPlane, _intersectTarget);
  if (!hit) return null;
  const def = prefabDefs[prefabId] as PrefabDef | undefined;
  const size = def?.size ?? [1, 1, 1];
  const centerY = placementHeightLevel * PLACEMENT_LEVEL_STEP + size[1] / 2;
  const x = Math.round(_intersectTarget.x / GRID_SIZE) * GRID_SIZE;
  const z = Math.round(_intersectTarget.z / GRID_SIZE) * GRID_SIZE;
  return { x, z, centerY };
}

function updateInfo(): void {
  const toolLabel = currentTool === "prefab" ? "Block" : "Spawn";
  const actionHint =
    currentTool === "prefab"
      ? "Links: Block platzieren, Rechts: Block löschen"
      : "Links: Spawn platzieren, Rechts: Spawn löschen";
  info.textContent = [
    `Tool: ${toolLabel}`,
    `Prefab: ${currentPrefab}`,
    `Rotation: ${currentRotationDeg}°`,
    `Bauhöhe: ${placementHeightLevel} (Y-Basis ${placementHeightLevel * PLACEMENT_LEVEL_STEP} m)`,
    "",
    actionHint,
    "Taste 1-5: Prefab-Typ (Block-Tool)",
    "Bild↑ / Bild↓: Bauhöhe +1 / -1 (nach oben/unten bauen)",
    "T: Tool wechseln (Block/Spawn)",
    "P: Player-Mode (Movement 1:1, inkl. Walljump)",
    "B: Debug (Spawn + AABBs) – Grün = Lauffläche, Orange = Wand/Seiten",
    "R: Rotation +90° (Block-Tool)",
    "Maus-Rechts ziehen: Kamera drehen (Orbit)",
    "Mausrad: Zoom",
    "Player-Mode: Linksklick = FPS-Maus (Pointer Lock)",
    "",
    "Exportierte Map = gleiches JSON wie Multiplayer (maps/*.json).",
  ].join(" | ");
}

updateInfo();

// Right panel: export + collapsible placement menu
const rightPanel = document.createElement("div");
rightPanel.style.cssText = "position:absolute;right:0;top:0;bottom:0;width:220px;background:rgba(0,0,0,0.7);color:#ccc;font-family:system-ui,sans-serif;font-size:12px;pointer-events:auto;z-index:10;overflow-y:auto;display:flex;flex-direction:column;";
const rightPanelExport = document.createElement("button");
rightPanelExport.textContent = "Map exportieren";
rightPanelExport.style.cssText = "margin:8px;padding:8px 12px;background:#334466;color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;";
rightPanelExport.onclick = doExportMap;
rightPanel.appendChild(rightPanelExport);

let rightPanelCollapsed = false;
const rightPanelToggle = document.createElement("button");
rightPanelToggle.type = "button";
rightPanelToggle.textContent = "Platzieren \u25BC";
rightPanelToggle.style.cssText = "width:100%;padding:8px;background:rgba(255,255,255,0.08);border:none;color:#fff;font-size:12px;text-align:left;cursor:pointer;";
const rightPanelBody = document.createElement("div");
rightPanelBody.style.flex = "1";
rightPanelToggle.addEventListener("click", () => {
  rightPanelCollapsed = !rightPanelCollapsed;
  rightPanelBody.style.display = rightPanelCollapsed ? "none" : "block";
  rightPanelToggle.textContent = "Platzieren " + (rightPanelCollapsed ? "\u25B6" : "\u25BC");
});
rightPanel.appendChild(rightPanelToggle);
rightPanel.appendChild(rightPanelBody);

const placementHeightEl = document.createElement("div");
placementHeightEl.style.cssText = "padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.1);font-size:12px;";
rightPanelBody.appendChild(placementHeightEl);

function updatePlacementHeightDisplay(): void {
  const baseY = placementHeightLevel * PLACEMENT_LEVEL_STEP;
  placementHeightEl.textContent = `Bauhöhe: ${placementHeightLevel} (Y-Basis ${baseY} m) | Bild↑ / Bild↓`;
}

const prefabItemToEl = new Map<PrefabId, HTMLElement>();
function updatePrefabSelectionHighlight(): void {
  prefabItemToEl.forEach((el, id) => {
    el.style.background = id === currentPrefab ? "rgba(80,120,200,0.4)" : "transparent";
  });
}

for (const [catName, ids] of Object.entries(PREFAB_CATEGORIES)) {
  let catCollapsed = true;
  const catHeader = document.createElement("button");
  catHeader.type = "button";
  catHeader.textContent = catName + " \u25B6";
  catHeader.style.cssText = "width:100%;padding:6px 8px;background:rgba(255,255,255,0.06);border:none;color:#ddd;font-size:12px;text-align:left;cursor:pointer;";
  const catList = document.createElement("div");
  catList.style.display = "none";
  for (const id of ids) {
    const row = document.createElement("div");
    row.style.cssText = "padding:6px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.06);";
    row.textContent = id;
    row.addEventListener("click", () => {
      currentPrefab = id;
      updatePrefabSelectionHighlight();
      updateInfo();
      saveEditorSettings();
    });
    prefabItemToEl.set(id, row);
    catList.appendChild(row);
  }
  catHeader.addEventListener("click", () => {
    catCollapsed = !catCollapsed;
    catList.style.display = catCollapsed ? "none" : "block";
    catHeader.textContent = catName + " " + (catCollapsed ? "\u25B6" : "\u25BC");
  });
  rightPanelBody.appendChild(catHeader);
  rightPanelBody.appendChild(catList);
}

const rotateBtn = document.createElement("button");
rotateBtn.type = "button";
rotateBtn.textContent = "Rotate +90°";
rotateBtn.style.cssText = "margin:8px;padding:6px 10px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.2);color:#ccc;border-radius:4px;cursor:pointer;font-size:11px;";
rotateBtn.addEventListener("click", () => {
  currentRotationDeg = (currentRotationDeg + 90) % 360;
  updateInfo();
  saveEditorSettings();
});
rightPanelBody.appendChild(rotateBtn);

const spawnSection = document.createElement("div");
spawnSection.style.cssText = "margin:8px;padding:8px;background:rgba(0,0,0,0.2);border-radius:4px;border:1px solid rgba(255,255,255,0.1);";
const spawnTitle = document.createElement("div");
spawnTitle.style.cssText = "font-weight:bold;color:#8fc;margin-bottom:4px;";
spawnTitle.textContent = "Spawn-Punkte";
spawnSection.appendChild(spawnTitle);
const spawnHint = document.createElement("div");
spawnHint.style.cssText = "font-size:11px;color:#999;margin-bottom:4px;";
spawnHint.textContent = "T: Tool wechseln (Block \u2194 Spawn). Linksklick: setzen, Rechtsklick: entfernen.";
spawnSection.appendChild(spawnHint);
const spawnCountEl = document.createElement("div");
spawnCountEl.style.fontSize = "12px";
function updateSpawnCountDisplay(): void {
  const valid = spawnPointsInternal.filter((sp) => sp.valid).length;
  spawnCountEl.textContent = `Aktuell: ${spawnPointsInternal.length} (${valid} g\u00fcltig)`;
}
updateSpawnCountDisplay();
spawnSection.appendChild(spawnCountEl);
rightPanelBody.appendChild(spawnSection);

updatePlacementHeightDisplay();
updatePrefabSelectionHighlight();
app.appendChild(rightPanel);

function addPrefabAt(id: PrefabId, worldX: number, worldZ: number, rotationDeg: number): void {
  const def = prefabDefs[id] as PrefabDef | undefined;
  const size = def?.size ?? [1, 1, 1];
  const centerY = placementHeightLevel * PLACEMENT_LEVEL_STEP + size[1] / 2;
  const instance: EditorPrefabInstance = {
    id,
    position: [worldX, centerY, worldZ],
    rotation: rotationDeg,
  };
  prefabInstances.push(instance);
  rebuildPrefabGroup();
}

function findTopSurfaceYAt(x: number, z: number): number | null {
  let bestY: number | null = null;
  for (const inst of prefabInstances) {
    const def = prefabDefs[inst.id] as PrefabDef | undefined;
    if (!def || (def.collision !== "box" && def.collision !== "ramp")) continue;
    const [sx, sy, sz] = def.size;
    const centerX = inst.position[0];
    const centerY = inst.position[1];
    const centerZ = inst.position[2];
    const rot = ((inst.rotation % 360) + 360) % 360;
    const rot90 = rot === 90 || rot === 270;
    const halfX = (rot90 ? sz : sx) / 2;
    const halfZ = (rot90 ? sx : sz) / 2;
    const minX = centerX - halfX;
    const maxX = centerX + halfX;
    const minZ = centerZ - halfZ;
    const maxZ = centerZ + halfZ;
    if (x < minX || x > maxX || z < minZ || z > maxZ) continue;
    let topY: number;
    if (def.collision === "ramp") {
      const rampAxis = rot90 ? "x" : "z";
      const rampInverted = rot === 270 || rot === 180;
      const axisMin = rampAxis === "z" ? minZ : minX;
      const axisMax = rampAxis === "z" ? maxZ : maxX;
      const p = rampAxis === "z" ? z : x;
      const blockMinY = centerY - sy / 2 + RAMP_VISUAL_BASE;
      const blockMaxY = centerY + sy / 2;
      const blockH = blockMaxY - blockMinY;
      const span = axisMax - axisMin;
      const t = span > 1e-6 ? Math.max(0, Math.min(1, (p - axisMin) / span)) : 0;
      const tEff = rampInverted ? 1 - t : t;
      topY = blockMinY + tEff * blockH;
    } else {
      topY = centerY + sy / 2;
    }
    if (bestY === null || topY > bestY) bestY = topY;
  }
  return bestY;
}

function createSpawnMesh(valid: boolean): THREE.Mesh {
  const geo = new THREE.CylinderGeometry(0.15, 0.15, 1, 12);
  const mat = new THREE.MeshStandardMaterial({
    color: valid ? 0x00ff88 : 0xff3355,
  });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.castShadow = false;
  mesh.receiveShadow = false;
  return mesh;
}

function validateSpawnPoint(sp: EditorSpawnPoint): void {
  const topY = findTopSurfaceYAt(sp.position[0], sp.position[2]);
  const valid = topY !== null;
  sp.valid = valid;
  const y = valid ? (topY as number) : 0;
  sp.position[1] = y;
  sp.mesh.position.set(sp.position[0], y + 0.5, sp.position[2]);
  (sp.mesh.material as THREE.MeshStandardMaterial).color.set(
    valid ? 0x00ff88 : 0xff3355
  );
}

function revalidateAllSpawnPoints(): void {
  for (const sp of spawnPointsInternal) {
    validateSpawnPoint(sp);
  }
}

const WALKABLE_DEBUG_COLOR = 0x00ff88;
const WALL_DEBUG_COLOR = 0xff8800;

function createBoxWireframe(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  minZ: number,
  maxZ: number,
  color: number
): THREE.LineSegments {
  const points = [
    [minX, minY, minZ], [maxX, minY, minZ], [maxX, minY, minZ], [maxX, minY, maxZ],
    [maxX, minY, maxZ], [minX, minY, maxZ], [minX, minY, maxZ], [minX, minY, minZ],
    [minX, minY, minZ], [minX, maxY, minZ], [maxX, minY, minZ], [maxX, maxY, minZ],
    [maxX, minY, maxZ], [maxX, maxY, maxZ], [minX, minY, maxZ], [minX, maxY, maxZ],
    [minX, maxY, minZ], [maxX, maxY, minZ], [maxX, maxY, minZ], [maxX, maxY, maxZ],
    [maxX, maxY, maxZ], [minX, maxY, maxZ], [minX, maxY, maxZ], [minX, maxY, minZ],
  ];
  const vertices = points.flatMap((p) => p);
  const geo = new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const mat = new THREE.LineBasicMaterial({ color });
  return new THREE.LineSegments(geo, mat);
}

/** Top face (walkable) of AABB as 4 edges at maxY. */
function createTopFaceWireframe(
  minX: number,
  maxX: number,
  maxY: number,
  minZ: number,
  maxZ: number,
  color: number
): THREE.LineSegments {
  const points = [
    new THREE.Vector3(minX, maxY, minZ), new THREE.Vector3(maxX, maxY, minZ),
    new THREE.Vector3(maxX, maxY, minZ), new THREE.Vector3(maxX, maxY, maxZ),
    new THREE.Vector3(maxX, maxY, maxZ), new THREE.Vector3(minX, maxY, maxZ),
    new THREE.Vector3(minX, maxY, maxZ), new THREE.Vector3(minX, maxY, minZ),
  ];
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({ color });
  return new THREE.LineSegments(geo, mat);
}

/** All edges of AABB except the top face (bottom 4 + 4 verticals) – non-walkable. */
function createBoxSidesWireframe(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  minZ: number,
  maxZ: number,
  color: number
): THREE.LineSegments {
  const points = [
    [minX, minY, minZ], [maxX, minY, minZ], [maxX, minY, minZ], [maxX, minY, maxZ],
    [maxX, minY, maxZ], [minX, minY, maxZ], [minX, minY, maxZ], [minX, minY, minZ],
    [minX, minY, minZ], [minX, maxY, minZ], [maxX, minY, minZ], [maxX, maxY, minZ],
    [maxX, minY, maxZ], [maxX, maxY, maxZ], [minX, minY, maxZ], [minX, maxY, maxZ],
  ];
  const vertices = points.flatMap((p) => p);
  const geo = new THREE.BufferGeometry().setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3));
  const mat = new THREE.LineBasicMaterial({ color });
  return new THREE.LineSegments(geo, mat);
}

/** Wireframe of wedge (ramp) for debug – walkable surface. rampAxisZ: slope along Z; rampInverted: high end at axis min (90°/180°). */
function createRampDebugWireframe(
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
  minZ: number,
  maxZ: number,
  rampAxisZ: boolean,
  rampInverted: boolean,
  color: number = WALKABLE_DEBUG_COLOR
): THREE.LineSegments {
  const points: THREE.Vector3[] = [];
  if (rampAxisZ && !rampInverted) {
    // Slope along Z: low at minZ, high at maxZ
    points.push(
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, minY, maxZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(minX, minY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, maxY, maxZ),
      new THREE.Vector3(maxX, maxY, maxZ), new THREE.Vector3(minX, maxY, maxZ),
      new THREE.Vector3(minX, maxY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(maxX, maxY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, maxY, maxZ)
    );
  } else if (rampAxisZ && rampInverted) {
    // Slope along Z: high at minZ, low at maxZ (180°)
    points.push(
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, minY, maxZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(minX, minY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, maxY, minZ),
      new THREE.Vector3(maxX, maxY, minZ), new THREE.Vector3(minX, maxY, minZ),
      new THREE.Vector3(minX, maxY, minZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(maxX, minY, minZ)
    );
  } else if (!rampAxisZ && !rampInverted) {
    // Slope along X: low at minX, high at maxX (270°)
    points.push(
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, minY, maxZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(minX, minY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, maxY, minZ),
      new THREE.Vector3(maxX, maxY, minZ), new THREE.Vector3(maxX, maxY, maxZ),
      new THREE.Vector3(maxX, maxY, maxZ), new THREE.Vector3(minX, minY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, maxY, minZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(maxX, maxY, maxZ)
    );
  } else {
    // Slope along X: high at minX, low at maxX (90°)
    points.push(
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(maxX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(maxX, minY, maxZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(minX, minY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(minX, minY, minZ), new THREE.Vector3(minX, maxY, minZ),
      new THREE.Vector3(minX, maxY, minZ), new THREE.Vector3(minX, maxY, maxZ),
      new THREE.Vector3(minX, maxY, maxZ), new THREE.Vector3(minX, minY, maxZ),
      new THREE.Vector3(minX, minY, maxZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(maxX, minY, minZ), new THREE.Vector3(minX, minY, minZ),
      new THREE.Vector3(maxX, minY, maxZ), new THREE.Vector3(minX, minY, maxZ)
    );
  }
  const geo = new THREE.BufferGeometry().setFromPoints(points);
  const mat = new THREE.LineBasicMaterial({ color });
  return new THREE.LineSegments(geo, mat);
}

function rebuildCollisionDebugMeshes(): void {
  for (const helper of collisionDebugHelpers) {
    scene.remove(helper);
    const g = (helper as THREE.LineSegments).geometry;
    const m = (helper as THREE.LineSegments).material;
    if (g) g.dispose();
    if (m) (Array.isArray(m) ? m.forEach((x) => x.dispose()) : (m as THREE.Material).dispose());
  }
  collisionDebugHelpers.length = 0;

  for (const inst of prefabInstances) {
    const def = prefabDefs[inst.id] as PrefabDef | undefined;
    if (!def || (def.collision !== "box" && def.collision !== "ramp")) continue;
    const [sx, sy, sz] = def.size;
    const centerX = inst.position[0];
    const centerY = inst.position[1];
    const centerZ = inst.position[2];
    const rot = ((inst.rotation % 360) + 360) % 360;
    const rot90 = rot === 90 || rot === 270;
    const halfX = (rot90 ? sz : sx) / 2;
    const halfZ = (rot90 ? sx : sz) / 2;
    const minX = centerX - halfX;
    const maxX = centerX + halfX;
    const minZ = centerZ - halfZ;
    const maxZ = centerZ + halfZ;
    const minY = def.collision === "ramp" ? centerY - sy / 2 + RAMP_VISUAL_BASE : centerY - sy / 2;
    const maxY = centerY + sy / 2;

    if (def.collision === "ramp") {
      const rampInverted = rot === 270 || rot === 180;
      const walkableHelper = createRampDebugWireframe(minX, maxX, minY, maxY, minZ, maxZ, !rot90, rampInverted, WALKABLE_DEBUG_COLOR);
      walkableHelper.visible = false;
      scene.add(walkableHelper);
      collisionDebugHelpers.push(walkableHelper);
    } else if (def.walkableTopOnly) {
      const topHelper = createTopFaceWireframe(minX, maxX, maxY, minZ, maxZ, WALKABLE_DEBUG_COLOR);
      const sidesHelper = createBoxSidesWireframe(minX, maxX, minY, maxY, minZ, maxZ, WALL_DEBUG_COLOR);
      topHelper.visible = false;
      sidesHelper.visible = false;
      scene.add(topHelper);
      scene.add(sidesHelper);
      collisionDebugHelpers.push(topHelper);
      collisionDebugHelpers.push(sidesHelper);
    } else {
      const box = new THREE.Box3(
        new THREE.Vector3(minX, minY, minZ),
        new THREE.Vector3(maxX, maxY, maxZ)
      );
      const helper = new THREE.Box3Helper(box, WALKABLE_DEBUG_COLOR);
      helper.visible = false;
      scene.add(helper);
      collisionDebugHelpers.push(helper);
    }
  }
}

function updateDebugVisibility(): void {
  const show = isPlayerMode && playerDebug;
  for (const sp of spawnPointsInternal) {
    sp.mesh.visible = show;
  }
  for (const helper of collisionDebugHelpers) {
    helper.visible = show;
  }
  gridHelper.visible = !isPlayerMode || playerDebug;
}

/**
 * Build collision blocks from current prefab instances.
 * Same logic as floor/wall: every solid prefab gets a block; ramp_1x4 gets rampAxis so you walk on the slope.
 * Ramp runs use continuation minY (no 0.2 m step at segment seams) – see docs/map-format.md.
 * Done here (not via shared buildStaticWorldFromMap) so editor works regardless of shared build – see docs/map-format.md "Kollision und Begehbarkeit" / "Editor (Player-Mode)".
 */
function buildEditorStaticWorld(): StaticWorld {
  const blocks: StaticBlockCollider[] = [];

  for (const inst of prefabInstances) {
    const def = prefabDefs[inst.id] as PrefabDef | undefined;
    if (!def || def.collision === "none") continue;
    if (def.collision === "ramp") continue;
    if (def.collision !== "box") continue;
    const [sx, sy, sz] = def.size;
    const [cx, cy, cz] = inst.position;
    const rot = ((inst.rotation % 360) + 360) % 360;
    const rot90 = rot === 90 || rot === 270;
    const halfX = (rot90 ? sz : sx) / 2;
    const halfZ = (rot90 ? sx : sz) / 2;
    const block: StaticBlockCollider = {
      minX: cx - halfX,
      maxX: cx + halfX,
      minZ: cz - halfZ,
      maxZ: cz + halfZ,
      minY: cy - sy / 2,
      maxY: cy + sy / 2,
    };
    if (def.walkableTopOnly) {
      block.walkableTopOnly = true;
    }
    blocks.push(block);
  }

  const rampRuns = getRampRuns(prefabInstances);
  for (const run of rampRuns) {
    let prevMaxY: number | undefined;
    for (const inst of run) {
      const def = prefabDefs[inst.id] as PrefabDef | undefined;
      if (!def || def.collision !== "ramp") continue;
      const [sx, sy, sz] = def.size;
      const [cx, cy, cz] = inst.position;
      const rot = ((inst.rotation % 360) + 360) % 360;
      const rot90 = rot === 90 || rot === 270;
      const halfX = (rot90 ? sz : sx) / 2;
      const halfZ = (rot90 ? sx : sz) / 2;
      const minY =
        prevMaxY !== undefined ? prevMaxY : cy - sy / 2 + RAMP_VISUAL_BASE;
      const maxY = cy + sy / 2;
      const block: StaticBlockCollider = {
        minX: cx - halfX,
        maxX: cx + halfX,
        minZ: cz - halfZ,
        maxZ: cz + halfZ,
        minY,
        maxY,
      };
      block.rampAxis = rot90 ? "x" : "z";
      block.rampInverted = rot === 270 || rot === 180;
      if (def.walkableTopOnly) {
        block.walkableTopOnly = true;
      }
      blocks.push(block);
      prevMaxY = maxY;
    }
  }

  return { blocks };
}

function rebuildEditorStaticWorld(): void {
  editorStaticWorld = buildEditorStaticWorld();
}

function placePrefabFromPointer(ev: MouseEvent): void {
  const rect = canvas.getBoundingClientRect();
  const ndcX = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
  const ndcY = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  const pos = getSnappedPlacePosition(ndcX, ndcY, currentPrefab);
  if (!pos) return;
  addPrefabAt(currentPrefab, pos.x, pos.z, currentRotationDeg);
  rebuildEditorStaticWorld();
  rebuildCollisionDebugMeshes();
}

function placeSpawnFromPointer(ev: MouseEvent): void {
  const rect = canvas.getBoundingClientRect();
  const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(x, y);
  raycaster.setFromCamera(mouse, camera);
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const target = new THREE.Vector3();
  const hit = raycaster.ray.intersectPlane(ground, target);
  if (!hit) return;
  const snappedX = Math.round(target.x / GRID_SIZE) * GRID_SIZE;
  const snappedZ = Math.round(target.z / GRID_SIZE) * GRID_SIZE;
  const spawnPos: [number, number, number] = [snappedX, 0, snappedZ];
  const spawnMesh = createSpawnMesh(true);
  const sp: EditorSpawnPoint = {
    team: 0,
    position: spawnPos,
    rotation: 0,
    mesh: spawnMesh,
    valid: true,
  };
  scene.add(spawnMesh);
  spawnPointsInternal.push(sp);
  validateSpawnPoint(sp);
  updateSpawnCountDisplay();
}

function deletePrefabFromPointer(ev: MouseEvent): void {
  if (prefabInstances.length === 0 || prefabGroup.children.length === 0) return;
  const rect = canvas.getBoundingClientRect();
  const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(x, y);
  raycaster.setFromCamera(mouse, camera);
  const hits = raycaster.intersectObjects(prefabGroup.children, false);
  if (hits.length === 0) return;
  const hit = hits[0];
  const hitPoint = hit.point;
  const index = findPrefabInstanceIndexAt(hitPoint.x, hitPoint.y, hitPoint.z);
  if (index !== null && index >= 0) {
    prefabInstances.splice(index, 1);
    rebuildPrefabGroup();
    revalidateAllSpawnPoints();
  }
  rebuildEditorStaticWorld();
  rebuildCollisionDebugMeshes();
}

function deleteSpawnFromPointer(ev: MouseEvent): void {
  if (spawnPointsInternal.length === 0) return;
  const rect = canvas.getBoundingClientRect();
  const x = ((ev.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((ev.clientY - rect.top) / rect.height) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(x, y);
  raycaster.setFromCamera(mouse, camera);
  const meshes = spawnPointsInternal.map((s) => s.mesh);
  const hits = raycaster.intersectObjects(meshes, false);
  if (hits.length === 0) return;
  const first = hits[0].object as THREE.Mesh;
  const index = spawnPointsInternal.findIndex((s) => s.mesh === first);
  if (index >= 0) {
    scene.remove(spawnPointsInternal[index].mesh);
    spawnPointsInternal[index].mesh.geometry.dispose();
    (spawnPointsInternal[index].mesh.material as THREE.Material).dispose();
    spawnPointsInternal.splice(index, 1);
    updateSpawnCountDisplay();
  }
}

// ---- Orbit (prefab mode): right-drag + wheel ----
let isOrbiting = false;
let lastMouseX = 0;
let lastMouseY = 0;

canvas.addEventListener("contextmenu", (e) => e.preventDefault());

canvas.addEventListener("mousedown", (e) => {
  if (isPlayerMode) {
    if (e.button !== 0) return;
    return; // FPS look: pointer lock only via click (same as client)
  }
  if (e.button === 0) {
    if (currentTool === "prefab") placePrefabFromPointer(e);
    else placeSpawnFromPointer(e);
  } else if (e.button === 2) {
    if (currentTool === "prefab") deletePrefabFromPointer(e);
    else deleteSpawnFromPointer(e);
    isOrbiting = true;
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (e.button === 2) isOrbiting = false;
});

// Debug log counters (updatePlayer / viewmodel)
let _playerLogCount = 0;
let _viewmodelLogCount = 0;

// ---- FPS look: 1:1 copy from client InputSampler (click -> pointer lock, mousemove -> yaw/pitch) ----
const INPUT_STORAGE_KEY = "browsershooter:inputSettings";
const BASE_SENSITIVITY = 0.002; // same as client InputSampler default
function getEditorMouseSensitivity(): number {
  try {
    const raw = typeof localStorage !== "undefined" ? localStorage.getItem(INPUT_STORAGE_KEY) : null;
    if (!raw) return BASE_SENSITIVITY;
    const parsed = JSON.parse(raw) as { mouseSensitivity?: number } | null;
    const mult = typeof parsed?.mouseSensitivity === "number" ? parsed.mouseSensitivity : 1;
    const clamped = Math.max(0.2, Math.min(3, mult));
    return BASE_SENSITIVITY * clamped;
  } catch {
    return BASE_SENSITIVITY;
  }
}
const LOCK_KEYS_FOR_BROWSER_SHORTCUTS = ["KeyW", "KeyN", "KeyT", "KeyC", "ShiftLeft", "ShiftRight"];

document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (!isPlayerMode || document.pointerLockElement !== canvas) return;
  const code = e.code;
  const key = e.key?.toLowerCase();
  if (e.ctrlKey && (code === "KeyW" || code === "KeyN" || code === "KeyT" || key === "w" || key === "n" || key === "t")) {
    e.preventDefault();
    e.stopImmediatePropagation();
  }
}, { capture: true });

canvas.addEventListener("click", () => {
  if (!isPlayerMode) return;
  if (document.pointerLockElement === canvas) return;
  canvas.requestPointerLock();
  if (navigator.keyboard?.lock) {
    navigator.keyboard.lock().then(() => {}).catch(() => {
      navigator.keyboard!.lock(LOCK_KEYS_FOR_BROWSER_SHORTCUTS).catch(() => {});
    });
  }
});

document.addEventListener("pointerlockchange", () => {
  if (!isPlayerMode) return;
  if (document.pointerLockElement === canvas) {
    if (playerHud.textContent?.includes("Klicken")) {
      const dashRem = playerState?.ext?.dashCooldownTimer ?? 0;
      const slideLabel = playerState?.movementState === "sliding" ? "Slide: aktiv" : "Shift: Slide";
      const dashLabel = dashRem > 0 ? `Dash: ${dashRem.toFixed(1)}s` : "Q: Dash bereit";
      playerHud.textContent = `${slideLabel} | ${dashLabel}`;
    }
  } else {
    playerHud.textContent = "Klicken zum Aktivieren der Maus";
    if (navigator.keyboard?.unlock) navigator.keyboard.unlock();
  }
});

document.addEventListener("mousemove", (e: MouseEvent) => {
  if (isPlayerMode && document.pointerLockElement === canvas) {
    playerYaw -= (e.movementX ?? 0) * editorCachedMouseSensitivity;
    playerPitch -= (e.movementY ?? 0) * editorCachedMouseSensitivity;
    playerPitch = Math.max(-Math.PI / 2 + 0.01, Math.min(Math.PI / 2 - 0.01, playerPitch));
    return;
  }
  const rect = canvas.getBoundingClientRect();
  lastMouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  lastMouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  if (!isOrbiting) return;
  const deltaX = e.clientX - lastMouseX;
  const deltaY = e.clientY - lastMouseY;
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  camTheta -= deltaX * 0.005;
  camPhi -= deltaY * 0.005;
  updateCamera();
});

window.addEventListener("wheel", (e) => {
  if (isPlayerMode) return;
  camRadius *= 1 + (e.deltaY * 0.002);
  camRadius = Math.min(Math.max(camRadius, 5), 80);
  updateCamera();
});

function enterPlayerMode(): void {
  if (isPlayerMode) return;

  rebuildEditorStaticWorld();

  // Spawn at first valid spawnpoint, else origin/top of geometry.
  let spawnX = 0;
  let spawnZ = 0;
  let spawnY = findTopSurfaceYAt(0, 0) ?? 0;
  let spawnRotDeg = 0;

  const validSpawns = spawnPointsInternal.filter((sp) => sp.valid);
  const spawn = (validSpawns.length > 0 ? validSpawns : spawnPointsInternal)[0];
  if (spawn) {
    spawnX = spawn.position[0];
    spawnZ = spawn.position[2];
    spawnY = findTopSurfaceYAt(spawnX, spawnZ) ?? spawn.position[1];
    spawnRotDeg = spawn.rotation;
  }

  playerState = {
    x: spawnX,
    y: spawnY,
    z: spawnZ,
    vx: 0,
    vy: 0,
    vz: 0,
    movementState: "grounded",
    ext: createDefaultExt(),
  };
  playerYaw = THREE.MathUtils.degToRad(spawnRotDeg);
  playerPitch = 0;
  isPlayerMode = true;
  playerDebug = false;
  editorViewModelApi = null;
  editorCachedMouseSensitivity = getEditorMouseSensitivity();
  rebuildCollisionDebugMeshes();
  updateDebugVisibility();
  canvas.focus();
  playerHud.style.display = "block";
  playerHud.textContent = "Klicken zum Aktivieren der Maus";
  // Placeholder until real viewmodel is loaded (or only placeholder when no initViewmodel)
  weaponPlaceholder = new THREE.Group();
  const gunGeo = new THREE.BoxGeometry(0.12, 0.08, 0.5);
  const gunMat = new THREE.MeshStandardMaterial({ color: 0x555555 });
  const gun = new THREE.Mesh(gunGeo, gunMat);
  gun.position.set(0.28, -0.22, -0.55);
  gun.rotation.x = 0.15;
  weaponPlaceholder.add(gun);
  camera.add(weaponPlaceholder);
  updateInfo();

  const initViewmodel = bootOptions?.initViewmodel;
  // #region agent log
  fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'023e93'},body:JSON.stringify({sessionId:'023e93',location:'editor main.ts:enterPlayerMode',message:'enterPlayerMode',data:{hasInitViewmodel:!!initViewmodel},hypothesisId:'H4',timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  if (initViewmodel) {
    initViewmodel(camera).then((api) => {
      // #region agent log
      fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'023e93'},body:JSON.stringify({sessionId:'023e93',location:'editor main.ts:viewmodel then',message:'viewmodel init resolved',data:{hasApi:!!api,stillPlayerMode:isPlayerMode},hypothesisId:'H5',timestamp:Date.now()})}).catch(()=>{});
      // #endregion
      if (!isPlayerMode) return;
      editorViewModelApi = api;
      if (weaponPlaceholder) {
        camera.remove(weaponPlaceholder);
        weaponPlaceholder = null;
      }
      const state = api.viewmodelState as { viewmodelRoot?: THREE.Object3D };
      if (state?.viewmodelRoot) {
        state.viewmodelRoot.visible = true;
        state.viewmodelRoot.updateMatrixWorld(true);
      }
    }).catch((err) => {
      // #region agent log
      fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'023e93'},body:JSON.stringify({sessionId:'023e93',location:'editor main.ts:viewmodel catch',message:'viewmodel init failed',data:{err:String(err)},hypothesisId:'H5',timestamp:Date.now()})}).catch(()=>{});
      // #endregion
      if (import.meta.env?.DEV) console.warn("[Editor] Viewmodel load failed:", err);
    });
  }
}

function exitPlayerMode(): void {
  if (!isPlayerMode) return;
  isPlayerMode = false;
  playerDebug = false;
  playerHud.style.display = "none";
  if (weaponPlaceholder) {
    camera.remove(weaponPlaceholder);
    weaponPlaceholder = null;
  }
  const state = editorViewModelApi?.viewmodelState as { viewmodelRoot?: THREE.Object3D } | undefined;
  if (state?.viewmodelRoot && state.viewmodelRoot.parent === camera) {
    camera.remove(state.viewmodelRoot);
  }
  editorViewModelApi = null;
  if (document.pointerLockElement === canvas) {
    document.exitPointerLock();
  }
  updateDebugVisibility();
  updateInfo();
}

function handlePlayerKeyDown(e: KeyboardEvent): void {
  switch (e.code) {
    case "KeyW":
      playerInput.moveZ = 1;
      break;
    case "KeyS":
      playerInput.moveZ = -1;
      break;
    case "KeyA":
      playerInput.moveX = -1;
      break;
    case "KeyD":
      playerInput.moveX = 1;
      break;
    case "Space":
      playerInput.jump = true;
      break;
    case "ShiftLeft":
    case "ShiftRight":
      playerInput.slide = true;
      break;
    case "KeyC":
      playerInput.crouch = true;
      break;
    case "KeyQ":
      playerInput.dash = true;
      break;
    case "KeyB":
      playerDebug = !playerDebug;
      updateDebugVisibility();
      break;
    case "KeyP":
      exitPlayerMode();
      break;
  }
}

function handlePlayerKeyUp(e: KeyboardEvent): void {
  switch (e.code) {
    case "KeyW":
    case "KeyS":
      playerInput.moveZ = 0;
      break;
    case "KeyA":
    case "KeyD":
      playerInput.moveX = 0;
      break;
    case "Space":
      playerInput.jump = false;
      break;
    case "ShiftLeft":
    case "ShiftRight":
      playerInput.slide = false;
      break;
    case "KeyC":
      playerInput.crouch = false;
      break;
    case "KeyQ":
      playerInput.dash = false;
      break;
  }
}

function updatePlayer(dt: number): void {
  if (!isPlayerMode || !playerState) return;
  tickMovementTimers(playerState.ext, dt);
  const input = {
    moveX: playerInput.moveX,
    moveZ: playerInput.moveZ,
    jump: playerInput.jump,
    jumpHeld: playerInput.jump,
    hasSlideIntent: playerInput.slide,
    crouch: playerInput.crouch,
    dash: playerInput.dash,
    yaw: playerYaw,
    pitch: playerPitch,
  };
  stepPlayerMovement(playerState, input, dt, PLAYER_RADIUS, editorStaticWorld);

  // Fell through void (no prefab under): put back on nearest surface
  if (editorStaticWorld && playerState.y < -100) {
    const top = findTopSurfaceYAt(playerState.x, playerState.z) ?? findTopSurfaceYAt(0, 0) ?? 0;
    playerState.y = top;
    playerState.vy = 0;
    playerState.vx = 0;
    playerState.vz = 0;
    playerState.movementState = "grounded";
  }

  const crouching =
    playerState.movementState === "sliding" || playerInput.crouch;
  const eyeHeight = crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
  const eyeX = playerState.x;
  const eyeY = playerState.y + eyeHeight;
  const eyeZ = playerState.z;
  camera.position.set(eyeX, eyeY, eyeZ);
  // Same as client FPSCamera: Euler YXZ so look is 1:1 with mouse (no sinus)
  camera.rotation.order = "YXZ";
  camera.rotation.y = playerYaw;
  camera.rotation.x = playerPitch;
  camera.rotation.z = 0;
  camera.updateMatrixWorld();

  if (++_playerLogCount <= 5) {
    // #region agent log
    fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'023e93'},body:JSON.stringify({sessionId:'023e93',location:'editor main.ts:updatePlayer',message:'updatePlayer camera step',data:{eyeX,eyeY,eyeZ,yaw:playerYaw,pitch:playerPitch,movementState:playerState.movementState},hypothesisId:'H6',timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }

  // Update player HUD: ohne Pointer Lock Hinweis, sonst Slide/Dash
  if (document.pointerLockElement !== canvas) {
    playerHud.textContent = "Klicken zum Aktivieren der Maus";
  } else {
    const dashRem = playerState.ext.dashCooldownTimer;
    const slideLabel =
      playerState.movementState === "sliding" ? "Slide: aktiv" : "Shift: Slide";
    const dashLabel =
      dashRem > 0 ? `Dash: ${dashRem.toFixed(1)}s` : "Q: Dash bereit";
    playerHud.textContent = `${slideLabel} | ${dashLabel}`;
  }

  if (editorViewModelApi && playerState) {
    editorViewModelApi.updateViewmodelAnimation?.(dt);
    // Editor: do not call updateViewmodelFrame – no procedural sway/bob so camera is 1:1 with mouse (no sine feel).
    if (++_viewmodelLogCount <= 5) {
      // #region agent log
      const _isDashing = (playerState.ext.dashActiveTimer ?? 0) > 0;
      fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'023e93'},body:JSON.stringify({sessionId:'023e93',location:'editor main.ts:updatePlayer',message:'updatePlayer viewmodel step',data:{hasApi:!!editorViewModelApi,isDashing:_isDashing,velocity:{x:playerState.vx,y:playerState.vy,z:playerState.vz}},hypothesisId:'H7',timestamp:Date.now()})}).catch(()=>{});
      // #endregion
    }
  }
}

// Keyboard: switch prefab + rotation + tool mode + player controls
window.addEventListener("keydown", (e) => {
  if (isPlayerMode) {
    handlePlayerKeyDown(e);
    return;
  }
  if (e.code === "KeyP") {
    enterPlayerMode();
    return;
  }
  if (e.key === "PageUp") {
    e.preventDefault();
    placementHeightLevel += 1;
    updatePlacementHeightDisplay();
    updateInfo();
    saveEditorSettings();
    return;
  }
  if (e.key === "PageDown") {
    e.preventDefault();
    placementHeightLevel -= 1;
    updatePlacementHeightDisplay();
    updateInfo();
    saveEditorSettings();
    return;
  }
  if (e.key === "1") currentPrefab = "floor_4x4";
  else if (e.key === "2") currentPrefab = "floor_2x2";
  else if (e.key === "3") currentPrefab = "wall_2x4";
  else if (e.key === "4") currentPrefab = "wall_4x4";
  else if (e.key === "5") currentPrefab = "ramp_1x4";
  else if (e.key === "t" || e.key === "T") {
    currentTool = currentTool === "prefab" ? "spawn" : "prefab";
  } else if (e.key === "r" || e.key === "R") {
    currentRotationDeg = (currentRotationDeg + 90) % 360;
  }
  updatePrefabSelectionHighlight();
  updateInfo();
  saveEditorSettings();
});

window.addEventListener("keyup", (e) => {
  if (!isPlayerMode) return;
  handlePlayerKeyUp(e);
});

// Resize handling
window.addEventListener("resize", () => {
  const { w, h } = getCanvasSize();
  camera.aspect = w / h || 16 / 9;
  camera.updateProjectionMatrix();
  renderer.setSize(w, h);
});

function exportMapJSON(): MapData {
  const prefabs: MapPrefabPlacement[] = prefabInstances.map((p) => ({
    id: p.id,
    position: p.position,
    rotation: p.rotation,
  }));

  const spawnPoints: MapSpawnPoint[] = spawnPointsInternal
    .filter((sp) => sp.valid)
    .map((sp) => ({
      team: sp.team,
      position: [sp.position[0], sp.position[1], sp.position[2]],
      rotation: sp.rotation,
    }));

  return {
    version: 1,
    name: "editor_export",
    gridSize: GRID_SIZE,
    prefabs,
    spawnPoints,
  };
}

let lastFrameTime = performance.now();

function animate(time: number): void {
  const dt = (time - lastFrameTime) / 1000;
  lastFrameTime = time;
  const { w, h } = getCanvasSize();
  if (w > 0 && h > 0) {
    if (renderer.domElement.width !== w || renderer.domElement.height !== h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    if (currentTool === "prefab" && !isPlayerMode) {
      const pos = getSnappedPlacePosition(lastMouseNDC.x, lastMouseNDC.y, currentPrefab);
      if (pos) {
        if (ghostPreviewPrefabId !== currentPrefab || !ghostPreviewMesh) {
          if (ghostPreviewMesh) {
            ghostPreviewGroup.remove(ghostPreviewMesh);
            ghostPreviewMesh.geometry.dispose();
            (ghostPreviewMesh.material as THREE.Material).dispose();
          }
          ghostPreviewMesh = createGhostPreviewMesh(currentPrefab);
          ghostPreviewGroup.add(ghostPreviewMesh);
          ghostPreviewPrefabId = currentPrefab;
        }
        ghostPreviewMesh.visible = true;
        const ghostRampY = currentPrefab === "ramp_1x4" ? RAMP_VISUAL_BASE / 2 : 0;
        ghostPreviewMesh.position.set(pos.x, pos.centerY + ghostRampY, pos.z);
        ghostPreviewMesh.rotation.y = THREE.MathUtils.degToRad(currentRotationDeg);
      } else {
        if (ghostPreviewMesh) ghostPreviewMesh.visible = false;
      }
    } else {
      if (ghostPreviewMesh) ghostPreviewMesh.visible = false;
    }
    updatePlayer(dt);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

// Expose for toolbar / save button later
(window as unknown as { exportMapJSON: () => MapData }).exportMapJSON = exportMapJSON;
} // end runEditor
