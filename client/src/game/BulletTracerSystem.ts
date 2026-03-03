import * as THREE from "three";

export interface BulletTracerConfig {
  maxTracers: number;
  lifetimeMs: number;
  color: number;
  everyNthShot: number;
  /** Radius of tracer cylinder in world units (thickness). */
  lineRadius?: number;
}

interface TracerInstance {
  mesh: THREE.Mesh;
  material: THREE.MeshBasicMaterial;
  start: THREE.Vector3;
  dir: THREE.Vector3;
  fullLength: number;
  active: boolean;
  remainingMs: number;
}

const DEFAULT_LINE_RADIUS = 0.01;

const Y_UP = new THREE.Vector3(0, 1, 0);
const _quat = new THREE.Quaternion();

export class BulletTracerSystem {
  private tracers: TracerInstance[] = [];
  private enabled = true;
  private shotCounter = 0;
  private readonly config: BulletTracerConfig;
  private readonly lineRadius: number;
  private lastTracer: TracerInstance | null = null;

  constructor(scene: THREE.Scene, config: BulletTracerConfig) {
    this.config = config;
    this.lineRadius = Math.max(0.001, config.lineRadius ?? DEFAULT_LINE_RADIUS);

    const count = Math.max(1, config.maxTracers | 0);
    const geometry = new THREE.CylinderGeometry(1, 1, 1, 6);
    for (let i = 0; i < count; i++) {
      const material = new THREE.MeshBasicMaterial({
        color: config.color,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.visible = false;
      scene.add(mesh);
      this.tracers.push({
        mesh,
        material,
        start: new THREE.Vector3(),
        dir: new THREE.Vector3(0, 0, 1),
        fullLength: 0,
        active: false,
        remainingMs: 0,
      });
    }
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) {
      for (const t of this.tracers) {
        t.active = false;
        t.remainingMs = 0;
        t.mesh.visible = false;
      }
    }
  }

  /**
   * Spawn a tracer from start along direction with given distance.
   * Accepts either THREE.Vector3 or plain { x, y, z } for start/direction.
   */
  private setTracerMesh(t: TracerInstance, length: number): void {
    const r = this.lineRadius;
    t.mesh.position.copy(t.start).addScaledVector(t.dir, length * 0.5);
    t.mesh.scale.set(r * 2, length, r * 2);
    t.mesh.quaternion.setFromUnitVectors(Y_UP, t.dir);
    t.mesh.visible = true;
  }

  spawnTracer(
    start: THREE.Vector3 | { x: number; y: number; z: number },
    direction: THREE.Vector3 | { x: number; y: number; z: number },
    distance: number
  ): void {
    if (!this.enabled) return;
    const nth = this.config.everyNthShot;
    this.shotCounter++;
    if (nth > 1 && this.shotCounter % nth !== 0) return;

    const dirVec =
      direction instanceof THREE.Vector3
        ? direction.clone()
        : new THREE.Vector3(direction.x, direction.y, direction.z);
    const dirLen = dirVec.length();
    if (dirLen === 0 || distance <= 0) return;

    const startVec =
      start instanceof THREE.Vector3
        ? start.clone()
        : new THREE.Vector3(start.x, start.y, start.z);

    const dir = dirVec.normalize();
    let tracer: TracerInstance | undefined = this.tracers.find((t) => !t.active);
    if (!tracer) {
      tracer = this.tracers[0];
    }

    tracer.start.copy(startVec);
    tracer.dir.copy(dir);
    tracer.fullLength = distance;
    tracer.active = true;
    tracer.remainingMs = this.config.lifetimeMs;
    this.setTracerMesh(tracer, distance);
    tracer.material.opacity = 0.8;
    this.lastTracer = tracer;
  }

  /**
   * Retarget the most recently spawned tracer (e.g. once the authoritative
   * hit point from the server arrives) so that it ends genau am Impact.
   */
  retargetLast(
    start: THREE.Vector3 | { x: number; y: number; z: number },
    direction: THREE.Vector3 | { x: number; y: number; z: number },
    distance: number
  ): void {
    if (!this.enabled) return;
    const tracer = this.lastTracer;
    if (!tracer || !tracer.active) return;
    const dirVec =
      direction instanceof THREE.Vector3
        ? direction.clone()
        : new THREE.Vector3(direction.x, direction.y, direction.z);
    const dirLen = dirVec.length();
    if (dirLen === 0 || distance <= 0) return;
    const startVec =
      start instanceof THREE.Vector3
        ? start.clone()
        : new THREE.Vector3(start.x, start.y, start.z);
    tracer.start.copy(startVec);
    tracer.dir.copy(dirVec.normalize());
    tracer.fullLength = distance;
    tracer.remainingMs = Math.max(tracer.remainingMs, this.config.lifetimeMs * 0.4);
    this.setTracerMesh(tracer, distance);
  }

  update(dtMs: number): void {
    if (!this.enabled) return;
    for (const t of this.tracers) {
      if (!t.active) continue;
      t.remainingMs -= dtMs;
      const lifeT = Math.max(0, t.remainingMs) / this.config.lifetimeMs;
      const currentLength = t.fullLength * lifeT;
      this.setTracerMesh(t, currentLength);
      // Helles Start‑Highlight, dann schneller Fade und weiches Ausblenden.
      const eased = lifeT * lifeT; // ease-out: viel Helligkeit am Anfang, dann schnell weniger
      t.material.opacity = 0.8 * eased;
      if (t.remainingMs <= 0) {
        t.active = false;
        t.mesh.visible = false;
      }
    }
  }
}


