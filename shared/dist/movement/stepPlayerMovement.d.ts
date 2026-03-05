/**
 * Shared movement step: grounded/sliding/airborne state machine.
 * Used by client (FPSMovementController) and server (ArenaFFA) for deterministic physics.
 */
import type { StaticWorld } from "../world/StaticWorld.js";
export interface MovementStepInput {
    moveX: number;
    moveZ: number;
    /** Buffered/processed jump used for takeoff (ground/slide). */
    jump: boolean;
    /** Rohes Jump-Input (Space gehalten); für Midair-Actions wie Wall-Bounce. */
    jumpHeld: boolean;
    /** True when Shift held or slideIntentTicks > 0. Triggers slide when moving fast. */
    hasSlideIntent: boolean;
    /** True when C held. Crouch walk only (no slide). */
    crouch: boolean;
    /** True when B pressed: request horizontal dash in move or look direction. */
    dash: boolean;
    yaw: number;
    pitch: number;
}
export interface MovementExtState {
    slideTime: number;
    slideEnterCooldownTimer: number;
    slideJumpCooldownTimer: number;
    slideOnLand: boolean;
    horSpeedWhenJumped: number;
    /** Velocity when last not at a wall (airborne); used for wall-bounce dot so we see approach, not post-slide. */
    lastApproachVx: number;
    lastApproachVz: number;
    /** Previous frame jump key state; used to detect fresh Space tap for wall-bounce. */
    lastJumpHeld: boolean;
    /** Previous frame slide intent; used so slide-on-land only triggers on fresh Shift tap in air. */
    lastHasSlideIntent: boolean;
    /** Cooldown (s) remaining before next dash. */
    dashCooldownTimer: number;
    /** Time (s) remaining in current dash impulse phase. */
    dashActiveTimer: number;
    /** Last dash direction X (world). For animation. */
    lastDashDirX: number;
    /** Last dash direction Z (world). For animation. */
    lastDashDirZ: number;
}
export interface MovementStepState {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
    movementState: "grounded" | "sliding" | "airborne";
    ext: MovementExtState;
}
declare function createDefaultExt(): MovementExtState;
/** Advance movement ext timers (call before step). */
export declare function tickMovementTimers(ext: MovementExtState, dt: number): void;
/**
 * Single tick of movement. Mutates state in place.
 * Call tickMovementTimers on ext before this each tick.
 */
export declare function stepPlayerMovement(state: MovementStepState, input: MovementStepInput, dt: number, playerRadius: number, staticWorld?: StaticWorld): void;
export { createDefaultExt };
//# sourceMappingURL=stepPlayerMovement.d.ts.map