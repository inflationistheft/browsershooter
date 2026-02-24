/**
 * Colyseus schema for arena room state. Schema-first with TypeScript.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Schema, type, MapSchema } from "@colyseus/schema";
export class PlayerState extends Schema {
    constructor() {
        super(...arguments);
        this.id = "";
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.yaw = 0;
        this.pitch = 0;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.movementState = "grounded";
        this.health = 100;
        this.maxHealth = 100;
        this.currentWeapon = "rifle";
        this.ammo = 30;
        this.maxAmmo = 30;
    }
}
__decorate([
    type("string")
], PlayerState.prototype, "id", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "x", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "y", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "z", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "yaw", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "pitch", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "vx", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "vy", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "vz", void 0);
__decorate([
    type("string")
], PlayerState.prototype, "movementState", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "health", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "maxHealth", void 0);
__decorate([
    type("string")
], PlayerState.prototype, "currentWeapon", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "ammo", void 0);
__decorate([
    type("number")
], PlayerState.prototype, "maxAmmo", void 0);
export class ArenaState extends Schema {
    constructor() {
        super(...arguments);
        this.players = new MapSchema();
    }
}
__decorate([
    type({ map: PlayerState })
], ArenaState.prototype, "players", void 0);
