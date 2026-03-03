import * as THREE from "three";

export interface BulletImpactConfig {
  maxImpacts: number;
  lifetimeMs: number;
  color: number;
  size: number;
}

interface ImpactInstance {
  sprite: THREE.Sprite;
  active: boolean;
  remainingMs: number;
}

export class BulletImpactSystem {
  private impacts: ImpactInstance[] = [];
  private readonly config: BulletImpactConfig;

  constructor(scene: THREE.Scene, config: BulletImpactConfig) {
    this.config = config;

    // Create a small radial impact texture so the sprite looks round with sparks.
    // Use only R/Y/white (no green/blue) and fully transparent black elsewhere to avoid green artifacts.
    const createImpactTexture = (): THREE.Texture | null => {
      if (typeof document === "undefined") return null;
      const size = 64;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      // Fully clear to transparent black so no stray green/blue from canvas default
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, size, size);

      const cx = size / 2;
      const cy = size / 2;
      const radius = size * 0.42;

      // Soft radial glow: warm white/orange only (no green channel to avoid artifacts)
      const radial = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      radial.addColorStop(0, "rgba(255, 252, 240, 1)");
      radial.addColorStop(0.35, "rgba(255, 230, 180, 0.95)");
      radial.addColorStop(0.7, "rgba(255, 180, 100, 0.4)");
      radial.addColorStop(1, "rgba(255, 120, 50, 0)");
      ctx.fillStyle = radial;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // Streaks: same warm palette, no green
      ctx.strokeStyle = "rgba(255, 248, 220, 0.95)";
      ctx.lineWidth = 2;
      const streakCount = 8;
      const inner = radius * 0.25;
      const outer = radius * 1.05;
      for (let i = 0; i < streakCount; i++) {
        const a = (i / streakCount) * Math.PI * 2;
        const sx = cx + Math.cos(a) * inner;
        const sy = cy + Math.sin(a) * inner;
        const ex = cx + Math.cos(a) * outer;
        const ey = cy + Math.sin(a) * outer;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(ex, ey);
        ctx.stroke();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.format = THREE.RGBAFormat;
      texture.premultiplyAlpha = false;
      texture.center.set(0.5, 0.5);
      texture.needsUpdate = true;
      return texture;
    };

    const impactTexture = createImpactTexture();

    const material = new THREE.SpriteMaterial({
      map: impactTexture,
      color: config.color,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      alphaTest: 0.12,
    });

    const count = Math.max(1, config.maxImpacts | 0);
    for (let i = 0; i < count; i++) {
      const sprite = new THREE.Sprite(material.clone());
      sprite.scale.set(config.size, config.size, 1);
      sprite.visible = false;
      scene.add(sprite);
      this.impacts.push({
        sprite,
        active: false,
        remainingMs: 0,
      });
    }
  }

  spawnImpact(position: THREE.Vector3 | { x: number; y: number; z: number }): void {
    const pos =
      position instanceof THREE.Vector3
        ? position.clone()
        : new THREE.Vector3(position.x, position.y, position.z);

    let impact = this.impacts.find((i) => !i.active);
    if (!impact) {
      impact = this.impacts[0];
    }

    impact.sprite.position.copy(pos);
    impact.sprite.visible = true;
    impact.remainingMs = this.config.lifetimeMs;
    impact.active = true;
    (impact.sprite.material as THREE.SpriteMaterial).opacity = 0.9;
  }

  update(dtMs: number): void {
    for (const impact of this.impacts) {
      if (!impact.active) continue;
      impact.remainingMs -= dtMs;
      const t = Math.max(0, impact.remainingMs) / this.config.lifetimeMs;
      const mat = impact.sprite.material as THREE.SpriteMaterial;
      mat.opacity = 0.9 * t;
      if (impact.remainingMs <= 0) {
        impact.active = false;
        impact.sprite.visible = false;
      }
    }
  }
}

