/**
 * FFA Arena room: tick loop, state sync, placeholder movement.
 */
import { Room } from "@colyseus/core";
import { movementTuning, resolveArenaWalls, applyWallVelocitySlide, PLAYER_RADIUS, PLAYER_EYE_HEIGHT, PLAYER_HITBOX_CENTER_HEIGHT, HITSCAN_RANGE, HITSCAN_DAMAGE, RELOAD_TICKS, DEFAULT_MAX_HEALTH, } from "shared";
import { ArenaState, PlayerStateSchema } from "shared";
import { serverConfig } from "../config/index.js";
export class ArenaFFARoom extends Room {
    onCreate() {
        this.setState(new ArenaState());
        this.setSimulationInterval((dt) => this.tick(dt), serverConfig.tickMs);
        this.onMessage("input", (client, message) => this.onInput(client, message));
    }
    /** Spawn offsets so players don't stack at origin. */
    static { this.SPAWN_OFFSETS = [
        [0, 0, 0],
        [4, 0, 4],
        [-4, 0, 4],
        [4, 0, -4],
        [-4, 0, -4],
    ]; }
    onJoin(client) {
        const idx = this.state.players.size % ArenaFFARoom.SPAWN_OFFSETS.length;
        const [sx, sy, sz] = ArenaFFARoom.SPAWN_OFFSETS[idx];
        const state = new PlayerStateSchema();
        state.id = client.id;
        state.x = sx;
        state.y = sy;
        state.z = sz;
        state.health = DEFAULT_MAX_HEALTH;
        state.maxHealth = DEFAULT_MAX_HEALTH;
        state.ammo = 30;
        state.maxAmmo = 30;
        this.state.players.set(client.id, state);
    }
    onLeave(client) {
        this.state.players.delete(client.id);
    }
    onInput(client, message) {
        const player = this.state.players.get(client.id);
        if (!player)
            return;
        const input = message;
        player._lastInput = input;
    }
    tick(_dt) {
        const t = movementTuning;
        const dtSec = serverConfig.tickMs / 1000;
        const GROUND_Y = 0;
        this.state.players.forEach((player, shooterId) => {
            const ext = player;
            const lastInput = ext._lastInput;
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
                const grounded = player.movementState === "grounded";
                if (grounded) {
                    const speed = lastInput.sprint ? t.maxSpeedSprint : t.maxSpeedWalk;
                    const accel = lastInput.sprint ? t.accel * (t.maxSpeedSprint / t.maxSpeedWalk) * t.sprintAccelFactor : t.accel;
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
                else {
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
                player.x += player.vx * dtSec;
                player.y += player.vy * dtSec;
                player.z += player.vz * dtSec;
                if (player.y <= GROUND_Y) {
                    player.y = GROUND_Y;
                    player.vy = 0;
                    player.movementState = "grounded";
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
            if (lastInput?.shoot &&
                player.ammo > 0 &&
                (ext._reloadTicks === undefined || ext._reloadTicks <= 0)) {
                player.ammo--;
                const hit = this.hitscanRaycast(shooterId, player);
                if (hit) {
                    const target = this.state.players.get(hit);
                    if (target) {
                        target.health = Math.max(0, target.health - HITSCAN_DAMAGE);
                    }
                }
            }
        });
    }
    hitscanRaycast(shooterId, shooter) {
        const ox = shooter.x;
        const oy = shooter.y + PLAYER_EYE_HEIGHT;
        const oz = shooter.z;
        const dx = Math.sin(shooter.yaw) * Math.cos(shooter.pitch);
        const dy = Math.sin(shooter.pitch);
        const dz = -Math.cos(shooter.yaw) * Math.cos(shooter.pitch);
        let bestId = null;
        let bestT = Infinity;
        this.state.players.forEach((p, targetId) => {
            if (targetId === shooterId)
                return;
            const cx = p.x;
            const cy = p.y + PLAYER_HITBOX_CENTER_HEIGHT;
            const cz = p.z;
            const ocx = ox - cx;
            const ocy = oy - cy;
            const ocz = oz - cz;
            const odotd = ocx * dx + ocy * dy + ocz * dz;
            if (odotd > 0)
                return;
            const oco = ocx * ocx + ocy * ocy + ocz * ocz;
            const discr = odotd * odotd - oco + PLAYER_RADIUS * PLAYER_RADIUS;
            if (discr < 0)
                return;
            const sqrtD = Math.sqrt(discr);
            const t = -odotd - sqrtD;
            if (t < 0 || t > HITSCAN_RANGE)
                return;
            if (t < bestT) {
                bestT = t;
                bestId = targetId;
            }
        });
        return bestId;
    }
}
