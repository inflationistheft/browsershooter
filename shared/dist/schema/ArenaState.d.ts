/**
 * Colyseus schema for arena room state. Shared by client and server.
 */
import { Schema, MapSchema } from "@colyseus/schema";
export declare class PlayerStateSchema extends Schema {
    id: string;
    x: number;
    y: number;
    z: number;
    yaw: number;
    pitch: number;
    vx: number;
    vy: number;
    vz: number;
    movementState: string;
    health: number;
    maxHealth: number;
    currentWeapon: string;
    ammo: number;
    maxAmmo: number;
}
export declare class ArenaState extends Schema {
    players: MapSchema<PlayerStateSchema, string>;
}
//# sourceMappingURL=ArenaState.d.ts.map