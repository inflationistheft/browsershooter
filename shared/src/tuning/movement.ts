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
  /** Halo-näher: Füße knapp über Spielerhöhe (~2.0–2.1 m). */
  jumpForce: 10.5,
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
  /** Moderater Slide-Jump-Boost (ca. 1.5× Spielerhöhe statt ~2×). */
  slideJumpMultiplier: 1.15,
  /** Cooldown in seconds before slide jump can be used again. */
  slideJumpCooldown: 2,
  /** Cooldown in seconds after slide ends before entering a new slide (prevents infinite re-entry while holding Shift). */
  slideEnterCooldown: 0.4,
  wallBounceWindow: 0.2,
  wallBounceReflectFactor: 0.85,
  wallBounceSpeedMin: 6,
  wallBounceJumpMultiplier: 1.0,
  wallBounceBoostFactor: 1.08,
  wallBounceBoostMin: 8,
  maxFallSpeed: 55,
  /** Horizontal dash: speed during dash phase (faster than slide). */
  dashSpeed: 18,
  /** Duration (s) of dash impulse phase. */
  dashDuration: 0.4,
  /** Cooldown (s) before next dash. */
  dashCooldownSec: 10,
} as const;

export type MovementTuning = typeof movementTuning;
