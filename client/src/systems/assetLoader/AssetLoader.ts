/**
 * Asset loader: load GLB/GLTF via Three.js. Placeholder fallback if URL empty or load fails.
 */

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const gltfLoader = new GLTFLoader();
const textureLoader = new THREE.TextureLoader();

export async function loadGLB(url: string): Promise<THREE.Group> {
  const gltf = await gltfLoader.loadAsync(url);
  return gltf.scene;
}

/** Placeholder in human scale: 1 unit = 1 m, box 0.5×1.8×0.5 (W×H×D). */
export function createPlaceholderMesh(): THREE.Mesh {
  const geo = new THREE.BoxGeometry(0.5, 1.8, 0.5);
  const mat = new THREE.MeshStandardMaterial({ color: 0x8888ff });
  return new THREE.Mesh(geo, mat);
}

/** Load player model (FPS view). Returns Group or Mesh; use placeholder if url empty or load fails. */
export async function loadPlayerModel(url: string): Promise<THREE.Object3D> {
  if (!url.trim()) return createPlaceholderMesh();
  try {
    return await loadGLB(url);
  } catch {
    return createPlaceholderMesh();
  }
}

export interface ModelLoadResult {
  scene: THREE.Object3D;
  animations: THREE.AnimationClip[];
}

/** Load player model with animations (for bone-anchored hitbox when player.glb differs from dummy.glb). */
export async function loadPlayerModelWithAnimations(
  url: string
): Promise<ModelLoadResult> {
  if (!url.trim()) {
    return { scene: createPlaceholderMesh(), animations: [] };
  }
  try {
    const gltf = await gltfLoader.loadAsync(url);
    return {
      scene: gltf.scene,
      animations: gltf.animations ?? [],
    };
  } catch {
    return { scene: createPlaceholderMesh(), animations: [] };
  }
}

/** Load viewmodel arms (FPS POV). Returns scene + animations. Use placeholder if url empty or load fails. */
export async function loadViewmodelWithAnimations(
  url: string
): Promise<ModelLoadResult> {
  if (!url.trim()) {
    if (import.meta.env?.DEV) console.warn("[Viewmodel] No viewmodelArmsUrl configured");
    return { scene: createPlaceholderMesh(), animations: [] };
  }
  try {
    const gltf = await gltfLoader.loadAsync(url);
    const anims = gltf.animations ?? [];
    if (import.meta.env?.DEV) {
      console.info(
        "[Viewmodel] Loaded",
        url,
        "| meshes:",
        countMeshes(gltf.scene),
        "| animations:",
        anims.length
      );
    }
    return {
      scene: gltf.scene,
      animations: anims,
    };
  } catch (err) {
    if (import.meta.env?.DEV) {
      console.error("[Viewmodel] Failed to load", url, err);
    }
    return { scene: createPlaceholderMesh(), animations: [] };
  }
}

function countMeshes(obj: THREE.Object3D): number {
  let n = 0;
  obj.traverse((o) => {
    if ((o as THREE.Mesh).isMesh) n++;
  });
  return n;
}

/** Load viewmodel weapon GLB. Returns scene or null if empty URL or load fails. */
export async function loadViewmodelWeapon(url: string): Promise<THREE.Object3D | null> {
  if (!url.trim()) return null;
  try {
    const gltf = await gltfLoader.loadAsync(url);
    if (import.meta.env?.DEV) {
      console.info("[Viewmodel] Loaded weapon", url, "| meshes:", countMeshes(gltf.scene));
    }
    return gltf.scene;
  } catch (err) {
    if (import.meta.env?.DEV) {
      console.warn("[Viewmodel] Failed to load weapon", url, err);
    }
    return null;
  }
}

export interface DummyLoadResult {
  scene: THREE.Object3D;
  animations: THREE.AnimationClip[];
}

/** Load dummy model with animations (e.g. for Idle). Clone scene per instance; use animations with AnimationMixer. */
export async function loadDummyModel(url: string): Promise<DummyLoadResult> {
  if (!url.trim()) {
    return { scene: createPlaceholderMesh(), animations: [] };
  }
  try {
    const gltf = await gltfLoader.loadAsync(url);
    return {
      scene: gltf.scene,
      animations: gltf.animations ?? [],
    };
  } catch {
    return { scene: createPlaceholderMesh(), animations: [] };
  }
}

const SKINS_BASE = "/models/skins";

const skinTextureCache = new Map<string, THREE.Texture>();

/** Simple seeded random for deterministic variant generation. */
function mulberry32(seed: number): () => number {
  return () => {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const MUZZLE_FLASH_VARIANT_COUNT = 10;

/** Content radius (0–1 of half-size). Same visual size as original. 512 texture = room for soft edges. */
const MUZZLE_FLASH_CONTENT_RADIUS = 0.65;
/** Edge fade starts here (0–1). Soft transparent border before texture edge. */
const MUZZLE_FLASH_EDGE_FADE_START = 0.55;

/** Create procedural muzzle flash – warm, fire-like, noisy. Large texture keeps content size + soft edges. */
function createMuzzleFlashFallbackTexture(variant: number): THREE.Texture {
  const size = 512;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const center = size / 2;
  const maxR = center * MUZZLE_FLASH_CONTENT_RADIUS;
  const rng = mulberry32(variant * 12345 + 1);

  ctx.clearRect(0, 0, size, size);

  const isRoundVariant = variant % 5 === 3;
  const numSpikes = isRoundVariant ? 3 : 3 + (variant % 4);
  const baseAngle = (variant * 0.37) * Math.PI;
  const angleVariance = isRoundVariant ? 1.4 : 0.9;
  const lenBase = isRoundVariant ? 0.35 : 0.2;
  const lenRange = isRoundVariant ? 0.4 : 0.35;
  const coreScale = isRoundVariant ? 0.75 : 1;

  for (let i = 0; i < numSpikes; i++) {
    const evenPart = isRoundVariant ? (i * 2.1 + rng() * 0.5) / numSpikes : i / numSpikes;
    const angle = baseAngle + evenPart * Math.PI * 2 + (rng() - 0.5) * angleVariance;
    const len = (lenBase + rng() * lenRange) * MUZZLE_FLASH_CONTENT_RADIUS;
    const width = (0.1 + rng() * 0.18) * MUZZLE_FLASH_CONTENT_RADIUS;
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(angle);
    const grad = ctx.createLinearGradient(0, 0, len * size, 0);
    grad.addColorStop(0, "rgba(255,130,45,0.78)");
    grad.addColorStop(0.1, "rgba(255,105,35,0.74)");
    grad.addColorStop(0.28, "rgba(240,80,25,0.5)");
    grad.addColorStop(0.48, "rgba(210,60,15,0.24)");
    grad.addColorStop(0.68, "rgba(175,50,10,0.08)");
    grad.addColorStop(0.88, "rgba(140,35,6,0.02)");
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.ellipse(0, 0, len * size, width * size, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  const coreR = maxR * coreScale;
  const coreGrad = ctx.createRadialGradient(
    center,
    center,
    0,
    center,
    center,
    coreR
  );
  coreGrad.addColorStop(0, "rgba(255,135,45,0.94)");
  coreGrad.addColorStop(0.18, "rgba(255,110,35,0.84)");
  coreGrad.addColorStop(0.42, "rgba(245,85,25,0.55)");
  coreGrad.addColorStop(0.65, "rgba(210,60,18,0.22)");
  coreGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(center, center, coreR, 0, Math.PI * 2);
  ctx.fill();

  const imageData = ctx.getImageData(0, 0, size, size);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = (y * size + x) * 4;
      const dx = (x - center) / center;
      const dy = (y - center) / center;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const edgeFade =
        dist < MUZZLE_FLASH_EDGE_FADE_START
          ? 1
          : Math.max(0, 1 - (dist - MUZZLE_FLASH_EDGE_FADE_START) / 0.2);
      const a = imageData.data[i + 3];
      if (a > 2) {
        const edgeFactor = 1 + (1 - a / 255) * 1.5;
        const noise = (rng() - 0.5) * 50 * edgeFactor;
        imageData.data[i] = Math.max(0, Math.min(255, imageData.data[i] + noise));
        imageData.data[i + 1] = Math.max(0, Math.min(255, imageData.data[i + 1] + noise * 0.5));
        imageData.data[i + 2] = Math.max(0, Math.min(255, imageData.data[i + 2] + noise * 0.12));
        imageData.data[i + 3] = Math.round(imageData.data[i + 3] * edgeFade);
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/** Load muzzle flash textures. Falls back to procedural texture if URLs fail. Cached. */
export async function loadMuzzleFlashTextures(
  urls: string[]
): Promise<THREE.Texture[]> {
  if (urls.length === 0) {
    return Array.from({ length: MUZZLE_FLASH_VARIANT_COUNT }, (_, i) =>
      createMuzzleFlashFallbackTexture(i)
    );
  }
  const loaded: THREE.Texture[] = [];
  for (const url of urls) {
    try {
      const tex = await textureLoader.loadAsync(url);
      tex.flipY = false;
      loaded.push(tex);
    } catch (err) {
      if (import.meta.env?.DEV) {
        console.warn("[MuzzleFlash] Failed to load", url, err);
      }
    }
  }
  if (loaded.length === 0) {
    if (import.meta.env?.DEV) {
      console.info(
        `[MuzzleFlash] Using procedural fallback textures (${MUZZLE_FLASH_VARIANT_COUNT} variants)`
      );
    }
    return Array.from({ length: MUZZLE_FLASH_VARIANT_COUNT }, (_, i) =>
      createMuzzleFlashFallbackTexture(i)
    );
  }
  return loaded;
}

/** Load skin texture from /models/skins/{id}.png. Returns null if load fails (use embedded). Caches by skinId. */
export async function loadSkinTexture(skinId: string): Promise<THREE.Texture | null> {
  if (!skinId) return null;
  const cached = skinTextureCache.get(skinId);
  if (cached) return cached;
  try {
    const texture = await textureLoader.loadAsync(`${SKINS_BASE}/${skinId}.png`);
    texture.flipY = false;
    skinTextureCache.set(skinId, texture);
    return texture;
  } catch {
    return null;
  }
}

/** Load skin and apply to model. Returns true if applied, false if load failed. */
export async function setModelSkin(model: THREE.Object3D, skinId: string): Promise<boolean> {
  const tex = await loadSkinTexture(skinId);
  if (!tex) return false;
  applySkinToModel(model, tex);
  return true;
}

/** Replace base color texture on all meshes. Clones materials so each instance can have its own skin. */
export function applySkinToModel(model: THREE.Object3D, skinTexture: THREE.Texture): void {
  model.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh) return;
    const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    const cloned: THREE.Material[] = [];
    for (const mat of materials) {
      const m = mat as THREE.MeshStandardMaterial;
      if (!m) continue;
      const clone = m.clone();
      clone.map = skinTexture;
      cloned.push(clone);
    }
    if (cloned.length === 1) mesh.material = cloned[0];
    else if (cloned.length > 1) mesh.material = cloned;
  });
}
