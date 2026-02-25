/**
 * Three.js scene, renderer, basic lighting. Test arena geometry.
 */

import * as THREE from "three";

export class SceneManager {
  readonly scene = new THREE.Scene();
  readonly renderer: THREE.WebGLRenderer;
  private readonly floor: THREE.Mesh;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h);
    this.renderer.setClearColor(0x2a2a35);

    this.scene.background = new THREE.Color(0x2a2a35);
    const ambient = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.9);
    dir.position.set(10, 20, 10);
    this.scene.add(dir);

    const floorGeo = new THREE.PlaneGeometry(40, 40);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xd8d8dc });
    this.floor = new THREE.Mesh(floorGeo, floorMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.scene.add(this.floor);
    const gridHelper = new THREE.GridHelper(40, 40, 0x8a8a94, 0xa8a8b0);
    gridHelper.position.y = 0.001;
    this.scene.add(gridHelper);

    // Simple walls (test arena)
    const wallGeo = new THREE.BoxGeometry(40, 4, 0.5);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xd8d8dc });
    for (const [x, z] of [[0, 20], [0, -20], [20, 0], [-20, 0]]) {
      const w = new THREE.Mesh(wallGeo, wallMat);
      w.position.set(x, 2, z);
      if (z === 0) w.rotation.y = Math.PI / 2;
      this.scene.add(w);
    }
  }

  render(camera: THREE.Camera): void {
    this.renderer.render(this.scene, camera);
  }

  resize(width: number, height: number): void {
    this.renderer.setSize(width, height);
  }

  getScene(): THREE.Scene {
    return this.scene;
  }
}
