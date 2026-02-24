/**
 * Movement tuning (Apex-inspired): snappy, fast, slide boost, slide jump.
 * 1 unit = 1 m. Used by both client (prediction) and server (authority).
 */
export const movementTuning = {
    accel: 95,
    maxSpeedWalk: 8,
    maxSpeedSprint: 14,
    friction: 10,
    airAccel: 30,
    airMaxSpeed: 14,
    gravity: 27,
    jumpForce: 11,
    coyoteTime: 0.12,
    jumpBufferTime: 0.12,
    slideInitialSpeed: 13.5,
    slideDecay: 0.9,
    slideMinSpeed: 4,
    /** Min horizontal speed to enter slide (should be sprinting). */
    slideEnterSpeed: 6,
    maxSpeedCrouch: 3,
    slideJumpMultiplier: 1.25,
    wallBounceWindow: 0.2,
    wallBounceReflectFactor: 0.85,
    wallBounceSpeedMin: 6,
    maxFallSpeed: 55,
};
