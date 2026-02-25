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

/** Load skin texture from /models/skins/{id}.png. Returns null if load fails (use embedded). */
export async function loadSkinTexture(skinId: string): Promise<THREE.Texture | null> {
  if (!skinId) return null;
  try {
    const texture = await textureLoader.loadAsync(`${SKINS_BASE}/${skinId}.png`);
    texture.flipY = false;
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
      if (!m?.map) continue;
      const clone = m.clone();
      clone.map = skinTexture;
      cloned.push(clone);
    }
    if (cloned.length === 1) mesh.material = cloned[0];
    else if (cloned.length > 1) mesh.material = cloned;
  });
}
