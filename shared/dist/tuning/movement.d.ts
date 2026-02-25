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
    readonly slideInitialSpeed: 13;
    /** Entry speed multiplier: slide gives ~15% boost (Apex-style). */
    readonly slideSpeedBoost: 1.15;
    readonly slideDecay: 0.95;
    readonly slideMinSpeed: 2;
    readonly slideDurationMax: 1.4;
    /** Min horizontal speed to enter slide. */
    readonly slideEnterSpeed: 6;
    /** Min time sprinting before ground slide allowed (Apex-style warmup). */
    readonly slideEnterMinSprintTime: 0.15;
    readonly maxSpeedCrouch: 3;
    readonly slideJumpMultiplier: 1.25;
    /** Cooldown in seconds before slide jump can be used again. */
    readonly slideJumpCooldown: 2;
    /** Time window (s) after wall contact to press Space for bounce. */
    readonly wallBounceWindow: 0.2;
    /** Multiplier on reflected horizontal speed. >1 = boost for snappier feel. */
    readonly wallBounceReflectFactor: 1.3;
    /** Max horizontal speed after bounce – can exceed airMaxSpeed for stronger feel. */
    readonly wallBounceMaxSpeed: 18;
    /** Min horizontal speed into wall to allow bounce (prevents glitchy bounces when standing). */
    readonly wallBounceSpeedMin: 6;
    /** Vertical jump on bounce – enough to feel the push; main force is horizontal reflection. */
    readonly wallBounceVerticalBoost: 6;
    /** Cooldown (s) per bounce – spam protection. */
    readonly wallBounceCooldown: 0.2;
    /** Min Y above ground – no bounce when too low (ground glitches). */
    readonly wallBounceHeightMin: 0.5;
    /** Max Y above ground – no bounce when too high (unrealistic). */
    readonly wallBounceHeightMax: 3.5;
    readonly maxFallSpeed: 55;
};
export type MovementTuning = typeof movementTuning;
//# sourceMappingURL=movement.d.ts.map