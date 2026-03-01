/**
 * Health bars above hit players. Screen-space UI, constant pixel size.
 * Shown after damage with fade in/out, smoothing, damage chip, and clutter control.
 */

import * as THREE from "three";
import {
  HEALTH_BAR_VISIBILITY_MS,
  PLAYER_EYE_HEIGHT,
  MAX_SHIELD,
  MAX_HEALTH,
} from "shared";
import type { ArenaState, PlayerStateSchema } from "shared";

/** World offset (m) above head for anchor. */
const ANCHOR_WORLD_OFFSET = 0.5;
/** Bar size in pixels. */
const BAR_WIDTH = 84;
/** Height per segment (shield + health stacked). */
const SEGMENT_HEIGHT = 8;
/** Shield bar color (Halo-like). */
const SHIELD_COLOR = "#4dd0e1";
/** Shield chip (delayed damage) color. */
const SHIELD_CHIP_COLOR = "#2a9ca8";
/** Health bar color. */
const HEALTH_COLOR = "#e91e8c";
/** Health chip (delayed damage) color. */
const HEALTH_CHIP_COLOR = "#b0186a";
/** yOffset in screen px: bars center above anchor. */
const BAR_Y_OFFSET_PX = -20;
/** Smoothing: higher = snappier. */
const SMOOTH_RATE = 22;
/** Visibility fade times (s). */
const FADE_IN_TIME = 0.06;
const FADE_OUT_TIME = 0.18;
/** Damage chip: delay before chip starts catching up (s). */
const CHIP_DELAY = 0.1;
/** Chip catch-up speed (0..1 per second). */
const CHIP_CATCHUP_SPEED = 5;
/** Max bars visible at once. */
const MAX_BARS = 2;
/** Safe area inset (px) - bars can go to edge. */
const SAFE_INSET = 24;

interface BarEntry {
  entityId: string;
  lastDamagedTime: number;
  lastDamagedMs: number;
  element: HTMLDivElement;
  shieldBarEl: HTMLDivElement;
  shieldFillEl: HTMLDivElement;
  shieldChipEl: HTMLDivElement;
  healthBarEl: HTMLDivElement;
  healthFillEl: HTMLDivElement;
  healthChipEl: HTMLDivElement;
  smoothedScreenX: number;
  smoothedScreenY: number;
  visibilityAlpha: number;
  shieldChipValue: number;
  healthChipValue: number;
  shieldChipDelayRemaining: number;
  healthChipDelayRemaining: number;
  prevShield: number;
  prevHealth: number;
}

let container: HTMLDivElement | null = null;
const bars = new Map<string, BarEntry>();
let elapsedMs = 0;

const anchorWorldPos = new THREE.Vector3();
const ndc = new THREE.Vector3();

export function createPlayerHealthBars(parent: HTMLElement): void {
  container = document.createElement("div");
  container.id = "player-health-bars";
  container.style.cssText =
    "position:fixed;inset:0;pointer-events:none;overflow:hidden;z-index:9999;";
  parent.appendChild(container);
}

export function onPlayerHit(targetId: string): void {
  if (!container) return;

  let entry = bars.get(targetId);
  if (!entry) {
    const wrap = document.createElement("div");
    wrap.style.cssText = `
      position: absolute;
      width: ${BAR_WIDTH}px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      transform-origin: center center;
      opacity: 0;
    `;

    const makeBar = (chipColor: string, fillColor: string) => {
      const bar = document.createElement("div");
      bar.style.cssText = `
        position: relative;
        width: 100%;
        height: ${SEGMENT_HEIGHT}px;
        background: rgba(0,0,0,0.6);
        border-radius: 2px;
        overflow: hidden;
      `;
      const chip = document.createElement("div");
      chip.style.cssText = `
        position: absolute; left: 0; top: 0; bottom: 0;
        width: 100%; background: ${chipColor}; transition: none;
      `;
      const fill = document.createElement("div");
      fill.style.cssText = `
        position: absolute; left: 0; top: 0; bottom: 0;
        width: 0; background: ${fillColor}; transition: none;
      `;
      bar.appendChild(chip);
      bar.appendChild(fill);
      return { bar, chip, fill };
    };

    const shieldBar = makeBar(SHIELD_CHIP_COLOR, SHIELD_COLOR);
    const healthBar = makeBar(HEALTH_CHIP_COLOR, HEALTH_COLOR);

    wrap.appendChild(shieldBar.bar);
    wrap.appendChild(healthBar.bar);
    container.appendChild(wrap);

    entry = {
      entityId: targetId,
      lastDamagedTime: 0,
      lastDamagedMs: 0,
      element: wrap,
      shieldBarEl: shieldBar.bar,
      shieldFillEl: shieldBar.fill,
      shieldChipEl: shieldBar.chip,
      healthBarEl: healthBar.bar,
      healthFillEl: healthBar.fill,
      healthChipEl: healthBar.chip,
      smoothedScreenX: 0,
      smoothedScreenY: 0,
      visibilityAlpha: 0,
      shieldChipValue: 1,
      healthChipValue: 1,
      shieldChipDelayRemaining: 0,
      healthChipDelayRemaining: 0,
      prevShield: MAX_SHIELD,
      prevHealth: MAX_HEALTH,
    };
    bars.set(targetId, entry);
  }

  entry.lastDamagedTime = performance.now() / 1000;
  entry.lastDamagedMs = elapsedMs;
}

export function updatePlayerHealthBars(
  room: { state: ArenaState } | null,
  camera: THREE.Camera,
  dt: number
): void {
  elapsedMs += dt * 1000;
  const now = performance.now() / 1000;

  if (!container || !room) return;

  const w = window.innerWidth;
  const h = window.innerHeight;
  const safeLeft = SAFE_INSET;
  const safeRight = w - SAFE_INSET;
  const safeTop = SAFE_INSET;
  const safeBottom = h - SAFE_INSET;

  /** Show duration after last hit (s). */
  const showDuration = HEALTH_BAR_VISIBILITY_MS / 1000;

  const candidates: BarEntry[] = [];
  room.state.players.forEach((player: PlayerStateSchema, key: string) => {
    const entry = bars.get(key);
    if (!entry) return;
    if (player.health <= 0) return;
    const timeSinceHit = now - entry.lastDamagedTime;
    if (timeSinceHit > showDuration) return;
    candidates.push(entry);
  });

  candidates.sort((a, b) => b.lastDamagedTime - a.lastDamagedTime);
  const toShow = candidates.slice(0, MAX_BARS);

  room.state.players.forEach((player: PlayerStateSchema, key: string) => {
    const entry = bars.get(key);
    if (!entry) return;

    const isAlive = player.health > 0;
    const timeSinceHit = now - entry.lastDamagedTime;
    const shouldBeVisible =
      isAlive &&
      timeSinceHit < showDuration &&
      toShow.includes(entry);

    anchorWorldPos.set(
      player.x,
      player.y + PLAYER_EYE_HEIGHT + ANCHOR_WORLD_OFFSET,
      player.z
    );
    ndc.copy(anchorWorldPos).project(camera);

    if (ndc.z > 1) {
      entry.element.style.opacity = "0";
      entry.element.style.pointerEvents = "none";
      return;
    }

    let screenX = (ndc.x * 0.5 + 0.5) * w;
    let screenY = (1 - (ndc.y * 0.5 + 0.5)) * h + BAR_Y_OFFSET_PX;

    screenX = Math.max(safeLeft, Math.min(safeRight, screenX));
    screenY = Math.max(safeTop, Math.min(safeBottom, screenY));

    const dx = screenX - entry.smoothedScreenX;
    const dy = screenY - entry.smoothedScreenY;
    const jumpDist = Math.hypot(dx, dy);
    if (jumpDist > 80 || (entry.smoothedScreenX === 0 && entry.smoothedScreenY === 0)) {
      entry.smoothedScreenX = screenX;
      entry.smoothedScreenY = screenY;
    }
    if (jumpDist <= 80) {
      const smoothFactor = 1 - Math.exp(-SMOOTH_RATE * dt);
      entry.smoothedScreenX += (screenX - entry.smoothedScreenX) * smoothFactor;
      entry.smoothedScreenY += (screenY - entry.smoothedScreenY) * smoothFactor;
    }

    const targetAlpha = shouldBeVisible ? 1 : 0;
    if (targetAlpha > entry.visibilityAlpha) {
      entry.visibilityAlpha = Math.min(1, entry.visibilityAlpha + dt / FADE_IN_TIME);
    } else {
      entry.visibilityAlpha = Math.max(0, entry.visibilityAlpha - dt / FADE_OUT_TIME);
    }

    entry.element.style.left = `${entry.smoothedScreenX}px`;
    entry.element.style.top = `${entry.smoothedScreenY}px`;
    entry.element.style.transform = "translate(-50%, -50%)";
    entry.element.style.opacity = String(entry.visibilityAlpha);

    const shield = (player as { shield?: number }).shield ?? 0;
    const maxShield = (player as { maxShield?: number }).maxShield ?? MAX_SHIELD;
    const shieldRatio = maxShield > 0 ? Math.max(0, Math.min(1, shield / maxShield)) : 0;
    const healthRatio = Math.max(0, Math.min(1, player.health / player.maxHealth));

    entry.shieldFillEl.style.width = `${shieldRatio * 100}%`;
    entry.healthFillEl.style.width = `${healthRatio * 100}%`;

    const shieldTookDamage = shield < entry.prevShield;
    const healthTookDamage = player.health < entry.prevHealth;
    if (shieldTookDamage) {
      entry.shieldChipValue = entry.prevShield / maxShield;
      entry.shieldChipDelayRemaining = CHIP_DELAY;
    }
    if (healthTookDamage) {
      entry.healthChipValue = entry.prevHealth / player.maxHealth;
      entry.healthChipDelayRemaining = CHIP_DELAY;
    }
    entry.prevShield = shield;
    entry.prevHealth = player.health;

    if (entry.shieldChipDelayRemaining > 0) {
      entry.shieldChipDelayRemaining -= dt;
    } else if (entry.shieldChipValue > shieldRatio) {
      entry.shieldChipValue = Math.max(
        shieldRatio,
        entry.shieldChipValue - CHIP_CATCHUP_SPEED * dt
      );
    }
    if (entry.healthChipDelayRemaining > 0) {
      entry.healthChipDelayRemaining -= dt;
    } else if (entry.healthChipValue > healthRatio) {
      entry.healthChipValue = Math.max(
        healthRatio,
        entry.healthChipValue - CHIP_CATCHUP_SPEED * dt
      );
    }
    entry.shieldChipEl.style.width = `${Math.max(0, Math.min(1, entry.shieldChipValue)) * 100}%`;
    entry.healthChipEl.style.width = `${Math.max(0, Math.min(1, entry.healthChipValue)) * 100}%`;
  });

  const toRemove: string[] = [];
  bars.forEach((entry, key) => {
    if (!room.state.players.get(key)) {
      container?.removeChild(entry.element);
      toRemove.push(key);
    }
  });
  toRemove.forEach((k) => bars.delete(k));
}
