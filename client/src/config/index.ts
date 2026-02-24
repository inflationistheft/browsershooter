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
};
