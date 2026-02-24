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

/** Load GLB and return scene + animation clips (for mixer). */
export async function loadGLBWithAnimations(url: string): Promise<{ scene: THREE.Group; animations: THREE.AnimationClip[] }> {
  const gltf = await gltfLoader.loadAsync(url);
  return { scene: gltf.scene, animations: gltf.animations ?? [] };
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

/** Load dummy model; clone result for each dummy instance. */
export async function loadDummyModel(url: string): Promise<THREE.Object3D> {
  if (!url.trim()) return createPlaceholderMesh();
  try {
    return await loadGLB(url);
  } catch {
    return createPlaceholderMesh();
  }
}

/** Load dummy mesh from modelUrl; if animationUrl set, load clips from that GLB (same rig recommended). */
export async function loadDummyWithAnimation(
  modelUrl: string,
  animationUrl: string
): Promise<{ scene: THREE.Object3D; animations: THREE.AnimationClip[] }> {
  const scene = await loadDummyModel(modelUrl);
  if (!animationUrl.trim()) return { scene, animations: [] };
  try {
    const { animations } = await loadGLBWithAnimations(animationUrl);
    return { scene, animations };
  } catch {
    return { scene, animations: [] };
  }
}
