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
  /** C was pressed in air → enter slide on land without holding C. */
  private slideOnLand = false;
  /** Time spent sprinting (ground only); must exceed slideEnterMinSprintTime before ground slide. */
  private sprintWarmupTime = 0;
  /** Grace after releasing Shift – can still enter slide while speed remains high. */
  private sprintReleaseGrace = 0;
  /** Seconds left before slide jump can be used again. */
  private slideJumpCooldownTimer = 0;
  /** Seconds left before entering a new slide (prevents infinite re-entry while holding C). */
  private slideEnterCooldownTimer = 0;
  /** Max horizontal speed in air (preserved from jump; no gain in air). */
  private horSpeedWhenJumped = 0;
  private _debugFrame = 0;

  update(dt: number, input: Readonly<InputState>, _physics: { raycast?: () => boolean }): void {
    const t = movementTuning;

    // Jump buffer & coyote
    if (input.jump) this.jumpBufferTimer = t.jumpBufferTime;
    if (this.state === "grounded") this.coyoteTimer = t.coyoteTime;
    else this.coyoteTimer -= dt;
    if (this.slideJumpCooldownTimer > 0) this.slideJumpCooldownTimer -= dt;
    if (this.slideEnterCooldownTimer > 0) this.slideEnterCooldownTimer -= dt;

    if (this.state === "sliding") {
      this._debugFrame++;
      if (this._debugFrame % 30 === 1) {
        // #region agent log
        fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0b0c37'},body:JSON.stringify({sessionId:'0b0c37',location:'FPSMovementController.ts:sliding',message:'During slide',data:{inputSlide:input.slide,hor:Math.hypot(this.velocity.x,this.velocity.z),slideTime:this.slideTime},hypothesisId:'B',timestamp:Date.now()})}).catch(()=>{});
        // #endregion
      }
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

      // Cancel slide if player presses movement in different direction (e.g. slide left, press W/S/D)
      const cos = Math.cos(this.yaw);
      const sin = Math.sin(this.yaw);
      const inputWorldX = input.moveX * cos - input.moveZ * sin;
      const inputWorldZ = -input.moveX * sin - input.moveZ * cos;
      const inputMag = Math.hypot(inputWorldX, inputWorldZ);
      const inputCancelsSlide =
        inputMag > 0.1 &&
        hor > 0.1 &&
        (inputWorldX * this.velocity.x + inputWorldZ * this.velocity.z) / (inputMag * hor) < 0.5;
      if (inputCancelsSlide) {
        // #region agent log
        fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0b0c37'},body:JSON.stringify({sessionId:'0b0c37',location:'FPSMovementController.ts:inputCancelsSlide',message:'Slide exit: inputCancelsSlide',data:{inputSlide:input.slide,hor,slideTime:this.slideTime},hypothesisId:'E',timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        this.state = "grounded";
        this.slideEnterCooldownTimer = t.slideEnterCooldown;
        this.yaw = input.yaw;
        this.pitch = input.pitch;
        this.crouching = false;
        return;
      }

      // Apex-style: slide runs for duration / until too slow; no need to hold C
      const stillSliding = hor >= t.slideMinSpeed && this.slideTime < t.slideDurationMax && this.position.y <= GROUND_Y + 0.01;
      const canSlideJump = this.slideJumpCooldownTimer <= 0;
      if (this.jumpBufferTimer > 0 && stillSliding && canSlideJump) {
        const mult = t.slideJumpMultiplier;
        this.velocity.y = t.jumpForce * mult;
        this.velocity.x *= mult;
        this.velocity.z *= mult;
        this.horSpeedWhenJumped = Math.hypot(this.velocity.x, this.velocity.z);
        this.jumpBufferTimer = 0;
        this.slideJumpCooldownTimer = t.slideJumpCooldown;
        this.state = "airborne";
      } else if (!stillSliding) {
        // #region agent log
        fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0b0c37'},body:JSON.stringify({sessionId:'0b0c37',location:'FPSMovementController.ts:!stillSliding',message:'Slide exit: !stillSliding',data:{hor,slideTime:this.slideTime,inputSlide:input.slide},hypothesisId:'B',timestamp:Date.now()})}).catch(()=>{});
        // #endregion
        // End slide: go to grounded (velocity kept → friction slows to stop; W = walk/crouch speed)
        this.slideEnterCooldownTimer = t.slideEnterCooldown;
        if (this.position.y <= GROUND_Y + 0.01) this.state = "grounded";
        else this.state = "airborne";
      }
      this.yaw = input.yaw;
      this.pitch = input.pitch;
      this.crouching = true;
      return;
    }

    if (this.state === "airborne") {
      if (input.slideJustPressed || input.slideIntentTicks > 0) this.slideOnLand = true;
      const cos = Math.cos(this.yaw);
      const sin = Math.sin(this.yaw);
      const axAir = (input.moveX * cos - input.moveZ * sin) * t.airAccel * dt * 0.3;
      const azAir = (-input.moveX * sin - input.moveZ * cos) * t.airAccel * dt * 0.3;
      this.velocity.x += axAir;
      this.velocity.z += azAir;
      const hor = Math.hypot(this.velocity.x, this.velocity.z);
      const airCap = Math.min(t.airMaxSpeed, this.horSpeedWhenJumped);
      if (hor > airCap && airCap > 0) {
        this.velocity.x *= airCap / hor;
        this.velocity.z *= airCap / hor;
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
        // Air slide: C pressed in air → slide on land (movement from jump); always give small boost
        if (this.slideOnLand && horLand >= t.slideEnterSpeed) {
          this.state = "sliding";
          this.slideTime = 0;
          this.slideJumpCooldownTimer = 0;
          this.crouching = true;
          const boost = Math.max(horLand * t.slideSpeedBoost, t.slideInitialSpeed);
          if (horLand > 0) {
            this.velocity.x = (this.velocity.x / horLand) * boost;
            this.velocity.z = (this.velocity.z / horLand) * boost;
          }
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

    // Ground slide: sprinting (or brief grace after release) + warmup; slide gives speed boost
    if (input.sprint) {
      this.sprintWarmupTime += dt;
      this.sprintReleaseGrace = t.slideSprintReleaseGrace;
    } else {
      this.sprintWarmupTime = 0;
      this.sprintReleaseGrace = Math.max(0, this.sprintReleaseGrace - dt);
    }
    const hadRecentSprint = input.sprint || this.sprintReleaseGrace > 0;
    const warmupOk = this.sprintWarmupTime >= t.slideEnterMinSprintTime || this.sprintReleaseGrace > 0;
    const horSpeed = Math.hypot(this.velocity.x, this.velocity.z);
    const slideEnterCooldownOk = this.slideEnterCooldownTimer <= 0;
    const canGroundSlide =
      input.slideIntentTicks > 0 &&
      hadRecentSprint &&
      warmupOk &&
      slideEnterCooldownOk &&
      horSpeed >= t.slideEnterSpeed;
    if (canGroundSlide) {
      // #region agent log
      fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'0b0c37'},body:JSON.stringify({sessionId:'0b0c37',location:'FPSMovementController.ts:canGroundSlide',message:'Slide ENTER client',data:{horSpeed,slideIntentTicks:input.slideIntentTicks,cooldown:this.slideEnterCooldownTimer},hypothesisId:'A',timestamp:Date.now()})}).catch(()=>{});
      // #endregion
      this.state = "sliding";
      this.slideTime = 0;
      this._debugFrame = 0;
      this.crouching = true;
      const hor = Math.hypot(this.velocity.x, this.velocity.z);
      const boost = Math.max(hor * t.slideSpeedBoost, t.slideInitialSpeed);
      if (hor > 0) {
        this.velocity.x = (this.velocity.x / hor) * boost;
        this.velocity.z = (this.velocity.z / hor) * boost;
      }
      return;
    }

    // Sprint takes precedence so "Sprint: true" always means higher velocity. Else crouch or walk.
    const speed = input.sprint
      ? t.maxSpeedSprint
      : input.slide
        ? t.maxSpeedCrouch
        : t.maxSpeedWalk;
    const cos = Math.cos(this.yaw);
    const sin = Math.sin(this.yaw);
    // Sprint: lower accel factor = ramp-up (not instant); walk uses full accel
    const accel = input.sprint
      ? t.accel * (t.maxSpeedSprint / t.maxSpeedWalk) * t.sprintAccelFactor
      : t.accel;
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
      this.horSpeedWhenJumped = Math.hypot(this.velocity.x, this.velocity.z);
      this.state = "airborne";
      this.jumpBufferTimer = 0;
      this.sprintWarmupTime = 0;
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
      this.horSpeedWhenJumped = Math.hypot(this.velocity.x, this.velocity.z) || this.horSpeedWhenJumped;
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
