/**
 * FPS camera: follows target position and applies yaw/pitch.
 */

import * as THREE from "three";

export class FPSCamera {
  readonly camera: THREE.PerspectiveCamera;
  private targetPosition = new THREE.Vector3(0, 0, 0);
  private yaw = 0;
  private pitch = 0;
  private smooth = 0.15;

  constructor(fov = 75, aspect = 16 / 9, near = 0.1, far = 1000) {
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  }

  setTargetPosition(x: number, y: number, z: number): void {
    this.targetPosition.set(x, y, z);
  }

  setRotation(yaw: number, pitch: number): void {
    this.yaw = yaw;
    this.pitch = pitch;
  }

  update(dt: number): void {
    this.camera.position.x = THREE.MathUtils.lerp(
      this.camera.position.x,
      this.targetPosition.x,
      1 - Math.exp(-this.smooth * 60 * dt)
    );
    this.camera.position.z = THREE.MathUtils.lerp(
      this.camera.position.z,
      this.targetPosition.z,
      1 - Math.exp(-this.smooth * 60 * dt)
    );
    this.camera.position.y = this.targetPosition.y;
    this.camera.rotation.order = "YXZ";
    this.camera.rotation.y = this.yaw;
    this.camera.rotation.x = this.pitch;
    this.camera.rotation.z = 0;
    this.camera.updateMatrixWorld();
  }

  getCamera(): THREE.PerspectiveCamera {
    return this.camera;
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }
}
