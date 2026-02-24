/**
 * Load map JSON and instantiate placeholder meshes + colliders. Stub returns minimal arena.
 */

import type { MapData } from "shared";
import * as THREE from "three";

export function loadMapFromJSON(_data: MapData): { group: THREE.Group } {
  const group = new THREE.Group();
  // Stub: no prefab loading yet; client uses built-in test arena in SceneManager
  return { group };
}

export async function loadMapFromURL(url: string): Promise<{ group: THREE.Group }> {
  const res = await fetch(url);
  const data: MapData = await res.json();
  return loadMapFromJSON(data);
}
