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
  /** Slightly faster than sprint (11); Apex-like modest boost. */
  slideInitialSpeed: 12,
  /** Entry speed multiplier: noticeable but not excessive boost. */
  slideSpeedBoost: 1.1,
  /** Slightly stronger decay = shorter slide distance. */
  slideDecay: 0.95,
  slideMinSpeed: 2,
  slideDurationMax: 1.8,
  /** Min horizontal speed to enter slide. */
  slideEnterSpeed: 6,
  /** Min time sprinting before ground slide allowed (Apex-style warmup). */
  slideEnterMinSprintTime: 0.15,
  /** Grace (s) after releasing Shift – can still enter slide while speed is high. */
  slideSprintReleaseGrace: 0.2,
  maxSpeedCrouch: 3,
  slideJumpMultiplier: 1.25,
  /** Cooldown in seconds before slide jump can be used again. */
  slideJumpCooldown: 2,
  wallBounceWindow: 0.2,
  wallBounceReflectFactor: 0.85,
  wallBounceSpeedMin: 6,
  maxFallSpeed: 55,
} as const;

export type MovementTuning = typeof movementTuning;
