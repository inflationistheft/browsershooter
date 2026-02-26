/**
 * Colyseus schema for arena room state. Shared by client and server.
 */

import { Schema, type, MapSchema } from "@colyseus/schema";

export class PlayerStateSchema extends Schema {
  @type("string") id = "";
  @type("number") x = 0;
  @type("number") y = 0;
  @type("number") z = 0;
  @type("number") yaw = 0;
  @type("number") pitch = 0;
  @type("number") vx = 0;
  @type("number") vy = 0;
  @type("number") vz = 0;
  @type("string") movementState = "grounded";
  /** Animation clip ID from resolveAnimationClipId (idle, walk, run, jump, etc.). */
  @type("string") animationState = "idle";
  /** Playback scale for strafe clips (0.7 when not sprinting, 1 when sprinting). */
  @type("number") animationTimeScale = 1;
  @type("number") health = 100;
  @type("number") maxHealth = 100;
  @type("string") currentWeapon = "rifle";
  @type("number") ammo = 30;
  @type("number") maxAmmo = 30;
}

export class ArenaState extends Schema {
  @type({ map: PlayerStateSchema }) players = new MapSchema<PlayerStateSchema>();
}
