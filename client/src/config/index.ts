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

  /** GLB URLs for player (FPS view model) and dummies. Override via .env. */
  playerModelUrl: (import.meta as unknown as { env?: { VITE_PLAYER_MODEL_URL?: string } }).env?.VITE_PLAYER_MODEL_URL ?? "/models/player.glb",
  dummyModelUrl: (import.meta as unknown as { env?: { VITE_DUMMY_MODEL_URL?: string } }).env?.VITE_DUMMY_MODEL_URL ?? "/models/dummy.glb",
  /** Dummy idle animation GLB (model + clip). If set, dummies use this model and play e.g. "Rifle Aim Idle". */
  dummyIdleAnimationUrl: (import.meta as unknown as { env?: { VITE_DUMMY_IDLE_ANIMATION_URL?: string } }).env?.VITE_DUMMY_IDLE_ANIMATION_URL ?? "/models/animations/rilfeaimidle.glb",
};
