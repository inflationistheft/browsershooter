/**
 * Message types for client-server communication.
 * Colyseus schema will be generated from or aligned with these.
 */
import type { PlayerInput } from "../types/index.js";
/** Identifier for weapon used in a kill event. */
export type WeaponId = "rifle";
/** Server->client payload when a player kills another player. */
export interface KillEventPayload {
    killerId: string;
    victimId: string;
    weaponId: WeaponId;
    isHeadshot: boolean;
}
export type ClientMessage = {
    type: "input";
    payload: PlayerInput;
} | {
    type: "ping";
    payload: {
        clientTime: number;
    };
};
export type ServerMessage = {
    type: "pong";
    payload: {
        clientTime: number;
        serverTime: number;
    };
} | {
    type: "hit";
    payload: {
        targetId: string;
        damage: number;
    };
} | {
    type: "hitReceived";
    payload: {
        dirX: number;
        dirY: number;
        dirZ: number;
        damage?: number;
    };
} | {
    type: "kill";
    payload: KillEventPayload;
};
//# sourceMappingURL=messages.d.ts.map