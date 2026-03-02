/**
 * Muzzle flash effect: billboard sprite at weapon muzzle.
 * Uses Three.js Sprite for automatic camera-facing. ~50ms duration.
 */

import * as THREE from "three";

export interface MuzzleFlashConfig {
  durationMs: number;
  scale: number;
}

/** Single reusable muzzle flash instance. */
export class MuzzleFlashEffect {
  private sprite: THREE.Sprite;
  private remainingMs = 0;
  private textures: THREE.Texture[] = [];
  private config: MuzzleFlashConfig;

  constructor(config: MuzzleFlashConfig) {
    this.config = config;
    const material = new THREE.SpriteMaterial({
      map: null,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
    });
    this.sprite = new THREE.Sprite(material);
    this.sprite.scale.set(config.scale, config.scale, 1);
    this.sprite.visible = false;
  }

  /** Set textures to choose from (call once after load). */
  setTextures(textures: THREE.Texture[]): void {
    this.textures = textures;
  }

  /** Trigger flash at parent's position. Parent should be muzzle node or equivalent. */
  trigger(parent: THREE.Object3D): void {
    if (this.textures.length === 0) return;
    const tex = this.textures[Math.floor(Math.random() * this.textures.length)];
    (this.sprite.material as THREE.SpriteMaterial).map = tex;
    (this.sprite.material as THREE.SpriteMaterial).needsUpdate = true;
    this.sprite.visible = true;
    this.remainingMs = this.config.durationMs;
    if (this.sprite.parent !== parent) {
      if (this.sprite.parent) this.sprite.parent.remove(this.sprite);
      parent.add(this.sprite);
    }
    this.sprite.position.set(0, 0, 0);
  }

  /** Call each frame. Returns true if still visible. */
  update(dtMs: number): boolean {
    if (this.remainingMs <= 0) {
      if (this.sprite.visible) this.sprite.visible = false;
      return false;
    }
    this.remainingMs -= dtMs;
    if (this.remainingMs <= 0) {
      this.sprite.visible = false;
      return false;
    }
    return true;
  }

  getSprite(): THREE.Sprite {
    return this.sprite;
  }

  dispose(): void {
    this.sprite.material.dispose();
  }
}
