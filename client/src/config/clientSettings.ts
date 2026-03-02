export interface PerformanceSettings {
  renderScale: number;
  aaEnabled: boolean;
}

const STORAGE_KEY = "browsershooter:performanceSettings";

let currentPerformance: PerformanceSettings = loadInitial();

function loadInitial(): PerformanceSettings {
  if (typeof window === "undefined") {
    return { renderScale: 1, aaEnabled: false };
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return { renderScale: 1, aaEnabled: false };
    const parsed = JSON.parse(raw) as Partial<PerformanceSettings> | null;
    const scale =
      parsed && typeof parsed.renderScale === "number" && parsed.renderScale > 0
        ? parsed.renderScale
        : 1;
    const aa = !!parsed?.aaEnabled;
    return { renderScale: scale, aaEnabled: aa };
  } catch {
    return { renderScale: 1, aaEnabled: false };
  }
}

function persistPerformance(settings: PerformanceSettings): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // ignore storage errors
  }
}

export function getPerformanceSettings(): PerformanceSettings {
  return { ...currentPerformance };
}

export function applyPerformanceSettings(next: PerformanceSettings): void {
  const normalized: PerformanceSettings = {
    renderScale:
      Number.isFinite(next.renderScale) && next.renderScale > 0 ? next.renderScale : 1,
    aaEnabled: !!next.aaEnabled,
  };
  currentPerformance = normalized;
  persistPerformance(normalized);
}

export interface InputSettings {
  mouseSensitivity: number;
}

const INPUT_STORAGE_KEY = "browsershooter:inputSettings";

let currentInput: InputSettings = loadInputInitial();

function loadInputInitial(): InputSettings {
  if (typeof window === "undefined") {
    return { mouseSensitivity: 1 };
  }
  try {
    const raw = window.localStorage.getItem(INPUT_STORAGE_KEY);
    if (!raw) return { mouseSensitivity: 1 };
    const parsed = JSON.parse(raw) as Partial<InputSettings> | null;
    const sens =
      parsed && typeof parsed.mouseSensitivity === "number"
        ? parsed.mouseSensitivity
        : 1;
    return { mouseSensitivity: sens };
  } catch {
    return { mouseSensitivity: 1 };
  }
}

function persistInput(settings: InputSettings): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(INPUT_STORAGE_KEY, JSON.stringify(settings));
  } catch {
    // ignore storage errors
  }
}

export function getInputSettings(): InputSettings {
  return { ...currentInput };
}

export function applyInputSettings(next: InputSettings): void {
  const clamped =
    typeof next.mouseSensitivity === "number" && Number.isFinite(next.mouseSensitivity)
      ? Math.max(0.2, Math.min(3, next.mouseSensitivity))
      : 1;
  currentInput = { mouseSensitivity: clamped };
  persistInput(currentInput);
}

