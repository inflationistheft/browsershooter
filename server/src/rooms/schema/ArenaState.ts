/**
 * Colyseus schema for arena room state. Schema-first with TypeScript.
 */

import { Schema, type, MapSchema } from "@colyseus/schema";

export class PlayerState extends Schema {
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
  @type("number") health = 100;
  @type("number") maxHealth = 100;
  @type("string") currentWeapon = "rifle";
  @type("number") ammo = 30;
  @type("number") maxAmmo = 30;
}

export class ArenaState extends Schema {
  @type({ map: PlayerState }) players = new MapSchema<PlayerState>();
}
