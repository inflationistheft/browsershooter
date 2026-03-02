/**
 * Procedural viewmodel movement: Bob, Sway, Recoil, Slide.
 * Target-based: all effects compute target offsets, then smooth lerp to apply.
 * No direct/hard sets – prevents jitter and drift.
 */

import * as THREE from "three";
import { FIRE_RATE } from "shared";
import type { MovementStateName } from "../systems/movement/FPSMovementController.js";
import { clientConfig } from "../config/index.js";

export interface ViewmodelMovementInput {
  dt: number;
  velocity: { x: number; y: number; z: number };
  state: MovementStateName;
  crouching: boolean;
  yaw: number;
  pitch: number;
  shotThisFrame: boolean;
  /** 0..1 reload timeline (0 = none, 1 = end of reload). */
  reloadProgress: number;
}

export interface ViewmodelMovementState {
  /** Smoothed 0..1 movement factor for Bob (no jitter from raw velocity). */
  moveFactor: number;
  /** Smoothed phase speed – prevents phase stutter when stopping. */
  smoothedPhaseSpeed: number;
  /** Continuous phase for clean wave, advances with movement. */
  bobPhase: number;
  swayYaw: number;
  swayPitch: number;
  recoilPitch: number;
  recoilPullback: number;
  recoilRoll: number;
  slideBlend: number;
  /** Slide impact: 1D spring (dip + bounce). */
  slideImpactSpringY: number;
  slideImpactSpringVy: number;
  /** Slide friction wiggle: phase 0..1, decays. */
  slideWigglePhase: number;
  /** Slide end: tiny release bump that decays. */
  slideReleaseBump: number;
  /** Strafe lean: smoothed position offset (X) and roll (Z) – posture shift when A/D. */
  strafeLeanX: number;
  strafeLeanRoll: number;
  /** Forward lean: Z offset when W/S – forward = +Z (back), backward = -Z. */
  forwardLeanZ: number;
  /** Smoothed mouse deltas for sway – avoids tick-rate stutter. */
  smoothedYawDelta: number;
  smoothedPitchDelta: number;
  /** Idle breathing: continuous phase, slight drift for organic feel. */
  idlePhase: number;
  idleTime: number;
  /** Jump: prev movement state for transition detection. */
  prevMovState: MovementStateName;
  /** Jump: last velocity when airborne (for landing impact/roll). */
  lastAirborneVy: number;
  lastAirborneVx: number;
  /** Jump: takeoff dip phase 0..1, decays in air. */
  jumpTakeoffPhase: number;
  /** Jump: 1D spring for landing (pos, vel). */
  jumpLandingSpringY: number;
  jumpLandingSpringVy: number;
  lastYaw: number;
  lastPitch: number;
  firstFrame: boolean;
  _targetPos: THREE.Vector3;
  _targetRot: THREE.Euler;
  /** Current displayed values – lerp toward target each frame. */
  _pos: THREE.Vector3;
  _rot: THREE.Euler;
}

const BOB_SPEED_THRESHOLD = 0.15;
const BOB_AMP_THRESHOLD = 0.05;
const MAX_SPEED_FOR_FACTOR = 8;

const lerp = (current: number, target: number, t: number): number =>
  current + (target - current) * (1 - Math.exp(-t));

/** Create initial movement state. */
export function createViewmodelMovementState(): ViewmodelMovementState {
  return {
    moveFactor: 0,
    smoothedPhaseSpeed: 0,
    bobPhase: 0,
    swayYaw: 0,
    swayPitch: 0,
    recoilPitch: 0,
    recoilPullback: 0,
    recoilRoll: 0,
    slideBlend: 0,
    slideImpactSpringY: 0,
    slideImpactSpringVy: 0,
    slideWigglePhase: 1,
    slideReleaseBump: 0,
    strafeLeanX: 0,
    strafeLeanRoll: 0,
    forwardLeanZ: 0,
    smoothedYawDelta: 0,
    smoothedPitchDelta: 0,
    idlePhase: 0,
    idleTime: 0,
    prevMovState: "grounded",
    lastAirborneVy: 0,
    lastAirborneVx: 0,
    jumpTakeoffPhase: 1,
    jumpLandingSpringY: 0,
    jumpLandingSpringVy: 0,
    lastYaw: 0,
    lastPitch: 0,
    firstFrame: true,
    _targetPos: new THREE.Vector3(),
    _targetRot: new THREE.Euler(0, 0, 0, "YXZ"),
    _pos: new THREE.Vector3(),
    _rot: new THREE.Euler(0, 0, 0, "YXZ"),
  };
}

/** Update movement state and return smoothed position/rotation for ViewmodelRoot. */
export function updateViewmodelMovement(
  state: ViewmodelMovementState,
  input: ViewmodelMovementInput
): {
  position: THREE.Vector3;
  rotation: THREE.Euler;
} {
  const cfg = clientConfig.tuning.povMovement ?? DEFAULT_POV_MOVEMENT;
  const { velocity, state: movState, crouching, yaw, pitch, shotThisFrame, dt } = input;

  const horSpeed = Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z);
  const isSliding = movState === "sliding";
  const isGrounded = movState === "grounded";
  const isAirborne = movState === "airborne";
  const wasGrounded = state.prevMovState === "grounded";
  const wasAirborne = state.prevMovState === "airborne";
  state.prevMovState = movState;

  if (isAirborne) {
    state.lastAirborneVy = velocity.y;
    state.lastAirborneVx = velocity.x;
  }
  const impactStrength = Math.min(1, Math.abs(state.lastAirborneVy) / 12);
  if (wasGrounded && isAirborne) state.jumpTakeoffPhase = 0;
  if (wasAirborne && isGrounded) {
    const dip = (cfg.jumpLandingDip ?? -0.06) * impactStrength;
    state.jumpLandingSpringY = dip;
    state.jumpLandingSpringVy = 0;
  }

  const takeoffDecay = cfg.jumpTakeoffDecay ?? 6;
  state.jumpTakeoffPhase = Math.min(1, state.jumpTakeoffPhase + dt * takeoffDecay);
  const takeoffPhase = state.jumpTakeoffPhase;
  const easeOut = 1 - takeoffPhase * takeoffPhase;
  const takeoffDip = (cfg.jumpTakeoffDip ?? -0.016) * easeOut;

  const springK = cfg.jumpLandingSpringK ?? 60;
  const springDamp = cfg.jumpLandingSpringDamp ?? 14;
  if (isGrounded && (Math.abs(state.jumpLandingSpringY) > 0.0001 || Math.abs(state.jumpLandingSpringVy) > 0.0001)) {
    const ay = -springK * state.jumpLandingSpringY - springDamp * state.jumpLandingSpringVy;
    state.jumpLandingSpringVy += ay * dt;
    state.jumpLandingSpringY += state.jumpLandingSpringVy * dt;
  } else if (isGrounded) {
    state.jumpLandingSpringY = 0;
    state.jumpLandingSpringVy = 0;
  }
  const landingY = isGrounded ? state.jumpLandingSpringY : 0;
  const landMagnitude = Math.abs(state.jumpLandingSpringY) + Math.abs(state.jumpLandingSpringVy) * 0.1;
  const airborneFloatY = isAirborne ? (cfg.jumpAirborneFloatY ?? 0.016) : 0;
  const jumpPosY = (isAirborne ? takeoffDip : 0) + landingY + airborneFloatY;
  const landingRoll =
    isGrounded && landMagnitude > 0.001 && Math.abs(state.lastAirborneVx) > 1
      ? -Math.sign(state.lastAirborneVx) *
        (cfg.jumpLandingRoll ?? 0.016) *
        impactStrength *
        Math.min(1, Math.abs(state.lastAirborneVx) / 6) *
        Math.min(1, landMagnitude * 20)
      : 0;
  const jumpPosZ =
    isAirborne && Math.abs(velocity.z) > 0.5
      ? -Math.sign(velocity.z) * (cfg.jumpInertiaZ ?? 0.004) * Math.min(1, Math.abs(velocity.z) / 6)
      : 0;

  // --- Smoothed moveFactor (0..1) – no jitter from raw velocity ---
  const rawFactor = Math.min(1, horSpeed / MAX_SPEED_FOR_FACTOR);
  const targetMoveFactor =
    isGrounded && horSpeed > BOB_SPEED_THRESHOLD && !isSliding ? rawFactor : 0;
  state.moveFactor = lerp(state.moveFactor, targetMoveFactor, dt / cfg.moveFactorSmoothTau);

  // --- Slide blend (fast in, smooth out) ---
  const targetSlide = isSliding ? 1 : 0;
  const slideTau = isSliding ? cfg.slideInTau : cfg.slideOutTau;
  const prevSlide = state.slideBlend;
  state.slideBlend = lerp(state.slideBlend, targetSlide, dt / slideTau);

  const slideJustStarted = state.slideBlend > 0.05 && prevSlide < 0.1;
  if (slideJustStarted) {
    state.slideImpactSpringY = cfg.slideImpactDipAmp;
    state.slideImpactSpringVy = 0;
    state.slideWigglePhase = 0;
  }
  if (state.slideBlend > 0.01) {
    const springK = cfg.slideImpactSpringK ?? 80;
    const springDamp = cfg.slideImpactSpringDamp ?? 12;
    const ay = -springK * state.slideImpactSpringY - springDamp * state.slideImpactSpringVy;
    state.slideImpactSpringVy += ay * dt;
    state.slideImpactSpringY += state.slideImpactSpringVy * dt;
  } else {
    state.slideImpactSpringY = 0;
    state.slideImpactSpringVy = 0;
  }
  const slideImpactY = state.slideImpactSpringY;

  const wiggleDuration = cfg.slideWiggleDuration ?? 0.3;
  if (state.slideBlend > 0.01 && state.slideWigglePhase < 1) {
    state.slideWigglePhase = Math.min(1, state.slideWigglePhase + dt / wiggleDuration);
  } else if (state.slideBlend < 0.5) {
    state.slideWigglePhase = 1;
  }
  const wiggleFade = 1 - state.slideWigglePhase;
  const slideWiggleRoll =
    state.slideBlend *
    wiggleFade *
    (cfg.slideWiggleRoll ?? 0.004) *
    Math.sin(state.idleTime * 18);

  const slideJustEnded = prevSlide > 0.3 && !isSliding && state.slideBlend < prevSlide;
  const releaseAmp = cfg.slideReleaseBump ?? 0;
  if (slideJustEnded && releaseAmp !== 0) {
    state.slideReleaseBump = releaseAmp;
  }
  state.slideReleaseBump = lerp(state.slideReleaseBump, 0, dt / (cfg.slideReleaseBumpTau ?? 0.08));

  // --- Smoothed phase speed: stabilizes Bob, no micro-variation/stutter ---
  const bobFreqMultiplier = crouching ? (cfg.bobCrouchFreqMultiplier ?? 1) : 1;
  const targetPhaseSpeed =
    isGrounded && horSpeed > BOB_SPEED_THRESHOLD && !isSliding
      ? Math.min(1, horSpeed / MAX_SPEED_FOR_FACTOR) * cfg.bobFrequency * bobFreqMultiplier
      : 0;
  state.smoothedPhaseSpeed = lerp(
    state.smoothedPhaseSpeed,
    targetPhaseSpeed,
    dt / cfg.phaseSpeedSmoothTau
  );
  state.bobPhase += dt * state.smoothedPhaseSpeed;

  // --- Amplitude blend: 0 below threshold, smooth ramp above ---
  const ampMultiplier = crouching ? (cfg.bobCrouchAmpMultiplier ?? 1) : 1;
  const m = state.moveFactor * ampMultiplier;
  const ampBlend = m <= BOB_AMP_THRESHOLD ? 0 : Math.min(1, (m - BOB_AMP_THRESHOLD) / (1 - BOB_AMP_THRESHOLD));

  // --- Direction-aware weights: forward vs strafe (for Bob mix + Lean) ---
  const absFwd = Math.abs(velocity.z);
  const absStr = Math.abs(velocity.x);
  const sum = absFwd + absStr + 1e-6;
  const forwardWeight = absFwd / sum;
  const strafeWeight = absStr / sum;
  const strafeDir = velocity.x > 0 ? 1 : velocity.x < 0 ? -1 : 0;

  // --- Strafe Lean (state-based): constant posture offset while A/D held ---
  const leanMagnitude =
    isGrounded && !isSliding
      ? ampBlend * strafeWeight * state.moveFactor
      : 0;
  const targetLeanX = -strafeDir * leanMagnitude * (cfg.strafeLeanX ?? 0);
  const targetLeanRoll = strafeDir * leanMagnitude * (cfg.strafeLeanRoll ?? 0);
  const leanTau = cfg.strafeLeanTau ?? 0.06;
  state.strafeLeanX = lerp(state.strafeLeanX, targetLeanX, dt / leanTau);
  state.strafeLeanRoll = lerp(state.strafeLeanRoll, targetLeanRoll, dt / leanTau);

  // --- Forward/backward lean: viewmodel Z offset (forward = +Z back, backward = -Z) ---
  const fwdDir = velocity.z > 0 ? 1 : velocity.z < 0 ? -1 : 0;
  const fwdMagnitude =
    isGrounded && !isSliding ? ampBlend * forwardWeight * state.moveFactor : 0;
  const targetForwardLeanZ =
    fwdDir * fwdMagnitude * (cfg.forwardLeanZ ?? 0);
  state.forwardLeanZ = lerp(state.forwardLeanZ, targetForwardLeanZ, dt / leanTau);

  // --- Bob weights: forward = more Y, strafe = more X + roll, diagonal = mix ---
  const wY = 0.4 + 0.6 * forwardWeight;
  const wX = 0.4 + 0.6 * strafeWeight;
  const wRoll = 0.5 + 0.5 * strafeWeight;
  const yMult = 1 - strafeWeight * (cfg.strafeBobYReduce ?? 0.7);
  const xMult = 1 + strafeWeight * (cfg.strafeBobXBoost ?? 0.5);
  const rollMult = 1 + strafeWeight * (cfg.strafeBobRollBoost ?? 0.8);

  const reloadT = Math.max(0, Math.min(1, input.reloadProgress ?? 0));

  // --- WalkBob: Y/X same freq (sin phase), strafe reduces Y and boosts X/roll ---
  const bobSlideMult = 1 - state.slideBlend * (cfg.bobSlideReduce ?? 0.98);
  const bobReloadMult = 1 - reloadT;
  const phase = state.bobPhase;
  const bobY =
    cfg.bobAmplitudeY * ampBlend * wY * yMult * Math.sin(phase) * bobSlideMult * bobReloadMult;
  const bobX =
    cfg.bobAmplitudeX * ampBlend * wX * xMult * Math.sin(phase + cfg.bobPhaseOffsetX) * bobSlideMult * bobReloadMult;
  const bobRoll =
    cfg.bobAmplitudeRoll * ampBlend * wRoll * rollMult * Math.sin(phase + 0.7) * bobSlideMult * bobReloadMult;
  const bobPitch = cfg.bobAmplitudePitch * ampBlend * Math.sin(phase + 0.4) * bobSlideMult * bobReloadMult;

  // --- Sway: smooth mouse deltas first (avoids tick-rate stutter), then target + spring back ---
  let yawDelta = 0;
  let pitchDelta = 0;
  if (state.firstFrame) {
    state.firstFrame = false;
  } else {
    yawDelta = yaw - state.lastYaw;
    pitchDelta = pitch - state.lastPitch;
  }
  state.lastYaw = yaw;
  state.lastPitch = pitch;

  const deltaTau = cfg.swayDeltaSmoothTau ?? 0.04;
  state.smoothedYawDelta = lerp(state.smoothedYawDelta, yawDelta, dt / deltaTau);
  state.smoothedPitchDelta = lerp(state.smoothedPitchDelta, pitchDelta, dt / deltaTau);

  const swayMult =
    (1 - state.slideBlend * cfg.swaySlideReduce) *
    (1 - reloadT * (cfg.swayReloadReduce ?? 0.8)) *
    (isAirborne ? (cfg.swayAirborneReduce ?? 0.5) : 1);
  const targetSwayYaw = -state.smoothedYawDelta * cfg.swayLookFactor * swayMult;
  const targetSwayPitch = -state.smoothedPitchDelta * cfg.swayLookFactor * swayMult;
  state.swayYaw = lerp(state.swayYaw, targetSwayYaw, dt / cfg.swaySmoothTau);
  state.swayPitch = lerp(state.swayPitch, targetSwayPitch, dt / cfg.swaySmoothTau);
  state.swayYaw *= cfg.swayReturnDamping;
  state.swayPitch *= cfg.swayReturnDamping;

  // --- Recoil: one-shot impulse + spring back within shot interval ---
  // Cap recovery tau so animation finishes before next possible shot (no desync) and avoid zero.
  const shotIntervalSec = 1 / FIRE_RATE;
  const maxRecoveryTau = shotIntervalSec / 3; // ~95% decay within shot interval
  const baseRecoilTau = Math.max(cfg.recoilRecoveryTau, 1e-4);
  const recoilTau = Math.min(baseRecoilTau, maxRecoveryTau);

  if (shotThisFrame) {
    state.recoilPitch += cfg.recoilKickPitch;
    state.recoilPullback += cfg.recoilPullback;
    state.recoilRoll += (Math.random() - 0.5) * cfg.recoilRollVariation;
  }
  const recoilMult = (1 - state.slideBlend * cfg.recoilSlideReduce) * (1 - reloadT);
  state.recoilPitch = lerp(state.recoilPitch, 0, dt / recoilTau) * recoilMult;
  state.recoilPullback = lerp(state.recoilPullback, 0, dt / recoilTau);
  state.recoilRoll = lerp(state.recoilRoll, 0, dt / recoilTau);

  // --- Slide pose: lower, inward tilt, Z back, optional pitch down ---
  const slideY =
    state.slideBlend * cfg.slideYOffset + slideImpactY + state.slideReleaseBump;
  const slideZ = state.slideBlend * cfg.slideZOffset;
  const slideRotZ = state.slideBlend * cfg.slideInwardTilt + slideWiggleRoll;
  const slidePitch = state.slideBlend * (cfg.slidePitchDown ?? -0.1);

  // --- Reload override: 3 phases Tilt&Lower -> Hold -> Return ---
  const isReloading = reloadT > 0.0001;
  let reloadPoseBlend = 0;
  if (isReloading) {
    if (reloadT < 0.25) {
      const t = reloadT / 0.25;
      reloadPoseBlend = t * t; // ease-in
    } else if (reloadT < 0.7) {
      reloadPoseBlend = 1;
    } else {
      const u = (reloadT - 0.7) / 0.3;
      const s = Math.max(0, Math.min(1, u));
      const smooth = s * s * (3 - 2 * s); // smoothstep
      const overshootAmp = cfg.reloadOvershoot ?? 0.08;
      reloadPoseBlend = (1 - smooth) + overshootAmp * (1 - smooth) * (1 - smooth);
    }
  }

  const reloadYOffset = cfg.reloadYOffset ?? -0.12;
  const reloadZOffset = cfg.reloadZOffset ?? 0.12;
  const reloadPullback = cfg.reloadPullback ?? 0.06;
  const reloadPitchDown = cfg.reloadPitchDown ?? -0.3;
  const reloadRoll = cfg.reloadRoll ?? 0.4;

  const reloadY = reloadPoseBlend * reloadYOffset;
  const reloadZ = reloadPoseBlend * reloadZOffset;
  const reloadPull = reloadPoseBlend * reloadPullback;
  const reloadPitch = reloadPoseBlend * reloadPitchDown;
  const reloadRollZ = reloadPoseBlend * reloadRoll;

  // --- Idle breathing: slow, organic, not pure sinus ---
  state.idleTime += dt;
  const idleBaseFreq = (2 * Math.PI) / (cfg.idleBreathingPeriod ?? 4);
  const idleFreqDrift = 1 + 0.06 * Math.sin(state.idleTime * 0.4) + 0.03 * Math.sin(state.idleTime * 0.73);
  state.idlePhase += dt * idleBaseFreq * idleFreqDrift;
  const p = state.idlePhase;
  const p2 = p * 2.13 + 0.7;
  const p3 = p * 0.47 + 1.3;
  const rawBreath = Math.sin(p) + 0.18 * Math.sin(p2) + 0.06 * Math.sin(p3);
  const r = Math.max(-1, Math.min(1, rawBreath / 1.24));
  const breathY = Math.sign(r) * Math.pow(Math.abs(r), 0.78);
  const breathX = 0.4 * Math.sin(p + 0.6) + 0.12 * Math.sin(p2 + 1.1);
  const idleBlend =
    (1 - state.slideBlend) *
    (1 - state.moveFactor * (cfg.idleWalkReduce ?? 0.85)) *
    (1 - reloadT * (cfg.idleReloadReduce ?? 0.4)) *
    (isAirborne ? (cfg.idleAirborneReduce ?? 0.3) : 1);
  const ampY = (cfg.idleBreathingAmplitudeY ?? 0.002) * idleBlend;
  const ampX = (cfg.idleBreathingAmplitudeX ?? 0.0006) * idleBlend;
  const idlePosY = ampY * breathY;
  const idlePosX = ampX * breathX;
  const idlePitch = (cfg.idlePitchAmplitude ?? 0.0006) * idleBlend * breathY;
  const idleRoll = (cfg.idleRollAmplitude ?? 0.0003) * idleBlend * breathX;

  // --- TARGET position/rotation (all effects combined) ---
  // Camera space: +X=right, +Y=up, +Z=back (pullback = weapon toward player)
  state._targetPos.set(
    bobX + state.strafeLeanX + idlePosX,
    bobY + slideY + reloadY + idlePosY + jumpPosY,
    state.recoilPullback + reloadPull + slideZ + reloadZ + state.forwardLeanZ + jumpPosZ
  );
  state._targetRot.set(
    state.swayPitch + state.recoilPitch + bobPitch + idlePitch + slidePitch + reloadPitch,
    state.swayYaw,
    slideRotZ + reloadRollZ + state.recoilRoll + bobRoll + state.strafeLeanRoll + idleRoll + landingRoll,
    "YXZ"
  );

  // --- Smooth apply: lerp current toward target (prevents micro-jitter) ---
  const applyTau = cfg.rootApplyTau;
  state._pos.lerp(state._targetPos, 1 - Math.exp(-dt / applyTau));
  state._rot.x = lerp(state._rot.x, state._targetRot.x, dt / applyTau);
  state._rot.y = lerp(state._rot.y, state._targetRot.y, dt / applyTau);
  state._rot.z = lerp(state._rot.z, state._targetRot.z, dt / applyTau);

  return { position: state._pos, rotation: state._rot };
}

const DEFAULT_POV_MOVEMENT = {
  idleBreathingAmplitudeY: 0.008,
  idleBreathingAmplitudeX: 0.0024,
  idleBreathingPeriod: 4,
  idlePitchAmplitude: 0.0024,
  idleRollAmplitude: 0.0012,
  idleWalkReduce: 0.85,
  idleAirborneReduce: 0.3,
  jumpTakeoffDip: -0.016,
  jumpTakeoffDecay: 8,
  jumpAirborneFloatY: 0.032,
  jumpLandingDip: -0.06,
  jumpLandingSpringK: 60,
  jumpLandingSpringDamp: 14,
  jumpLandingRoll: 0.016,
  jumpInertiaZ: 0.016,
  swayAirborneReduce: 0.5,
  moveFactorSmoothTau: 0.06,
  phaseSpeedSmoothTau: 0.08,
  rootApplyTau: 0.025,
  bobAmplitudeY: 0.01512,
  bobAmplitudeX: 0.0156,
  bobAmplitudeRoll: 0.0052,
  bobAmplitudePitch: 0.00258,
  bobPhaseOffsetX: 0.3,
  bobFrequency: 10,
  bobCrouchMultiplier: 0.5,
  swayLookFactor: 0.6,
  swaySmoothTau: 0.05,
  swayDeltaSmoothTau: 0.04,
  swayReturnDamping: 0.88,
  swaySlideReduce: 0.92,
  bobSlideReduce: 0.98,
  strafeLeanX: 0.1,
  strafeLeanRoll: 0.025,
  forwardLeanZ: 0.1,
  strafeLeanTau: 0.06,
  strafeBobYReduce: 0.7,
  strafeBobXBoost: 0.5,
  strafeBobRollBoost: 0.8,
  recoilKickPitch: 0.02,
  recoilPullback: 0.15,
  recoilRollVariation: 0.02,
  recoilRecoveryTau: 0.06,
  recoilSlideReduce: 0.5,
  slideYOffset: -0.2,
  slideZOffset: 0.1,
  slideInwardTilt: 0.38,
  slidePitchDown: -0.1,
  slideImpactDipAmp: -0.012,
  slideImpactSpringK: 80,
  slideImpactSpringDamp: 18,
  slideWiggleRoll: 0.005,
  slideWiggleDuration: 0.3,
  slideReleaseBump: 0,
  slideReleaseBumpTau: 0.1,
  slideInTau: 0.04,
  slideOutTau: 0.28,
  bobCrouchFreqMultiplier: 1,
  bobCrouchAmpMultiplier: 1,
  reloadYOffset: -0.12,
  reloadZOffset: 0.12,
  reloadPullback: 0.06,
  reloadPitchDown: -0.3,
  reloadRoll: 0.4,
  reloadOvershoot: 0.08,
  swayReloadReduce: 0.8,
  idleReloadReduce: 0.4,
};
