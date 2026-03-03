/**
 * Shared movement step: grounded/sliding/airborne state machine.
 * Used by client (FPSMovementController) and server (ArenaFFA) for deterministic physics.
 */
import { movementTuning } from "../tuning/movement.js";
import { resolveArenaWalls, applyWallVelocitySlide } from "../arena/index.js";
const GROUND_Y = 0;
function createDefaultExt() {
    return {
        slideTime: 0,
        slideEnterCooldownTimer: 0,
        slideJumpCooldownTimer: 0,
        slideOnLand: false,
        horSpeedWhenJumped: 0,
        lastApproachVx: 0,
        lastApproachVz: 0,
        lastJumpHeld: false,
        lastHasSlideIntent: false,
        dashCooldownTimer: 0,
        dashActiveTimer: 0,
        lastDashDirX: 0,
        lastDashDirZ: 0,
    };
}
/** Advance movement ext timers (call before step). */
export function tickMovementTimers(ext, dt) {
    if (ext.slideJumpCooldownTimer > 0)
        ext.slideJumpCooldownTimer -= dt;
    if (ext.slideEnterCooldownTimer > 0)
        ext.slideEnterCooldownTimer -= dt;
    if (ext.dashCooldownTimer > 0)
        ext.dashCooldownTimer -= dt;
}
/**
 * Single tick of movement. Mutates state in place.
 * Call tickMovementTimers on ext before this each tick.
 */
export function stepPlayerMovement(state, input, dt, playerRadius) {
    const t = movementTuning;
    const ext = state.ext;
    const jumpPressedThisFrame = input.jumpHeld && !ext.lastJumpHeld;
    ext.lastJumpHeld = input.jumpHeld;
    const hadSlideIntentLastFrame = ext.lastHasSlideIntent;
    const slidePressedThisFrame = input.hasSlideIntent && !hadSlideIntentLastFrame;
    ext.lastHasSlideIntent = input.hasSlideIntent;
    // Start dash: input.dash, cooldown ready, not already in dash phase; direction from move or look
    if (input.dash && ext.dashCooldownTimer <= 0 && ext.dashActiveTimer <= 0) {
        const cos = Math.cos(input.yaw);
        const sin = Math.sin(input.yaw);
        let dx = input.moveX * cos - input.moveZ * sin;
        let dz = -(input.moveX * sin + input.moveZ * cos);
        let len = Math.hypot(dx, dz);
        if (len < 0.01) {
            dx = -sin;
            dz = -cos;
            len = Math.hypot(dx, dz);
        }
        if (len > 0.01) {
            dx /= len;
            dz /= len;
            state.vx = dx * t.dashSpeed;
            state.vz = dz * t.dashSpeed;
            ext.dashActiveTimer = t.dashDuration;
            ext.dashCooldownTimer = t.dashCooldownSec;
            ext.lastDashDirX = dx;
            ext.lastDashDirZ = dz;
        }
    }
    // Dash phase: constant horizontal speed, gravity, no friction
    if (ext.dashActiveTimer > 0) {
        ext.dashActiveTimer -= dt;
        state.vy -= t.gravity * dt;
        state.vy = Math.max(state.vy, -t.maxFallSpeed);
        state.x += state.vx * dt;
        state.y += state.vy * dt;
        state.z += state.vz * dt;
        if (state.y <= GROUND_Y) {
            state.y = GROUND_Y;
            state.vy = 0;
        }
        const wall = resolveArenaWalls(state.x, state.z, playerRadius);
        state.x = wall.x;
        state.z = wall.z;
        const velSlide = { x: state.vx, z: state.vz };
        applyWallVelocitySlide(velSlide, wall);
        state.vx = velSlide.x;
        state.vz = velSlide.z;
        return;
    }
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
        const wall = resolveArenaWalls(state.x, state.z, playerRadius);
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
        const inputCancelsSlide = inputMag > 0.1 &&
            hor > 0.1 &&
            (inputWorldX * state.vx + inputWorldZ * state.vz) / (inputMag * hor) < 0.5;
        if (inputCancelsSlide) {
            state.movementState = "grounded";
            ext.slideEnterCooldownTimer = t.slideEnterCooldown;
            return;
        }
        const stillSliding = hor >= t.slideMinSpeed &&
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
            ext.lastApproachVx = state.vx;
            ext.lastApproachVz = state.vz;
            state.movementState = "airborne";
        }
        else if (!stillSliding) {
            ext.slideEnterCooldownTimer = t.slideEnterCooldown;
            state.movementState = state.y <= GROUND_Y + 0.01 ? "grounded" : "airborne";
        }
        return;
    }
    if (state.movementState === "airborne") {
        if (slidePressedThisFrame)
            ext.slideOnLand = true; // only on fresh Shift tap in air, not from holding
        if (hadSlideIntentLastFrame && !input.hasSlideIntent)
            ext.slideOnLand = false; // released Shift in air -> no slide on land
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
            }
            else {
                state.movementState = "grounded";
            }
            ext.slideOnLand = false;
        }
        else {
            if (ext.horSpeedWhenJumped === 0 && hor > 0) {
                ext.horSpeedWhenJumped = hor;
            }
            state.movementState = "airborne";
        }
        const wall = resolveArenaWalls(state.x, state.z, playerRadius);
        state.x = wall.x;
        state.z = wall.z;
        const hasWallNormal = (wall.normalX !== undefined && wall.normalX !== 0) ||
            (wall.normalZ !== undefined && wall.normalZ !== 0);
        if (hasWallNormal) {
            const nx = wall.normalX ?? 0;
            const nz = wall.normalZ ?? 0;
            const approachVx = ext.lastApproachVx;
            const approachVz = ext.lastApproachVz;
            const horSpeedApproach = Math.hypot(approachVx, approachVz);
            const dot = approachVx * nx + approachVz * nz;
            // #region agent log
            fetch("http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Debug-Session-Id": "e78fd8",
                },
                body: JSON.stringify({
                    sessionId: "e78fd8",
                    runId: "post-fix",
                    hypothesisId: "wallbounce-conditions",
                    location: "shared/src/movement/stepPlayerMovement.ts:airborne",
                    message: "airborne wall contact",
                    data: {
                        jumpPressedThisFrame,
                        jumpHeld: input.jumpHeld,
                        horSpeedApproach,
                        minSpeed: t.wallBounceSpeedMin,
                        dot,
                        nx,
                        nz,
                        movementState: state.movementState,
                    },
                    timestamp: Date.now(),
                }),
            }).catch(() => { });
            // #endregion agent log
            if (jumpPressedThisFrame && horSpeedApproach >= t.wallBounceSpeedMin && dot > 0) {
                let rx = approachVx - 2 * dot * nx;
                let rz = approachVz - 2 * dot * nz;
                rx *= t.wallBounceReflectFactor;
                rz *= t.wallBounceReflectFactor;
                let horAfter = Math.hypot(rx, rz);
                const desired = Math.max(horAfter * t.wallBounceBoostFactor, t.wallBounceBoostMin);
                if (horAfter > 0 && desired > horAfter) {
                    rx *= desired / horAfter;
                    rz *= desired / horAfter;
                    horAfter = desired;
                }
                state.vx = rx;
                state.vz = rz;
                state.vy = t.jumpForce * t.wallBounceJumpMultiplier;
                ext.horSpeedWhenJumped = horAfter;
                ext.slideJumpCooldownTimer = t.slideJumpCooldown;
                ext.slideOnLand = false; // no auto-slide on land after wall-bounce; must press Shift again in air
                const velAirBounce = { x: state.vx, z: state.vz };
                applyWallVelocitySlide(velAirBounce, wall);
                state.vx = velAirBounce.x;
                state.vz = velAirBounce.z;
                return;
            }
        }
        else {
            ext.lastApproachVx = state.vx;
            ext.lastApproachVz = state.vz;
        }
        const velAir = { x: state.vx, z: state.vz };
        applyWallVelocitySlide(velAir, wall);
        state.vx = velAir.x;
        state.vz = velAir.z;
        return;
    }
    // grounded
    const horSpeed = Math.hypot(state.vx, state.vz);
    const slideEnterCooldownOk = ext.slideEnterCooldownTimer <= 0;
    const canGroundSlide = input.hasSlideIntent && slideEnterCooldownOk && horSpeed >= t.slideEnterSpeed;
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
    const crouching = input.crouch; // C only: crouch walk, no slide
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
        ext.lastApproachVx = state.vx;
        ext.lastApproachVz = state.vz;
        state.movementState = "airborne";
    }
    else {
        state.vy = 0;
    }
    state.x += state.vx * dt;
    state.y += state.vy * dt;
    state.z += state.vz * dt;
    if (state.y <= GROUND_Y) {
        state.y = GROUND_Y;
        state.vy = 0;
        state.movementState = "grounded";
    }
    else {
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
