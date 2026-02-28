import { RESPAWN_DELAY_SEC } from "shared";

let deathTime: number | null = null;

export function createHUD(container: HTMLElement): void {
  const crosshair = document.createElement("div");
  crosshair.id = "crosshair";
  crosshair.style.cssText = `
    position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%);
    width: 4px; height: 4px; background: #0f0; border-radius: 2px; pointer-events: none;
  `;
  container.appendChild(crosshair);

  const info = document.createElement("div");
  info.id = "hud-info";
  info.style.cssText = `
    position: fixed; bottom: 16px; left: 16px; color: #ccc; font-family: monospace; font-size: 14px;
  `;
  info.textContent = "HP: 100 | Ammo: 30/30";
  container.appendChild(info);

  const respawnOverlay = document.createElement("div");
  respawnOverlay.id = "respawn-overlay";
  respawnOverlay.style.cssText = `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 24px 48px;
    background: rgba(0,0,0,0.8);
    border: 2px solid #e91e8c;
    border-radius: 8px;
    color: #fff;
    font-family: monospace;
    font-size: 24px;
    text-align: center;
    pointer-events: none;
    display: none;
    z-index: 10000;
  `;
  respawnOverlay.innerHTML = '<div>Respawn</div><div id="respawn-countdown">3.0</div>';
  container.appendChild(respawnOverlay);
}

export function updateHUD(
  hp: number,
  ammo: number,
  maxAmmo: number,
  debugMode?: boolean
): void {
  const el = document.getElementById("hud-info");
  const ammoStr = debugMode ? "∞" : `${ammo}/${maxAmmo}`;
  if (el) el.textContent = `HP: ${hp} | Ammo: ${ammoStr}`;

  const overlay = document.getElementById("respawn-overlay");
  const countdownEl = document.getElementById("respawn-countdown");
  if (!overlay || !countdownEl) return;

  if (hp <= 0) {
    if (deathTime === null) {
      deathTime = performance.now();
    }
    const elapsed = (performance.now() - deathTime) / 1000;
    const remaining = Math.max(0, RESPAWN_DELAY_SEC - elapsed);
    countdownEl.textContent = remaining.toFixed(1);
    overlay.style.display = "block";
  } else {
    deathTime = null;
    overlay.style.display = "none";
  }
}
