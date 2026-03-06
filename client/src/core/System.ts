export interface TickSystem {
  tick(dt: number): void;
}

export interface RenderSystem {
  render(dt: number): void;
}

