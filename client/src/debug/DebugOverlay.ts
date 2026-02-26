/**
 * Debug overlay stub: FPS, velocity, state. DOM updates throttled to 10 Hz.
 */

let frameCount = 0;
let lastTime = performance.now();
let lastUpdateTime = 0;
let fps = 0;

const UPDATE_INTERVAL_MS = 100; // 10 Hz

export function createDebugOverlay(container: HTMLElement): void {
  const el = document.createElement("div");
  el.id = "debug-overlay";
  el.style.cssText = `
    position: fixed; top: 8px; right: 8px; color: #8f8; font-family: monospace; font-size: 12px;
    background: rgba(0,0,0,0.6); padding: 8px; border-radius: 4px;
  `;
  el.textContent = "FPS: 0 | Vel: 0,0,0 | State: grounded";
  container.appendChild(el);
}

export function updateDebugOverlay(
  velocity: { x: number; y: number; z: number },
  state: string,
  sprint?: boolean,
  netInfo?: { connected: boolean; playerCount: number; remoteMeshCount: number }
): void {
  frameCount++;
  const now = performance.now();
  if (now - lastTime >= 500) {
    fps = Math.round((frameCount * 1000) / (now - lastTime));
    frameCount = 0;
    lastTime = now;
  }
  if (now - lastUpdateTime < UPDATE_INTERVAL_MS) return;
  lastUpdateTime = now;

  const el = document.getElementById("debug-overlay");
  if (el) {
    const sprintStr = sprint !== undefined ? ` | Sprint: ${sprint}` : "";
    const netStr =
      netInfo !== undefined
        ? ` | Net: ${netInfo.connected ? "ok" : "off"} | Players: ${netInfo.playerCount} | Remote: ${netInfo.remoteMeshCount}`
        : "";
    el.textContent = `FPS: ${fps} | Vel: ${velocity.x.toFixed(1)}, ${velocity.y.toFixed(1)}, ${velocity.z.toFixed(1)} | State: ${state}${sprintStr}${netStr}`;
  }
}
