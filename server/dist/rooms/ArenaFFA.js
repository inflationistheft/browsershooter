/**
 * FFA Arena room: tick loop, state sync, placeholder movement.
 */
import { Room } from "@colyseus/core";
import { movementTuning, resolveArenaWalls, PLAYER_RADIUS, DEFAULT_MAX_HEALTH, } from "shared";
import { ArenaState, PlayerState } from "./schema/ArenaState.js";
import { serverConfig } from "../config/index.js";
export class ArenaFFARoom extends Room {
    onCreate() {
        this.setState(new ArenaState());
        this.setSimulationInterval((dt) => this.tick(dt), serverConfig.tickMs);
        this.onMessage("input", (client, message) => this.onInput(client, message));
    }
    onJoin(client) {
        const state = new PlayerState();
        state.id = client.id;
        state.x = 0;
        state.y = 0;
        state.z = 0;
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
        this.state.players.forEach((player) => {
            const lastInput = player._lastInput;
            if (lastInput) {
                const speed = lastInput.sprint ? t.maxSpeedSprint : t.maxSpeedWalk;
                const dx = (lastInput.moveX ?? 0) * speed * dtSec;
                const dz = (lastInput.moveZ ?? 0) * speed * dtSec;
                const cos = Math.cos(player.yaw);
                const sin = Math.sin(player.yaw);
                player.x += dx * cos - dz * sin;
                player.z += dx * sin + dz * cos;
                if (lastInput.yaw !== undefined)
                    player.yaw = lastInput.yaw;
                if (lastInput.pitch !== undefined)
                    player.pitch = lastInput.pitch;
                const wall = resolveArenaWalls(player.x, player.z, PLAYER_RADIUS);
                player.x = wall.x;
                player.z = wall.z;
            }
        });
    }
}
