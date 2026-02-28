/**
 * Movement tuning (Apex-inspired): snappy, slide boost, slide jump.
 * 1 unit = 1 m. Used by both client (prediction) and server (authority).
 */
export declare const movementTuning: {
    readonly accel: 95;
    readonly maxSpeedWalk: 8;
    /** Realistic sprint ~10–11 m/s (elite athlete level). */
    readonly maxSpeedSprint: 11;
    /** Sprint accel factor: <1 = ramp-up; must be high enough to reach maxSpeedSprint (accel/friction ≥ 11). */
    readonly sprintAccelFactor: 0.9;
    readonly friction: 10;
    readonly airAccel: 30;
    readonly airMaxSpeed: 14;
    readonly gravity: 27;
    readonly jumpForce: 11;
    readonly coyoteTime: 0.12;
    readonly jumpBufferTime: 0.12;
    /** Slightly faster than sprint (11); Apex-like modest boost. */
    readonly slideInitialSpeed: 12;
    /** Entry speed multiplier: noticeable but not excessive boost. */
    readonly slideSpeedBoost: 1.1;
    /** Slightly stronger decay = shorter slide distance. */
    readonly slideDecay: 0.95;
    readonly slideMinSpeed: 2;
    readonly slideDurationMax: 1.8;
    /** Min horizontal speed to enter slide. */
    readonly slideEnterSpeed: 6;
    /** Min time sprinting before ground slide allowed (Apex-style warmup). */
    readonly slideEnterMinSprintTime: 0.15;
    /** Grace (s) after releasing Shift – can still enter slide while speed is high. */
    readonly slideSprintReleaseGrace: 0.2;
    readonly maxSpeedCrouch: 3;
    readonly slideJumpMultiplier: 1.25;
    /** Cooldown in seconds before slide jump can be used again. */
    readonly slideJumpCooldown: 2;
    /** Cooldown in seconds after slide ends before entering a new slide (prevents infinite re-entry while holding C). */
    readonly slideEnterCooldown: 0.4;
    readonly wallBounceWindow: 0.2;
    readonly wallBounceReflectFactor: 0.85;
    readonly wallBounceSpeedMin: 6;
    readonly maxFallSpeed: 55;
};
export type MovementTuning = typeof movementTuning;
//# sourceMappingURL=movement.d.ts.map