/**
 * FFA Arena room: tick loop, state sync, placeholder movement.
 */

import { Room, Client } from "@colyseus/core";
import {
  rayArenaIntersection,
  resolveAnimationClipId,
  TICK_RATE,
  PLAYER_RADIUS,
  PLAYER_EYE_HEIGHT,
  CROUCH_EYE_HEIGHT,
  HITSCAN_RANGE,
  HITSCAN_BODY_DAMAGE,
  HITSCAN_HEAD_MULTIPLIER,
  SHOT_INTERVAL_TICKS,
  RELOAD_TICKS,
  REGEN_DELAY_TICKS,
  SHIELD_REGEN_PER_SEC,
  HEALTH_REGEN_PER_SEC,
  MAX_SHIELD,
  MAX_HEALTH,
  RESPAWN_DELAY_SEC,
  HEAD_HITBOX_HEIGHT,
  HEAD_HITBOX_RADIUS,
  BODY_CAPSULE_TOP,
  BODY_CAPSULE_RADIUS,
  BODY_CAPSULE_TOP_EXTEND,
  raySphereIntersection,
  rayCapsuleIntersection,
  DEBUG_HEAD_ONLY,
  stepPlayerMovement,
  tickMovementTimers,
} from "shared";
import type { PlayerInput } from "shared";
import { ArenaState, PlayerStateSchema } from "shared";
import { serverConfig } from "../config/index.js";
import {
  type PlayerExtendedState,
  createPlayerExtendedState,
} from "../PlayerExtendedState.js";

export class ArenaFFARoom extends Room<ArenaState> {
  private playerExt = new Map<string, PlayerExtendedState>();
  onCreate(): void {
    this.setState(new ArenaState());
    this.setSimulationInterval((dt) => this.tick(dt), serverConfig.tickMs);
    this.onMessage("input", (client, message) => this.onInput(client, message));
  }

  /** Spawn offsets (x, y, z). Players spawn at random point on join/respawn. */
  private static SPAWN_OFFSETS: [number, number, number][] = [
    [0, 0, 0],
    [4, 0, 4],
    [-4, 0, 4],
    [4, 0, -4],
    [-4, 0, -4],
    [6, 0, 0],
    [-6, 0, 0],
    [0, 0, 6],
    [0, 0, -6],
    [8, 0, 8],
    [-8, 0, 8],
    [8, 0, -8],
    [-8, 0, -8],
  ];

  onJoin(client: Client): void {
    this.playerExt.set(client.sessionId, createPlayerExtendedState());
    const idx = Math.floor(Math.random() * ArenaFFARoom.SPAWN_OFFSETS.length);
    const [sx, sy, sz] = ArenaFFARoom.SPAWN_OFFSETS[idx];

    const state = new PlayerStateSchema();
    state.id = client.sessionId;
    state.x = sx;
    state.y = sy;
    state.z = sz;
    state.shield = MAX_SHIELD;
    state.maxShield = MAX_SHIELD;
    state.health = MAX_HEALTH;
    state.maxHealth = MAX_HEALTH;
    state.ammo = 30;
    state.maxAmmo = 30;
    this.state.players.set(client.sessionId, state);
    console.log(
      `[ArenaFFA] Client ${client.sessionId} joined. Players in room: ${this.state.players.size}`
    );
  }

  onLeave(client: Client): void {
    this.playerExt.delete(client.sessionId);
    this.state.players.delete(client.sessionId);
    console.log(
      `[ArenaFFA] Client ${client.sessionId} left. Players in room: ${this.state.players.size}`
    );
  }

  private onInput(client: Client, message: unknown): void {
    const ext = this.playerExt.get(client.sessionId);
    if (!ext) return;
    const input = message as Partial<PlayerInput>;
    ext.lastInput = input;
    if (input.shoot === true) ext.pendingShoot = true;
  }

  private _tickCount = 0;

  private tick(_dt: number): void {
    this._tickCount++;
    const dtSec = serverConfig.tickMs / 1000;

    const RESPAWN_TICKS = Math.ceil(RESPAWN_DELAY_SEC * TICK_RATE);

    this.state.players.forEach((player, shooterId) => {
      let ext = this.playerExt.get(shooterId);
      if (!ext) {
        ext = createPlayerExtendedState();
        this.playerExt.set(shooterId, ext);
      }
      const lastInput = ext.lastInput;

      if (player.health <= 0) {
        if (ext.respawnTicks === undefined) {
          ext.respawnTicks = RESPAWN_TICKS;
        }
        ext.respawnTicks--;
        if (ext.respawnTicks <= 0) {
          const idx = Math.floor(Math.random() * ArenaFFARoom.SPAWN_OFFSETS.length);
          const [sx, sy, sz] = ArenaFFARoom.SPAWN_OFFSETS[idx];
          player.shield = player.maxShield;
          player.health = player.maxHealth;
          player.x = sx;
          player.y = sy;
          player.z = sz;
          player.vx = 0;
          player.vy = 0;
          player.vz = 0;
          player.ammo = player.maxAmmo;
          player.movementState = "grounded";
          player.animationState = "idle";
          ext.respawnTicks = undefined;
          ext.slideTime = undefined;
          ext.slideJumpCooldownTimer = undefined;
          ext.slideEnterCooldownTimer = undefined;
          ext.slideOnLand = false;
        }
        return;
      }

      const movementExt = {
        get slideTime() {
          return ext.slideTime ?? 0;
        },
        set slideTime(v: number) {
          ext.slideTime = v;
        },
        get slideEnterCooldownTimer() {
          return ext.slideEnterCooldownTimer ?? 0;
        },
        set slideEnterCooldownTimer(v: number) {
          ext.slideEnterCooldownTimer = v;
        },
        get slideJumpCooldownTimer() {
          return ext.slideJumpCooldownTimer ?? 0;
        },
        set slideJumpCooldownTimer(v: number) {
          ext.slideJumpCooldownTimer = v;
        },
        get slideOnLand() {
          return ext.slideOnLand ?? false;
        },
        set slideOnLand(v: boolean) {
          ext.slideOnLand = v;
        },
        get horSpeedWhenJumped() {
          return ext.horSpeedWhenJumped ?? 0;
        },
        set horSpeedWhenJumped(v: number) {
          ext.horSpeedWhenJumped = v;
        },
      };
      tickMovementTimers(movementExt, dtSec);

      if (ext.shootCooldownTicks !== undefined && ext.shootCooldownTicks > 0) {
        ext.shootCooldownTicks--;
      }

      if (ext.reloadTicks !== undefined && ext.reloadTicks > 0) {
        ext.reloadTicks--;
        if (ext.reloadTicks === 0) {
          player.ammo = player.maxAmmo;
        }
      } else if (lastInput?.reload && player.ammo < player.maxAmmo) {
        ext.reloadTicks = RELOAD_TICKS;
      }

      if (
        player.shield < player.maxShield ||
        player.health < player.maxHealth
      ) {
        const lastDamageTick = ext.lastDamageTick ?? 0;
        if (this._tickCount - lastDamageTick >= REGEN_DELAY_TICKS) {
          if (player.shield < player.maxShield) {
            player.shield = Math.min(
              player.maxShield,
              player.shield + SHIELD_REGEN_PER_SEC * dtSec
            );
          } else if (player.health < player.maxHealth) {
            player.health = Math.min(
              player.maxHealth,
              player.health + HEALTH_REGEN_PER_SEC * dtSec
            );
          }
        }
      }

      if (lastInput) {
        if (lastInput.yaw !== undefined) player.yaw = lastInput.yaw;
        if (lastInput.pitch !== undefined) player.pitch = lastInput.pitch;

        ArenaFFARoom.storeHitboxPositionsIfValid(player, ext, lastInput);

        const hasSlideIntent =
          (lastInput.slide ?? false) || (lastInput.slideIntentTicks ?? 0) > 0;

        const movementInput = {
          moveX: lastInput.moveX ?? 0,
          moveZ: lastInput.moveZ ?? 0,
          jump: lastInput.jump ?? false,
          hasSlideIntent,
          yaw: player.yaw,
          pitch: player.pitch,
        };
        const movementState = {
          x: player.x,
          y: player.y,
          z: player.z,
          vx: player.vx,
          vy: player.vy,
          vz: player.vz,
          movementState: player.movementState as "grounded" | "sliding" | "airborne",
          ext: movementExt,
        };
        stepPlayerMovement(movementState, movementInput, dtSec, PLAYER_RADIUS);
        player.x = movementState.x;
        player.y = movementState.y;
        player.z = movementState.z;
        player.vx = movementState.vx;
        player.vy = movementState.vy;
        player.vz = movementState.vz;
        player.movementState = movementState.movementState;

        const animId = resolveAnimationClipId({
          moveX: lastInput.moveX ?? 0,
          moveZ: lastInput.moveZ ?? 0,
          sprint: lastInput.sprint ?? false,
          crouching: player.movementState === "sliding" || hasSlideIntent,
          movementState: player.movementState as "grounded" | "sliding" | "airborne",
        });
        player.animationState = animId;
        const isStrafeFast = animId === "strafeLeftFast" || animId === "strafeRightFast";
        player.animationTimeScale = isStrafeFast && !(lastInput.sprint ?? false) ? 0.7 : 1;
      } else {
        player.animationState = "idle";
      }

      const shouldShoot =
        (lastInput?.shoot ?? false) || (ext.pendingShoot ?? false);
      const infiniteAmmo =
        (lastInput?.debugMode ?? false) ||
        process.env.DEBUG_INFINITE_AMMO === "1" ||
        process.env.DEBUG_HITSCAN === "1";
      const shootCooldownOk =
        ext.shootCooldownTicks === undefined || ext.shootCooldownTicks <= 0;
      if (
        shouldShoot &&
        (player.ammo > 0 || infiniteAmmo) &&
        (ext.reloadTicks === undefined || ext.reloadTicks <= 0) &&
        shootCooldownOk
      ) {
        if (!infiniteAmmo) player.ammo--;
        ext.pendingShoot = false;
        ext.shootCooldownTicks = SHOT_INTERVAL_TICKS;
        const crouching =
          player.movementState === "grounded" && (lastInput?.slide ?? false);
        const hitResult = this.hitscanRaycast(shooterId, player, crouching, lastInput);
        if (hitResult) {
          const target = this.state.players.get(hitResult.targetId);
          if (target) {
            const headDamage =
              target.shield > 0
                ? HITSCAN_BODY_DAMAGE
                : Math.round(HITSCAN_BODY_DAMAGE * HITSCAN_HEAD_MULTIPLIER);
            const baseDamage =
              hitResult.hitboxType === "head" ? headDamage : HITSCAN_BODY_DAMAGE;
            if (target.shield > 0) {
              target.shield = Math.max(0, target.shield - baseDamage);
            } else {
              target.health = Math.max(0, target.health - baseDamage);
            }
            const hitTargetExt = this.playerExt.get(hitResult.targetId);
            if (hitTargetExt) hitTargetExt.lastDamageTick = this._tickCount;
            const actualDamage = baseDamage;
            const shooterClient = Array.from(this.clients).find(
              (c) => c.sessionId === shooterId
            );
            if (shooterClient) {
              shooterClient.send("hit", {
                targetId: hitResult.targetId,
                damage: actualDamage,
                hitboxType: hitResult.hitboxType,
              });
            }
            const targetClient = Array.from(this.clients).find(
              (c) => c.sessionId === hitResult.targetId
            );
            if (targetClient) {
              const dirX = player.x - target.x;
              const dirY = player.y - target.y;
              const dirZ = player.z - target.z;
              const len = Math.hypot(dirX, dirY, dirZ) || 1;
              targetClient.send("hitReceived", {
                dirX: dirX / len,
                dirY: dirY / len,
                dirZ: dirZ / len,
                damage: actualDamage,
              });
            }
            if (process.env.DEBUG_HITSCAN) {
              console.log(
                `[ArenaFFA] Hit: ${shooterId} -> ${hitResult.targetId} (${hitResult.hitboxType})`
              );
            }
          }
        } else if (process.env.DEBUG_HITSCAN && this.state.players.size > 1) {
          const otherCount = this.state.players.size - 1;
          console.log(
            `[ArenaFFA] Shoot miss: ${shooterId} at (${player.x.toFixed(1)},${player.y.toFixed(1)},${player.z.toFixed(1)}) yaw=${player.yaw.toFixed(2)} pitch=${player.pitch.toFixed(2)} (${otherCount} other players)`
          );
        }
      }
    });
  }

  /** Max distance (m) from server pos to trust client-reported position for ray origin. */
  private static readonly CLIENT_POS_TRUST_RADIUS = 5;
  /** Max offset magnitude (m) for a single bone. Head ~1.6m above feet; strafe adds ~1m. */
  private static readonly HITBOX_OFFSET_MAX = 3.2;
  private static storeHitboxPositionsIfValid(
    player: PlayerStateSchema,
    ext: PlayerExtendedState,
    lastInput: Partial<PlayerInput>
  ): void {
    // Use server position so hitbox matches what the shooter sees (replicated state).
    const rootX = player.x;
    const rootY = player.y;
    const rootZ = player.z;

    const hx = lastInput.headX;
    const hy = lastInput.headY;
    const hz = lastInput.headZ;
    const bcx = lastInput.bodyCenterX;
    const bcy = lastInput.bodyCenterY;
    const bcz = lastInput.bodyCenterZ;
    const stx = lastInput.spineTopX;
    const sty = lastInput.spineTopY;
    const stz = lastInput.spineTopZ;
    const px = lastInput.pelvisX;
    const py = lastInput.pelvisY;
    const pz = lastInput.pelvisZ;
    const fx = lastInput.feetX;
    const fy = lastInput.feetY;
    const fz = lastInput.feetZ;

    const hasAll =
      hx !== undefined &&
      hy !== undefined &&
      hz !== undefined &&
      bcx !== undefined &&
      bcy !== undefined &&
      bcz !== undefined &&
      stx !== undefined &&
      sty !== undefined &&
      stz !== undefined &&
      px !== undefined &&
      py !== undefined &&
      pz !== undefined &&
      fx !== undefined &&
      fy !== undefined &&
      fz !== undefined;

    if (!hasAll) return;

    const mag = (a: number, b: number, c: number) => Math.hypot(a, b, c);
    if (mag(hx!, hy!, hz!) > ArenaFFARoom.HITBOX_OFFSET_MAX) return;
    if (mag(bcx!, bcy!, bcz!) > ArenaFFARoom.HITBOX_OFFSET_MAX) return;
    if (mag(stx!, sty!, stz!) > ArenaFFARoom.HITBOX_OFFSET_MAX) return;
    if (mag(px!, py!, pz!) > ArenaFFARoom.HITBOX_OFFSET_MAX) return;
    if (mag(fx!, fy!, fz!) > ArenaFFARoom.HITBOX_OFFSET_MAX) return;

    const headYAboveGround = rootY + hy!;
    if (headYAboveGround < 0.5 || headYAboveGround > 3.0) return;

    if (fy! > py! + 0.5) return;

    ext.headX = rootX + hx!;
    ext.headY = rootY + hy!;
    ext.headZ = rootZ + hz!;
    ext.bodyCenterX = rootX + bcx!;
    ext.bodyCenterY = rootY + bcy!;
    ext.bodyCenterZ = rootZ + bcz!;
    ext.spineTopX = rootX + stx!;
    ext.spineTopY = rootY + sty!;
    ext.spineTopZ = rootZ + stz!;
    ext.pelvisX = rootX + px!;
    ext.pelvisY = rootY + py!;
    ext.pelvisZ = rootZ + pz!;
    ext.feetX = rootX + fx!;
    ext.feetY = rootY + fy!;
    ext.feetZ = rootZ + fz!;
  }

  private hitscanRaycast(
    shooterId: string,
    shooter: PlayerStateSchema,
    crouching: boolean,
    lastInput?: Partial<PlayerInput>
  ): { targetId: string; hitboxType: "head" | "body" } | null {
    const eyeHeight = crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;

    // Prefer shot-tied position when shooting (exact frame data)
    const scx = lastInput?.shootClientX;
    const scy = lastInput?.shootClientY;
    const scz = lastInput?.shootClientZ;
    const hasShootPos =
      scx !== undefined && scy !== undefined && scz !== undefined;
    const shootPosDelta = hasShootPos
      ? Math.hypot(scx! - shooter.x, scy! - shooter.y, scz! - shooter.z)
      : Infinity;
    const useShootPos =
      hasShootPos && shootPosDelta <= ArenaFFARoom.CLIENT_POS_TRUST_RADIUS;

    const cx = useShootPos ? scx : lastInput?.clientX;
    const cy = useShootPos ? scy : lastInput?.clientY;
    const cz = useShootPos ? scz : lastInput?.clientZ;
    const hasClientPos =
      cx !== undefined && cy !== undefined && cz !== undefined;
    const clientDelta = hasClientPos
      ? Math.hypot(cx! - shooter.x, cy! - shooter.y, cz! - shooter.z)
      : Infinity;
    const useClientOrigin =
      hasClientPos && clientDelta <= ArenaFFARoom.CLIENT_POS_TRUST_RADIUS;
    // shootClient is already eye position; clientPos/shooter need +eyeHeight
    const ox = useClientOrigin ? cx! : shooter.x;
    const oy = useShootPos
      ? scy!
      : (useClientOrigin ? cy! : shooter.y) + eyeHeight;
    const oz = useClientOrigin ? cz! : shooter.z;

    // Prefer shot-tied aim direction when available (exact frame data)
    let dx: number;
    let dy: number;
    let dz: number;
    const sadx = lastInput?.shootAimX;
    const sady = lastInput?.shootAimY;
    const sadz = lastInput?.shootAimZ;
    const hasShootAim =
      sadx !== undefined &&
      sady !== undefined &&
      sadz !== undefined &&
      Math.abs(sadx! * sadx! + sady! * sady! + sadz! * sadz! - 1) < 0.01;
    if (hasShootAim) {
      dx = sadx!;
      dy = sady!;
      dz = sadz!;
    } else {
      const adx = lastInput?.aimDirX;
      const ady = lastInput?.aimDirY;
      const adz = lastInput?.aimDirZ;
      if (
        adx !== undefined &&
        ady !== undefined &&
        adz !== undefined &&
        Math.abs(adx * adx + ady * ady + adz * adz - 1) < 0.01
      ) {
        dx = adx;
        dy = ady;
        dz = adz;
      } else {
        const yaw = -shooter.yaw;
        dx = Math.sin(yaw);
        dy = Math.cos(yaw) * Math.sin(shooter.pitch);
        dz = -Math.cos(yaw) * Math.cos(shooter.pitch);
      }
    }

    let bestId: string | null = null;
    let bestT = Infinity;
    let bestType: "head" | "body" = "body";

    this.state.players.forEach((p, targetId) => {
      if (targetId === shooterId) return;
      if (p.health <= 0) return;

      const targetExt = this.playerExt.get(targetId);

      const useBoneHitboxes =
        targetExt?.headX !== undefined &&
        targetExt?.headY !== undefined &&
        targetExt?.headZ !== undefined &&
        targetExt?.bodyCenterX !== undefined &&
        targetExt?.spineTopY !== undefined &&
        targetExt?.pelvisX !== undefined &&
        targetExt?.pelvisY !== undefined &&
        targetExt?.feetY !== undefined;

      if (process.env.DEBUG_HITSCAN && !useBoneHitboxes) {
        console.log(
          `[ArenaFFA] Target ${targetId} using fallback hitboxes (missing bone data)`
        );
      }

      const headCx = useBoneHitboxes && targetExt ? targetExt.headX! : p.x;
      const headCy = useBoneHitboxes && targetExt ? targetExt.headY! : p.y + HEAD_HITBOX_HEIGHT;
      const headCz = useBoneHitboxes && targetExt ? targetExt.headZ! : p.z;

      const tHead = raySphereIntersection(
        ox, oy, oz, dx, dy, dz,
        headCx, headCy, headCz,
        HEAD_HITBOX_RADIUS
      );
      if (tHead !== null && tHead > 0 && tHead <= HITSCAN_RANGE && tHead < bestT) {
        const los = rayArenaIntersection(ox, oy, oz, dx, dy, dz, tHead);
        if (!los.hit || (los.t !== undefined && los.t > tHead)) {
          bestT = tHead;
          bestId = targetId;
          bestType = "head";
        }
      }

      if (DEBUG_HEAD_ONLY) {
        return;
      }

      let tBody: number | null;
      if (useBoneHitboxes && targetExt) {
        const bcx = (targetExt.bodyCenterX! + targetExt.pelvisX!) / 2;
        const bcz = (targetExt.bodyCenterZ! + targetExt.pelvisZ!) / 2;
        const bodyTopY = targetExt.spineTopY! + BODY_CAPSULE_TOP_EXTEND;
        tBody = rayCapsuleIntersection(
          ox, oy, oz, dx, dy, dz,
          bcx, 0, bcz,
          targetExt.feetY!,
          bodyTopY,
          BODY_CAPSULE_RADIUS
        );
      } else {
        tBody = rayCapsuleIntersection(
          ox, oy, oz, dx, dy, dz,
          p.x, p.y, p.z,
          0,
          BODY_CAPSULE_TOP,
          BODY_CAPSULE_RADIUS
        );
      }

      if (tBody !== null && tBody > 0 && tBody <= HITSCAN_RANGE && tBody < bestT) {
        const los = rayArenaIntersection(ox, oy, oz, dx, dy, dz, tBody);
        if (!los.hit || (los.t !== undefined && los.t > tBody)) {
          bestT = tBody;
          bestId = targetId;
          bestType = "body";
        }
      }
    });

    return bestId ? { targetId: bestId, hitboxType: bestType } : null;
  }
}
