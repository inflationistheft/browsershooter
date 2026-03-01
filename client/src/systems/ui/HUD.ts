import { RESPAWN_DELAY_SEC } from "shared";

let deathTime: number | null = null;

export function createHUD(container: HTMLElement): void {
  const crosshair = document.createElement("div");
  crosshair.id = "crosshair";
  crosshair.style.cssText = `
    position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%);
    width: 24px; height: 24px; pointer-events: none;
  `;
  crosshair.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="6" x2="12" y2="3" stroke="#8f8" stroke-width="1"/>
      <line x1="12" y1="21" x2="12" y2="18" stroke="#8f8" stroke-width="1"/>
      <line x1="6" y1="12" x2="3" y2="12" stroke="#8f8" stroke-width="1"/>
      <line x1="21" y1="12" x2="18" y2="12" stroke="#8f8" stroke-width="1"/>
      <circle cx="12" cy="12" r="1" fill="#8f8"/>
    </svg>
  `;
  container.appendChild(crosshair);

  const info = document.createElement("div");
  info.id = "hud-info";
  info.style.cssText = `
    position: fixed; bottom: 16px; left: 16px; color: #ccc; font-family: monospace; font-size: 14px;
  `;
  info.textContent = "Shield: 100 | HP: 50 | Ammo: 30/30";
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
  shield: number,
  hp: number,
  ammo: number,
  maxAmmo: number,
  debugMode?: boolean
): void {
  const el = document.getElementById("hud-info");
  const ammoStr = debugMode ? "∞" : `${ammo}/${maxAmmo}`;
  if (el) el.textContent = `Shield: ${shield} | HP: ${hp} | Ammo: ${ammoStr}`;

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
