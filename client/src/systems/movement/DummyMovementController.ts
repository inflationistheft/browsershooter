/**
 * Dummy movement: WASD + jump, no prediction. Replaced by full state machine later.
 */

import type { Vec3 } from "shared";
import type { InputState } from "../input/InputState.js";
import { movementTuning } from "shared";

export interface MovementSnapshot {
  position: Vec3;
  velocity: Vec3;
  yaw: number;
  pitch: number;
  grounded: boolean;
}

export class DummyMovementController {
  position = { x: 0, y: 2, z: 0 };
  velocity = { x: 0, y: 0, z: 0 };
  yaw = 0;
  pitch = 0;
  grounded = true;

  update(dt: number, input: Readonly<InputState>, _physics: { raycast?: () => boolean }): void {
    const { accel, maxSpeedSprint, maxSpeedWalk, friction, gravity, jumpForce } = movementTuning;
    const speed = input.sprint ? maxSpeedSprint : maxSpeedWalk;

    const moveX = input.moveX * accel * dt;
    const moveZ = input.moveZ * accel * dt;
    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    const ax = (moveX * cos - moveZ * sin) * (this.grounded ? 1 : 0.3);
    const az = (moveX * sin + moveZ * cos) * (this.grounded ? 1 : 0.3);

    this.velocity.x += ax;
    this.velocity.z += az;
    if (this.grounded) {
      this.velocity.x *= Math.max(0, 1 - friction * dt);
      this.velocity.z *= Math.max(0, 1 - friction * dt);
    }
    const hor = Math.hypot(this.velocity.x, this.velocity.z);
    if (hor > speed) {
      const s = speed / hor;
      this.velocity.x *= s;
      this.velocity.z *= s;
    }

    this.velocity.y -= gravity * dt;
    if (input.jump && this.grounded) {
      this.velocity.y = jumpForce;
      this.grounded = false;
    }
    this.velocity.y = Math.max(this.velocity.y, -movementTuning.maxFallSpeed);

    this.position.x += this.velocity.x * dt;
    this.position.y += this.velocity.y * dt;
    this.position.z += this.velocity.z * dt;

    if (this.position.y <= 2) {
      this.position.y = 2;
      this.velocity.y = 0;
      this.grounded = true;
    }

    this.yaw = input.yaw;
    this.pitch = input.pitch;
  }

  getSnapshot(): MovementSnapshot {
    return {
      position: { ...this.position },
      velocity: { ...this.velocity },
      yaw: this.yaw,
      pitch: this.pitch,
      grounded: this.grounded,
    };
  }
}
