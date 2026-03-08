/**
 * Shared movement step: grounded/sliding/airborne state machine.
 * Used by client (FPSMovementController) and server (ArenaFFA) for deterministic physics.
 */
import { movementTuning } from "../tuning/movement.js";
import { GROUND_CHECK_MARGIN_EXTRA } from "../constants/index.js";
import { resolveArenaWalls, applyWallVelocitySlide } from "../arena/index.js";
import { resolveStaticWorldXZ, getGroundYAt, isOnRamp, getSurfaceHeightsAt, getSurfaceHit, getHighestSurfaceAtOrBelow, } from "../world/StaticWorld.js";
const GROUND_Y = 0;
/** Max height above ground to still count as grounded (ramp step-down, float tolerance). */
const GROUND_SNAP_TOLERANCE = 0.15;
/** Epsilon for finite-difference gradient of ground (ramp slope). */
const GROUND_GRAD_EPS = 0.05;
/** Surfaces at (x,z) for solid horizontal collision; default arena = single floor at GROUND_Y. */
function surfacesAt(x, z, staticWorld, margin) {
    return staticWorld
        ? getSurfaceHeightsAt(x, z, staticWorld, margin)
        : [GROUND_Y];
}
/** Ground gradient (dY/dx, dY/dz) at (x,z) for slope-aware ramp slide. Returns null if no valid ground. */
function groundGradientAt(x, z, staticWorld, margin, py) {
    if (!staticWorld)
        return null;
    const g0 = getGroundYAt(x, z, staticWorld, margin, py);
    if (!Number.isFinite(g0))
        return null;
    const gX = getGroundYAt(x + GROUND_GRAD_EPS, z, staticWorld, margin, py);
    const gZ = getGroundYAt(x, z + GROUND_GRAD_EPS, staticWorld, margin, py);
    if (!Number.isFinite(gX) || !Number.isFinite(gZ))
        return null;
    return {
        gradX: (gX - g0) / GROUND_GRAD_EPS,
        gradZ: (gZ - g0) / GROUND_GRAD_EPS,
    };
}
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
 * playerHeight: used so head hits ceiling (state.y = feet; head at state.y + playerHeight).
 */
export function stepPlayerMovement(state, input, dt, playerRadius, playerHeight, staticWorld) {
    const t = movementTuning;
    const ext = state.ext;
    const groundMargin = playerRadius + GROUND_CHECK_MARGIN_EXTRA;
    const jumpPressedThisFrame = input.jumpHeld && !ext.lastJumpHeld;
    ext.lastJumpHeld = input.jumpHeld;
    const hadSlideIntentLastFrame = ext.lastHasSlideIntent;
    const slidePressedThisFrame = input.hasSlideIntent && !hadSlideIntentLastFrame;
    ext.lastHasSlideIntent = input.hasSlideIntent;
    // Start dash: input.dash, cooldown ready, not already in dash phase; direction from move input, else current velocity, else look
    if (input.dash && ext.dashCooldownTimer <= 0 && ext.dashActiveTimer <= 0) {
        const cos = Math.cos(input.yaw);
        const sin = Math.sin(input.yaw);
        let dx = input.moveX * cos - input.moveZ * sin;
        let dz = -(input.moveX * sin + input.moveZ * cos);
        let len = Math.hypot(dx, dz);
        if (len < 0.01) {
            const hor = Math.hypot(state.vx, state.vz);
            // No input: use current horizontal movement direction if we have any
            if (hor > 0.01) {
                dx = state.vx / hor;
                dz = state.vz / hor;
                len = 1;
            }
            else {
                dx = -sin;
                dz = -cos;
                len = Math.hypot(dx, dz);
            }
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
    // Dash phase: solid surfaces – hit floor or ceiling, no fall-through
    if (ext.dashActiveTimer > 0) {
        ext.dashActiveTimer -= dt;
        state.vy -= t.gravity * dt;
        state.vy = Math.max(state.vy, -t.maxFallSpeed);
        state.x += state.vx * dt;
        const yDashCandidate = state.y + state.vy * dt;
        state.z += state.vz * dt;
        const surfacesDash = surfacesAt(state.x, state.z, staticWorld, playerRadius);
        let hitDash;
        if (yDashCandidate > state.y) {
            const hitCeiling = getSurfaceHit(state.y + playerHeight, yDashCandidate + playerHeight, surfacesDash);
            hitDash = hitCeiling !== null ? hitCeiling - playerHeight : null;
            state.y = hitCeiling !== null ? hitCeiling - playerHeight : yDashCandidate;
        }
        else {
            hitDash = getSurfaceHit(state.y, yDashCandidate, surfacesDash);
            state.y = hitDash !== null ? hitDash : yDashCandidate;
        }
        if (hitDash !== null)
            state.vy = 0;
        const wall = staticWorld
            ? resolveStaticWorldXZ(state.x, state.y, state.z, playerRadius, staticWorld)
            : resolveArenaWalls(state.x, state.z, playerRadius);
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
        const onRamp = !!staticWorld && isOnRamp(state.x, state.z, staticWorld, playerRadius, state.y);
        const decay = onRamp ? t.slideDecayOnRamp : t.slideDecay;
        state.vx *= decay;
        state.vz *= decay;
        if (onRamp && t.rampSlideGravityFactor > 0) {
            const grad = groundGradientAt(state.x, state.z, staticWorld, playerRadius, state.y);
            if (grad) {
                const k = t.gravity * dt * t.rampSlideGravityFactor;
                state.vx -= grad.gradX * k;
                state.vz -= grad.gradZ * k;
            }
            const horRamp = Math.hypot(state.vx, state.vz);
            if (horRamp > t.slideMaxSpeedOnRamp) {
                state.vx *= t.slideMaxSpeedOnRamp / horRamp;
                state.vz *= t.slideMaxSpeedOnRamp / horRamp;
            }
        }
        state.vy -= t.gravity * dt;
        state.vy = Math.max(state.vy, -t.maxFallSpeed);
        state.x += state.vx * dt;
        const yBeforeSlide = state.y;
        state.y += state.vy * dt;
        state.z += state.vz * dt;
        let surfacesSlide = surfacesAt(state.x, state.z, staticWorld, playerRadius);
        if (surfacesSlide.length === 0 && staticWorld && Math.hypot(state.vx, state.vz) > 0.01) {
            const backX = state.x - state.vx * dt * 0.5;
            const backZ = state.z - state.vz * dt * 0.5;
            surfacesSlide = surfacesAt(backX, backZ, staticWorld, playerRadius);
        }
        const goingUpSlide = state.y > yBeforeSlide;
        const hitSlide = goingUpSlide
            ? (() => {
                const hitCeiling = getSurfaceHit(yBeforeSlide + playerHeight, state.y + playerHeight, surfacesSlide);
                return hitCeiling !== null ? hitCeiling - playerHeight : null;
            })()
            : getSurfaceHit(yBeforeSlide, state.y, surfacesSlide);
        if (hitSlide !== null) {
            state.y = hitSlide;
            state.vy = 0;
        }
        const wall = staticWorld
            ? resolveStaticWorldXZ(state.x, state.y, state.z, playerRadius, staticWorld)
            : resolveArenaWalls(state.x, state.z, playerRadius);
        state.x = wall.x;
        state.z = wall.z;
        const velSlide = { x: state.vx, z: state.vz };
        applyWallVelocitySlide(velSlide, wall);
        state.vx = velSlide.x;
        state.vz = velSlide.z;
        const surfacesAfterSlide = surfacesAt(state.x, state.z, staticWorld, playerRadius);
        const floorSlide = getHighestSurfaceAtOrBelow(state.y + GROUND_SNAP_TOLERANCE, surfacesAfterSlide);
        if (floorSlide !== null && state.y < floorSlide) {
            state.y = floorSlide;
            state.vy = 0;
        }
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
        const onGroundSlideCheck = floorSlide !== null &&
            (state.y <= floorSlide + GROUND_SNAP_TOLERANCE || state.y < floorSlide);
        const stillSliding = hor >= t.slideMinSpeed &&
            ext.slideTime < t.slideDurationMax &&
            onGroundSlideCheck;
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
            state.movementState = onGroundSlideCheck ? "grounded" : "airborne";
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
        state.z += state.vz * dt;
        const yCandidate = state.y + state.vy * dt;
        const surfacesAir = surfacesAt(state.x, state.z, staticWorld, playerRadius);
        const goingUp = yCandidate > state.y;
        let hitAir;
        if (goingUp) {
            // Head must not pass through ceiling: check head segment (state.y + playerHeight)
            const hitCeiling = getSurfaceHit(state.y + playerHeight, yCandidate + playerHeight, surfacesAir);
            hitAir = hitCeiling !== null ? hitCeiling - playerHeight : null;
            state.y = hitCeiling !== null ? hitCeiling - playerHeight : yCandidate;
        }
        else {
            hitAir = getSurfaceHit(state.y, yCandidate, surfacesAir);
            state.y = hitAir !== null ? hitAir : yCandidate;
        }
        const wasFalling = yCandidate < state.y;
        if (hitAir !== null && wasFalling) {
            state.vy = 0;
            const horLand = Math.hypot(state.vx, state.vz);
            if (ext.slideOnLand && horLand >= t.slideEnterSpeed) {
                state.movementState = "sliding";
                ext.slideTime = 0;
                ext.slideJumpCooldownTimer = 0;
                const onRamp = !!staticWorld && isOnRamp(state.x, state.z, staticWorld, playerRadius, state.y);
                const boostFactor = onRamp ? t.slideBoostOnRampFactor : 1;
                const boost = Math.max(horLand * t.slideSpeedBoost, t.slideInitialSpeed) * boostFactor;
                if (horLand > 0 && boost > 0) {
                    state.vx = (state.vx / horLand) * boost;
                    state.vz = (state.vz / horLand) * boost;
                }
            }
            else {
                state.movementState = "grounded";
                const onRamp = !!staticWorld && isOnRamp(state.x, state.z, staticWorld, playerRadius, state.y);
                if (onRamp) {
                    const cap = t.maxSpeedWalk * t.rampLandingSpeedFactor;
                    const h = Math.hypot(state.vx, state.vz);
                    if (h > cap && cap > 0) {
                        state.vx *= cap / h;
                        state.vz *= cap / h;
                    }
                }
            }
            ext.slideOnLand = false;
        }
        if (hitAir === null) {
            if (ext.horSpeedWhenJumped === 0 && hor > 0) {
                ext.horSpeedWhenJumped = hor;
            }
            state.movementState = "airborne";
        }
        else if (!wasFalling) {
            state.vy = 0;
            state.movementState = "airborne";
        }
        const wall = staticWorld
            ? resolveStaticWorldXZ(state.x, state.y, state.z, playerRadius, staticWorld)
            : resolveArenaWalls(state.x, state.z, playerRadius);
        state.x = wall.x;
        state.z = wall.z;
        const surfacesAfterAir = surfacesAt(state.x, state.z, staticWorld, playerRadius);
        const floorAfterAir = getHighestSurfaceAtOrBelow(state.y + GROUND_SNAP_TOLERANCE, surfacesAfterAir);
        if (floorAfterAir !== null && state.y < floorAfterAir) {
            state.y = floorAfterAir;
            state.vy = 0;
        }
        const hasWallNormal = (wall.normalX !== undefined && wall.normalX !== 0) ||
            (wall.normalZ !== undefined && wall.normalZ !== 0);
        if (hasWallNormal) {
            const nx = wall.normalX ?? 0;
            const nz = wall.normalZ ?? 0;
            const approachVx = ext.lastApproachVx;
            const approachVz = ext.lastApproachVz;
            const horSpeedApproach = Math.hypot(approachVx, approachVz);
            const dot = approachVx * nx + approachVz * nz;
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
    const onRampGrounded = !!staticWorld && isOnRamp(state.x, state.z, staticWorld, playerRadius, state.y);
    if (onRampGrounded) {
        const horRamp = Math.hypot(state.vx, state.vz);
        if (horRamp > t.maxSpeedOnRamp) {
            state.vx *= t.maxSpeedOnRamp / horRamp;
            state.vz *= t.maxSpeedOnRamp / horRamp;
        }
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
    const surfacesGrounded = surfacesAt(state.x, state.z, staticWorld, groundMargin);
    const floorGrounded = getHighestSurfaceAtOrBelow(state.y + GROUND_SNAP_TOLERANCE, surfacesGrounded);
    const onGroundGrounded = floorGrounded !== null &&
        (state.y <= floorGrounded + GROUND_SNAP_TOLERANCE || state.y < floorGrounded);
    if (onGroundGrounded) {
        state.y = floorGrounded;
        state.vy = 0;
        state.movementState = "grounded";
    }
    else {
        if (ext.horSpeedWhenJumped === 0) {
            ext.horSpeedWhenJumped = Math.hypot(state.vx, state.vz);
        }
        state.movementState = "airborne";
    }
    const wall = staticWorld
        ? resolveStaticWorldXZ(state.x, state.y, state.z, playerRadius, staticWorld)
        : resolveArenaWalls(state.x, state.z, playerRadius);
    state.x = wall.x;
    state.z = wall.z;
    const vel = { x: state.vx, z: state.vz };
    applyWallVelocitySlide(vel, wall);
    state.vx = vel.x;
    state.vz = vel.z;
    const surfacesFinal = surfacesAt(state.x, state.z, staticWorld, groundMargin);
    let floorFinal = getHighestSurfaceAtOrBelow(state.y + GROUND_SNAP_TOLERANCE, surfacesFinal);
    if (floorFinal !== null && state.y < floorFinal) {
        state.y = floorFinal;
        state.vy = 0;
    }
    const horStep = Math.hypot(state.vx, state.vz);
    if (floorFinal === null && staticWorld && horStep > 0.5) {
        const step = 0.2;
        const aheadX = state.x + (state.vx / horStep) * step;
        const aheadZ = state.z + (state.vz / horStep) * step;
        const surfacesAhead = surfacesAt(aheadX, aheadZ, staticWorld, groundMargin);
        const floorAhead = getHighestSurfaceAtOrBelow(state.y + 0.5, surfacesAhead);
        if (floorAhead !== null && floorAhead > state.y && floorAhead - state.y <= 0.5) {
            state.y = floorAhead;
            state.vy = 0;
        }
    }
}
export { createDefaultExt };
