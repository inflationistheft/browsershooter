import type { PerformanceSettings, InputSettings } from "../../config/clientSettings.js";
import { getPerformanceSettings, getInputSettings } from "../../config/clientSettings.js";

export enum SettingsTab {
  Performance = "performance",
  Keyboard = "keyboard",
  Mouse = "mouse",
}

export interface SettingsMenuCallbacks {
  onClose: () => void;
  onApplyPerformance: (settings: PerformanceSettings) => void;
  onApplyMouse: (settings: InputSettings) => void;
}

export interface SettingsMenuHandle {
  show: (tab?: SettingsTab) => void;
  hide: () => void;
}

export function createSettingsMenu(
  container: HTMLElement,
  callbacks: SettingsMenuCallbacks
): SettingsMenuHandle {
  const overlay = document.createElement("div");
  overlay.id = "settings-menu-overlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9050;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.7);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  `;

  const panel = document.createElement("div");
  panel.style.cssText = `
    width: 480px;
    min-height: 260px;
    padding: 20px 24px 22px;
    background: rgba(8,10,18,0.97);
    border-radius: 10px;
    border: 1px solid rgba(130,200,255,0.6);
    box-shadow: 0 20px 45px rgba(0,0,0,0.65);
    color: #e4f5ff;
  `;

  const header = document.createElement("div");
  header.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  `;

  const title = document.createElement("div");
  title.textContent = "Settings";
  title.style.cssText = `
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #8bd3ff;
  `;

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.textContent = "Back";
  closeBtn.style.cssText = `
    padding: 6px 12px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,200,255,0.8);
    background: rgba(8,12,20,0.98);
    color: #e4f5ff;
    cursor: pointer;
  `;
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    callbacks.onClose();
  });

  header.appendChild(title);
  header.appendChild(closeBtn);
  panel.appendChild(header);

  const tabsRow = document.createElement("div");
  tabsRow.style.cssText = `
    display: flex;
    gap: 10px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 12px;
  `;

  function makeTabButton(label: string): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = label;
    btn.style.cssText = `
      padding: 6px 10px 8px;
      font-size: 13px;
      border: none;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: #b0d9ff;
      cursor: pointer;
    `;
    return btn;
  }

  const perfTabBtn = makeTabButton("Performance");
  const keyboardTabBtn = makeTabButton("Keyboard");
  const mouseTabBtn = makeTabButton("Mouse");

  tabsRow.appendChild(perfTabBtn);
  tabsRow.appendChild(keyboardTabBtn);
  tabsRow.appendChild(mouseTabBtn);
  panel.appendChild(tabsRow);

  const content = document.createElement("div");
  content.style.cssText = `
    margin-top: 6px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;
  panel.appendChild(content);

  const status = document.createElement("div");
  status.style.cssText = `
    margin-top: 10px;
    font-size: 12px;
    color: #8bd3ff;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    text-align: right;
  `;
  panel.appendChild(status);

  let statusTimeout: number | undefined;

  function showStatus(message: string): void {
    status.textContent = message;
    status.style.opacity = "1";
    if (statusTimeout !== undefined) {
      window.clearTimeout(statusTimeout);
    }
    statusTimeout = window.setTimeout(() => {
      status.style.opacity = "0";
    }, 1400);
  }

  const perfForm = document.createElement("div");
  perfForm.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 12px;
  `;

  const scaleRow = document.createElement("div");
  scaleRow.style.cssText = `
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  `;
  const scaleLabel = document.createElement("div");
  scaleLabel.textContent = "Render scale";
  scaleLabel.style.cssText = `
    font-size: 14px;
    color: #c7e3ff;
  `;
  const scaleSelect = document.createElement("select");
  scaleSelect.style.cssText = `
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid rgba(130,190,255,0.6);
    background: #05070c;
    color: #e4f5ff;
    font-size: 13px;
  `;
  const scaleOptions: Array<{ label: string; value: number }> = [
    { label: "100%", value: 1 },
    { label: "80%", value: 0.8 },
    { label: "60%", value: 0.6 },
  ];
  scaleOptions.forEach((opt) => {
    const o = document.createElement("option");
    o.value = String(opt.value);
    o.textContent = opt.label;
    scaleSelect.appendChild(o);
  });
  scaleRow.appendChild(scaleLabel);
  scaleRow.appendChild(scaleSelect);
  perfForm.appendChild(scaleRow);

  const aaRow = document.createElement("div");
  aaRow.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const aaLabel = document.createElement("div");
  aaLabel.textContent = "MSAA antialiasing";
  aaLabel.style.cssText = `
    font-size: 14px;
    color: #c7e3ff;
  `;
  const aaCheckbox = document.createElement("input");
  aaCheckbox.type = "checkbox";
  aaCheckbox.style.cssText = `
    width: 16px;
    height: 16px;
  `;
  aaRow.appendChild(aaLabel);
  aaRow.appendChild(aaCheckbox);
  perfForm.appendChild(aaRow);

  const tracerRow = document.createElement("div");
  tracerRow.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const tracerLabel = document.createElement("div");
  tracerLabel.textContent = "Bullet tracers";
  tracerLabel.style.cssText = `
    font-size: 14px;
    color: #c7e3ff;
  `;
  const tracerCheckbox = document.createElement("input");
  tracerCheckbox.type = "checkbox";
  tracerCheckbox.style.cssText = `
    width: 16px;
    height: 16px;
  `;
  tracerRow.appendChild(tracerLabel);
  tracerRow.appendChild(tracerCheckbox);
  perfForm.appendChild(tracerRow);

  const lampsRow = document.createElement("div");
  lampsRow.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const lampsLabel = document.createElement("div");
  lampsLabel.textContent = "Arena lamps (1v1 / 1v1 Ref)";
  lampsLabel.style.cssText = `
    font-size: 14px;
    color: #c7e3ff;
  `;
  const lampsCheckbox = document.createElement("input");
  lampsCheckbox.type = "checkbox";
  lampsCheckbox.style.cssText = `
    width: 16px;
    height: 16px;
  `;
  lampsRow.appendChild(lampsLabel);
  lampsRow.appendChild(lampsCheckbox);
  perfForm.appendChild(lampsRow);

  const applyRow = document.createElement("div");
  applyRow.style.cssText = `
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;
  const applyBtn = document.createElement("button");
  applyBtn.type = "button";
  applyBtn.textContent = "Apply";
  applyBtn.style.cssText = `
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `;
  applyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const scale = Number(scaleSelect.value) || 1;
    const perf: PerformanceSettings = {
      renderScale: scale,
      aaEnabled: aaCheckbox.checked,
      bulletTracersEnabled: tracerCheckbox.checked,
      duelLampsEnabled: lampsCheckbox.checked,
    };
    callbacks.onApplyPerformance(perf);
    showStatus("Performance changes applied");
  });
  applyRow.appendChild(applyBtn);
  perfForm.appendChild(applyRow);

  // Keyboard tab (placeholder)
  const keyboardForm = document.createElement("div");
  keyboardForm.style.cssText = `
    display: none;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    color: #c7e3ff;
  `;
  const kbText = document.createElement("div");
  kbText.textContent =
    "Keyboard bindings are currently fixed (WASD, Space, C, R). Custom keybinds will be added later.";
  keyboardForm.appendChild(kbText);

  // Mouse tab
  const mouseForm = document.createElement("div");
  mouseForm.style.cssText = `
    display: none;
    flex-direction: column;
    gap: 12px;
  `;
  const sensRow = document.createElement("div");
  sensRow.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  `;
  const sensLabel = document.createElement("div");
  sensLabel.textContent = "Mouse sensitivity";
  sensLabel.style.cssText = `
    font-size: 14px;
    color: #c7e3ff;
  `;
  const sensValueLabel = document.createElement("span");
  sensValueLabel.style.cssText = `
    font-size: 13px;
    color: #9fd0ff;
    margin-left: 8px;
  `;
  const sensSlider = document.createElement("input");
  sensSlider.type = "range";
  sensSlider.min = "0.5";
  sensSlider.max = "2";
  sensSlider.step = "0.1";
  sensSlider.style.cssText = `
    flex: 1;
    margin-left: 16px;
  `;
  const sensRight = document.createElement("div");
  sensRight.style.cssText = `
    display: flex;
    align-items: center;
    flex: 1;
  `;
  sensRight.appendChild(sensSlider);
  sensRight.appendChild(sensValueLabel);
  sensRow.appendChild(sensLabel);
  sensRow.appendChild(sensRight);
  mouseForm.appendChild(sensRow);

  const mouseApplyRow = document.createElement("div");
  mouseApplyRow.style.cssText = `
    display: flex;
    justify-content: flex-end;
    margin-top: 6px;
  `;
  const mouseApplyBtn = document.createElement("button");
  mouseApplyBtn.type = "button";
  mouseApplyBtn.textContent = "Apply";
  mouseApplyBtn.style.cssText = `
    padding: 7px 14px;
    font-size: 13px;
    border-radius: 5px;
    border: 1px solid rgba(140,220,255,0.9);
    background: linear-gradient(135deg, #0d1a28, #14314a);
    color: #e4f5ff;
    cursor: pointer;
  `;
  mouseApplyBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const raw = Number(sensSlider.value) || 1;
    const inputSettings: InputSettings = { mouseSensitivity: raw };
    callbacks.onApplyMouse(inputSettings);
    showStatus("Mouse settings applied");
  });
  mouseApplyRow.appendChild(mouseApplyBtn);
  mouseForm.appendChild(mouseApplyRow);

  content.appendChild(perfForm);
  content.appendChild(keyboardForm);
  content.appendChild(mouseForm);

  function syncFromCurrent(): void {
    const currentPerf = getPerformanceSettings();
    const closest = scaleOptions.reduce((best, opt) => {
      const bestDiff = Math.abs(best.value - currentPerf.renderScale);
      const diff = Math.abs(opt.value - currentPerf.renderScale);
      return diff < bestDiff ? opt : best;
    }, scaleOptions[0]);
    scaleSelect.value = String(closest.value);
    aaCheckbox.checked = currentPerf.aaEnabled;
    tracerCheckbox.checked =
      typeof currentPerf.bulletTracersEnabled === "boolean"
        ? currentPerf.bulletTracersEnabled
        : true;
    lampsCheckbox.checked =
      typeof currentPerf.duelLampsEnabled === "boolean"
        ? currentPerf.duelLampsEnabled
        : true;

    const input = getInputSettings();
    const sens = Math.max(0.5, Math.min(2, input.mouseSensitivity || 1));
    sensSlider.value = String(sens);
    sensValueLabel.textContent = `${sens.toFixed(1)}x`;
  }

  function clearTabStyles(): void {
    for (const btn of [perfTabBtn, keyboardTabBtn, mouseTabBtn]) {
      btn.style.borderBottomColor = "transparent";
      btn.style.color = "#b0d9ff";
    }
    perfForm.style.display = "none";
    keyboardForm.style.display = "none";
    mouseForm.style.display = "none";
  }

  function selectTab(tab: SettingsTab): void {
    clearTabStyles();
    if (tab === SettingsTab.Performance) {
      perfTabBtn.style.borderBottomColor = "#8bd3ff";
      perfTabBtn.style.color = "#e4f5ff";
      perfForm.style.display = "flex";
    } else if (tab === SettingsTab.Keyboard) {
      keyboardTabBtn.style.borderBottomColor = "#8bd3ff";
      keyboardTabBtn.style.color = "#e4f5ff";
      keyboardForm.style.display = "flex";
    } else if (tab === SettingsTab.Mouse) {
      mouseTabBtn.style.borderBottomColor = "#8bd3ff";
      mouseTabBtn.style.color = "#e4f5ff";
      mouseForm.style.display = "flex";
    }
  }

  perfTabBtn.addEventListener("click", (e) => {
    e.preventDefault();
    selectTab(SettingsTab.Performance);
  });

  keyboardTabBtn.addEventListener("click", (e) => {
    e.preventDefault();
    selectTab(SettingsTab.Keyboard);
  });

  mouseTabBtn.addEventListener("click", (e) => {
    e.preventDefault();
    selectTab(SettingsTab.Mouse);
  });

  overlay.appendChild(panel);
  container.appendChild(overlay);

  return {
    show: (tab?: SettingsTab) => {
      syncFromCurrent();
      overlay.style.display = "flex";
      selectTab(tab ?? SettingsTab.Performance);
    },
    hide: () => {
      overlay.style.display = "none";
    },
  };
}

