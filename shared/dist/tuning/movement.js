/**
 * Movement tuning (Apex-inspired): snappy, slide boost, slide jump.
 * 1 unit = 1 m. Used by both client (prediction) and server (authority).
 */
export const movementTuning = {
    accel: 95,
    maxSpeedWalk: 8,
    /** Realistic sprint ~10–11 m/s (elite athlete level). */
    maxSpeedSprint: 11,
    /** Sprint accel factor: <1 = ramp-up; must be high enough to reach maxSpeedSprint (accel/friction ≥ 11). */
    sprintAccelFactor: 0.9,
    friction: 10,
    airAccel: 30,
    airMaxSpeed: 14,
    gravity: 27,
    jumpForce: 11,
    coyoteTime: 0.12,
    jumpBufferTime: 0.12,
    slideInitialSpeed: 13,
    /** Entry speed multiplier: slide gives ~15% boost (Apex-style). */
    slideSpeedBoost: 1.15,
    slideDecay: 0.95,
    slideMinSpeed: 2,
    slideDurationMax: 1.4,
    /** Min horizontal speed to enter slide. */
    slideEnterSpeed: 6,
    /** Min time sprinting before ground slide allowed (Apex-style warmup). */
    slideEnterMinSprintTime: 0.15,
    maxSpeedCrouch: 3,
    slideJumpMultiplier: 1.25,
    /** Cooldown in seconds before slide jump can be used again. */
    slideJumpCooldown: 2,
    wallBounceWindow: 0.2,
    wallBounceReflectFactor: 0.85,
    wallBounceSpeedMin: 6,
    maxFallSpeed: 55,
};
