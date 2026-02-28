/**
 * Three.js scene, renderer, basic lighting. Test arena geometry.
 */

import * as THREE from "three";
import { ARENA_SIZE, ARENA_HALF } from "shared";

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
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    this.scene.add(ambient);
    const hemisphere = new THREE.HemisphereLight(0x2d1b4e, 0x0d0d1a, 0.35);
    this.scene.add(hemisphere);
    const dir = new THREE.DirectionalLight(0xffffff, 0.85);
    dir.position.set(12, 25, 12);
    this.scene.add(dir);

    const floorGeo = new THREE.PlaneGeometry(ARENA_SIZE, ARENA_SIZE);
    const floorMat = new THREE.MeshStandardMaterial({ color: 0xd8d8dc });
    this.floor = new THREE.Mesh(floorGeo, floorMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.scene.add(this.floor);
    const gridHelper = new THREE.GridHelper(ARENA_SIZE, ARENA_SIZE, 0x8a8a94, 0xa8a8b0);
    gridHelper.position.y = 0.001;
    this.scene.add(gridHelper);

    // Simple walls (test arena) – positions from shared arena
    const wallGeo = new THREE.BoxGeometry(ARENA_SIZE, 4, 0.5);
    const wallMat = new THREE.MeshStandardMaterial({ color: 0xd8d8dc });
    for (const [x, z] of [[0, ARENA_HALF], [0, -ARENA_HALF], [ARENA_HALF, 0], [-ARENA_HALF, 0]]) {
      const w = new THREE.Mesh(wallGeo, wallMat);
      w.position.set(x, 2, z);
      if (z === 0) w.rotation.y = Math.PI / 2;
      this.scene.add(w);
    }

    this.scene.add(this.createProceduralSkybox());
  }

  private createProceduralSkybox(): THREE.Mesh {
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
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }
      `,
      side: THREE.BackSide,
      depthWrite: false,
    });
    const skybox = new THREE.Mesh(geometry, material);
    skybox.frustumCulled = false;
    return skybox;
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
