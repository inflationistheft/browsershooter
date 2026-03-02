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
/** Bar: Länge wie früher, schlanker Rand, gestückelte Optik mit schwarzem Rand. */
const BAR_WIDTH = 84;
const BAR_HEIGHT = 10;
const SEGMENTS = 10;
/** Wie HUD: Blau = Schild, Rot = Leben dahinter, Schwarz = tot. */
const SHIELD_COLOR = "#4dd0e1";
const HEALTH_COLOR = "#c62828";
const HEALTH_TRACK = "#9a1f1f";
const DEAD_TRACK = "rgba(0,0,0,0.6)";
/** Flash duration when shield breaks (s). */
const SHIELD_BREAK_FLASH_MS = 80;
const BAR_Y_OFFSET_PX = -14;
/** Smoothing: higher = snappier. */
const SMOOTH_RATE = 22;
/** Visibility fade times (s). */
const FADE_IN_TIME = 0.06;
const FADE_OUT_TIME = 0.18;
/** Max bars visible at once. */
const MAX_BARS = 2;
/** Safe area inset (px) - bars can go to edge. */
const SAFE_INSET = 24;

interface BarEntry {
  entityId: string;
  lastDamagedTime: number;
  lastDamagedMs: number;
  element: HTMLDivElement;
  segments: HTMLDivElement[];
  smoothedScreenX: number;
  smoothedScreenY: number;
  visibilityAlpha: number;
  prevShield: number;
  prevHealth: number;
  shieldBreakFlashUntil: number;
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
      display: flex;
      gap: 1px;
      width: ${BAR_WIDTH}px;
      height: ${BAR_HEIGHT}px;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(0,0,0,0.85);
      border-radius: 2px;
      padding: 1px;
      box-sizing: border-box;
      transform-origin: center center;
      opacity: 0;
    `;
    const segmentEls: HTMLDivElement[] = [];
    for (let i = 0; i < SEGMENTS; i++) {
      const seg = document.createElement("div");
      seg.style.cssText = `
        flex: 1; min-width: 0; border-radius: 1px;
        background: ${SHIELD_COLOR}; transition: background 0.12s ease;
      `;
      wrap.appendChild(seg);
      segmentEls.push(seg);
    }
    container.appendChild(wrap);

    entry = {
      entityId: targetId,
      lastDamagedTime: 0,
      lastDamagedMs: 0,
      element: wrap,
      segments: segmentEls,
      smoothedScreenX: 0,
      smoothedScreenY: 0,
      visibilityAlpha: 0,
      prevShield: MAX_SHIELD,
      prevHealth: MAX_HEALTH,
      shieldBreakFlashUntil: 0,
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
    const isShieldState = shield > 0;
    const current = isShieldState ? shield : player.health;
    const maximum = isShieldState ? maxShield : player.maxHealth;
    const fillRatio = maximum > 0 ? current / maximum : 0;
    const filledSegments = Math.round(fillRatio * SEGMENTS);
    const barColor = isShieldState ? SHIELD_COLOR : HEALTH_COLOR;
    const trackColor = isShieldState ? HEALTH_TRACK : DEAD_TRACK;

    entry.element.style.background = isShieldState
      ? "rgba(0,0,0,0.5)"
      : "rgba(0,0,0,0.5)";
    for (let i = 0; i < SEGMENTS; i++) {
      const seg = entry.segments[i];
      if (seg) seg.style.background = i < filledSegments ? barColor : trackColor;
    }

    const shieldBroke = entry.prevShield > 0 && shield === 0;
    if (shieldBroke) {
      entry.shieldBreakFlashUntil = now * 1000 + SHIELD_BREAK_FLASH_MS;
    }
    entry.prevShield = shield;
    entry.prevHealth = player.health;

    const flashing = now * 1000 < entry.shieldBreakFlashUntil;
    entry.element.style.boxShadow = flashing
      ? "0 0 8px 2px rgba(255,80,80,0.8)"
      : "none";
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
