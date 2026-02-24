/**
 * Main game loop: fixed tick for simulation, variable frame for render.
 */

const TICK_MS = 1000 / 30; // align with shared TICK_RATE later

export type TickCallback = (dt: number) => void;
export type RenderCallback = (dt: number) => void;

export class GameLoop {
  private running = false;
  private lastTime = 0;
  private accumulator = 0;
  private onTick: TickCallback = () => {};
  private onRender: RenderCallback = () => {};
  private rafId = 0;

  setTickCallback(fn: TickCallback): this {
    this.onTick = fn;
    return this;
  }

  setRenderCallback(fn: RenderCallback): this {
    this.onRender = fn;
    return this;
  }

  start(): void {
    if (this.running) return;
    this.running = true;
    this.lastTime = performance.now();
    this.tick(0);
  }

  stop(): void {
    this.running = false;
    if (this.rafId) cancelAnimationFrame(this.rafId);
  }

  private tick = (now: number): void => {
    this.rafId = requestAnimationFrame(this.tick);
    const dt = (now - this.lastTime) / 1000;
    this.lastTime = now;
    this.accumulator += Math.min(dt, 0.1);
    while (this.accumulator >= TICK_MS / 1000) {
      this.onTick(TICK_MS / 1000);
      this.accumulator -= TICK_MS / 1000;
    }
    this.onRender(dt);
  };
}
