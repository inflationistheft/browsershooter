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
  rotation: Vec3; // yaw, pitch, roll (degrees or rad as agreed)
  velocity: Vec3;
  movementState: MovementState;
  shield: number;
  maxShield: number;
  health: number;
  maxHealth: number;
  currentWeapon: string;
  ammo: number;
  maxAmmo: number;
}

export type MovementState =
  | "grounded"
  | "airborne"
  | "sliding"
  | "wall_contact";

export interface PlayerInput {
  tick: number;
  moveX: number;
  moveZ: number;
  sprint: boolean;
  jump: boolean;
  slide: boolean;
  /** Ticks remaining where slide can trigger (client sets on Shift keydown so short taps are not missed). Server treats as slide=true when > 0. */
  slideIntentTicks?: number;
  /** C key: crouch only (no slide). */
  crouch?: boolean;
  yaw: number;
  pitch: number;
  shoot: boolean;
  reload: boolean;
  /** Client-reported position (for lag compensation). */
  clientX?: number;
  clientY?: number;
  clientZ?: number;
  /** Bone offsets from player root (client sends; server adds root to get world pos). */
  headX?: number;
  headY?: number;
  headZ?: number;
  bodyCenterX?: number;
  bodyCenterY?: number;
  bodyCenterZ?: number;
  spineTopX?: number;
  spineTopY?: number;
  spineTopZ?: number;
  pelvisX?: number;
  pelvisY?: number;
  pelvisZ?: number;
  feetX?: number;
  feetY?: number;
  feetZ?: number;
  /** Aim direction when shooting (matches crosshair). Client sends camera forward. */
  aimDirX?: number;
  aimDirY?: number;
  aimDirZ?: number;
  /** Shot-tied data: aim + position at exact shoot moment. Server prefers these over generic aimDir/clientPos. */
  shootAimX?: number;
  shootAimY?: number;
  shootAimZ?: number;
  shootClientX?: number;
  shootClientY?: number;
  shootClientZ?: number;
  /** When true, server grants infinite ammo (client-side debug toggle via B). */
  debugMode?: boolean;
}

export interface MapPrefabPlacement {
  id: string;
  position: [number, number, number];
  rotation: number; // Y in degrees
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
