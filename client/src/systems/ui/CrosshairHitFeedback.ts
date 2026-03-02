interface HitmarkerState {
  remaining: number;
  duration: number;
  color: string;
  active: boolean;
}

const HIT_DURATION = 0.28;
const KILL_DURATION = 0.4;
const HIT_COLOR = "#a0a0a0";
const KILL_COLOR = "#e53935";
const MAX_DT = 0.1;

const SVG_SIZE = 40;
const CENTER = SVG_SIZE / 2;
const INNER_RADIUS = 9;
const BASE_ARM_LENGTH = 7;
const SPREAD_EXTRA_LENGTH = 6;
const STROKE_WIDTH = 2;
const Z_INDEX = 9996;

let container: HTMLDivElement | null = null;
let lines: SVGLineElement[] = [];
let state: HitmarkerState | null = null;

export function createCrosshairHitFeedback(parent: HTMLElement): void {
  if (container) return;

  const root = document.createElement("div");
  root.id = "crosshair-hit-feedback";
  root.style.cssText = `
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${SVG_SIZE}px;
    height: ${SVG_SIZE}px;
    pointer-events: none;
    z-index: ${Z_INDEX};
    opacity: 0;
    transition: none;
  `;

  root.innerHTML = `
    <svg width="${SVG_SIZE}" height="${SVG_SIZE}" viewBox="0 0 ${SVG_SIZE} ${SVG_SIZE}" xmlns="http://www.w3.org/2000/svg">
      <line id="hitmarker-nw" x1="${CENTER}" y1="${CENTER}" x2="${CENTER}" y2="${CENTER}" stroke="${HIT_COLOR}" stroke-width="${STROKE_WIDTH}" stroke-linecap="round" />
      <line id="hitmarker-ne" x1="${CENTER}" y1="${CENTER}" x2="${CENTER}" y2="${CENTER}" stroke="${HIT_COLOR}" stroke-width="${STROKE_WIDTH}" stroke-linecap="round" />
      <line id="hitmarker-se" x1="${CENTER}" y1="${CENTER}" x2="${CENTER}" y2="${CENTER}" stroke="${HIT_COLOR}" stroke-width="${STROKE_WIDTH}" stroke-linecap="round" />
      <line id="hitmarker-sw" x1="${CENTER}" y1="${CENTER}" x2="${CENTER}" y2="${CENTER}" stroke="${HIT_COLOR}" stroke-width="${STROKE_WIDTH}" stroke-linecap="round" />
    </svg>
  `;

  const svg = root.querySelector("svg");
  const nw = svg?.querySelector<SVGLineElement>("#hitmarker-nw") ?? null;
  const ne = svg?.querySelector<SVGLineElement>("#hitmarker-ne") ?? null;
  const se = svg?.querySelector<SVGLineElement>("#hitmarker-se") ?? null;
  const sw = svg?.querySelector<SVGLineElement>("#hitmarker-sw") ?? null;

  if (!svg || !nw || !ne || !se || !sw) {
    // Fallback: do not attach if SVG structure is not as expected
    return;
  }

  container = root;
  lines = [nw, ne, se, sw];
  state = {
    remaining: 0,
    duration: HIT_DURATION,
    color: HIT_COLOR,
    active: false,
  };

  parent.appendChild(root);
  updateHitmarkerLines(BASE_ARM_LENGTH);
}

export function triggerCrosshairHit(): void {
  startHitmarker(HIT_DURATION, HIT_COLOR);
}

export function triggerCrosshairKill(): void {
  startHitmarker(KILL_DURATION, KILL_COLOR);
}

export function updateCrosshairHitFeedback(dt: number): void {
  if (!container || lines.length === 0 || !state || !state.active) return;

  const clampedDt = dt < 0 ? 0 : dt > MAX_DT ? MAX_DT : dt;
  state.remaining -= clampedDt;

  if (state.remaining <= 0) {
    state.active = false;
    state.remaining = 0;
    container.style.opacity = "0";
    return;
  }

  const t = state.duration > 0 ? state.remaining / state.duration : 0;
  const opacity = t * t;
  container.style.opacity = opacity.toFixed(3);

  const growth = 1 - t;
  const armLength = BASE_ARM_LENGTH + SPREAD_EXTRA_LENGTH * (growth < 0 ? 0 : growth);
  updateHitmarkerLines(armLength);
}

function startHitmarker(duration: number, color: string): void {
  if (!container || lines.length === 0) return;

  if (!state) {
    state = {
      remaining: duration,
      duration,
      color,
      active: true,
    };
  } else {
    state.remaining = duration;
    state.duration = duration;
    state.color = color;
    state.active = true;
  }

  for (const line of lines) {
    line.style.stroke = color;
  }
  container.style.opacity = "1";

  const armLength = BASE_ARM_LENGTH + SPREAD_EXTRA_LENGTH;
  updateHitmarkerLines(armLength);
}

function updateHitmarkerLines(armLength: number): void {
  if (lines.length === 0) return;

  const dirs = [
    { x: -1, y: -1 }, // NW
    { x: 1, y: -1 }, // NE
    { x: 1, y: 1 }, // SE
    { x: -1, y: 1 }, // SW
  ];

  const inner = INNER_RADIUS;
  const outer = INNER_RADIUS + armLength;

  for (let i = 0; i < lines.length && i < dirs.length; i++) {
    const line = lines[i];
    const dir = dirs[i];
    const x1 = CENTER + dir.x * inner;
    const y1 = CENTER + dir.y * inner;
    const x2 = CENTER + dir.x * outer;
    const y2 = CENTER + dir.y * outer;
    line.setAttribute("x1", x1.toFixed(2));
    line.setAttribute("y1", y1.toFixed(2));
    line.setAttribute("x2", x2.toFixed(2));
    line.setAttribute("y2", y2.toFixed(2));
  }
}

