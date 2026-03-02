import { RESPAWN_DELAY_SEC } from "shared";
import { formatDisplayName } from "../../utils/displayName.js";

let deathTime: number | null = null;

/** Drei Ebenen: Blau = Schild, Rot = Leben dahinter, Schwarz = kein Leben mehr. */
const SHIELD_COLOR = "#4dd0e1";
const HEALTH_COLOR = "#c62828";
const HEALTH_TRACK = "#9a1f1f";  /* Rot „hinter“ dem Schild */
const DEAD_TRACK = "rgba(0,0,0,0.6)";  /* Schwarz erst wenn Leben weg */
const SEGMENTS = 10;

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

  const panel = document.createElement("div");
  panel.id = "hud-player-panel";
  panel.style.cssText = `
    position: fixed; bottom: 48px; left: 48px;
    display: flex; flex-direction: column; gap: 6px;
    font-family: system-ui, sans-serif; color: #fff;
  `;
  const numberEl = document.createElement("div");
  numberEl.id = "hud-player-value";
  numberEl.style.cssText = `font-size: 26px; font-weight: 600; letter-spacing: 0.02em;`;
  numberEl.textContent = "150 / 150";

  const barWrap = document.createElement("div");
  barWrap.id = "hud-player-bar";
  barWrap.style.cssText = `
    display: flex; gap: 2px; width: 230px; height: 17px;
    background: rgba(0,0,0,0.5); border-radius: 4px;
    padding: 4px; box-sizing: border-box;
  `;
  for (let i = 0; i < SEGMENTS; i++) {
    const seg = document.createElement("div");
    seg.style.cssText = `
      flex: 1; border-radius: 2px; min-width: 0;
      background: ${SHIELD_COLOR}; transition: background 0.15s ease;
    `;
    barWrap.appendChild(seg);
  }

  const nameEl = document.createElement("div");
  nameEl.id = "hud-player-name";
  nameEl.style.cssText = `font-size: 18px; color: rgba(255,255,255,0.9);`;
  nameEl.textContent = "Player";

  const leftInfo = document.createElement("div");
  leftInfo.id = "hud-left-info";
  leftInfo.style.cssText = `font-size: 15px; color: rgba(255,255,255,0.5); margin-top: 4px;`;
  leftInfo.textContent = "";

  panel.appendChild(numberEl);
  panel.appendChild(barWrap);
  panel.appendChild(nameEl);
  panel.appendChild(leftInfo);
  container.appendChild(panel);

  // Weapon + ammo panel (bottom right): Ammo über Waffe, rechts Slot-Anzeige
  const weaponPanel = document.createElement("div");
  weaponPanel.id = "hud-weapon-panel";
  weaponPanel.style.cssText = `
    position: fixed; bottom: 48px; right: 48px;
    display: flex; flex-direction: row; align-items: stretch; gap: 16px;
    font-family: system-ui, sans-serif; color: #fff;
  `;
  const weaponImg = document.createElement("img");
  weaponImg.id = "hud-weapon-image";
  weaponImg.src = "/ui/weapon_rifle_white.png";
  weaponImg.alt = "Weapon";
  weaponImg.style.cssText = `
    width: 208px; height: auto; object-fit: contain;
    filter: drop-shadow(0 0 6px rgba(0,0,0,0.7));
    transform: scaleX(-1);
  `;
  const ammoEl = document.createElement("div");
  ammoEl.id = "hud-info";
  ammoEl.style.cssText = `
    font-size: 26px; font-weight: 600; letter-spacing: 0.02em;
    color: #fff; text-align: right;
  `;
  ammoEl.innerHTML = `<span style="color:#fff">30</span><span style="color:rgba(255,255,255,0.6)"> / 30</span>`;

  // Linker Block: Ammo über der Waffe
  const weaponMain = document.createElement("div");
  weaponMain.style.cssText = `
    display: flex; flex-direction: column; align-items: flex-end; gap: 6px;
  `;
  weaponMain.appendChild(ammoEl);
  weaponMain.appendChild(weaponImg);

  // Rechter Block: Vertikaler Strich (volle Höhe = inkl. 30/30), Raute + "1" zentriert
  const slotContainer = document.createElement("div");
  slotContainer.id = "hud-weapon-slots";
  slotContainer.style.cssText = `
    display: flex; flex-direction: column; align-items: flex-start; min-height: 0;
  `;
  const slotRow = document.createElement("div");
  slotRow.style.cssText = `
    display: flex; flex-direction: row; align-items: center; gap: 8px;
    flex: 1; min-height: 0; opacity: 0.9;
  `;
  const slotLine = document.createElement("div");
  slotLine.style.cssText = `
    width: 2px; height: 100%;
    background: rgba(255,255,255,0.6);
    position: relative;
    align-self: stretch;
  `;
  const slotDiamond = document.createElement("div");
  slotDiamond.style.cssText = `
    width: 10px; height: 10px;
    background: rgba(255,255,255,0.9);
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 1px;
  `;
  slotLine.appendChild(slotDiamond);
  const slotKey = document.createElement("div");
  slotKey.textContent = "1";
  slotKey.style.cssText = `
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.08em;
    color: rgba(255,255,255,0.9);
  `;
  slotRow.appendChild(slotLine);
  slotRow.appendChild(slotKey);
  slotContainer.appendChild(slotRow);

  weaponPanel.appendChild(weaponMain);
  weaponPanel.appendChild(slotContainer);
  container.appendChild(weaponPanel);

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
  maxShield: number,
  hp: number,
  maxHealth: number,
  ammo: number,
  maxAmmo: number,
  playerName: string,
  debugMode?: boolean
): void {
  const isShieldState = shield > 0;
  const current = isShieldState ? shield : hp;
  const maximum = isShieldState ? maxShield : maxHealth;
  const fillRatio = maximum > 0 ? current / maximum : 0;
  const filledSegments = Math.round(fillRatio * SEGMENTS);
  const barColor = isShieldState ? SHIELD_COLOR : HEALTH_COLOR;

  const valueEl = document.getElementById("hud-player-value");
  if (valueEl) {
    const totalCurrent = Math.max(0, Math.floor(shield + hp));
    const totalMaximum = maxShield + maxHealth;
    valueEl.innerHTML = `<span style="color:#fff">${totalCurrent}</span><span style="color:rgba(255,255,255,0.6)"> / ${totalMaximum}</span>`;
  }

  const barEl = document.getElementById("hud-player-bar");
  /* Schild-Phase: gefüllt = Blau, Rest = Rot (Leben dahinter). Health-Phase: gefüllt = Rot, Rest = Schwarz. */
  const trackColor = isShieldState ? HEALTH_TRACK : DEAD_TRACK;
  if (barEl && barEl.children.length === SEGMENTS) {
    for (let i = 0; i < SEGMENTS; i++) {
      const seg = barEl.children[i] as HTMLElement;
      seg.style.background = i < filledSegments ? barColor : trackColor;
    }
  }
  const barWrap = document.getElementById("hud-player-bar");
  if (barWrap) (barWrap as HTMLElement).style.background = isShieldState ? "rgba(40,0,0,0.4)" : "rgba(0,0,0,0.5)";

  const nameEl = document.getElementById("hud-player-name");
  if (nameEl) nameEl.textContent = formatDisplayName(playerName);

  const infoEl = document.getElementById("hud-info");
  if (infoEl) {
    const current = debugMode ? "∞" : String(ammo);
    const maximum = debugMode ? "∞" : String(maxAmmo);
    infoEl.innerHTML = `<span style="color:#fff">${current}</span><span style="color:rgba(255,255,255,0.6)"> / ${maximum}</span>`;
  }

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
