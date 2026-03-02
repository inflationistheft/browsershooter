interface EffectState {
  remaining: number;
  duration: number;
  maxAlpha: number;
}

interface DamageAudioHandlers {
  onShieldHit?(intensity: number): void;
  onShieldBreak?(intensity: number): void;
  onHealthHit?(intensity: number): void;
}

const SHIELD_HIT_DURATION = 0.2;
const SHIELD_HIT_MAX_ALPHA = 0.58;

const SHIELD_BREAK_DURATION = 0.23;
const SHIELD_BREAK_MAX_ALPHA = 0.72;

const HEALTH_HIT_DURATION = 0.26;
const HEALTH_HIT_MAX_ALPHA = 0.6;

const SHIELD_REGEN_DURATION = 0.45;
const SHIELD_REGEN_MAX_ALPHA = 0.42;

/** Grid overlay in corners only: duration and max opacity. */
const GRID_HIT_DURATION = 0.28;
const GRID_HIT_MAX_ALPHA = 0.55;

const MAX_DT = 0.1;

/** Cornergröße für das Gitter: flacher Bogen (breiter als hoch). */
const GRID_CORNER_WIDTH_VMIN = 22;
const GRID_CORNER_HEIGHT_VMIN = 8;

let root: HTMLDivElement | null = null;
let shieldHitEl: HTMLDivElement | null = null;
let shieldBreakEl: HTMLDivElement | null = null;
let healthHitEl: HTMLDivElement | null = null;
let shieldRegenEl: HTMLDivElement | null = null;
let gridShieldEl: HTMLDivElement | null = null;
let gridHealthEl: HTMLDivElement | null = null;

const shieldHitEffect: EffectState = {
  remaining: 0,
  duration: SHIELD_HIT_DURATION,
  maxAlpha: SHIELD_HIT_MAX_ALPHA,
};

const shieldBreakEffect: EffectState = {
  remaining: 0,
  duration: SHIELD_BREAK_DURATION,
  maxAlpha: SHIELD_BREAK_MAX_ALPHA,
};

const healthHitEffect: EffectState = {
  remaining: 0,
  duration: HEALTH_HIT_DURATION,
  maxAlpha: HEALTH_HIT_MAX_ALPHA,
};

const shieldRegenEffect: EffectState = {
  remaining: 0,
  duration: SHIELD_REGEN_DURATION,
  maxAlpha: SHIELD_REGEN_MAX_ALPHA,
};

const gridShieldEffect: EffectState = {
  remaining: 0,
  duration: GRID_HIT_DURATION,
  maxAlpha: GRID_HIT_MAX_ALPHA,
};

const gridHealthEffect: EffectState = {
  remaining: 0,
  duration: GRID_HIT_DURATION,
  maxAlpha: GRID_HIT_MAX_ALPHA,
};

let prevShield: number | null = null;
let prevHealth: number | null = null;
let regenActive = false;

let audioHandlers: DamageAudioHandlers | null = null;

export function setDamageFeedbackAudioHandlers(
  handlers: DamageAudioHandlers | null
): void {
  audioHandlers = handlers;
}

export function createScreenDamageFeedback(parent: HTMLElement): void {
  if (root) return;

  root = document.createElement("div");
  root.id = "screen-damage-feedback";
  root.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:9994;";

  const baseStyles =
    "position:fixed;inset:0;pointer-events:none;background:transparent;opacity:0;transition:none;";

  // Ecken stärker, Seiten frei: Corner-Orbs mit steilem Falloff = „Energie“, nicht durchgehende Fläche
  const shieldHit = document.createElement("div");
  shieldHit.style.cssText = `${baseStyles}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 0 0 / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 100% 0 / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 0 100% / 34vmin 11vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(100,200,255,0.92) 0%, rgba(80,180,255,0.55) 22%, transparent 52%) 100% 100% / 34vmin 11vmin no-repeat;`;

  const shieldBreak = document.createElement("div");
  shieldBreak.style.cssText = `${baseStyles}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 0 0 / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 100% 0 / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 0 100% / 30vmin 10vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(160,220,255,0.98) 0%, rgba(110,200,255,0.7) 20%, transparent 55%) 100% 100% / 30vmin 10vmin no-repeat;`;

  const healthHit = document.createElement("div");
  healthHit.style.cssText = `${baseStyles}background:
    radial-gradient(ellipse 85% 85% at 0 0, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 0 0 / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 0, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 100% 0 / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 0 100%, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 0 100% / 28vmin 9vmin no-repeat,
    radial-gradient(ellipse 85% 85% at 100% 100%, rgba(210,40,40,1) 0%, rgba(210,40,40,0.85) 30%, transparent 80%) 100% 100% / 28vmin 9vmin no-repeat;`;

  // Regen = Leben/Heilung: nur von unten, grüner Bogen, leichte Pluszeichen (deutlich anders als Schaden)
  const shieldRegen = document.createElement("div");
  const greenPlus = "rgba(100,255,140,0.4)";
  const plusGap = "10px";
  const plusLine = "1.5px";
  const plusH = `repeating-linear-gradient(0deg, transparent 0, transparent ${plusGap}, ${greenPlus} ${plusGap}, ${greenPlus} calc(${plusGap} + ${plusLine}))`;
  const plusV = `repeating-linear-gradient(90deg, transparent 0, transparent ${plusGap}, ${greenPlus} ${plusGap}, ${greenPlus} calc(${plusGap} + ${plusLine}))`;
  shieldRegen.style.cssText = `
    position: fixed; left: 0; right: 0; bottom: 0; height: 7vmin;
    pointer-events: none; opacity: 0; transition: none;
    border-radius: 55% 55% 0 0;
    background-image: ${plusH}, ${plusV},
      radial-gradient(ellipse 75% 100% at 50% 100%, rgba(50,230,95,0.62) 0%, transparent 70%);
    background-size: 100% 100%, 100% 100%, 100% 100%;
    background-position: 0 0, 0 0, 0 0;
    background-repeat: repeat, repeat, no-repeat;`;

  // Gitter nur in den Ecken (wie Corner-Feedback): blau bei Shield-Hit/Break, rot bei Health-Hit
  const gridLinePx = "20px";
  const gridGap = "19px";
  const blueLine = "rgba(90,190,255,0.78)";
  const redLine = "rgba(255,90,90,0.8)";
  const repH = (color: string) =>
    `repeating-linear-gradient(0deg, transparent 0, transparent ${gridGap}, ${color} ${gridGap}, ${color} ${gridLinePx})`;
  const repV = (color: string) =>
    `repeating-linear-gradient(90deg, transparent 0, transparent ${gridGap}, ${color} ${gridGap}, ${color} ${gridLinePx})`;
  const corner = (color: string) => `${repH(color)}, ${repV(color)}`;
  const sz = `${GRID_CORNER_WIDTH_VMIN}vmin ${GRID_CORNER_HEIGHT_VMIN}vmin`;
  const pos = "0 0, 0 0, 100% 0, 100% 0, 0 100%, 0 100%, 100% 100%, 100% 100%";

  const eight = [sz, sz, sz, sz, sz, sz, sz, sz].join(", ");
  const gridShield = document.createElement("div");
  gridShield.style.cssText = `${baseStyles}
    background-image: ${corner(blueLine)}, ${corner(blueLine)}, ${corner(blueLine)}, ${corner(blueLine)};
    background-size: ${eight};
    background-position: ${pos};
    background-repeat: no-repeat;`;

  const gridHealth = document.createElement("div");
  gridHealth.style.cssText = `${baseStyles}
    background-image: ${corner(redLine)}, ${corner(redLine)}, ${corner(redLine)}, ${corner(redLine)};
    background-size: ${eight};
    background-position: ${pos};
    background-repeat: no-repeat;`;

  root.appendChild(shieldHit);
  root.appendChild(shieldBreak);
  root.appendChild(healthHit);
  root.appendChild(shieldRegen);
  root.appendChild(gridShield);
  root.appendChild(gridHealth);
  parent.appendChild(root);

  shieldHitEl = shieldHit;
  shieldBreakEl = shieldBreak;
  healthHitEl = healthHit;
  shieldRegenEl = shieldRegen;
  gridShieldEl = gridShield;
  gridHealthEl = gridHealth;

  prevShield = null;
  prevHealth = null;
  regenActive = false;
}

export function updateScreenDamageFeedback(
  dt: number,
  shield: number,
  maxShield: number,
  health: number,
  maxHealth: number
): void {
  if (!root || !shieldHitEl || !shieldBreakEl || !healthHitEl || !shieldRegenEl || !gridShieldEl || !gridHealthEl) {
    return;
  }

  const clampedDt = dt > MAX_DT ? MAX_DT : dt < 0 ? 0 : dt;

  if (prevShield !== null && prevHealth !== null) {
    const shieldDelta = shield - prevShield;
    const healthDelta = health - prevHealth;

    if (shieldDelta < 0) {
      const damageAmount = -shieldDelta;
      if (shield === 0) {
        triggerShieldBreak(damageAmount, prevShield, maxShield);
      } else if (shield > 0) {
        triggerShieldHit(damageAmount, maxShield);
      }
      triggerGridShieldHit();
    } else if (shield === 0 && healthDelta < 0) {
      const damageAmount = -healthDelta;
      triggerHealthHit(damageAmount, maxHealth);
      triggerGridHealthHit();
    }

    const isRegenNow = shield > prevShield && shield < maxShield;
    if (isRegenNow && !regenActive) {
      triggerShieldRegenStart();
      regenActive = true;
    } else if (!isRegenNow || shield === maxShield) {
      regenActive = false;
    }
  }

  prevShield = shield;
  prevHealth = health;

  updateEffectState(shieldHitEffect, shieldHitEl, clampedDt);
  updateEffectState(shieldBreakEffect, shieldBreakEl, clampedDt);
  updateEffectState(healthHitEffect, healthHitEl, clampedDt);
  updateEffectState(shieldRegenEffect, shieldRegenEl, clampedDt);
  if (shieldRegenEffect.remaining > 0 && shieldRegenEl) {
    const o = parseFloat(shieldRegenEl.style.opacity) || 0;
    const pulse = 0.88 + 0.12 * Math.sin(performance.now() * 0.004);
    shieldRegenEl.style.opacity = Math.max(0, Math.min(1, o * pulse)).toFixed(3);
  }
  updateEffectState(gridShieldEffect, gridShieldEl, clampedDt);
  updateEffectState(gridHealthEffect, gridHealthEl, clampedDt);

  if (health <= 0) {
    shieldHitEl.style.opacity = "0";
    shieldBreakEl.style.opacity = "0";
    healthHitEl.style.opacity = "0";
    shieldRegenEl.style.opacity = "0";
    gridShieldEl.style.opacity = "0";
    gridHealthEl.style.opacity = "0";
  }
}

function updateEffectState(
  effect: EffectState,
  element: HTMLDivElement,
  dt: number
): void {
  if (effect.remaining <= 0) {
    element.style.opacity = "0";
    return;
  }
  effect.remaining -= dt;
  if (effect.remaining <= 0) {
    element.style.opacity = "0";
    effect.remaining = 0;
    return;
  }

  const normalized = effect.duration > 0 ? effect.remaining / effect.duration : 0;
  const alpha = effect.maxAlpha * normalized;
  const clampedAlpha = alpha < 0 ? 0 : alpha > effect.maxAlpha ? effect.maxAlpha : alpha;
  element.style.opacity = clampedAlpha.toFixed(3);
}

function triggerShieldHit(damage: number, maxShield: number): void {
  const normalizedDamage = clamp01(damage / maxShield);
  const intensity = 0.6 + 0.4 * normalizedDamage;
  shieldHitEffect.remaining = SHIELD_HIT_DURATION;
  audioHandlers?.onShieldHit?.(intensity);
}

function triggerShieldBreak(
  damage: number,
  prevShield: number,
  maxShield: number
): void {
  const effectiveMax = prevShield > 0 ? prevShield : maxShield;
  const normalizedDamage = clamp01(damage / effectiveMax);
  const intensity = 0.7 + 0.3 * normalizedDamage;
  shieldBreakEffect.remaining = SHIELD_BREAK_DURATION;
  audioHandlers?.onShieldBreak?.(intensity);
}

function triggerHealthHit(damage: number, maxHealth: number): void {
  const normalizedDamage = clamp01(damage / maxHealth);
  const intensity = 0.6 + 0.4 * normalizedDamage;
  healthHitEffect.remaining = HEALTH_HIT_DURATION;
  audioHandlers?.onHealthHit?.(intensity);
}

function triggerShieldRegenStart(): void {
  shieldRegenEffect.remaining = SHIELD_REGEN_DURATION;
}

function triggerGridShieldHit(): void {
  gridShieldEffect.remaining = GRID_HIT_DURATION;
}

function triggerGridHealthHit(): void {
  gridHealthEffect.remaining = GRID_HIT_DURATION;
}

function clamp01(v: number): number {
  if (v < 0) return 0;
  if (v > 1) return 1;
  return v;
}

