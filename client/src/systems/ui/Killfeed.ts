import type { Room } from "colyseus.js";
import type { ArenaState, KillEventPayload, WeaponId } from "shared";
import { formatDisplayName } from "../../utils/displayName.js";

const MAX_ENTRIES = 5;
const VISIBLE_MS = 7000;
const FADE_OUT_MS = 500;
const ACCENT_COLOR = "#4dd0e1";

const WEAPON_ICON_URL = "/ui/weapon_rifle_white.png";
const HEADSHOT_ICON_URL = "/ui/headshot_white.png";

interface KillfeedEntry {
  id: number;
  killerId: string;
  victimId: string;
  weaponId: WeaponId;
  isHeadshot: boolean;
  createdAtMs: number;
  element: HTMLDivElement;
}

let container: HTMLDivElement | null = null;
const entries: KillfeedEntry[] = [];
let nextId = 1;
let timeMs = 0;

export function createKillfeed(parent: HTMLElement): void {
  if (container) return;
  const root = document.createElement("div");
  root.id = "killfeed";
  root.style.cssText =
    "position:fixed;top:88px;right:32px;pointer-events:none;z-index:9999;" +
    "display:flex;flex-direction:column;gap:6px;align-items:flex-end;font-family:system-ui,sans-serif;";
  parent.appendChild(root);
  container = root;
}

export function handleKillEvent(
  room: Room<ArenaState> | null,
  payload: KillEventPayload
): void {
  if (!container) return;
  const localPlayerId = room?.sessionId ?? null;

  const killerPlayer = room?.state.players.get(payload.killerId) ?? null;
  const victimPlayer = room?.state.players.get(payload.victimId) ?? null;

  const killerName = resolvePlayerLabel(payload.killerId, killerPlayer?.id);
  const victimName = resolvePlayerLabel(payload.victimId, victimPlayer?.id);

  const isLocalKiller = localPlayerId !== null && payload.killerId === localPlayerId;
  const isLocalVictim = localPlayerId !== null && payload.victimId === localPlayerId;

  const entryElement = document.createElement("div");
  entryElement.style.cssText =
    "display:flex;align-items:center;gap:8px;padding:4px 11px;" +
    "background:rgba(0,0,0,0.7);border-radius:4px;color:#fff;font-size:13px;" +
    "transform-origin:top right;opacity:1;pointer-events:none;";

  const killerSpan = document.createElement("span");
  killerSpan.textContent = killerName;
  killerSpan.style.fontWeight = "600";
  killerSpan.style.color = isLocalKiller ? ACCENT_COLOR : "#ffffff";
  entryElement.appendChild(killerSpan);

  const weaponImg = document.createElement("img");
  weaponImg.src = mapWeaponToIcon(payload.weaponId);
  weaponImg.alt = payload.weaponId;
  weaponImg.style.height = "18px";
  weaponImg.style.width = "auto";
  weaponImg.style.filter = "drop-shadow(0 0 2px rgba(0,0,0,0.8))";
  entryElement.appendChild(weaponImg);

  if (payload.isHeadshot) {
    const headshotImg = document.createElement("img");
    headshotImg.src = HEADSHOT_ICON_URL;
    headshotImg.alt = "Headshot";
    headshotImg.style.height = "18px";
    headshotImg.style.width = "auto";
    headshotImg.style.filter = "drop-shadow(0 0 2px rgba(0,0,0,0.8))";
    entryElement.appendChild(headshotImg);
  }

  const victimSpan = document.createElement("span");
  victimSpan.textContent = victimName;
  victimSpan.style.fontWeight = "500";
  victimSpan.style.color = isLocalVictim ? ACCENT_COLOR : "#ffffff";
  entryElement.appendChild(victimSpan);

  container.appendChild(entryElement);

  const entry: KillfeedEntry = {
    id: nextId++,
    killerId: payload.killerId,
    victimId: payload.victimId,
    weaponId: payload.weaponId,
    isHeadshot: payload.isHeadshot,
    createdAtMs: timeMs,
    element: entryElement,
  };
  entries.push(entry);

  while (entries.length > MAX_ENTRIES) {
    const oldest = entries.shift();
    if (oldest && oldest.element.parentElement === container) {
      container.removeChild(oldest.element);
    }
  }
}

export function updateKillfeed(dt: number): void {
  if (!container) return;
  timeMs += dt * 1000;

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const age = timeMs - entry.createdAtMs;
    if (age >= VISIBLE_MS + FADE_OUT_MS) {
      if (entry.element.parentElement === container) {
        container.removeChild(entry.element);
      }
      entries.splice(i, 1);
      i--;
      continue;
    }
    let opacity = 1;
    if (age > VISIBLE_MS) {
      const t = (age - VISIBLE_MS) / FADE_OUT_MS;
      opacity = Math.max(0, 1 - t);
    }
    entry.element.style.opacity = opacity.toFixed(2);
  }
}

function resolvePlayerLabel(id: string, nameFromState?: string): string {
  const base = nameFromState && nameFromState.trim().length > 0 ? nameFromState : id;
  return formatDisplayName(base);
}

function mapWeaponToIcon(_weaponId: WeaponId): string {
  return WEAPON_ICON_URL;
}

