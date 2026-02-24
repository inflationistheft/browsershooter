/**
 * HUD stub: crosshair, HP, ammo placeholders.
 */

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
}

export function updateHUD(hp: number, ammo: number, maxAmmo: number): void {
  const el = document.getElementById("hud-info");
  if (el) el.textContent = `HP: ${hp} | Ammo: ${ammo}/${maxAmmo}`;
}
