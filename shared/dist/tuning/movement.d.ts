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
    /** Halo-näher: Füße knapp über Spielerhöhe (~2.0–2.1 m). */
    readonly jumpForce: 10.5;
    readonly coyoteTime: 0.12;
    readonly jumpBufferTime: 0.12;
    /** Slightly faster than sprint (11); Apex-like modest boost. */
    readonly slideInitialSpeed: 12;
    /** Entry speed multiplier: noticeable but not excessive boost. */
    readonly slideSpeedBoost: 1.1;
    /** Slightly stronger decay = shorter slide distance. */
    readonly slideDecay: 0.95;
    /** Decay on ramps: same as flat so slide feels consistent (ramp = flache Fläche). */
    readonly slideDecayOnRamp: 0.95;
    /** When sliding on ramp: gravity projects onto slope. This factor scales how much we accelerate downhill / decelerate uphill (0 = flat, ~0.5 = noticeable, 1 = full). */
    readonly rampSlideGravityFactor: 0.5;
    /** Max horizontal speed when sliding on a ramp; same as flat slide behavior. */
    readonly slideMaxSpeedOnRamp: 18;
    readonly slideMinSpeed: 2;
    readonly slideDurationMax: 1.8;
    /** Min horizontal speed to enter slide. */
    readonly slideEnterSpeed: 6;
    /** When landing on a ramp, slide boost is scaled by this (reduces launch feeling). */
    readonly slideBoostOnRampFactor: 0.85;
    /** Max horizontal speed when grounded on a ramp; same as walk so ramp feels like flat surface. */
    readonly maxSpeedOnRamp: 8;
    /** When landing on ramp (grounded, not slide), hor velocity is clamped to this factor × maxSpeedWalk. */
    readonly rampLandingSpeedFactor: 1.2;
    /** Min time sprinting before ground slide allowed (Apex-style warmup). */
    readonly slideEnterMinSprintTime: 0.15;
    /** Grace (s) after releasing Shift – can still enter slide while speed is high. */
    readonly slideSprintReleaseGrace: 0.2;
    readonly maxSpeedCrouch: 3;
    /** Moderater Slide-Jump-Boost (ca. 1.5× Spielerhöhe statt ~2×). */
    readonly slideJumpMultiplier: 1.15;
    /** Cooldown in seconds before slide jump can be used again. */
    readonly slideJumpCooldown: 2;
    /** Cooldown in seconds after slide ends before entering a new slide (prevents infinite re-entry while holding Shift). */
    readonly slideEnterCooldown: 0.4;
    readonly wallBounceWindow: 0.2;
    readonly wallBounceReflectFactor: 0.85;
    readonly wallBounceSpeedMin: 6;
    readonly wallBounceJumpMultiplier: 1;
    readonly wallBounceBoostFactor: 1.08;
    readonly wallBounceBoostMin: 8;
    readonly maxFallSpeed: 55;
    /** Horizontal dash: speed during dash phase (faster than slide). */
    readonly dashSpeed: 18;
    /** Duration (s) of dash impulse phase. */
    readonly dashDuration: 0.4;
    /** Cooldown (s) before next dash. */
    readonly dashCooldownSec: 10;
};
export type MovementTuning = typeof movementTuning;
//# sourceMappingURL=movement.d.ts.map