/**
 * FPS movement: state machine (grounded / sliding / airborne), jump, slide, slide jump.
 * Uses shared stepPlayerMovement for deterministic physics. Adds coyote/jump-buffer for client feel.
 */

import type { Vec3 } from "shared";
import type { InputState } from "../input/InputState.js";
import { movementTuning, stepPlayerMovement, tickMovementTimers, PLAYER_RADIUS } from "shared";

export type MovementStateName = "grounded" | "sliding" | "airborne";

export interface MovementSnapshot {
  position: Vec3;
  velocity: Vec3;
  yaw: number;
  pitch: number;
  grounded: boolean;
  state: MovementStateName;
  /** True when crouch-walking (grounded + C) or sliding. */
  crouching: boolean;
}

const GROUND_Y = 0;

export class FPSMovementController {
  position = { x: 0, y: GROUND_Y, z: 0 };
  velocity = { x: 0, y: 0, z: 0 };
  yaw = 0;
  pitch = 0;
  private state: MovementStateName = "grounded";
  private crouching = false;
  private coyoteTimer = 0;
  private jumpBufferTimer = 0;
  private ext = {
    slideTime: 0,
    slideEnterCooldownTimer: 0,
    slideJumpCooldownTimer: 0,
    slideOnLand: false,
    horSpeedWhenJumped: 0,
    lastApproachVx: 0,
    lastApproachVz: 0,
    lastJumpHeld: false,
    lastHasSlideIntent: false,
  };

  update(dt: number, input: Readonly<InputState>, _physics: { raycast?: () => boolean }): void {
    const t = movementTuning;

    if (input.jump) this.jumpBufferTimer = t.jumpBufferTime;
    if (this.state === "grounded") this.coyoteTimer = t.coyoteTime;
    else this.coyoteTimer -= dt;

    tickMovementTimers(this.ext, dt);

    const hasSlideIntent = input.slide || input.slideIntentTicks > 0;
    const effectiveJump = this.jumpBufferTimer > 0 || (input.jump && this.coyoteTimer > 0);

    const movementInput = {
      moveX: input.moveX,
      moveZ: input.moveZ,
      jump: effectiveJump,
      jumpHeld: input.jump,
      hasSlideIntent,
      crouch: input.crouch,
      yaw: input.yaw,
      pitch: input.pitch,
    };
    const movementState = {
      x: this.position.x,
      y: this.position.y,
      z: this.position.z,
      vx: this.velocity.x,
      vy: this.velocity.y,
      vz: this.velocity.z,
      movementState: this.state,
      ext: this.ext,
    };

    stepPlayerMovement(movementState, movementInput, dt, PLAYER_RADIUS);

    this.position.x = movementState.x;
    this.position.y = movementState.y;
    this.position.z = movementState.z;
    this.velocity.x = movementState.vx;
    this.velocity.y = movementState.vy;
    this.velocity.z = movementState.vz;
    this.state = movementState.movementState;
    this.yaw = input.yaw;
    this.pitch = input.pitch;

    if (effectiveJump && this.state === "airborne") {
      this.jumpBufferTimer = 0;
    }
    if (this.state === "airborne") {
      this.jumpBufferTimer -= dt;
    }

    this.crouching =
      this.state === "sliding" || (this.state === "grounded" && input.crouch);
  }

  getSnapshot(): MovementSnapshot {
    return {
      position: { ...this.position },
      velocity: { ...this.velocity },
      yaw: this.yaw,
      pitch: this.pitch,
      grounded: this.state === "grounded",
      state: this.state,
      crouching: this.crouching,
    };
  }
}
