/**
 * 1v1 Duel "reference" room: layout from 1v1spawns.json in code (floor + walls only, no ramps).
 */
import { Room } from "@colyseus/core";
import { rayArenaIntersection, resolveAnimationClipId, TICK_RATE, PLAYER_RADIUS, PLAYER_HEIGHT, PLAYER_EYE_HEIGHT, CROUCH_EYE_HEIGHT, HITSCAN_RANGE, HITSCAN_BODY_DAMAGE, HITSCAN_HEAD_MULTIPLIER, SHOT_INTERVAL_TICKS, RELOAD_TICKS, REGEN_DELAY_TICKS, SHIELD_REGEN_PER_SEC, HEALTH_REGEN_PER_SEC, MAX_SHIELD, MAX_HEALTH, RESPAWN_DELAY_SEC, HEAD_HITBOX_HEIGHT, HEAD_HITBOX_RADIUS, BODY_CAPSULE_TOP, BODY_CAPSULE_RADIUS, BODY_CAPSULE_TOP_EXTEND, BULLET_RADIUS, raySphereIntersection, rayCapsuleIntersection, DEBUG_HEAD_ONLY, stepPlayerMovement, tickMovementTimers, resolvePlayerCollisions, rayStaticWorldIntersection, buildDuel1v1RefStaticWorld, getDuel1v1RefSpawnPoints, isPointInsideAabb, } from "shared";
import { ArenaState, PlayerStateSchema } from "shared";
import { serverConfig } from "../config/index.js";
import { createPlayerExtendedState, } from "../PlayerExtendedState.js";
export class Arena1v1RefRoom extends Room {
    constructor() {
        super(...arguments);
        this.playerExt = new Map();
        this.spawnPoints = [];
        this.killVolumes = [];
        this._tickCount = 0;
    }
    onCreate() {
        this.staticWorld = buildDuel1v1RefStaticWorld();
        this.spawnPoints = getDuel1v1RefSpawnPoints().map((sp, i) => ({
            team: i,
            position: sp.position,
            rotation: sp.rotation,
        }));
        this.killVolumes = [];
        console.log(`[Arena1v1Ref] Duel ref arena ready with ${this.spawnPoints.length} spawn points.`);
        this.setState(new ArenaState());
        this.setSimulationInterval((dt) => this.tick(dt), serverConfig.tickMs);
        this.onMessage("input", (client, message) => this.onInput(client, message));
        this.onMessage("ping", (client, message) => client.send("pong", message));
    }
    pickSpawn() {
        if (this.spawnPoints.length > 0) {
            const idx = Math.floor(Math.random() * this.spawnPoints.length);
            const sp = this.spawnPoints[idx];
            const [sx, sy, sz] = sp.position;
            return { x: sx, y: sy, z: sz };
        }
        const fallbacks = [
            [-20, 6.2, 2], [-20, 6.2, 18], [20, 6.2, -13], [19, 6.2, 18],
        ];
        const idx = Math.floor(Math.random() * fallbacks.length);
        const [sx, sy, sz] = fallbacks[idx];
        return { x: sx, y: sy, z: sz };
    }
    onJoin(client) {
        this.playerExt.set(client.sessionId, createPlayerExtendedState());
        const { x: sx, y: sy, z: sz } = this.pickSpawn();
        const state = new PlayerStateSchema();
        state.id = client.sessionId;
        state.x = sx;
        state.y = sy;
        state.z = sz;
        state.shield = MAX_SHIELD;
        state.maxShield = MAX_SHIELD;
        state.health = MAX_HEALTH;
        state.maxHealth = MAX_HEALTH;
        state.ammo = 30;
        state.maxAmmo = 30;
        this.state.players.set(client.sessionId, state);
        console.log(`[Arena1v1Ref] Client ${client.sessionId} joined. Players in room: ${this.state.players.size}`);
    }
    onLeave(client) {
        this.playerExt.delete(client.sessionId);
        this.state.players.delete(client.sessionId);
        console.log(`[Arena1v1Ref] Client ${client.sessionId} left. Players in room: ${this.state.players.size}`);
    }
    onInput(client, message) {
        const ext = this.playerExt.get(client.sessionId);
        if (!ext)
            return;
        const input = message;
        ext.lastInput = input;
    }
    tick(_dt) {
        this._tickCount++;
        const dtSec = serverConfig.tickMs / 1000;
        const RESPAWN_TICKS = Math.ceil(RESPAWN_DELAY_SEC * TICK_RATE);
        this.state.players.forEach((player, shooterId) => {
            let ext = this.playerExt.get(shooterId);
            if (!ext) {
                ext = createPlayerExtendedState();
                this.playerExt.set(shooterId, ext);
            }
            const lastInput = ext.lastInput;
            if (player.health <= 0) {
                if (ext.respawnTicks === undefined) {
                    ext.respawnTicks = RESPAWN_TICKS;
                }
                ext.respawnTicks--;
                if (ext.respawnTicks <= 0) {
                    const { x: sx, y: sy, z: sz } = this.pickSpawn();
                    player.shield = player.maxShield;
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
                    ext.respawnTicks = undefined;
                    ext.slideTime = undefined;
                    ext.slideJumpCooldownTimer = undefined;
                    ext.slideEnterCooldownTimer = undefined;
                    ext.slideOnLand = false;
                    ext.horSpeedWhenJumped = 0;
                    ext.lastApproachVx = 0;
                    ext.lastApproachVz = 0;
                    ext.lastJumpHeld = false;
                    ext.lastHasSlideIntent = false;
                    ext.dashCooldownTimer = 0;
                    ext.dashActiveTimer = 0;
                    ext.lastDashDirX = 0;
                    ext.lastDashDirZ = 0;
                }
                return;
            }
            const movementExt = {
                get slideTime() {
                    return ext.slideTime ?? 0;
                },
                set slideTime(v) {
                    ext.slideTime = v;
                },
                get slideEnterCooldownTimer() {
                    return ext.slideEnterCooldownTimer ?? 0;
                },
                set slideEnterCooldownTimer(v) {
                    ext.slideEnterCooldownTimer = v;
                },
                get slideJumpCooldownTimer() {
                    return ext.slideJumpCooldownTimer ?? 0;
                },
                set slideJumpCooldownTimer(v) {
                    ext.slideJumpCooldownTimer = v;
                },
                get slideOnLand() {
                    return ext.slideOnLand ?? false;
                },
                set slideOnLand(v) {
                    ext.slideOnLand = v;
                },
                get horSpeedWhenJumped() {
                    return ext.horSpeedWhenJumped ?? 0;
                },
                set horSpeedWhenJumped(v) {
                    ext.horSpeedWhenJumped = v;
                },
                get lastApproachVx() {
                    return ext.lastApproachVx ?? 0;
                },
                set lastApproachVx(v) {
                    ext.lastApproachVx = v;
                },
                get lastApproachVz() {
                    return ext.lastApproachVz ?? 0;
                },
                set lastApproachVz(v) {
                    ext.lastApproachVz = v;
                },
                get lastJumpHeld() {
                    return ext.lastJumpHeld ?? false;
                },
                set lastJumpHeld(v) {
                    ext.lastJumpHeld = v;
                },
                get lastHasSlideIntent() {
                    return ext.lastHasSlideIntent ?? false;
                },
                set lastHasSlideIntent(v) {
                    ext.lastHasSlideIntent = v;
                },
                get dashCooldownTimer() {
                    return ext.dashCooldownTimer ?? 0;
                },
                set dashCooldownTimer(v) {
                    ext.dashCooldownTimer = v;
                },
                get dashActiveTimer() {
                    return ext.dashActiveTimer ?? 0;
                },
                set dashActiveTimer(v) {
                    ext.dashActiveTimer = v;
                },
                get lastDashDirX() {
                    return ext.lastDashDirX ?? 0;
                },
                set lastDashDirX(v) {
                    ext.lastDashDirX = v;
                },
                get lastDashDirZ() {
                    return ext.lastDashDirZ ?? 0;
                },
                set lastDashDirZ(v) {
                    ext.lastDashDirZ = v;
                },
            };
            tickMovementTimers(movementExt, dtSec);
            if (ext.shootCooldownTicks !== undefined && ext.shootCooldownTicks > 0) {
                ext.shootCooldownTicks--;
            }
            if (ext.reloadTicks !== undefined && ext.reloadTicks > 0) {
                ext.reloadTicks--;
                if (ext.reloadTicks === 0) {
                    player.ammo = player.maxAmmo;
                }
            }
            else if (lastInput?.reload && player.ammo < player.maxAmmo) {
                ext.reloadTicks = RELOAD_TICKS;
            }
            if (player.shield < player.maxShield ||
                player.health < player.maxHealth) {
                const lastDamageTick = ext.lastDamageTick ?? 0;
                if (this._tickCount - lastDamageTick >= REGEN_DELAY_TICKS) {
                    if (player.shield < player.maxShield) {
                        player.shield = Math.min(player.maxShield, player.shield + SHIELD_REGEN_PER_SEC * dtSec);
                    }
                    else if (player.health < player.maxHealth) {
                        player.health = Math.min(player.maxHealth, player.health + HEALTH_REGEN_PER_SEC * dtSec);
                    }
                }
            }
            if (lastInput) {
                if (lastInput.yaw !== undefined)
                    player.yaw = lastInput.yaw;
                if (lastInput.pitch !== undefined)
                    player.pitch = lastInput.pitch;
                Arena1v1RefRoom.storeHitboxPositionsIfValid(player, ext, lastInput);
                const hasSlideIntent = (lastInput.slide ?? false) || (lastInput.slideIntentTicks ?? 0) > 0;
                const crouch = lastInput.crouch ?? false;
                const movementInput = {
                    moveX: lastInput.moveX ?? 0,
                    moveZ: lastInput.moveZ ?? 0,
                    jump: lastInput.jump ?? false,
                    jumpHeld: lastInput.jump ?? false,
                    hasSlideIntent,
                    crouch,
                    dash: lastInput.dash ?? false,
                    yaw: player.yaw,
                    pitch: player.pitch,
                };
                const movementState = {
                    x: player.x,
                    y: player.y,
                    z: player.z,
                    vx: player.vx,
                    vy: player.vy,
                    vz: player.vz,
                    movementState: player.movementState,
                    ext: movementExt,
                };
                stepPlayerMovement(movementState, movementInput, dtSec, PLAYER_RADIUS, PLAYER_HEIGHT, this.staticWorld);
                player.x = movementState.x;
                player.y = movementState.y;
                player.z = movementState.z;
                player.vx = movementState.vx;
                player.vy = movementState.vy;
                player.vz = movementState.vz;
                player.movementState = movementState.movementState;
                const dashActive = (ext.dashActiveTimer ?? 0) > 0;
                const animId = resolveAnimationClipId({
                    moveX: lastInput.moveX ?? 0,
                    moveZ: lastInput.moveZ ?? 0,
                    sprint: lastInput.sprint ?? false,
                    crouching: player.movementState === "sliding" || crouch,
                    movementState: player.movementState,
                    isDashing: dashActive,
                    dashDirX: ext.lastDashDirX ?? 0,
                    dashDirZ: ext.lastDashDirZ ?? 0,
                });
                player.animationState = animId;
                const isStrafeFast = animId === "strafeLeftFast" || animId === "strafeRightFast";
                if (dashActive) {
                    player.animationTimeScale = 0;
                }
                else {
                    player.animationTimeScale = isStrafeFast && !(lastInput.sprint ?? false) ? 0.7 : 1;
                }
            }
            else {
                player.animationState = "idle";
            }
            // Kill plane: below y = -20 triggers respawn (e.g. fell off map)
            const DUEL_REF_KILL_PLANE_Y = -20;
            if (player.health > 0 && player.y < DUEL_REF_KILL_PLANE_Y) {
                player.health = 0;
                ext.respawnTicks = RESPAWN_TICKS;
                this.broadcastKillEvent({
                    killerId: "",
                    victimId: shooterId,
                    weaponId: "rifle",
                    isHeadshot: false,
                });
            }
            // Kill volume: if player is inside any, treat as death and start respawn
            if (player.health > 0 && this.killVolumes.length > 0) {
                for (const vol of this.killVolumes) {
                    if (isPointInsideAabb(player.x, player.y, player.z, vol)) {
                        player.health = 0;
                        ext.respawnTicks = RESPAWN_TICKS;
                        this.broadcastKillEvent({
                            killerId: "",
                            victimId: shooterId,
                            weaponId: "rifle",
                            isHeadshot: false,
                        });
                        break;
                    }
                }
            }
            /** Only shoot when input has shoot and cooldown allows. No queuing: clicks during cooldown are ignored. */
            const shouldShoot = lastInput?.shoot ?? false;
            const infiniteAmmo = (lastInput?.debugMode ?? false) ||
                process.env.DEBUG_INFINITE_AMMO === "1" ||
                process.env.DEBUG_HITSCAN === "1";
            const shootCooldownOk = ext.shootCooldownTicks === undefined || ext.shootCooldownTicks <= 0;
            if (shouldShoot &&
                (player.ammo > 0 || infiniteAmmo) &&
                (ext.reloadTicks === undefined || ext.reloadTicks <= 0) &&
                shootCooldownOk) {
                if (!infiniteAmmo)
                    player.ammo--;
                ext.shootCooldownTicks = SHOT_INTERVAL_TICKS;
                player.lastShotTick = this._tickCount;
                const crouching = player.movementState === "sliding" ||
                    (player.movementState === "grounded" && (lastInput?.crouch ?? false));
                const hitResult = this.hitscanRaycast(shooterId, player, crouching, lastInput);
                if (hitResult) {
                    const target = this.state.players.get(hitResult.targetId);
                    if (target) {
                        const wasAlive = target.health > 0;
                        const headDamage = target.shield > 0
                            ? HITSCAN_BODY_DAMAGE
                            : Math.round(HITSCAN_BODY_DAMAGE * HITSCAN_HEAD_MULTIPLIER);
                        const baseDamage = hitResult.hitboxType === "head" ? headDamage : HITSCAN_BODY_DAMAGE;
                        if (target.shield > 0) {
                            target.shield = Math.max(0, target.shield - baseDamage);
                        }
                        else {
                            target.health = Math.max(0, target.health - baseDamage);
                        }
                        const hitTargetExt = this.playerExt.get(hitResult.targetId);
                        if (hitTargetExt)
                            hitTargetExt.lastDamageTick = this._tickCount;
                        const actualDamage = baseDamage;
                        const shooterClient = Array.from(this.clients).find((c) => c.sessionId === shooterId);
                        if (shooterClient) {
                            shooterClient.send("hit", {
                                targetId: hitResult.targetId,
                                damage: actualDamage,
                                hitboxType: hitResult.hitboxType,
                                hitX: hitResult.hitX,
                                hitY: hitResult.hitY,
                                hitZ: hitResult.hitZ,
                            });
                        }
                        const targetClient = Array.from(this.clients).find((c) => c.sessionId === hitResult.targetId);
                        if (targetClient) {
                            const dirX = player.x - target.x;
                            const dirY = player.y - target.y;
                            const dirZ = player.z - target.z;
                            const len = Math.hypot(dirX, dirY, dirZ) || 1;
                            targetClient.send("hitReceived", {
                                dirX: dirX / len,
                                dirY: dirY / len,
                                dirZ: dirZ / len,
                                damage: actualDamage,
                                hitX: hitResult.hitX,
                                hitY: hitResult.hitY,
                                hitZ: hitResult.hitZ,
                            });
                        }
                        if (wasAlive && target.health <= 0) {
                            const payload = {
                                killerId: shooterId,
                                victimId: hitResult.targetId,
                                weaponId: "rifle",
                                isHeadshot: hitResult.hitboxType === "head",
                            };
                            this.broadcastKillEvent(payload);
                        }
                        if (process.env.DEBUG_HITSCAN) {
                            console.log(`[Arena1v1Ref] Hit: ${shooterId} -> ${hitResult.targetId} (${hitResult.hitboxType})`);
                        }
                    }
                }
                else if (process.env.DEBUG_HITSCAN && this.state.players.size > 1) {
                    const otherCount = this.state.players.size - 1;
                    console.log(`[Arena1v1Ref] Shoot miss: ${shooterId} at (${player.x.toFixed(1)},${player.y.toFixed(1)},${player.z.toFixed(1)}) yaw=${player.yaw.toFixed(2)} pitch=${player.pitch.toFixed(2)} (${otherCount} other players)`);
                }
            }
        });
        // Resolve player-player collisions (push apart, bounce)
        resolvePlayerCollisions(this.state.players, (id) => (this.state.players.get(id)?.health ?? 0) > 0, PLAYER_RADIUS, PLAYER_HEIGHT);
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
        if (mag(hx, hy, hz) > Arena1v1RefRoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(bcx, bcy, bcz) > Arena1v1RefRoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(stx, sty, stz) > Arena1v1RefRoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(px, py, pz) > Arena1v1RefRoom.HITBOX_OFFSET_MAX)
            return;
        if (mag(fx, fy, fz) > Arena1v1RefRoom.HITBOX_OFFSET_MAX)
            return;
        const headYAboveGround = rootY + hy;
        if (headYAboveGround < 0.5 || headYAboveGround > 3.0)
            return;
        if (fy > py + 0.5)
            return;
        ext.headX = rootX + hx;
        ext.headY = rootY + hy;
        ext.headZ = rootZ + hz;
        ext.bodyCenterX = rootX + bcx;
        ext.bodyCenterY = rootY + bcy;
        ext.bodyCenterZ = rootZ + bcz;
        ext.spineTopX = rootX + stx;
        ext.spineTopY = rootY + sty;
        ext.spineTopZ = rootZ + stz;
        ext.pelvisX = rootX + px;
        ext.pelvisY = rootY + py;
        ext.pelvisZ = rootZ + pz;
        ext.feetX = rootX + fx;
        ext.feetY = rootY + fy;
        ext.feetZ = rootZ + fz;
    }
    hitscanRaycast(shooterId, shooter, crouching, lastInput) {
        const eyeHeight = crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
        // Prefer shot-tied position when shooting (exact frame data)
        const scx = lastInput?.shootClientX;
        const scy = lastInput?.shootClientY;
        const scz = lastInput?.shootClientZ;
        const hasShootPos = scx !== undefined && scy !== undefined && scz !== undefined;
        const shootPosDelta = hasShootPos
            ? Math.hypot(scx - shooter.x, scy - shooter.y, scz - shooter.z)
            : Infinity;
        const useShootPos = hasShootPos && shootPosDelta <= Arena1v1RefRoom.CLIENT_POS_TRUST_RADIUS;
        const cx = useShootPos ? scx : lastInput?.clientX;
        const cy = useShootPos ? scy : lastInput?.clientY;
        const cz = useShootPos ? scz : lastInput?.clientZ;
        const hasClientPos = cx !== undefined && cy !== undefined && cz !== undefined;
        const clientDelta = hasClientPos
            ? Math.hypot(cx - shooter.x, cy - shooter.y, cz - shooter.z)
            : Infinity;
        const useClientOrigin = hasClientPos && clientDelta <= Arena1v1RefRoom.CLIENT_POS_TRUST_RADIUS;
        // shootClient is already eye position; clientPos/shooter need +eyeHeight
        const ox = useClientOrigin ? cx : shooter.x;
        const oy = useShootPos
            ? scy
            : (useClientOrigin ? cy : shooter.y) + eyeHeight;
        const oz = useClientOrigin ? cz : shooter.z;
        // Prefer shot-tied aim direction when available (exact frame data)
        let dx;
        let dy;
        let dz;
        const sadx = lastInput?.shootAimX;
        const sady = lastInput?.shootAimY;
        const sadz = lastInput?.shootAimZ;
        const hasShootAim = sadx !== undefined &&
            sady !== undefined &&
            sadz !== undefined &&
            Math.abs(sadx * sadx + sady * sady + sadz * sadz - 1) < 0.01;
        if (hasShootAim) {
            dx = sadx;
            dy = sady;
            dz = sadz;
        }
        else {
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
        }
        const rayWorld = (maxT) => this.staticWorld
            ? rayStaticWorldIntersection(ox, oy, oz, dx, dy, dz, maxT, this.staticWorld)
            : rayArenaIntersection(ox, oy, oz, dx, dy, dz, maxT);
        let bestId = null;
        let bestT = Infinity;
        let bestType = "body";
        this.state.players.forEach((p, targetId) => {
            if (targetId === shooterId)
                return;
            if (p.health <= 0)
                return;
            const targetExt = this.playerExt.get(targetId);
            const useBoneHitboxes = targetExt?.headX !== undefined &&
                targetExt?.headY !== undefined &&
                targetExt?.headZ !== undefined &&
                targetExt?.bodyCenterX !== undefined &&
                targetExt?.spineTopY !== undefined &&
                targetExt?.pelvisX !== undefined &&
                targetExt?.pelvisY !== undefined &&
                targetExt?.feetY !== undefined;
            if (process.env.DEBUG_HITSCAN && !useBoneHitboxes) {
                console.log(`[Arena1v1Ref] Target ${targetId} using fallback hitboxes (missing bone data)`);
            }
            const headCx = useBoneHitboxes && targetExt ? targetExt.headX : p.x;
            const headCy = useBoneHitboxes && targetExt ? targetExt.headY : p.y + HEAD_HITBOX_HEIGHT;
            const headCz = useBoneHitboxes && targetExt ? targetExt.headZ : p.z;
            const tHead = raySphereIntersection(ox, oy, oz, dx, dy, dz, headCx, headCy, headCz, HEAD_HITBOX_RADIUS + BULLET_RADIUS);
            if (tHead !== null && tHead > 0 && tHead <= HITSCAN_RANGE && tHead < bestT) {
                const los = rayWorld(tHead);
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
            if (useBoneHitboxes && targetExt) {
                const bcx = (targetExt.bodyCenterX + targetExt.pelvisX) / 2;
                const bcz = (targetExt.bodyCenterZ + targetExt.pelvisZ) / 2;
                const bodyTopY = targetExt.spineTopY + BODY_CAPSULE_TOP_EXTEND;
                tBody = rayCapsuleIntersection(ox, oy, oz, dx, dy, dz, bcx, 0, bcz, targetExt.feetY, bodyTopY, BODY_CAPSULE_RADIUS + BULLET_RADIUS);
            }
            else {
                tBody = rayCapsuleIntersection(ox, oy, oz, dx, dy, dz, p.x, p.y, p.z, 0, BODY_CAPSULE_TOP, BODY_CAPSULE_RADIUS + BULLET_RADIUS);
            }
            if (tBody !== null && tBody > 0 && tBody <= HITSCAN_RANGE && tBody < bestT) {
                const los = rayWorld(tBody);
                if (!los.hit || (los.t !== undefined && los.t > tBody)) {
                    bestT = tBody;
                    bestId = targetId;
                    bestType = "body";
                }
            }
        });
        // Determine where the visible shot should end for tracers / sparks.
        let shotHitX;
        let shotHitY;
        let shotHitZ;
        if (bestId) {
            shotHitX = ox + dx * bestT;
            shotHitY = oy + dy * bestT;
            shotHitZ = oz + dz * bestT;
        }
        else {
            const worldHit = rayWorld(HITSCAN_RANGE);
            if (worldHit.hit && worldHit.t !== undefined) {
                shotHitX = ox + dx * worldHit.t;
                shotHitY = oy + dy * worldHit.t;
                shotHitZ = oz + dz * worldHit.t;
            }
        }
        // Broadcast shot ray for client-side tracers (3P) plus optional hit point
        // so that the visible tracer and spark stop exactly at the impact.
        this.broadcast("shot", {
            shooterId,
            ox,
            oy,
            oz,
            dx,
            dy,
            dz,
            hitX: shotHitX,
            hitY: shotHitY,
            hitZ: shotHitZ,
        });
        if (!bestId || shotHitX === undefined || shotHitY === undefined || shotHitZ === undefined) {
            return null;
        }
        return {
            targetId: bestId,
            hitboxType: bestType,
            hitX: shotHitX,
            hitY: shotHitY,
            hitZ: shotHitZ,
        };
    }
    broadcastKillEvent(payload) {
        this.broadcast("kill", payload);
    }
}
