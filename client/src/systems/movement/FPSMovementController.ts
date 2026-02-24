/**
 * FPS movement: state machine (grounded / sliding / airborne), sprint, jump, slide, slide jump.
 * Same snapshot interface as DummyMovementController for drop-in use.
 */

import type { Vec3 } from "shared";
import type { InputState } from "../input/InputState.js";
import { movementTuning } from "shared";
import { PLAYER_RADIUS } from "shared";
import { resolveArenaWalls, applyWallVelocitySlide } from "./arenaCollision.js";

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

/** Ground plane Y in world (1 unit = 1 meter). */
const GROUND_Y = 0;

export class FPSMovementController {
  position = { x: 0, y: GROUND_Y, z: 0 };
  velocity = { x: 0, y: 0, z: 0 };
  yaw = 0;
  pitch = 0;
  private state: MovementStateName = "grounded";
  private slideTime = 0;
  private coyoteTimer = 0;
  private jumpBufferTimer = 0;
  private crouching = false;
  /** Frames left where we can enter slide after pressing C (avoids missing slideJustPressed across ticks). */
  private slideIntentTicks = 0;
  /** C was pressed in air → enter slide on land without holding C. */
  private slideOnLand = false;

  update(dt: number, input: Readonly<InputState>, _physics: { raycast?: () => boolean }): void {
    const t = movementTuning;

    // Jump buffer & coyote
    if (input.jump) this.jumpBufferTimer = t.jumpBufferTime;
    if (this.state === "grounded") this.coyoteTimer = t.coyoteTime;
    else this.coyoteTimer -= dt;

    if (this.state === "sliding") {
      this.slideTime += dt;
      const hor = Math.hypot(this.velocity.x, this.velocity.z);
      this.velocity.x *= t.slideDecay;
      this.velocity.z *= t.slideDecay;
      this.velocity.y -= t.gravity * dt;
      this.velocity.y = Math.max(this.velocity.y, -t.maxFallSpeed);

      this.position.x += this.velocity.x * dt;
      this.position.z += this.velocity.z * dt;
      const nextY = this.position.y + this.velocity.y * dt;
      if (nextY <= GROUND_Y) {
        this.position.y = GROUND_Y;
        this.velocity.y = 0;
      } else {
        this.position.y = nextY;
      }
      const wall = resolveArenaWalls(this.position.x, this.position.z, PLAYER_RADIUS);
      this.position.x = wall.x;
      this.position.z = wall.z;
      applyWallVelocitySlide(this.velocity, wall);

      // Apex-style: slide runs for duration / until too slow; no need to hold C
      const stillSliding = hor >= t.slideMinSpeed && this.slideTime < t.slideDurationMax && this.position.y <= GROUND_Y + 0.01;
      if (this.jumpBufferTimer > 0 && stillSliding) {
        const mult = t.slideJumpMultiplier;
        this.velocity.y = t.jumpForce * mult;
        this.velocity.x *= mult;
        this.velocity.z *= mult;
        this.jumpBufferTimer = 0;
        this.state = "airborne";
      } else if (!stillSliding) {
        // #region agent log
        fetch("http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "485d75",
          },
          body: JSON.stringify({
            sessionId: "485d75",
            runId: "initial",
            hypothesisId: "H3",
            location: "FPSMovementController.ts:update",
            message: "slide_end",
            data: {
              slideTime: this.slideTime,
              hor,
              posY: this.position.y,
            },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
        // End slide: go to grounded (velocity kept → friction slows to stop; W = walk/crouch speed)
        if (this.position.y <= GROUND_Y + 0.01) this.state = "grounded";
        else this.state = "airborne";
      }
      this.yaw = input.yaw;
      this.pitch = input.pitch;
      this.crouching = true;
      return;
    }

    if (this.state === "airborne") {
      if (input.slideJustPressed) {
        this.slideOnLand = true;
        // #region agent log
        fetch("http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Debug-Session-Id": "485d75",
          },
          body: JSON.stringify({
            sessionId: "485d75",
            runId: "initial",
            hypothesisId: "H2",
            location: "FPSMovementController.ts:update",
            message: "slideOnLand_set",
            data: {
              velocity: { x: this.velocity.x, y: this.velocity.y, z: this.velocity.z },
            },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion
      }
      const cos = Math.cos(this.yaw);
      const sin = Math.sin(this.yaw);
      const axAir = (input.moveX * cos - input.moveZ * sin) * t.airAccel * dt * 0.3;
      const azAir = (-input.moveX * sin - input.moveZ * cos) * t.airAccel * dt * 0.3;
      this.velocity.x += axAir;
      this.velocity.z += azAir;
      const hor = Math.hypot(this.velocity.x, this.velocity.z);
      if (hor > t.airMaxSpeed) {
        this.velocity.x *= t.airMaxSpeed / hor;
        this.velocity.z *= t.airMaxSpeed / hor;
      }
      this.velocity.y -= t.gravity * dt;
      this.velocity.y = Math.max(this.velocity.y, -t.maxFallSpeed);

      this.position.x += this.velocity.x * dt;
      this.position.z += this.velocity.z * dt;
      const nextY = this.position.y + this.velocity.y * dt;
      if (nextY <= GROUND_Y) {
        this.position.y = GROUND_Y;
        this.velocity.y = 0;
        const horLand = Math.hypot(this.velocity.x, this.velocity.z);
        // Air slide: C pressed in air → slide on land (no need to hold C)
        if (this.slideOnLand && horLand >= t.slideEnterSpeed) {
          this.state = "sliding";
          this.slideTime = 0;
          this.crouching = true;
          const boost = Math.max(horLand, t.slideInitialSpeed);
          if (horLand > 0) {
            this.velocity.x = (this.velocity.x / horLand) * boost;
            this.velocity.z = (this.velocity.z / horLand) * boost;
          }
          // #region agent log
          fetch("http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-Debug-Session-Id": "485d75",
            },
            body: JSON.stringify({
              sessionId: "485d75",
              runId: "initial",
              hypothesisId: "H2",
              location: "FPSMovementController.ts:update",
              message: "enter_slide_air",
              data: {
                horLand,
              },
              timestamp: Date.now(),
            }),
          }).catch(() => {});
          // #endregion
        } else {
          this.state = "grounded";
        }
        this.slideOnLand = false;
      } else {
        this.position.y = nextY;
      }
      const wallAir = resolveArenaWalls(this.position.x, this.position.z, PLAYER_RADIUS);
      this.position.x = wallAir.x;
      this.position.z = wallAir.z;
      applyWallVelocitySlide(this.velocity, wallAir);
      this.yaw = input.yaw;
      this.pitch = input.pitch;
      this.jumpBufferTimer -= dt;
      this.crouching = this.state === "sliding";
      return;
    }

    // Slide intent: C pressed sets a short buffer so we don't miss slide entry across ticks; once in slide, no need to hold C
    if (input.slideJustPressed) this.slideIntentTicks = 8;
    const horSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    if (this.slideIntentTicks > 0 && input.sprint && horSpeed >= t.slideEnterSpeed) {
      this.slideIntentTicks = 0;
      this.state = "sliding";
      this.slideTime = 0;
      this.crouching = true;
      const hor = Math.hypot(this.velocity.x, this.velocity.z);
      const boost = Math.max(hor, t.slideInitialSpeed);
      if (hor > 0) {
        this.velocity.x = (this.velocity.x / hor) * boost;
        this.velocity.z = (this.velocity.z / hor) * boost;
      }
      // #region agent log
      fetch("http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Debug-Session-Id": "485d75",
        },
        body: JSON.stringify({
          sessionId: "485d75",
          runId: "initial",
          hypothesisId: "H1",
          location: "FPSMovementController.ts:update",
          message: "enter_slide_ground",
          data: {
            horSpeed,
            slideIntentTicks: this.slideIntentTicks,
          },
          timestamp: Date.now(),
        }),
      }).catch(() => {});
      // #endregion
      return;
    }
    if (this.slideIntentTicks > 0) this.slideIntentTicks--;

    // Sprint takes precedence so "Sprint: true" always means higher velocity. Else crouch or walk.
    const speed = input.sprint
      ? t.maxSpeedSprint
      : input.slide
        ? t.maxSpeedCrouch
        : t.maxSpeedWalk;
    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    // Higher accel when sprinting so equilibrium speed reaches maxSpeedSprint (same friction => need more accel to reach higher cap)
    const accel = input.sprint ? t.accel * (t.maxSpeedSprint / t.maxSpeedWalk) : t.accel;
    const ax = (input.moveX * cos - input.moveZ * sin) * accel * dt;
    const az = (-input.moveX * sin - input.moveZ * cos) * accel * dt;
    this.velocity.x += ax;
    this.velocity.z += az;
    this.velocity.x *= Math.max(0, 1 - t.friction * dt);
    this.velocity.z *= Math.max(0, 1 - t.friction * dt);
    const hor = Math.hypot(this.velocity.x, this.velocity.z);
    if (hor > speed) {
      this.velocity.x *= speed / hor;
      this.velocity.z *= speed / hor;
    }

    if (this.jumpBufferTimer > 0 || (input.jump && this.coyoteTimer > 0)) {
      this.velocity.y = t.jumpForce;
      this.state = "airborne";
      this.jumpBufferTimer = 0;
    } else {
      this.velocity.y -= t.gravity * dt;
      this.velocity.y = Math.max(this.velocity.y, -t.maxFallSpeed);
    }

    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;
    const nextY = this.position.y + this.velocity.y * dt;
    if (nextY <= GROUND_Y) {
      this.position.y = GROUND_Y;
      this.velocity.y = 0;
      this.state = "grounded";
    } else {
      this.position.y = nextY;
      this.state = "airborne";
    }
    const wallGnd = resolveArenaWalls(this.position.x, this.position.z, PLAYER_RADIUS);
    this.position.x = wallGnd.x;
    this.position.z = wallGnd.z;
    applyWallVelocitySlide(this.velocity, wallGnd);

    this.yaw = input.yaw;
    this.pitch = input.pitch;
    this.jumpBufferTimer -= dt;
    this.crouching = input.slide;
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
