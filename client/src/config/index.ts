/**
 * Central client config and feature flags.
 */

export const clientConfig = {
  /** Server URL for Colyseus (dev) */
  serverUrl: (import.meta as unknown as { env?: { VITE_SERVER_URL?: string } }).env?.VITE_SERVER_URL ?? "ws://localhost:2567",

  /** Enable debug overlay */
  debugOverlay: true,

  /** Log level: "error" | "warn" | "info" | "debug" */
  logLevel: "info" as const,

  /** GLB URLs for player (FPS view model) and dummies. Override via .env: VITE_PLAYER_MODEL_URL, VITE_DUMMY_MODEL_URL */
  playerModelUrl: (import.meta as unknown as { env?: { VITE_PLAYER_MODEL_URL?: string } }).env?.VITE_PLAYER_MODEL_URL ?? "/models/player.glb",
  dummyModelUrl: (import.meta as unknown as { env?: { VITE_DUMMY_MODEL_URL?: string } }).env?.VITE_DUMMY_MODEL_URL ?? "/models/dummy.glb",

  /** Skin ID for player (PNG in /models/skins/{id}.png). Empty = use embedded GLB texture. */
  playerSkin: ((import.meta as unknown as { env?: { VITE_PLAYER_SKIN?: string } }).env?.VITE_PLAYER_SKIN ?? "").trim(),

  /**
   * Override animation clip names if your GLB uses different names.
   * Keys: idle, walk, walkBackwards, strafeLeft, strafeRight, strafeLeftFast, strafeRightFast,
   * run, jump, slide, crouchForward, crouchBackward, crouchLeft, crouchRight.
   */
  animationClipNames: {} as Partial<Record<string, string>>,
};
