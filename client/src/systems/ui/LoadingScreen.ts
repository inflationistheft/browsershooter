/**
 * Simple loading overlay shown during init and connection. User-friendly messages.
 */

let overlay: HTMLDivElement | null = null;

export function createLoadingScreen(container: HTMLElement): void {
  overlay = document.createElement("div");
  overlay.id = "loading-screen";
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 1000;
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: #0a0a0a; color: #ddd; font-family: system-ui, sans-serif;
  `;
  const bar = document.createElement("div");
  bar.style.cssText = `
    width: 280px; height: 6px; background: #333; border-radius: 3px; overflow: hidden;
    margin-bottom: 24px;
  `;
  const fill = document.createElement("div");
  fill.id = "loading-fill";
  fill.style.cssText = `
    width: 0%; height: 100%; background: #4a9; border-radius: 3px;
    transition: width 0.3s ease;
  `;
  bar.appendChild(fill);
  const text = document.createElement("div");
  text.id = "loading-text";
  text.style.cssText = `font-size: 18px; font-weight: 500;`;
  text.textContent = "Loading game…";
  overlay.appendChild(bar);
  overlay.appendChild(text);
  container.appendChild(overlay);
}

export function setLoadingMessage(message: string, progress?: number): void {
  const text = document.getElementById("loading-text");
  const fill = document.getElementById("loading-fill") as HTMLDivElement | null;
  if (text) text.textContent = message;
  if (fill && progress !== undefined) {
    fill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }
}

export function hideLoadingScreen(): void {
  if (overlay && overlay.parentNode) {
    overlay.parentNode.removeChild(overlay);
    overlay = null;
  }
}
