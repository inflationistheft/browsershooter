/**
 * Mutable state for viewmodel tuner. Mirrors clientConfig weapon values
 * and POV_DEFAULT / POV_OFFSETS from main.ts. Edited by TunerPanel, read by render loop.
 */

import type { AnimationClipId } from "shared";
import { ANIMATION_CLIP_IDS } from "shared";

export interface PovOffset {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scale: number;
}

/** Current POV_DEFAULT values – synced with main.ts. */
export const tunerPovDefault: PovOffset = {
  x: 0.37,
  y: -5.34,
  z: 0.55,
  rotX: -0.03,
  rotY: 2.968,
  rotZ: -0.02,
  scale: 3.21,
};

/** Per-animation overrides. Partial – missing keys fall back to tunerPovDefault. */
export const tunerPovOffsets: Partial<Record<AnimationClipId, PovOffset>> = {
  slide: { x: 0.2, y: -2.2, z: 0.2, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 2.1 },
  crouchForward: { x: 0.2, y: -2.5, z: 0.2, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 2.1 },
  crouchBackward: { x: 0.2, y: -2.5, z: 0.2, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 2.1 },
  crouchLeft: { x: 0.2, y: -2.5, z: 0.2, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 2.1 },
  crouchRight: { x: 0.2, y: -2.5, z: 0.2, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 2.1 },
  jump: { x: 0.2, y: -3.4, z: 0.45, rotX: 0, rotY: Math.PI, rotZ: 0, scale: 1.6 },
};

export const ANIMATION_CLIP_IDS_ARRAY = Object.values(ANIMATION_CLIP_IDS) as AnimationClipId[];
