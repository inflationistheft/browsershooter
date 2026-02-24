/**
 * Rapier physics world wrapper (client). Used for collision queries and character controller.
 */

import * as RAPIER from "@dimforge/rapier3d";

export class PhysicsWorld {
  world: RAPIER.World | null = null;
  private gravity = { x: 0, y: -25, z: 0 };

  init(): void {
    this.world = new RAPIER.World(this.gravity);
  }

  step(_dt: number): void {
    this.world?.step();
  }

  createGround(size: number, height: number): RAPIER.Collider | null {
    if (!this.world) return null;
    const body = this.world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed().setTranslation(0, -height / 2, 0)
    );
    const collider = this.world.createCollider(
      RAPIER.ColliderDesc.cuboid(size / 2, height / 2, size / 2),
      body
    );
    return collider;
  }

  raycast(
    origin: { x: number; y: number; z: number },
    dir: { x: number; y: number; z: number },
    maxToi: number
  ): boolean {
    if (!this.world) return false;
    const ray = new RAPIER.Ray(
      { x: origin.x, y: origin.y, z: origin.z },
      { x: dir.x, y: dir.y, z: dir.z }
    );
    const hit = this.world.castRay(ray, maxToi, true, undefined, undefined, undefined, undefined);
    return hit !== null;
  }

  dispose(): void {
    this.world?.free();
    this.world = null;
  }
}
