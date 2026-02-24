/**
 * Asset loader: load GLB/GLTF via Three.js. Placeholder fallback if URL empty or load fails.
 */

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const gltfLoader = new GLTFLoader();

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
