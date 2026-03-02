/**
 * Central client config and feature flags.
 */

import type { AnimationClipId } from "shared";

export interface ThirdPersonWeaponOffset {
  x: number;
  y: number;
  z: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  scale: number;
}

export const clientConfig = {
  /** Server URL for Colyseus (dev) */
  serverUrl: (import.meta as unknown as { env?: { VITE_SERVER_URL?: string } }).env?.VITE_SERVER_URL ?? "ws://localhost:2567",

  /** Enable debug overlay */
  debugOverlay: true,

  /** Log level: "error" | "warn" | "info" | "debug" */
  logLevel: "info" as const,

  /** GLB for all players (local + remote). Animations in this file drive bone-anchored hitboxes. */
  playerModelUrl: (import.meta as unknown as { env?: { VITE_PLAYER_MODEL_URL?: string } }).env?.VITE_PLAYER_MODEL_URL ?? "/models/player.glb",
  /** GLB for FPS viewmodel (arms only). Falls back to player.glb if empty or load fails. */
  viewmodelArmsUrl: ((import.meta as unknown as { env?: { VITE_VIEWMODEL_ARMS_URL?: string } }).env?.VITE_VIEWMODEL_ARMS_URL ?? "/models/vanguard_pov.glb").trim(),
  /** GLB for viewmodel weapon (anchored to RightHand bone). Empty = no weapon. Place in models/weapons/, e.g. battlerifle.glb. */
  viewmodelWeaponUrl: ((import.meta as unknown as { env?: { VITE_VIEWMODEL_WEAPON_URL?: string } }).env?.VITE_VIEWMODEL_WEAPON_URL ?? "/models/weapons/rifle.glb").trim(),
  /** Scale for viewmodel weapon. battlerifle: 24, riflewhite: 96. */
  viewmodelWeaponScale: Number(
    (import.meta as unknown as { env?: { VITE_VIEWMODEL_WEAPON_SCALE?: string } }).env?.VITE_VIEWMODEL_WEAPON_SCALE ?? "3.6"
  ) || 3.6,
  /** Two-point anchoring (RightHand + LeftHand/gripleft). Disabled. */
  viewmodelWeaponTwoPoint: false,
  /** Weapon offset (x, y, z) relative to RightHand. Used for decoupled POV weapon positioning. */
  viewmodelWeaponOffset: { x: 0.26, y: 0.23, z: 0.44 },
  /** Extra offset in viewmodel space: +x=right, +y=up, +z=forward. Added after hand position. */
  viewmodelWeaponPovOffset: { x: 0, y: -0.4, z: 0 },
  /** Shift weapon model so grip (Blender origin) aligns with hand. If GLB root ≠ object origin, tune this. */
  viewmodelWeaponGripOffset: { x: 0, y: 0, z: 0 },
  /** Extra X rotation (radians). Negative = tilt down. */
  viewmodelWeaponRotationX: -1.68,
  /** Extra Y rotation (radians). riflewhite: Math.PI to flip barrel direction. */
  viewmodelWeaponRotationY: 2.93,
  /** Extra Z rotation (radians). riflewhite: 5*Math.PI/2 for orientation. */
  viewmodelWeaponRotationZ: 2 * Math.PI,
  /** GLB for static dummies (optional, future use). Not used for playable characters. */
  dummyModelUrl: (import.meta as unknown as { env?: { VITE_DUMMY_MODEL_URL?: string } }).env?.VITE_DUMMY_MODEL_URL ?? "/models/dummy.glb",

  /** Skin ID for player (PNG in /models/skins/{id}.png). Empty = use embedded GLB texture. Default: orange. */
  playerSkin: ((import.meta as unknown as { env?: { VITE_PLAYER_SKIN?: string } }).env?.VITE_PLAYER_SKIN ?? "orange").trim(),

  /**
   * Override animation clip names if your GLB uses different names.
   * Keys: idle, walk, walkBackwards, strafeLeft, strafeRight, strafeLeftFast, strafeRightFast,
   * run, jump, slide, crouchForward, crouchBackward, crouchLeft, crouchRight.
   */
  animationClipNames: {} as Partial<Record<string, string>>,

  /** Third-person weapon (remote players). Origin at RightHand. */
  thirdPersonWeaponOffset: { x: 0, y: 0, z: 0 },
  /** Grip alignment for 3P weapon. */
  thirdPersonWeaponGripOffset: { x: 0, y: 0, z: 0 },
  /** Scale for 3P weapon. */
  thirdPersonWeaponScale: 1,
  /** Extra rotation (rad) for 3P weapon. */
  thirdPersonWeaponRotationX: 0.19,
  thirdPersonWeaponRotationY: 3.16,
  thirdPersonWeaponRotationZ: 1.45,
  /** Per-animation overrides for 3P weapon (slide, jump, etc. have different hand poses). */
  thirdPersonWeaponOffsets: {
    walkBackwards: { x: 0, y: 0, z: 0, rotX: 0.09, rotY: 3.39, rotZ: 1.45, scale: 1 },
    crouchForward: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
    crouchBackward: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
    crouchLeft: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
    crouchRight: { x: 0, y: 0, z: 0, rotX: 0.12, rotY: 3.43, rotZ: 1.45, scale: 1 },
  } as Partial<Record<AnimationClipId, ThirdPersonWeaponOffset>>,
};
