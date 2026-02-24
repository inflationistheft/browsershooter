/**
 * Movement tuning (Apex-inspired): snappy, fast, slide boost, slide jump.
 * 1 unit = 1 m. Used by both client (prediction) and server (authority).
 */
export declare const movementTuning: {
    readonly accel: 95;
    readonly maxSpeedWalk: 8;
    readonly maxSpeedSprint: 14;
    readonly friction: 10;
    readonly airAccel: 30;
    readonly airMaxSpeed: 14;
    readonly gravity: 27;
    readonly jumpForce: 11;
    readonly coyoteTime: 0.12;
    readonly jumpBufferTime: 0.12;
    readonly slideInitialSpeed: 13.5;
    readonly slideDecay: 0.95;
    readonly slideMinSpeed: 2;
    /** Max slide duration in seconds (Apex-style: slide runs for this long, no need to hold C). */
    readonly slideDurationMax: 1.4;
    /** Min horizontal speed to enter slide (should be sprinting). */
    readonly slideEnterSpeed: 6;
    readonly maxSpeedCrouch: 3;
    readonly slideJumpMultiplier: 1.25;
    readonly wallBounceWindow: 0.2;
    readonly wallBounceReflectFactor: 0.85;
    readonly wallBounceSpeedMin: 6;
    readonly maxFallSpeed: 55;
};
export type MovementTuning = typeof movementTuning;
//# sourceMappingURL=movement.d.ts.map