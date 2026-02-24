/**
 * Message types for client-server communication.
 * Colyseus schema will be generated from or aligned with these.
 */
import type { PlayerInput } from "../types/index.js";
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
};
//# sourceMappingURL=messages.d.ts.map