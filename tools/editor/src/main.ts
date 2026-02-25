/**
 * Map editor stub: canvas, grid placeholder, export Map-JSON.
 */

import * as THREE from "three";
import type { MapData } from "shared";

const app = document.getElementById("app");
if (!app) throw new Error("No #app");

const canvas = document.createElement("canvas");
app.appendChild(canvas);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x2a2a35);
const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(10, 10, 10);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(canvas.clientWidth, canvas.clientHeight);

// Simple lighting
const ambient = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambient);
const dir = new THREE.DirectionalLight(0xffffff, 0.9);
dir.position.set(10, 15, 10);
scene.add(dir);

// Floor: light grey like reference, with grid
const floorGeo = new THREE.PlaneGeometry(20, 20);
const floorMat = new THREE.MeshStandardMaterial({ color: 0xd8d8dc });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);
const gridHelper = new THREE.GridHelper(20, 20, 0x8a8a94, 0xa8a8b0);
gridHelper.position.y = 0.001;
scene.add(gridHelper);

// Walls: white-grey, no tiling
const wallMat = new THREE.MeshStandardMaterial({ color: 0xe8e8ec });
const wallGeo = new THREE.BoxGeometry(20, 4, 0.3);
for (const [x, z] of [[0, 10], [0, -10], [10, 0], [-10, 0]]) {
  const wall = new THREE.Mesh(wallGeo, wallMat);
  wall.position.set(x, 2, z);
  if (z === 0) wall.rotation.y = Math.PI / 2;
  scene.add(wall);
}

// Stub: one prefab type
const prefabs: { id: string; position: [number, number, number]; rotation: number }[] = [];

function addPrefab(id: string, x: number, y: number, z: number): void {
  prefabs.push({ id, position: [x, y, z], rotation: 0 });
  const box = new THREE.Mesh(
    new THREE.BoxGeometry(1, 0.2, 1),
    new THREE.MeshBasicMaterial({ color: 0x4488ff })
  );
  box.position.set(x, y, z);
  box.userData = { prefabId: id };
  scene.add(box);
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2(x, y);
  raycaster.setFromCamera(mouse, camera);
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
  const target = new THREE.Vector3();
  raycaster.ray.intersectPlane(ground, target);
  addPrefab("floor_1x1", Math.round(target.x), 0, Math.round(target.z));
});

function exportMapJSON(): MapData {
  return {
    version: 1,
    name: "editor_export",
    gridSize: 1,
    prefabs: prefabs.map((p) => ({ id: p.id, position: p.position, rotation: p.rotation })),
    spawnPoints: [],
  };
}

function animate(): void {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Expose for toolbar / save button later
(window as unknown as { exportMapJSON: () => MapData }).exportMapJSON = exportMapJSON;
