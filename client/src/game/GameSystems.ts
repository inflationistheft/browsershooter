/**
 * Game context and small tick/render systems for ClientGame.
 * Shared state lives in GameSessionState; context holds refs to subsystems.
 */

import * as THREE from "three";
import type { GameSessionState } from "./GameSessionState.js";
import type { TickSystem } from "../core/System.js";
import type { RenderSystem } from "../core/System.js";
import type { InputSampler } from "../systems/input/InputState.js";
import type { FPSCamera } from "../systems/camera/FPSCamera.js";
import type { FPSMovementController } from "../systems/movement/FPSMovementController.js";
import type { ColyseusClient } from "../systems/networking/ColyseusClient.js";
import type { RemotePlayerSync } from "./RemotePlayerSync.js";
import type { SceneManager } from "../systems/rendering/SceneManager.js";
import type { PlayerAnimationSystem } from "../systems/animation/PlayerAnimationSystem.js";
import type { ViewmodelState } from "./ViewmodelSetup.js";
import type { MuzzleFlashEffect } from "./MuzzleFlashSystem.js";
import type { BulletTracerSystem } from "./BulletTracerSystem.js";
import type { BulletImpactSystem } from "./BulletImpactSystem.js";
import type { DebugHitboxVisualization } from "../debug/DebugVisualization.js";
import { inputStateToPlayerInput } from "../systems/networking/inputMapping.js";
import { updateViewmodelFrame } from "./ViewmodelSetup.js";
import type { ViewmodelMovementInput } from "./ViewmodelMovement.js";
import { getHitboxPositionsFromModel } from "../systems/animation/getHitboxPositions.js";
import { updatePlayerHealthBars } from "../systems/ui/PlayerHealthBars.js";
import { updateHUD } from "../systems/ui/HUD.js";
import { updateScreenDamageFeedback } from "../systems/ui/ScreenDamageFeedback.js";
import { updateHitIndicators } from "../systems/ui/HitIndicator.js";
import { updateKillfeed } from "../systems/ui/Killfeed.js";
import { updateCrosshairHitFeedback } from "../systems/ui/CrosshairHitFeedback.js";
import { updateDebugOverlay } from "../debug/DebugOverlay.js";
import { getLastHitAngle } from "../systems/ui/HitIndicator.js";
import {
  PLAYER_EYE_HEIGHT,
  CROUCH_EYE_HEIGHT,
  MAX_SHIELD,
  MAX_HEALTH,
  RELOAD_TICKS,
  SHOT_INTERVAL_TICKS,
} from "shared";
import { WEAPON_STUB } from "../systems/gameplay/WeaponStub.js";

export interface GameContext {
  state: GameSessionState;
  /** When false, tick systems skip gameplay (pause/settings). */
  getIsPlaying: () => boolean;
  input: InputSampler;
  movement: FPSMovementController;
  camera: FPSCamera;
  physics: { raycast: () => boolean };
  netClient: ColyseusClient;
  remotePlayerSync: RemotePlayerSync;
  /** Set in initAssets. */
  playerAnimationSystem?: PlayerAnimationSystem | null;
  sceneManager: SceneManager;
  tracerSystem: BulletTracerSystem;
  impactSystem: BulletImpactSystem;
  debugHitboxes: DebugHitboxVisualization;
  /** Crouch lerp tau (seconds). */
  crouchTransitionTau: number;
  /** Tracer length from eye in first person. */
  tracerFirstPersonLength: number;
  debugOverlayEnabled: boolean;
  /** Set after initAssets. */
  localPlayerMixer: THREE.AnimationMixer | null;
  playerViewModel: THREE.Object3D | null;
  viewmodelState: ViewmodelState | null;
  hitboxDummy: THREE.Object3D | null;
  hitboxDummyMixer: THREE.AnimationMixer | null;
  muzzleFlashPov: MuzzleFlashEffect | null;
}

/** Local movement, camera target, respawn, shoot cooldowns and shotThisFrame. */
export class LocalPlayerTickSystem implements TickSystem {
  constructor(private ctx: GameContext) {}
  tick(dt: number): void {
    const { state, input, movement, camera, physics, netClient, remotePlayerSync } =
      this.ctx;
    const inputState = input.getState();
    if (!this.ctx.getIsPlaying()) {
      input.tick();
      return;
    }
    if (state.clientShootCooldownTicks > 0) state.clientShootCooldownTicks--;
    if (state.clientReloadTicks > 0) state.clientReloadTicks--;
    if (inputState.debugModeJustPressed) state.debugMode = !state.debugMode;
    movement.update(dt, inputState, physics);
    const snap = movement.getSnapshot();
    const targetEyeHeight = snap.crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
    state.currentEyeHeight = THREE.MathUtils.lerp(
      state.currentEyeHeight,
      targetEyeHeight,
      1 - Math.exp(-dt / this.ctx.crouchTransitionTau)
    );
    camera.setTargetPosition(
      snap.position.x,
      snap.position.y + state.currentEyeHeight,
      snap.position.z
    );
    camera.setRotation(snap.yaw, snap.pitch);
    const room = netClient.getRoom();
    const localPlayer = room?.state.players.get(room.sessionId) ?? null;
    if (localPlayer) {
      if (
        state.lastLocalHealth !== null &&
        state.lastLocalHealth <= 0 &&
        localPlayer.health > 0
      ) {
        remotePlayerSync.syncLocalSpawnFromServer(room!);
        const respawnSnap = movement.getSnapshot();
        state.currentEyeHeight = respawnSnap.crouching
          ? CROUCH_EYE_HEIGHT
          : PLAYER_EYE_HEIGHT;
        camera.setTargetPosition(
          respawnSnap.position.x,
          respawnSnap.position.y + state.currentEyeHeight,
          respawnSnap.position.z
        );
        camera.setRotation(respawnSnap.yaw, respawnSnap.pitch);
        camera.snapToTarget();
        state.localRespawnNoLerpTime = 0.3;
      }
      state.lastLocalHealth = localPlayer.health;
      const ammo = localPlayer.ammo;
      const maxAmmo = localPlayer.maxAmmo;
      const infiniteAmmo = state.debugMode;
      if (
        inputState.reload &&
        ammo < maxAmmo &&
        state.clientReloadTicks <= 0
      )
        state.clientReloadTicks = RELOAD_TICKS;
      const canShoot =
        inputState.shoot &&
        (ammo > 0 || infiniteAmmo) &&
        state.clientReloadTicks <= 0 &&
        state.clientShootCooldownTicks <= 0 &&
        localPlayer.health > 0;
      if (canShoot) {
        state.shotThisFrame = true;
        state.clientShootCooldownTicks = SHOT_INTERVAL_TICKS;
      }
    } else if (
      inputState.shoot &&
      state.clientShootCooldownTicks <= 0
    ) {
      // No room or local player yet: still drive local shoot feedback (animation, muzzle, tracer) so click always feels responsive
      state.shotThisFrame = true;
      state.clientShootCooldownTicks = SHOT_INTERVAL_TICKS;
    }
    input.tick();
  }
}

/** Build PlayerInput, send to server, reconcile. */
export class NetworkingTickSystem implements TickSystem {
  constructor(private ctx: GameContext) {}
  tick(_dt: number): void {
    const { state, input, movement, camera, netClient, remotePlayerSync } =
      this.ctx;
    if (!this.ctx.getIsPlaying()) return;
    const room = netClient.getRoom();
    if (!room) return;
    const inputState = input.getState();
    const snap = movement.getSnapshot();
    const hitboxForInput = state.lastHitboxPositions ?? undefined;
    const shootEyePos = inputState.shoot ? camera.getEyePosition() : undefined;
    const aimDir = camera.getAimDirection();
    const playerInput = inputStateToPlayerInput(
      inputState,
      state.inputTick,
      snap.position,
      hitboxForInput,
      { x: aimDir.x, y: aimDir.y, z: aimDir.z },
      state.debugMode,
      shootEyePos
    );
    netClient.sendInput(playerInput);
    state.inputTick++;
    remotePlayerSync.reconcile(room);
  }
}

/** Camera lerp/snap, local mixer, viewmodel update, tracers/muzzle, shotThisFrame reset, remote mixers. */
export class ViewmodelRenderSystem implements RenderSystem {
  constructor(private ctx: GameContext) {}
  render(dt: number): void {
    const {
      state,
      movement,
      camera,
      viewmodelState,
      tracerSystem,
      muzzleFlashPov,
    } = this.ctx;
    const snap = movement.getSnapshot();
    const animSys = this.ctx.playerAnimationSystem;
    if (animSys && this.ctx.localPlayerMixer) {
      animSys.playStaticIdlePose(this.ctx.localPlayerMixer);
    }
    if (state.localRespawnNoLerpTime > 0) {
      camera.snapToTarget();
      state.localRespawnNoLerpTime -= dt;
      if (state.localRespawnNoLerpTime < 0) state.localRespawnNoLerpTime = 0;
    } else {
      camera.update(dt);
    }
    if (animSys && this.ctx.localPlayerMixer) this.ctx.localPlayerMixer.update(dt);
    if (this.ctx.playerViewModel) this.ctx.playerViewModel.updateMatrixWorld(true);
    if (viewmodelState) {
      if (state.shotThisFrame && viewmodelState.muzzleNodeRef) {
        const aimDir = camera.getAimDirection();
        const cam = camera.getCamera();
        const eyePos = cam.position.clone();
        const eyeHitPoint = eyePos
          .clone()
          .addScaledVector(aimDir, this.ctx.tracerFirstPersonLength);
        const muzzleWorld = new THREE.Vector3();
        viewmodelState.muzzleNodeRef.getWorldPosition(muzzleWorld);
        const tracerDir = eyeHitPoint.clone().sub(muzzleWorld).normalize();
        const tracerLength = eyeHitPoint.distanceTo(muzzleWorld);
        tracerSystem.spawnTracer(muzzleWorld, tracerDir, tracerLength);
        if (muzzleFlashPov) muzzleFlashPov.trigger(viewmodelState.muzzleNodeRef);
      }
      const reloadProgress =
        state.clientReloadTicks > 0 ? 1 - state.clientReloadTicks / RELOAD_TICKS : 0;
      const movementInput: ViewmodelMovementInput = {
        dt,
        velocity: snap.velocity,
        state: snap.state,
        crouching: snap.crouching,
        yaw: snap.yaw,
        pitch: snap.pitch,
        shotThisFrame: state.shotThisFrame,
        reloadProgress,
        isDashing: movement.isDashing(),
      };
      updateViewmodelFrame(viewmodelState, movementInput);
      if (muzzleFlashPov) muzzleFlashPov.update(dt * 1000);
      state.shotThisFrame = false;
    }
    this.ctx.remotePlayerSync.updateRemoteMixers(dt);
  }
}

/** Hitbox dummy update, lastHitboxPositions, remote sync, debug hitboxes, scene render. */
export class SceneAndDebugRenderSystem implements RenderSystem {
  constructor(private ctx: GameContext) {}
  render(dt: number): void {
    const {
      state,
      movement,
      netClient,
      remotePlayerSync,
      debugHitboxes,
      sceneManager,
    } = this.ctx;
    const snap = movement.getSnapshot();
    const { hitboxDummy, hitboxDummyMixer, viewmodelState } = this.ctx;
    const animSys = this.ctx.playerAnimationSystem;
    if (hitboxDummy) {
      hitboxDummy.position.set(snap.position.x, snap.position.y, snap.position.z);
      hitboxDummy.rotation.set(0, snap.yaw + Math.PI, 0);
      if (animSys && hitboxDummyMixer) {
        animSys.playStaticIdlePose(hitboxDummyMixer);
        hitboxDummyMixer.update(dt);
      }
      const positions = getHitboxPositionsFromModel(hitboxDummy);
      if (positions) {
        state.lastHitboxPositionsRaw = positions;
        state.lastHitboxPositions = {
          head: { x: positions.head.x, y: positions.head.y, z: positions.head.z },
          bodyCenter: {
            x: positions.bodyCenter.x,
            y: positions.bodyCenter.y,
            z: positions.bodyCenter.z,
          },
          spineTop: {
            x: positions.spineTop.x,
            y: positions.spineTop.y,
            z: positions.spineTop.z,
          },
          pelvis: {
            x: positions.pelvis.x,
            y: positions.pelvis.y,
            z: positions.pelvis.z,
          },
          feet: {
            x: positions.feet.x,
            y: positions.feet.y,
            z: positions.feet.z,
          },
        };
      } else {
        state.lastHitboxPositionsRaw = null;
        state.lastHitboxPositions = null;
      }
    } else {
      state.lastHitboxPositionsRaw = null;
      state.lastHitboxPositions = null;
    }
    remotePlayerSync.update(netClient.getRoom(), dt);
    debugHitboxes.setVisible(
      state.debugMode,
      viewmodelState?.viewmodelIsArmsOnly ?? false
    );
    const roomForDebug = netClient.getRoom();
    const localPos = state.debugMode ? movement.position : null;
    const remotePositions = roomForDebug
      ? Array.from(roomForDebug.state.players.entries())
          .filter(([k]) => k !== roomForDebug.sessionId)
          .filter(([, p]) => p.health > 0)
          .map(([id, p]) => {
            const mesh = remotePlayerSync.getRemotePlayerMeshes().get(id);
            const hitboxPositions = mesh
              ? getHitboxPositionsFromModel(mesh)
              : undefined;
            return {
              id,
              x: p.x,
              y: p.y,
              z: p.z,
              hitboxPositions: hitboxPositions ?? undefined,
            };
          })
      : [];
    debugHitboxes.update(
      localPos,
      remotePositions,
      state.lastHitboxPositionsRaw ?? undefined
    );
    sceneManager.render(this.ctx.camera.getCamera());
  }
}

/** Health bars, HUD, damage feedback, hit indicators, killfeed, crosshair, tracers/impacts, debug overlay. */
export class UiHudRenderSystem implements RenderSystem {
  constructor(private ctx: GameContext) {}
  render(dt: number): void {
    const {
      state,
      movement,
      camera,
      netClient,
      tracerSystem,
      impactSystem,
    } = this.ctx;
    const snap = movement.getSnapshot();
    updatePlayerHealthBars(netClient.getRoom(), camera.getCamera(), dt);
    const room = netClient.getRoom();
    const localPlayer = room ? room.state.players.get(room.sessionId) : null;
    const shield = (localPlayer as { shield?: number })?.shield ?? MAX_SHIELD;
    const maxShield =
      (localPlayer as { maxShield?: number })?.maxShield ?? MAX_SHIELD;
    const hp = localPlayer?.health ?? MAX_HEALTH;
    const maxHealth = localPlayer?.maxHealth ?? MAX_HEALTH;
    const ammo = localPlayer?.ammo ?? WEAPON_STUB.ammo;
    const maxAmmo = localPlayer?.maxAmmo ?? WEAPON_STUB.maxAmmo;
    const playerName =
      (localPlayer?.id && (localPlayer.id as string).trim().length > 0)
        ? (localPlayer.id as string)
        : room?.sessionId ?? "Player";
    updateHUD(
      shield,
      maxShield,
      hp,
      maxHealth,
      ammo,
      maxAmmo,
      playerName,
      state.debugMode,
      movement.getDashCooldownRemaining(),
      movement.getDashCooldownTotal(),
      movement.isDashing()
    );
    updateScreenDamageFeedback(dt, shield, MAX_SHIELD, hp, MAX_HEALTH);
    updateHitIndicators(snap.yaw, snap.pitch, dt, state.debugMode);
    updateKillfeed(dt);
    updateCrosshairHitFeedback(dt);
    tracerSystem.update(dt * 1000);
    impactSystem.update(dt * 1000);
    if (this.ctx.debugOverlayEnabled) {
      const netInfo =
        room !== null
          ? { connected: true, playerCount: room.state.players.size }
          : { connected: false, playerCount: 0 };
      updateDebugOverlay(
        snap.velocity,
        snap.state,
        this.ctx.input.getState().sprint,
        netInfo,
        state.debugMode,
        getLastHitAngle(),
        netClient.getPing(),
        state.debugMode ? movement.getGroundDebugInfo() : undefined
      );
    }
  }
}
