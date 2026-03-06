import type { TickSystem, RenderSystem } from "./System.js";

export class ClientGame {
  private tickSystems: TickSystem[] = [];
  private renderSystems: RenderSystem[] = [];

  addTickSystem(system: TickSystem): void {
    this.tickSystems.push(system);
  }

  addRenderSystem(system: RenderSystem): void {
    this.renderSystems.push(system);
  }

  update(dt: number): void {
    for (const system of this.tickSystems) {
      system.tick(dt);
    }
  }

  render(dt: number): void {
    for (const system of this.renderSystems) {
      system.render(dt);
    }
  }
}

