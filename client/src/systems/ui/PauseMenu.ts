export interface PauseMenuCallbacks {
  onResume: () => void;
  onBackToLobby: () => void;
  onOpenSettings: () => void;
}

export interface PauseMenuHandle {
  show: () => void;
  hide: () => void;
}

export function createPauseMenu(
  container: HTMLElement,
  callbacks: PauseMenuCallbacks
): PauseMenuHandle {
  const overlay = document.createElement("div");
  overlay.id = "pause-menu-overlay";
  overlay.style.cssText = `
    position: fixed;
    inset: 0;
    z-index: 9000;
    display: none;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.6);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  `;

  const panel = document.createElement("div");
  panel.style.cssText = `
    min-width: 340px;
    padding: 24px 32px;
    background: rgba(8,8,16,0.95);
    border-radius: 10px;
    border: 1px solid rgba(120,220,255,0.5);
    box-shadow: 0 18px 40px rgba(0,0,0,0.6);
    color: #e0f7ff;
    text-align: center;
  `;

  const title = document.createElement("div");
  title.textContent = "Paused";
  title.style.cssText = `
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 18px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8cf;
  `;
  panel.appendChild(title);

  const buttonList = document.createElement("div");
  buttonList.style.cssText = `
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 6px;
  `;

  function createButton(label: string, onClick: () => void): HTMLButtonElement {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.type = "button";
    btn.style.cssText = `
      padding: 10px 16px;
      font-size: 15px;
      border-radius: 6px;
      border: 1px solid rgba(120,220,255,0.6);
      background: linear-gradient(135deg, rgba(18,30,50,0.95), rgba(14,18,30,0.98));
      color: #e0f7ff;
      cursor: pointer;
    `;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      onClick();
    });
    return btn;
  }

  buttonList.appendChild(createButton("Resume Game", callbacks.onResume));
  buttonList.appendChild(createButton("Go back to lobby", callbacks.onBackToLobby));
  buttonList.appendChild(createButton("Settings", callbacks.onOpenSettings));

  panel.appendChild(buttonList);
  overlay.appendChild(panel);
  container.appendChild(overlay);

  return {
    show: () => {
      overlay.style.display = "flex";
    },
    hide: () => {
      overlay.style.display = "none";
    },
  };
}

