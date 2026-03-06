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
/** Server->client payload when the local client successfully hits a target. */
export interface HitMessagePayload {
    targetId: string;
    damage: number;
    hitboxType?: "head" | "body";
    hitX?: number;
    hitY?: number;
    hitZ?: number;
}
/** Server->client payload when the local client is hit by someone else. */
export interface HitReceivedPayload {
    dirX: number;
    dirY: number;
    dirZ: number;
    damage?: number;
    hitX?: number;
    hitY?: number;
    hitZ?: number;
}
/** Server->client payload describing a fired shot (hitscan trace). */
export interface ShotMessagePayload {
    shooterId: string;
    ox: number;
    oy: number;
    oz: number;
    dx: number;
    dy: number;
    dz: number;
    hitX?: number;
    hitY?: number;
    hitZ?: number;
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
    payload: HitMessagePayload;
} | {
    type: "hitReceived";
    payload: HitReceivedPayload;
} | {
    type: "kill";
    payload: KillEventPayload;
} | {
    type: "shot";
    payload: ShotMessagePayload;
};
//# sourceMappingURL=messages.d.ts.map