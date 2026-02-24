/**
 * FFA Arena room: tick loop, state sync, placeholder movement.
 */
import { Room } from "colyseus";
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
        state.y = 2;
        state.z = 0;
        state.health = 100;
        state.maxHealth = 100;
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
        // Placeholder: just store last input; real movement in simulation step
        player._lastInput = input;
    }
    tick(_dt) {
        this.state.players.forEach((player) => {
            const lastInput = player._lastInput;
            if (lastInput) {
                const speed = 5;
                const dx = (lastInput.moveX ?? 0) * speed * (serverConfig.tickMs / 1000);
                const dz = (lastInput.moveZ ?? 0) * speed * (serverConfig.tickMs / 1000);
                const cos = Math.cos(player.yaw);
                const sin = Math.sin(player.yaw);
                player.x += dx * cos - dz * sin;
                player.z += dx * sin + dz * cos;
                if (lastInput.yaw !== undefined)
                    player.yaw = lastInput.yaw;
                if (lastInput.pitch !== undefined)
                    player.pitch = lastInput.pitch;
            }
        });
    }
}
