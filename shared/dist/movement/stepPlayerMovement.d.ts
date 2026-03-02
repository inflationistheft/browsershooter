/**
 * Shared movement step: grounded/sliding/airborne state machine.
 * Used by client (FPSMovementController) and server (ArenaFFA) for deterministic physics.
 */
export interface MovementStepInput {
    moveX: number;
    moveZ: number;
    jump: boolean;
    /** True when Shift held or slideIntentTicks > 0. Triggers slide when moving fast. */
    hasSlideIntent: boolean;
    /** True when C held. Crouch walk only (no slide). */
    crouch: boolean;
    yaw: number;
    pitch: number;
}
export interface MovementExtState {
    slideTime: number;
    slideEnterCooldownTimer: number;
    slideJumpCooldownTimer: number;
    slideOnLand: boolean;
    horSpeedWhenJumped: number;
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
export declare function stepPlayerMovement(state: MovementStepState, input: MovementStepInput, dt: number, playerRadius: number): void;
export { createDefaultExt };
//# sourceMappingURL=stepPlayerMovement.d.ts.map