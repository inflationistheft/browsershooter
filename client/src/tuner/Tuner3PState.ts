/**
 * Mutable state for third-person weapon tuner. Mirrors clientConfig thirdPersonWeapon*.
 * Edited by Tuner3PPanel, read by render loop.
 */

import type { AnimationClipId } from "shared";
import { ANIMATION_CLIP_IDS } from "shared";
import { clientConfig } from "../config/index.js";

export interface WeaponOffset {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scale: number;
}

/** Base weapon offset – synced with clientConfig.thirdPersonWeapon*. */
export const tuner3pWeaponDefault: WeaponOffset = {
  x: clientConfig.thirdPersonWeaponOffset.x,
  y: clientConfig.thirdPersonWeaponOffset.y,
  z: clientConfig.thirdPersonWeaponOffset.z,
  rotX: clientConfig.thirdPersonWeaponRotationX,
  rotY: clientConfig.thirdPersonWeaponRotationY,
  rotZ: clientConfig.thirdPersonWeaponRotationZ,
  scale: clientConfig.thirdPersonWeaponScale,
};

/** Grip offset for weapon model alignment. */
export const tuner3pWeaponGripOffset = { ...clientConfig.thirdPersonWeaponGripOffset };

/** Per-animation overrides. Missing keys fall back to tuner3pWeaponDefault. */
export const tuner3pWeaponOffsets: Partial<Record<AnimationClipId, WeaponOffset>> = {
  ...clientConfig.thirdPersonWeaponOffsets,
};

export const ANIMATION_CLIP_IDS_ARRAY_3P = Object.values(ANIMATION_CLIP_IDS) as AnimationClipId[];
