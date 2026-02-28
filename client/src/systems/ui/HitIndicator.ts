/**
 * Hit direction indicator: ring around the crosshair with red segments
 * showing where damage came from. Classic FPS style.
 * Uses movement yaw/pitch (same as server hitscan) for correct cardinal directions.
 */

import * as THREE from "three";

/** Total lifetime (s) including fade. */
const FADE_DURATION = 1.0;
/** Wedge arc width in degrees. */
const WEDGE_DEG = 45;
/** Max active indicators (stack rapid hits). */
const MAX_INDICATORS = 4;
/** Color - bright red. */
const INDICATOR_COLOR = "#e53935";
/** Ring inner edge: hole for crosshair (larger = ring further out). */
const RING_INNER_PCT = 36;
/** Ring outer edge. Ring width = outer - inner. */
const RING_OUTER_PCT = 44;
/** Ring size - square that contains the ring, in vmin. */
const RING_SIZE_VMIN = 40;
/** z-index: above canvas, below crosshair. */
const Z_INDEX = 9995;
/** Debug log throttle (s). */
const DEBUG_LOG_INTERVAL = 0.5;

interface HitEntry {
  spawnTime: number;
  dirX: number;
  dirY: number;
  dirZ: number;
  element: HTMLDivElement;
  wedge: HTMLDivElement;
  arrow: HTMLDivElement;
}

let container: HTMLDivElement | null = null;
const entries: HitEntry[] = [];
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const worldUp = new THREE.Vector3(0, 1, 0);
let lastDebugLogTime = 0;
/** Last computed angle (deg) for debug overlay. */
let lastAngleDeg: number | null = null;

/** Returns last hit indicator angle for debug display, or null if none. */
export function getLastHitAngle(): number | null {
  return lastAngleDeg;
}

/**
 * Compute screen angle (0 = top, 90 = right) from 3D world direction.
 * Uses forward and right components so diagonals (1:30, 4:30, etc.) are correct.
 * Front=0°, 1:30=45°, Right=90°, Back=180°, Left=270°.
 */
function worldDirToScreenAngle(
  dirX: number,
  dirY: number,
  dirZ: number,
  yaw: number,
  pitch: number
): number {
  const sy = Math.sin(-yaw);
  const cy = Math.cos(-yaw);
  const sp = Math.sin(pitch);
  const cp = Math.cos(pitch);
  forward.set(sy, cy * sp, -cy * cp);

  right.crossVectors(forward, worldUp);
  if (right.lengthSq() < 1e-10) {
    right.set(1, 0, 0);
  } else {
    right.normalize();
  }

  const dir = new THREE.Vector3(dirX, dirY, dirZ);
  const f = dir.dot(forward);
  const r = dir.dot(right);

  let angleRad = Math.atan2(r, f);
  if (angleRad < 0) angleRad += 2 * Math.PI;
  return (angleRad * 180) / Math.PI;
}

export function createHitIndicator(parent: HTMLElement): void {
  container = document.createElement("div");
  container.id = "hit-indicator";
  container.style.cssText = `position:fixed;inset:0;pointer-events:none;z-index:${Z_INDEX};`;
  parent.appendChild(container);
}

export function onHitReceived(dirX: number, dirY: number, dirZ: number): void {
  if (!container) return;
  while (entries.length >= MAX_INDICATORS) {
    const old = entries.shift()!;
    old.element.remove();
  }

  const wrapper = document.createElement("div");
  wrapper.style.cssText = `
    position: absolute;
    left: 50%;
    top: 50%;
    width: ${RING_SIZE_VMIN}vmin;
    height: ${RING_SIZE_VMIN}vmin;
    transform-origin: center center;
  `;
  const wedge = document.createElement("div");
  wedge.style.cssText = `
    position: absolute;
    inset: 0;
    background: conic-gradient(
      from ${-WEDGE_DEG / 2}deg at 50% 50%,
      ${INDICATOR_COLOR} 0deg,
      ${INDICATOR_COLOR} ${WEDGE_DEG}deg,
      transparent ${WEDGE_DEG}deg
    );
    opacity: 0.55;
    mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${RING_INNER_PCT}%,
      rgba(255,255,255,0.4) ${RING_INNER_PCT}%,
      rgba(255,255,255,0.9) ${RING_OUTER_PCT}%,
      transparent ${RING_OUTER_PCT}%
    );
    -webkit-mask: radial-gradient(
      circle,
      transparent 0%,
      transparent ${RING_INNER_PCT}%,
      rgba(255,255,255,0.4) ${RING_INNER_PCT}%,
      rgba(255,255,255,0.9) ${RING_OUTER_PCT}%,
      transparent ${RING_OUTER_PCT}%
    );
  `;
  const arrowSize = 16;
  const outerEdgePct = 19;
  const arrow = document.createElement("div");
  arrow.style.cssText = `
    position: absolute;
    left: 50%;
    top: calc(${outerEdgePct}% - ${arrowSize}px);
    width: 0;
    height: 0;
    margin-left: -${arrowSize}px;
    border-left: ${arrowSize}px solid transparent;
    border-right: ${arrowSize}px solid transparent;
    border-bottom: ${arrowSize}px solid ${INDICATOR_COLOR};
    opacity: 0.9;
    pointer-events: none;
  `;
  wrapper.appendChild(wedge);
  wrapper.appendChild(arrow);
  container.appendChild(wrapper);

  entries.push({
    spawnTime: performance.now() / 1000,
    dirX,
    dirY,
    dirZ,
    element: wrapper,
    wedge,
    arrow,
  });
}

export function updateHitIndicators(
  yaw: number,
  pitch: number,
  _dt: number,
  debugMode?: boolean
): void {
  if (!container) return;

  const now = performance.now() / 1000;

  if (debugMode && entries.length > 0 && now - lastDebugLogTime >= DEBUG_LOG_INTERVAL) {
    lastDebugLogTime = now;
    const e = entries[entries.length - 1];
    const a = worldDirToScreenAngle(e.dirX, e.dirY, e.dirZ, yaw, pitch);
    console.log(
      `[HitIndicator] dir=(${e.dirX.toFixed(2)},${e.dirY.toFixed(2)},${e.dirZ.toFixed(2)}) angle=${a.toFixed(1)}°`
    );
  }

  lastAngleDeg = null;
  for (let i = entries.length - 1; i >= 0; i--) {
    const entry = entries[i];
    const age = now - entry.spawnTime;

    const angleDeg = worldDirToScreenAngle(
      entry.dirX,
      entry.dirY,
      entry.dirZ,
      yaw,
      pitch
    );
    if (i === entries.length - 1) lastAngleDeg = angleDeg;
    entry.element.style.transform = `translate(-50%, -50%) rotate(${angleDeg}deg)`;

    const alpha = Math.max(0, 1 - age / FADE_DURATION);
    entry.wedge.style.opacity = String(0.55 * alpha);
    entry.arrow.style.opacity = String(0.9 * alpha);

    if (age >= FADE_DURATION) {
      entry.element.remove();
      entries.splice(i, 1);
    }
  }
}
