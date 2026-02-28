/**
 * FFA Arena room: tick loop, state sync, placeholder movement.
 */
import * as fs from "fs";
import { Room } from "@colyseus/core";
import { movementTuning, resolveArenaWalls, applyWallVelocitySlide, rayArenaIntersection, resolveAnimationClipId, TICK_RATE, PLAYER_RADIUS, PLAYER_EYE_HEIGHT, CROUCH_EYE_HEIGHT, HITSCAN_RANGE, HITSCAN_DAMAGE, RELOAD_TICKS, DEFAULT_MAX_HEALTH, RESPAWN_DELAY_SEC, HEAD_HITBOX_HEIGHT, HEAD_HITBOX_RADIUS, BODY_CAPSULE_TOP, BODY_CAPSULE_RADIUS, BODY_CAPSULE_TOP_EXTEND, raySphereIntersection, rayCapsuleIntersection, DEBUG_HEAD_ONLY, } from "shared";
import { ArenaState, PlayerStateSchema } from "shared";
import { serverConfig } from "../config/index.js";
export class ArenaFFARoom extends Room {
    onCreate() {
        this.setState(new ArenaState());
        this.setSimulationInterval((dt) => this.tick(dt), serverConfig.tickMs);
        this.onMessage("input", (client, message) => this.onInput(client, message));
    }
    /** Spawn offsets (x, y, z). Players spawn at random point on join/respawn. */
    static { this.SPAWN_OFFSETS = [
        [0, 0, 0],
        [4, 0, 4],
        [-4, 0, 4],
        [4, 0, -4],
        [-4, 0, -4],
        [6, 0, 0],
        [-6, 0, 0],
        [0, 0, 6],
        [0, 0, -6],
        [8, 0, 8],
        [-8, 0, 8],
        [8, 0, -8],
        [-8, 0, -8],
    ]; }
    onJoin(client) {
        const idx = Math.floor(Math.random() * ArenaFFARoom.SPAWN_OFFSETS.length);
        const [sx, sy, sz] = ArenaFFARoom.SPAWN_OFFSETS[idx];
        const state = new PlayerStateSchema();
        state.id = client.sessionId;
        state.x = sx;
        state.y = sy;
        state.z = sz;
        state.health = DEFAULT_MAX_HEALTH;
        state.maxHealth = DEFAULT_MAX_HEALTH;
        state.ammo = 30;
        state.maxAmmo = 30;
        this.state.players.set(client.sessionId, state);
        console.log(`[ArenaFFA] Client ${client.sessionId} joined. Players in room: ${this.state.players.size}`);
    }
    onLeave(client) {
        this.state.players.delete(client.sessionId);
        console.log(`[ArenaFFA] Client ${client.sessionId} left. Players in room: ${this.state.players.size}`);
    }
    onInput(client, message) {
        const player = this.state.players.get(client.sessionId);
        if (!player)
            return;
        const input = message;
        const ext = player;
        ext._lastInput = input;
        if (input.shoot === true)
            ext._pendingShoot = true;
    }
    tick(_dt) {
        const t = movementTuning;
        const dtSec = serverConfig.tickMs / 1000;
        const GROUND_Y = 0;
        const RESPAWN_TICKS = Math.ceil(RESPAWN_DELAY_SEC * TICK_RATE);
        this.state.players.forEach((player, shooterId) => {
            const ext = player;
            const lastInput = ext._lastInput;
            if (player.health <= 0) {
                if (ext._respawnTicks === undefined) {
                    ext._respawnTicks = RESPAWN_TICKS;
                }
                ext._respawnTicks--;
                if (ext._respawnTicks <= 0) {
                    const idx = Math.floor(Math.random() * ArenaFFARoom.SPAWN_OFFSETS.length);
                    const [sx, sy, sz] = ArenaFFARoom.SPAWN_OFFSETS[idx];
                    player.health = player.maxHealth;
                    player.x = sx;
                    player.y = sy;
                    player.z = sz;
                    player.vx = 0;
                    player.vy = 0;
                    player.vz = 0;
                    player.ammo = player.maxAmmo;
                    player.movementState = "grounded";
                    player.animationState = "idle";
                    ext._respawnTicks = undefined;
                    ext._sprintWarmupTime = 0;
                    ext._sprintReleaseGrace = 0;
                    ext._slideTime = undefined;
                    ext._slideJumpCooldownTimer = undefined;
                    ext._slideEnterCooldownTimer = undefined;
                    ext._slideOnLand = false;
                }
                return;
            }
            if (ext._slideJumpCooldownTimer !== undefined && ext._slideJumpCooldownTimer > 0) {
                ext._slideJumpCooldownTimer -= dtSec;
            }
            if (ext._slideEnterCooldownTimer !== undefined && ext._slideEnterCooldownTimer > 0) {
                ext._slideEnterCooldownTimer -= dtSec;
            }
            if (ext._reloadTicks !== undefined && ext._reloadTicks > 0) {
                ext._reloadTicks--;
                if (ext._reloadTicks === 0) {
                    player.ammo = player.maxAmmo;
                }
            }
            else if (lastInput?.reload && player.ammo < player.maxAmmo) {
                ext._reloadTicks = RELOAD_TICKS;
            }
            if (lastInput) {
                if (lastInput.yaw !== undefined)
                    player.yaw = lastInput.yaw;
                if (lastInput.pitch !== undefined)
                    player.pitch = lastInput.pitch;
                ArenaFFARoom.storeHitboxPositionsIfValid(player, ext, lastInput);
                const grounded = player.movementState === "grounded";
                const sliding = player.movementState === "sliding";
                if (sliding) {
                    const extSlide = ext;
                    extSlide._slideTime = (extSlide._slideTime ?? 0) + dtSec;
                    const hor = Math.hypot(player.vx, player.vz);
                    player.vx *= t.slideDecay;
                    player.vz *= t.slideDecay;
                    player.vy -= t.gravity * dtSec;
                    player.vy = Math.max(player.vy, -t.maxFallSpeed);
                    player.x += player.vx * dtSec;
                    player.y += player.vy * dtSec;
                    player.z += player.vz * dtSec;
                    if (player.y <= GROUND_Y) {
                        player.y = GROUND_Y;
                        player.vy = 0;
                    }
                    const wallSlide = resolveArenaWalls(player.x, player.z, PLAYER_RADIUS);
                    player.x = wallSlide.x;
                    player.z = wallSlide.z;
                    const velSlide = { x: player.vx, z: player.vz };
                    applyWallVelocitySlide(velSlide, wallSlide);
                    player.vx = velSlide.x;
                    player.vz = velSlide.z;
                    const cos = Math.cos(player.yaw);
                    const sin = Math.sin(player.yaw);
                    const inputWorldX = (lastInput.moveX ?? 0) * cos - (lastInput.moveZ ?? 0) * sin;
                    const inputWorldZ = -((lastInput.moveX ?? 0) * sin + (lastInput.moveZ ?? 0) * cos);
                    const inputMag = Math.hypot(inputWorldX, inputWorldZ);
                    const inputCancelsSlide = inputMag > 0.1 &&
                        hor > 0.1 &&
                        (inputWorldX * player.vx + inputWorldZ * player.vz) / (inputMag * hor) < 0.5;
                    if (inputCancelsSlide) {
                        // #region agent log
                        try {
                            fs.appendFileSync("/home/seba/GitHub/browsershooter/.cursor/debug-0b0c37.log", JSON.stringify({ sessionId: "0b0c37", location: "ArenaFFA.ts:inputCancelsSlide", message: "Slide exit server: inputCancelsSlide", data: { lastInputSlide: lastInput.slide }, hypothesisId: "A", timestamp: Date.now() }) + "\n");
                        }
                        catch { }
                        // #endregion
                        player.movementState = "grounded";
                        ext._slideEnterCooldownTimer = t.slideEnterCooldown;
                    }
                    else {
                        const stillSliding = hor >= t.slideMinSpeed &&
                            (extSlide._slideTime ?? 0) < t.slideDurationMax &&
                            player.y <= GROUND_Y + 0.01;
                        const canSlideJump = (extSlide._slideJumpCooldownTimer ?? 0) <= 0;
                        if (lastInput.jump && stillSliding && canSlideJump) {
                            const mult = t.slideJumpMultiplier;
                            player.vy = t.jumpForce * mult;
                            player.vx *= mult;
                            player.vz *= mult;
                            player.movementState = "airborne";
                            extSlide._slideJumpCooldownTimer = t.slideJumpCooldown;
                            ext._horSpeedWhenJumped = Math.hypot(player.vx, player.vz);
                        }
                        else if (!stillSliding) {
                            // #region agent log
                            try {
                                fs.appendFileSync("/home/seba/GitHub/browsershooter/.cursor/debug-0b0c37.log", JSON.stringify({ sessionId: "0b0c37", location: "ArenaFFA.ts:!stillSliding", message: "Slide exit server: !stillSliding", data: { hor, slideTime: extSlide._slideTime }, hypothesisId: "A", timestamp: Date.now() }) + "\n");
                            }
                            catch { }
                            // #endregion
                            player.movementState = player.y <= GROUND_Y + 0.01 ? "grounded" : "airborne";
                            ext._slideEnterCooldownTimer = t.slideEnterCooldown;
                        }
                    }
                }
                else if (grounded) {
                    if (lastInput.sprint) {
                        ext._sprintWarmupTime = (ext._sprintWarmupTime ?? 0) + dtSec;
                        ext._sprintReleaseGrace = t.slideSprintReleaseGrace;
                    }
                    else {
                        ext._sprintWarmupTime = 0;
                        ext._sprintReleaseGrace = Math.max(0, (ext._sprintReleaseGrace ?? 0) - dtSec);
                    }
                    const hadRecentSprint = (lastInput.sprint ?? false) || (ext._sprintReleaseGrace ?? 0) > 0;
                    const warmupOk = (ext._sprintWarmupTime ?? 0) >= t.slideEnterMinSprintTime || (ext._sprintReleaseGrace ?? 0) > 0;
                    const horSpeed = Math.hypot(player.vx, player.vz);
                    const slideEnterCooldownOk = (ext._slideEnterCooldownTimer ?? 0) <= 0;
                    const canGroundSlide = (lastInput.slide ?? false) &&
                        hadRecentSprint &&
                        warmupOk &&
                        slideEnterCooldownOk &&
                        horSpeed >= t.slideEnterSpeed;
                    if (canGroundSlide) {
                        // #region agent log
                        try {
                            fs.appendFileSync("/home/seba/GitHub/browsershooter/.cursor/debug-0b0c37.log", JSON.stringify({ sessionId: "0b0c37", location: "ArenaFFA.ts:canGroundSlide", message: "Slide ENTER server", data: { horSpeed, slideEnterCooldown: ext._slideEnterCooldownTimer }, hypothesisId: "A", timestamp: Date.now() }) + "\n");
                        }
                        catch { }
                        // #endregion
                        player.movementState = "sliding";
                        ext._slideTime = 0;
                        const hor = Math.hypot(player.vx, player.vz);
                        const boost = Math.max(hor * t.slideSpeedBoost, t.slideInitialSpeed);
                        if (hor > 0) {
                            player.vx = (player.vx / hor) * boost;
                            player.vz = (player.vz / hor) * boost;
                        }
                    }
                    else {
                        const crouching = lastInput.slide ?? false;
                        const speed = crouching
                            ? t.maxSpeedCrouch
                            : lastInput.sprint
                                ? t.maxSpeedSprint
                                : t.maxSpeedWalk;
                        const accel = lastInput.sprint
                            ? t.accel * (t.maxSpeedSprint / t.maxSpeedWalk) * t.sprintAccelFactor
                            : t.accel;
                        const cos = Math.cos(player.yaw);
                        const sin = Math.sin(player.yaw);
                        const ax = ((lastInput.moveX ?? 0) * cos - (lastInput.moveZ ?? 0) * sin) * accel * dtSec;
                        const az = (-(lastInput.moveX ?? 0) * sin - (lastInput.moveZ ?? 0) * cos) * accel * dtSec;
                        player.vx += ax;
                        player.vz += az;
                        player.vx *= Math.max(0, 1 - t.friction * dtSec);
                        player.vz *= Math.max(0, 1 - t.friction * dtSec);
                        const hor = Math.hypot(player.vx, player.vz);
                        if (hor > speed) {
                            player.vx *= speed / hor;
                            player.vz *= speed / hor;
                        }
                        if (lastInput.jump) {
                            player.vy = t.jumpForce;
                            player.movementState = "airborne";
                        }
                        else {
                            player.vy = 0;
                        }
                    }
                }
                else {
                    if (lastInput.slide ?? false)
                        ext._slideOnLand = true;
                    player.vy -= t.gravity * dtSec;
                    player.vy = Math.max(player.vy, -t.maxFallSpeed);
                    const cos = Math.cos(player.yaw);
                    const sin = Math.sin(player.yaw);
                    const ax = ((lastInput.moveX ?? 0) * cos - (lastInput.moveZ ?? 0) * sin) * t.airAccel * dtSec * 0.3;
                    const az = (-(lastInput.moveX ?? 0) * sin - (lastInput.moveZ ?? 0) * cos) * t.airAccel * dtSec * 0.3;
                    player.vx += ax;
                    player.vz += az;
                    const hor = Math.hypot(player.vx, player.vz);
                    if (hor > t.airMaxSpeed && t.airMaxSpeed > 0) {
                        player.vx *= t.airMaxSpeed / hor;
                        player.vz *= t.airMaxSpeed / hor;
                    }
                }
                if (!sliding) {
                    player.x += player.vx * dtSec;
                    player.y += player.vy * dtSec;
                    player.z += player.vz * dtSec;
                    if (player.y <= GROUND_Y) {
                        player.y = GROUND_Y;
                        player.vy = 0;
                        const horLand = Math.hypot(player.vx, player.vz);
                        if (ext._slideOnLand && horLand >= t.slideEnterSpeed) {
                            player.movementState = "sliding";
                            ext._slideTime = 0;
                            ext._slideJumpCooldownTimer = 0;
                            const boost = Math.max(horLand * t.slideSpeedBoost, t.slideInitialSpeed);
                            if (horLand > 0) {
                                player.vx = (player.vx / horLand) * boost;
                                player.vz = (player.vz / horLand) * boost;
                            }
                        }
                        else if (player.movementState !== "sliding") {
                            player.movementState = "grounded";
                        }
                        ext._slideOnLand = false;
                    }
                    else {
                        player.movementState = "airborne";
                    }
                    const wall = resolveArenaWalls(player.x, player.z, PLAYER_RADIUS);
                    player.x = wall.x;
                    player.z = wall.z;
                    const vel = { x: player.vx, z: player.vz };
                    applyWallVelocitySlide(vel, wall);
                    player.vx = vel.x;
                    player.vz = vel.z;
                }
                const animId = resolveAnimationClipId({
                    moveX: lastInput.moveX ?? 0,
                    moveZ: lastInput.moveZ ?? 0,
                    sprint: lastInput.sprint ?? false,
                    crouching: player.movementState === "sliding" || (lastInput.slide ?? false),
                    movementState: player.movementState,
                });
                player.animationState = animId;
                const isStrafeFast = animId === "strafeLeftFast" || animId === "strafeRightFast";
                player.animationTimeScale = isStrafeFast && !(lastInput.sprint ?? false) ? 0.7 : 1;
            }
            else {
                player.animationState = "idle";
            }
            const shouldShoot = (lastInput?.shoot ?? false) || (ext._pendingShoot ?? false);
            const infiniteAmmo = (lastInput?.debugMode ?? false) ||
                process.env.DEBUG_INFINITE_AMMO === "1" ||
                process.env.DEBUG_HITSCAN === "1";
            if (shouldShoot &&
                (player.ammo > 0 || infiniteAmmo) &&
                (ext._reloadTicks === undefined || ext._reloadTicks <= 0)) {
                if (!infiniteAmmo)
                    player.ammo--;
                ext._pendingShoot = false;
                const crouching = player.movementState === "grounded" && (lastInput?.slide ?? false);
                const hitResult = this.hitscanRaycast(shooterId, player, crouching, lastInput);
                if (hitResult) {
                    const target = this.state.players.get(hitResult.targetId);
                    if (target) {
                        target.health = Math.max(0, target.health - HITSCAN_DAMAGE);
                        const shooterClient = Array.from(this.clients).find((c) => c.sessionId === shooterId);
                        if (shooterClient) {
                            shooterClient.send("hit", {
                                targetId: hitResult.targetId,
                                damage: HITSCAN_DAMAGE,
                                hitboxType: hitResult.hitboxType,
                            });
                        }
                        if (process.env.DEBUG_HITSCAN) {
                            console.log(`[ArenaFFA] Hit: ${shooterId} -> ${hitResult.targetId} (${hitResult.hitboxType})`);
                        }
                    }
                }
                else if (process.env.DEBUG_HITSCAN && this.state.players.size > 1) {
                    const otherCount = this.state.players.size - 1;
                    console.log(`[ArenaFFA] Shoot miss: ${shooterId} at (${player.x.toFixed(1)},${player.y.toFixed(1)},${player.z.toFixed(1)}) yaw=${player.yaw.toFixed(2)} pitch=${player.pitch.toFixed(2)} (${otherCount} other players)`);
                }
            }
        });
    }
    /** Max distance (m) from server pos to trust client-reported position for ray origin. */
    static { this.CLIENT_POS_TRUST_RADIUS = 5; }
    /** Max offset magnitude (m) for a single bone. Head ~1.6m above feet; strafe adds ~1m. */
    static { this.HITBOX_OFFSET_MAX = 3.2; }
    static storeHitboxPositionsIfValid(player, ext, lastInput) {
        // Use server position so hitbox matches what the shooter sees (replicated state).
        const rootX = player.x;
        const rootY = player.y;
        const rootZ = player.z;
        const hx = lastInput.headX;
        const hy = lastInput.headY;
        const hz = lastInput.headZ;
        const bcx = lastInput.bodyCenterX;
        const bcy = lastInput.bodyCenterY;
        const bcz = lastInput.bodyCenterZ;
        const stx = lastInput.spineTopX;
        const sty = lastInput.spineTopY;
        const stz = lastInput.spineTopZ;
        const px = lastInput.pelvisX;
        const py = lastInput.pelvisY;
        const pz = lastInput.pelvisZ;
        const fx = lastInput.feetX;
        const fy = lastInput.feetY;
        const fz = lastInput.feetZ;
        const hasAll = hx !== undefined &&
            hy !== undefined &&
            hz !== undefined &&
            bcx !== undefined &&
            bcy !== undefined &&
            bcz !== undefined &&
            stx !== undefined &&
            sty !== undefined &&
            stz !== undefined &&
            px !== undefined &&
            py !== undefined &&
            pz !== undefined &&
            fx !== undefined &&
            fy !== undefined &&
            fz !== undefined;
        if (!hasAll)
            return;
        const mag = (a, b, c) => Math.hypot(a, b, c);
        if (mag(hx, hy, hz) > ArenaFFARoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(bcx, bcy, bcz) > ArenaFFARoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(stx, sty, stz) > ArenaFFARoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(px, py, pz) > ArenaFFARoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(fx, fy, fz) > ArenaFFARoom.HITBOX_OFFSET_MAX)
            return;
        const headYAboveGround = rootY + hy;
        if (headYAboveGround < 0.5 || headYAboveGround > 3.0)
            return;
        if (fy > py + 0.5)
            return;
        ext._headX = rootX + hx;
        ext._headY = rootY + hy;
        ext._headZ = rootZ + hz;
        ext._bodyCenterX = rootX + bcx;
        ext._bodyCenterY = rootY + bcy;
        ext._bodyCenterZ = rootZ + bcz;
        ext._spineTopX = rootX + stx;
        ext._spineTopY = rootY + sty;
        ext._spineTopZ = rootZ + stz;
        ext._pelvisX = rootX + px;
        ext._pelvisY = rootY + py;
        ext._pelvisZ = rootZ + pz;
        ext._feetX = rootX + fx;
        ext._feetY = rootY + fy;
        ext._feetZ = rootZ + fz;
    }
    hitscanRaycast(shooterId, shooter, crouching, lastInput) {
        const eyeHeight = crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
        const cx = lastInput?.clientX;
        const cy = lastInput?.clientY;
        const cz = lastInput?.clientZ;
        const hasClientPos = cx !== undefined && cy !== undefined && cz !== undefined;
        const clientDelta = hasClientPos
            ? Math.hypot(cx - shooter.x, cy - shooter.y, cz - shooter.z)
            : Infinity;
        const useClientOrigin = hasClientPos && clientDelta <= ArenaFFARoom.CLIENT_POS_TRUST_RADIUS;
        const ox = useClientOrigin ? cx : shooter.x;
        const oy = (useClientOrigin ? cy : shooter.y) + eyeHeight;
        const oz = useClientOrigin ? cz : shooter.z;
        let dx;
        let dy;
        let dz;
        const adx = lastInput?.aimDirX;
        const ady = lastInput?.aimDirY;
        const adz = lastInput?.aimDirZ;
        if (adx !== undefined &&
            ady !== undefined &&
            adz !== undefined &&
            Math.abs(adx * adx + ady * ady + adz * adz - 1) < 0.01) {
            dx = adx;
            dy = ady;
            dz = adz;
        }
        else {
            const yaw = -shooter.yaw;
            dx = Math.sin(yaw);
            dy = Math.cos(yaw) * Math.sin(shooter.pitch);
            dz = -Math.cos(yaw) * Math.cos(shooter.pitch);
        }
        let bestId = null;
        let bestT = Infinity;
        let bestType = "body";
        this.state.players.forEach((p, targetId) => {
            if (targetId === shooterId)
                return;
            if (p.health <= 0)
                return;
            const targetExt = p;
            const useBoneHitboxes = targetExt._headX !== undefined &&
                targetExt._headY !== undefined &&
                targetExt._headZ !== undefined &&
                targetExt._bodyCenterX !== undefined &&
                targetExt._spineTopY !== undefined &&
                targetExt._pelvisX !== undefined &&
                targetExt._pelvisY !== undefined &&
                targetExt._feetY !== undefined;
            if (process.env.DEBUG_HITSCAN && !useBoneHitboxes) {
                console.log(`[ArenaFFA] Target ${targetId} using fallback hitboxes (missing bone data)`);
            }
            // Use full bone position when available; fallback to fixed height above feet.
            const headCx = useBoneHitboxes ? targetExt._headX : p.x;
            const headCy = useBoneHitboxes ? targetExt._headY : p.y + HEAD_HITBOX_HEIGHT;
            const headCz = useBoneHitboxes ? targetExt._headZ : p.z;
            const tHead = raySphereIntersection(ox, oy, oz, dx, dy, dz, headCx, headCy, headCz, HEAD_HITBOX_RADIUS);
            if (tHead !== null && tHead > 0 && tHead <= HITSCAN_RANGE && tHead < bestT) {
                const los = rayArenaIntersection(ox, oy, oz, dx, dy, dz, tHead);
                if (!los.hit || (los.t !== undefined && los.t > tHead)) {
                    bestT = tHead;
                    bestId = targetId;
                    bestType = "head";
                }
            }
            if (DEBUG_HEAD_ONLY) {
                return;
            }
            let tBody;
            if (useBoneHitboxes) {
                const bcx = (targetExt._bodyCenterX + targetExt._pelvisX) / 2;
                const bcz = (targetExt._bodyCenterZ + targetExt._pelvisZ) / 2;
                const bodyTopY = targetExt._spineTopY + BODY_CAPSULE_TOP_EXTEND;
                tBody = rayCapsuleIntersection(ox, oy, oz, dx, dy, dz, bcx, 0, bcz, targetExt._feetY, bodyTopY, BODY_CAPSULE_RADIUS);
            }
            else {
                tBody = rayCapsuleIntersection(ox, oy, oz, dx, dy, dz, p.x, p.y, p.z, 0, BODY_CAPSULE_TOP, BODY_CAPSULE_RADIUS);
            }
            if (tBody !== null && tBody > 0 && tBody <= HITSCAN_RANGE && tBody < bestT) {
                const los = rayArenaIntersection(ox, oy, oz, dx, dy, dz, tBody);
                if (!los.hit || (los.t !== undefined && los.t > tBody)) {
                    bestT = tBody;
                    bestId = targetId;
                    bestType = "body";
                }
            }
        });
        return bestId ? { targetId: bestId, hitboxType: bestType } : null;
    }
}
