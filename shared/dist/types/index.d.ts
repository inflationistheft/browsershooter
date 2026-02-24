/**
 * Shared types for client and server.
 */
export interface Vec3 {
    x: number;
    y: number;
    z: number;
}
export interface PlayerState {
    id: string;
    position: Vec3;
    rotation: Vec3;
    velocity: Vec3;
    movementState: MovementState;
    health: number;
    maxHealth: number;
    currentWeapon: string;
    ammo: number;
    maxAmmo: number;
}
export type MovementState = "grounded" | "airborne" | "sliding" | "wall_contact";
export interface PlayerInput {
    tick: number;
    moveX: number;
    moveZ: number;
    sprint: boolean;
    jump: boolean;
    slide: boolean;
    yaw: number;
    pitch: number;
    shoot: boolean;
    reload: boolean;
}
export interface MapPrefabPlacement {
    id: string;
    position: [number, number, number];
    rotation: number;
}
export interface MapSpawnPoint {
    team: number;
    position: [number, number, number];
    rotation: number;
}
export interface MapData {
    version: number;
    name: string;
    gridSize: number;
    prefabs: MapPrefabPlacement[];
    spawnPoints: MapSpawnPoint[];
}
//# sourceMappingURL=index.d.ts.map