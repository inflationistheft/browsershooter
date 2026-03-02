/**
 * Shared movement step: grounded/sliding/airborne state machine.
 * Used by client (FPSMovementController) and server (ArenaFFA) for deterministic physics.
 */

import { movementTuning } from "../tuning/movement.js";
import { resolveArenaWalls, applyWallVelocitySlide } from "../arena/index.js";
import type { ArenaWallResult } from "../arena/index.js";

const GROUND_Y = 0;

export interface MovementStepInput {
  moveX: number;
  moveZ: number;
  jump: boolean;
  /** True when slide key held or slideIntentTicks > 0. */
  hasSlideIntent: boolean;
  yaw: number;
  pitch: number;
}

export interface MovementExtState {
  slideTime: number;
  slideEnterCooldownTimer: number;
  slideJumpCooldownTimer: number;
  slideOnLand: boolean;
  horSpeedWhenJumped: number;
}

export interface MovementStepState {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  movementState: "grounded" | "sliding" | "airborne";
  ext: MovementExtState;
}

function createDefaultExt(): MovementExtState {
  return {
    slideTime: 0,
    slideEnterCooldownTimer: 0,
    slideJumpCooldownTimer: 0,
    slideOnLand: false,
    horSpeedWhenJumped: 0,
  };
}

/** Advance movement ext timers (call before step). */
export function tickMovementTimers(ext: MovementExtState, dt: number): void {
  if (ext.slideJumpCooldownTimer > 0) ext.slideJumpCooldownTimer -= dt;
  if (ext.slideEnterCooldownTimer > 0) ext.slideEnterCooldownTimer -= dt;
}

/**
 * Single tick of movement. Mutates state in place.
 * Call tickMovementTimers on ext before this each tick.
 */
export function stepPlayerMovement(
  state: MovementStepState,
  input: MovementStepInput,
  dt: number,
  playerRadius: number
): void {
  const t = movementTuning;
  const ext = state.ext;

  if (state.movementState === "sliding") {
    ext.slideTime += dt;
    const hor = Math.hypot(state.vx, state.vz);
    state.vx *= t.slideDecay;
    state.vz *= t.slideDecay;
    state.vy -= t.gravity * dt;
    state.vy = Math.max(state.vy, -t.maxFallSpeed);

    state.x += state.vx * dt;
    state.y += state.vy * dt;
    state.z += state.vz * dt;

    if (state.y <= GROUND_Y) {
      state.y = GROUND_Y;
      state.vy = 0;
    }

    const wall: ArenaWallResult = resolveArenaWalls(state.x, state.z, playerRadius);
    state.x = wall.x;
    state.z = wall.z;
    const velSlide = { x: state.vx, z: state.vz };
    applyWallVelocitySlide(velSlide, wall);
    state.vx = velSlide.x;
    state.vz = velSlide.z;

    const cos = Math.cos(input.yaw);
    const sin = Math.sin(input.yaw);
    const inputWorldX = input.moveX * cos - input.moveZ * sin;
    const inputWorldZ = -(input.moveX * sin + input.moveZ * cos);
    const inputMag = Math.hypot(inputWorldX, inputWorldZ);
    const inputCancelsSlide =
      inputMag > 0.1 &&
      hor > 0.1 &&
      (inputWorldX * state.vx + inputWorldZ * state.vz) / (inputMag * hor) < 0.5;

    if (inputCancelsSlide) {
      state.movementState = "grounded";
      ext.slideEnterCooldownTimer = t.slideEnterCooldown;
      return;
    }

    const stillSliding =
      hor >= t.slideMinSpeed &&
      ext.slideTime < t.slideDurationMax &&
      state.y <= GROUND_Y + 0.01;
    const canSlideJump = ext.slideJumpCooldownTimer <= 0;

    if (input.jump && stillSliding && canSlideJump) {
      const mult = t.slideJumpMultiplier;
      state.vy = t.jumpForce * mult;
      state.vx *= mult;
      state.vz *= mult;
      ext.horSpeedWhenJumped = Math.hypot(state.vx, state.vz);
      ext.slideJumpCooldownTimer = t.slideJumpCooldown;
      state.movementState = "airborne";
    } else if (!stillSliding) {
      ext.slideEnterCooldownTimer = t.slideEnterCooldown;
      state.movementState = state.y <= GROUND_Y + 0.01 ? "grounded" : "airborne";
    }
    return;
  }

  if (state.movementState === "airborne") {
    if (input.hasSlideIntent) ext.slideOnLand = true;

    const hor = Math.hypot(state.vx, state.vz);
    const horCap = ext.horSpeedWhenJumped;
    if (hor > horCap && horCap > 0) {
      state.vx *= horCap / hor;
      state.vz *= horCap / hor;
    }

    state.vy -= t.gravity * dt;
    state.vy = Math.max(state.vy, -t.maxFallSpeed);
    state.x += state.vx * dt;
    state.y += state.vy * dt;
    state.z += state.vz * dt;

    if (state.y <= GROUND_Y) {
      state.y = GROUND_Y;
      state.vy = 0;
      const horLand = Math.hypot(state.vx, state.vz);
      if (ext.slideOnLand && horLand >= t.slideEnterSpeed) {
        state.movementState = "sliding";
        ext.slideTime = 0;
        ext.slideJumpCooldownTimer = 0;
        const boost = Math.max(horLand * t.slideSpeedBoost, t.slideInitialSpeed);
        if (horLand > 0) {
          state.vx = (state.vx / horLand) * boost;
          state.vz = (state.vz / horLand) * boost;
        }
      } else {
        state.movementState = "grounded";
      }
      ext.slideOnLand = false;
    } else {
      if (ext.horSpeedWhenJumped === 0 && hor > 0) {
        ext.horSpeedWhenJumped = hor;
      }
      state.movementState = "airborne";
    }

    const wall = resolveArenaWalls(state.x, state.z, playerRadius);
    state.x = wall.x;
    state.z = wall.z;
    const velAir = { x: state.vx, z: state.vz };
    applyWallVelocitySlide(velAir, wall);
    state.vx = velAir.x;
    state.vz = velAir.z;
    return;
  }

  // grounded
  const horSpeed = Math.hypot(state.vx, state.vz);
  const slideEnterCooldownOk = ext.slideEnterCooldownTimer <= 0;
  const canGroundSlide =
    input.hasSlideIntent && slideEnterCooldownOk && horSpeed >= t.slideEnterSpeed;

  if (canGroundSlide) {
    state.movementState = "sliding";
    ext.slideTime = 0;
    const hor = Math.hypot(state.vx, state.vz);
    const boost = Math.max(hor * t.slideSpeedBoost, t.slideInitialSpeed);
    if (hor > 0) {
      state.vx = (state.vx / hor) * boost;
      state.vz = (state.vz / hor) * boost;
    }
    return;
  }

  const crouching = input.hasSlideIntent;
  const speed = crouching ? t.maxSpeedCrouch : t.maxSpeedWalk;
  const cos = Math.cos(input.yaw);
  const sin = Math.sin(input.yaw);
  const ax = (input.moveX * cos - input.moveZ * sin) * t.accel * dt;
  const az = (-input.moveX * sin - input.moveZ * cos) * t.accel * dt;
  state.vx += ax;
  state.vz += az;
  state.vx *= Math.max(0, 1 - t.friction * dt);
  state.vz *= Math.max(0, 1 - t.friction * dt);
  const hor = Math.hypot(state.vx, state.vz);
  if (hor > speed) {
    state.vx *= speed / hor;
    state.vz *= speed / hor;
  }

  if (input.jump) {
    state.vy = t.jumpForce;
    ext.horSpeedWhenJumped = Math.hypot(state.vx, state.vz);
    state.movementState = "airborne";
  } else {
    state.vy = 0;
  }

  state.x += state.vx * dt;
  state.y += state.vy * dt;
  state.z += state.vz * dt;

  if (state.y <= GROUND_Y) {
    state.y = GROUND_Y;
    state.vy = 0;
    state.movementState = "grounded";
  } else {
    if (ext.horSpeedWhenJumped === 0) {
      ext.horSpeedWhenJumped = Math.hypot(state.vx, state.vz);
    }
    state.movementState = "airborne";
  }

  const wall = resolveArenaWalls(state.x, state.z, playerRadius);
  state.x = wall.x;
  state.z = wall.z;
  const vel = { x: state.vx, z: state.vz };
  applyWallVelocitySlide(vel, wall);
  state.vx = vel.x;
  state.vz = vel.z;
}

export { createDefaultExt };
