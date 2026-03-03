/**
 * Entry: init systems, game loop, FPS movement, GLB player/dummies.
 */

import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { GameLoop } from "./core/GameLoop.js";
import { clientConfig } from "./config/index.js";
import { InputSampler } from "./systems/input/InputState.js";
import { FPSCamera } from "./systems/camera/FPSCamera.js";
import { FPSMovementController } from "./systems/movement/FPSMovementController.js";
import { SceneManager } from "./systems/rendering/SceneManager.js";
import { createHUD, updateHUD } from "./systems/ui/HUD.js";
import {
  createPlayerHealthBars,
  onPlayerHit,
  updatePlayerHealthBars,
} from "./systems/ui/PlayerHealthBars.js";
import {
  createHitIndicator,
  getLastHitAngle,
  onHitReceived,
  updateHitIndicators,
} from "./systems/ui/HitIndicator.js";
import {
  createScreenDamageFeedback,
  updateScreenDamageFeedback,
} from "./systems/ui/ScreenDamageFeedback.js";
import {
  createCrosshairHitFeedback,
  triggerCrosshairHit,
  triggerCrosshairKill,
  updateCrosshairHitFeedback,
} from "./systems/ui/CrosshairHitFeedback.js";
import {
  createLoadingScreen,
  setLoadingMessage,
  hideLoadingScreen,
} from "./systems/ui/LoadingScreen.js";
import { createDebugOverlay, updateDebugOverlay } from "./debug/DebugOverlay.js";
import { DebugHitboxVisualization } from "./debug/DebugVisualization.js";
import { WEAPON_STUB } from "./systems/gameplay/WeaponStub.js";
import { ColyseusClient } from "./systems/networking/ColyseusClient.js";
import {
  inputStateToPlayerInput,
  type HitboxPositionsInput,
} from "./systems/networking/inputMapping.js";
import {
  getHitboxPositionsFromModel,
  type HitboxPositions,
} from "./systems/animation/getHitboxPositions.js";
import {
  loadPlayerModelWithAnimations,
  loadMuzzleFlashTextures,
  setModelSkin,
} from "./systems/assetLoader/AssetLoader.js";
import { MuzzleFlashEffect } from "./game/MuzzleFlashSystem.js";
import { PlayerAnimationSystem } from "./systems/animation/PlayerAnimationSystem.js";
import {
  PLAYER_EYE_HEIGHT,
  CROUCH_EYE_HEIGHT,
  MAX_SHIELD,
  MAX_HEALTH,
  SHOT_INTERVAL_TICKS,
  RELOAD_TICKS,
  HITSCAN_RANGE,
  type KillEventPayload,
} from "shared";
import { RemotePlayerSync } from "./game/RemotePlayerSync.js";
import { createPauseMenu, type PauseMenuHandle } from "./systems/ui/PauseMenu.js";
import {
  createSettingsMenu,
  type SettingsMenuHandle,
  SettingsTab,
} from "./systems/ui/SettingsMenu.js";
import {
  getPerformanceSettings,
  applyPerformanceSettings,
  type PerformanceSettings,
  getInputSettings,
  applyInputSettings,
  type InputSettings,
} from "./config/clientSettings.js";
import {
  initViewmodel,
  updateViewmodelFrame,
  type ViewmodelState,
} from "./game/ViewmodelSetup.js";
import type { ViewmodelMovementInput } from "./game/ViewmodelMovement.js";
import {
  createKillfeed,
  handleKillEvent,
  updateKillfeed,
} from "./systems/ui/Killfeed.js";
import { BulletTracerSystem } from "./game/BulletTracerSystem.js";
import { BulletImpactSystem } from "./game/BulletImpactSystem.js";

const app = document.getElementById("app");
if (!app) throw new Error("No #app");

const canvas = document.createElement("canvas");
app.appendChild(canvas);

const tunerParam = new URLSearchParams(window.location.search).get("tuner");
if (tunerParam === "1") {
  void import("./tuner/TunerBoot.js").then((m) => m.bootTuner(app, canvas));
} else if (tunerParam === "3p") {
  void import("./tuner/Tuner3PBoot.js").then((m) => m.bootTuner3P(app, canvas));
} else {
  // --- Game mode ---
  function getCanvasSize(): { w: number; h: number } {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    return { w, h };
  }

  const { w: initW, h: initH } = getCanvasSize();

  const initialPerf: PerformanceSettings = getPerformanceSettings();
  const sceneManager = new SceneManager(canvas, {
    antialias: initialPerf.aaEnabled,
    renderScale: initialPerf.renderScale,
  });
  const tracerSystem = new BulletTracerSystem(sceneManager.getScene(), {
    maxTracers: 32,
    lifetimeMs: clientConfig.tracerMaxLifetimeMs,
    color: clientConfig.tracerColor,
    everyNthShot: clientConfig.tracerEveryNthShot,
    lineRadius: clientConfig.tracerLineRadius,
  });
  const impactSystem = new BulletImpactSystem(sceneManager.getScene(), {
    maxImpacts: 32,
    lifetimeMs: clientConfig.tracerImpactLifetimeMs,
    color: clientConfig.tracerColor,
    size: clientConfig.tracerImpactSize,
  });
  tracerSystem.setEnabled(initialPerf.bulletTracersEnabled ?? clientConfig.tracerEnabledDefault);
  const cameraSystem = new FPSCamera(90, initW / initH || 16 / 9, 0.1, 1000);
  sceneManager.getScene().add(cameraSystem.getCamera());
  sceneManager.resize(initW, initH);
  cameraSystem.resize(initW, initH);
  const input = new InputSampler();
  const initialInput: InputSettings = getInputSettings();
  input.setMouseSensitivity(initialInput.mouseSensitivity);
  input.requestPointerLock(canvas);

  const movement = new FPSMovementController();
  const netClient = new ColyseusClient();

  const remotePlayerSync = new RemotePlayerSync({
    sceneManager,
    movement,
    playerAnimationSystem: undefined as unknown as PlayerAnimationSystem,
    tracerSystem,
    impactSystem,
  });

  function onPageUnload(): void {
    netClient.disconnect();
  }
  window.addEventListener("beforeunload", (e) => {
    onPageUnload();
    if (input.isPointerLocked()) {
      e.preventDefault();
      (e as { returnValue: string }).returnValue = "";
    }
  });
  window.addEventListener("pagehide", onPageUnload);
  const hot = (import.meta as { hot?: { dispose: (cb: () => void) => void } }).hot;
  if (hot?.dispose) hot.dispose(onPageUnload);

  canvas.addEventListener("mousedown", (e) => e.button === 0 && input.setShoot(true));
  canvas.addEventListener("mouseup", (e) => e.button === 0 && input.setShoot(false));

  createLoadingScreen(app);
  createHUD(app);
  createPlayerHealthBars(app);
  createHitIndicator(app);
  createKillfeed(app);
  createScreenDamageFeedback(app);
  createCrosshairHitFeedback(app);
  if (clientConfig.debugOverlay) createDebugOverlay(app);

  enum UiState {
    Playing = "playing",
    Paused = "paused",
    Settings = "settings",
  }

  let uiState: UiState = UiState.Playing;
  let pauseMenuHandle: PauseMenuHandle | null = null;
  let settingsMenuHandle: SettingsMenuHandle | null = null;

  function setUiState(next: UiState): void {
    uiState = next;
  }

  function enterPauseMenu(): void {
    if (uiState === UiState.Paused) return;
    if (!pauseMenuHandle) {
      pauseMenuHandle = createPauseMenu(app, {
        onResume: () => exitToGame(),
        onBackToLobby: () => {
          netClient.disconnect();
          window.location.reload();
        },
        onOpenSettings: () => openSettings(),
      });
    }
    pauseMenuHandle.show();
    settingsMenuHandle?.hide();
    setUiState(UiState.Paused);
    if (input.isPointerLocked()) document.exitPointerLock();
  }

  function exitToGame(): void {
    if (uiState === UiState.Playing) return;
    pauseMenuHandle?.hide();
    settingsMenuHandle?.hide();
    setUiState(UiState.Playing);
    input.requestPointerLock(canvas);
  }

  function openSettings(): void {
    if (!settingsMenuHandle) {
      settingsMenuHandle = createSettingsMenu(app, {
        onClose: () => {
          if (uiState === UiState.Settings) {
            enterPauseMenu();
          }
        },
        onApplyPerformance: (perf) => {
          applyPerformanceSettings(perf);
          sceneManager.setPerformance(perf);
          tracerSystem.setEnabled(perf.bulletTracersEnabled);
        },
        onApplyMouse: (inputSettings) => {
          applyInputSettings(inputSettings);
          input.setMouseSensitivity(inputSettings.mouseSensitivity);
        },
      });
    }
    settingsMenuHandle.show(SettingsTab.Performance);
    pauseMenuHandle?.hide();
    setUiState(UiState.Settings);
  }

  window.addEventListener("keydown", (e) => {
    if (e.code !== "Escape") return;
    if (uiState === UiState.Playing) {
      e.preventDefault();
      enterPauseMenu();
    } else if (uiState === UiState.Paused) {
      e.preventDefault();
      exitToGame();
    } else if (uiState === UiState.Settings) {
      e.preventDefault();
      enterPauseMenu();
    }
  });

  const debugHitboxes = new DebugHitboxVisualization(sceneManager.getScene());
  let debugMode = false;
  let lastHitboxPositions: HitboxPositionsInput | null = null;
  let lastHitboxPositionsRaw: HitboxPositions | null = null;

  const physics = { raycast: (): boolean => false };
  const loop = new GameLoop();
  let inputTick = 0;
  let shotThisFrame = false;
  let clientShootCooldownTicks = 0;
  let clientReloadTicks = 0;

  let currentEyeHeight = PLAYER_EYE_HEIGHT;

  // Tracks last known local player health to detect respawns (dead -> alive transition)
  let lastLocalHealth: number | null = null;
  // Time window after local respawn during which camera should not smooth/lerp
  let localRespawnNoLerpTime = 0;

  let playerViewModel: THREE.Object3D | null = null;
  let viewmodelState: ViewmodelState | null = null;
  let localPlayerMixer: THREE.AnimationMixer | null = null;
  let playerTemplate: THREE.Object3D | null = null;
  let playerAnimationSystem: PlayerAnimationSystem;
  let hitboxDummy: THREE.Object3D | null = null;
  let hitboxDummyMixer: THREE.AnimationMixer | null = null;
  let muzzleFlashPov: MuzzleFlashEffect | null = null;

  async function initAssets(): Promise<void> {
    setLoadingMessage("Loading characters and arena…", 15);

    const playerResult = await loadPlayerModelWithAnimations(clientConfig.playerModelUrl);
    playerTemplate = playerResult.scene;
    const playerAnimations = playerResult.animations;

    const viewmodelResult = await initViewmodel(
      playerTemplate,
      playerAnimations,
      cameraSystem
    );
    playerViewModel = viewmodelResult.viewmodelState.playerViewModel;
    viewmodelState = viewmodelResult.viewmodelState;

    setLoadingMessage("Loading characters and arena…", 40);
    playerAnimationSystem = new PlayerAnimationSystem(clientConfig.animationClipNames);
    playerAnimationSystem.init(viewmodelResult.viewmodelAnimations);

    remotePlayerSync.setPlayerTemplate(playerTemplate);
    remotePlayerSync.setWeaponTemplate3P(viewmodelResult.weaponTemplate3P);
    remotePlayerSync.setPlayerAnimationSystem(playerAnimationSystem);

    const muzzleTextures = await loadMuzzleFlashTextures(clientConfig.muzzleFlashUrls);
    muzzleFlashPov = new MuzzleFlashEffect({
      durationMs: clientConfig.muzzleFlashDurationMs,
      scale: clientConfig.muzzleFlashScalePov,
    });
    muzzleFlashPov.setTextures(muzzleTextures);
    remotePlayerSync.setMuzzleFlashTextures(muzzleTextures);

    if (viewmodelResult.viewmodelAnimations.length > 0) {
      localPlayerMixer = new THREE.AnimationMixer(viewmodelResult.viewmodelModel);
      playerAnimationSystem.playStaticIdlePose(localPlayerMixer);
    }

    if (playerTemplate) {
      const dummy = cloneSkeleton(playerTemplate);
      dummy.visible = false;
      sceneManager.getScene().add(dummy);
      hitboxDummy = dummy;
      if (playerAnimations.length > 0) {
        hitboxDummyMixer = new THREE.AnimationMixer(dummy);
        playerAnimationSystem.playStaticIdlePose(hitboxDummyMixer);
      }
    }
  }

  loop
    .setTickCallback((dt) => {
      const state = input.getState();
      if (uiState !== UiState.Playing) {
        input.tick();
        return;
      }
      // Do not reset shotThisFrame here: it is consumed in render. Resetting here would drop
      // the shot when multiple ticks run in one frame (first tick sets true, second tick overwrote false).
      if (clientShootCooldownTicks > 0) clientShootCooldownTicks--;
      if (clientReloadTicks > 0) clientReloadTicks--;
      if (state.debugModeJustPressed) debugMode = !debugMode;
      movement.update(dt, state, physics);
      const snap = movement.getSnapshot();
      const targetEyeHeight = snap.crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
      currentEyeHeight = THREE.MathUtils.lerp(
        currentEyeHeight,
        targetEyeHeight,
        1 - Math.exp(-dt / clientConfig.tuning.crouchTransitionTau)
      );
      cameraSystem.setTargetPosition(
        snap.position.x,
        snap.position.y + currentEyeHeight,
        snap.position.z
      );
      cameraSystem.setRotation(snap.yaw, snap.pitch);
      const aimDir = cameraSystem.getAimDirection();
      const room = netClient.getRoom();
      if (room) {
        const localPlayer = room.state.players.get(room.sessionId);
        if (localPlayer) {
          // Detect respawn: previously dead (<=0) and now alive (>0)
          if (lastLocalHealth !== null && lastLocalHealth <= 0 && localPlayer.health > 0) {
            // Hard-sync local movement to server spawn position/orientation
            remotePlayerSync.syncLocalSpawnFromServer(room);
            const respawnSnap = movement.getSnapshot();
            currentEyeHeight = respawnSnap.crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
            cameraSystem.setTargetPosition(
              respawnSnap.position.x,
              respawnSnap.position.y + currentEyeHeight,
              respawnSnap.position.z
            );
            cameraSystem.setRotation(respawnSnap.yaw, respawnSnap.pitch);
            cameraSystem.snapToTarget();
            // For a short period after respawn, keep camera snapped (no smoothing)
            localRespawnNoLerpTime = 0.3;
          }
          lastLocalHealth = localPlayer.health;

          const ammo = localPlayer.ammo;
          const maxAmmo = localPlayer.maxAmmo;
          const infiniteAmmo = debugMode;
          if (state.reload && ammo < maxAmmo && clientReloadTicks <= 0)
            clientReloadTicks = RELOAD_TICKS;
          const canShoot =
            state.shoot &&
            (ammo > 0 || infiniteAmmo) &&
            clientReloadTicks <= 0 &&
            clientShootCooldownTicks <= 0 &&
            localPlayer.health > 0;
          if (canShoot) {
            shotThisFrame = true;
            clientShootCooldownTicks = SHOT_INTERVAL_TICKS;
          }
        }
        const hitboxForInput = lastHitboxPositions ?? undefined;
        const shootEyePos = state.shoot ? cameraSystem.getEyePosition() : undefined;
        const playerInput = inputStateToPlayerInput(
          state,
          inputTick,
          snap.position,
          hitboxForInput ?? undefined,
          { x: aimDir.x, y: aimDir.y, z: aimDir.z },
          debugMode,
          shootEyePos
        );
        netClient.sendInput(playerInput);
        // Do not consume shoot: keep sending shoot=true every tick while button is held
        // so server can fire at FIRE_RATE (cooldown-limited). Consuming caused only one
        // shot intent per click and dropped sustained fire.
        inputTick++;
        remotePlayerSync.reconcile(room);
      }
      input.tick();
    })
    .setRenderCallback((dt) => {
      const snap = movement.getSnapshot();
      if (localPlayerMixer) {
        playerAnimationSystem.playStaticIdlePose(localPlayerMixer);
      }
      if (localRespawnNoLerpTime > 0) {
        cameraSystem.snapToTarget();
        localRespawnNoLerpTime -= dt;
        if (localRespawnNoLerpTime < 0) localRespawnNoLerpTime = 0;
      } else {
        cameraSystem.update(dt);
      }
      if (localPlayerMixer) localPlayerMixer.update(dt);
      if (playerViewModel) playerViewModel.updateMatrixWorld(true);
      if (viewmodelState) {
        if (shotThisFrame && viewmodelState.muzzleNodeRef) {
          const aimDir = cameraSystem.getAimDirection();
          const camera = cameraSystem.getCamera();
          const eyePos = camera.position.clone();
          const eyeHitPoint = eyePos
            .clone()
            .addScaledVector(
              aimDir,
              clientConfig.tracerFirstPersonLength ?? 20
            );
          const muzzleWorld = new THREE.Vector3();
          viewmodelState.muzzleNodeRef.getWorldPosition(muzzleWorld);
          const tracerDir = eyeHitPoint.clone().sub(muzzleWorld).normalize();
          const tracerLength = eyeHitPoint.distanceTo(muzzleWorld);
          tracerSystem.spawnTracer(muzzleWorld, tracerDir, tracerLength);
          if (muzzleFlashPov) {
            muzzleFlashPov.trigger(viewmodelState.muzzleNodeRef);
          }
        }
        const reloadProgress =
          clientReloadTicks > 0 ? 1 - clientReloadTicks / RELOAD_TICKS : 0;
        const movementInput: ViewmodelMovementInput = {
          dt,
          velocity: snap.velocity,
          state: snap.state,
          crouching: snap.crouching,
          yaw: snap.yaw,
          pitch: snap.pitch,
          shotThisFrame,
          reloadProgress,
        };
        updateViewmodelFrame(viewmodelState, movementInput);
        if (muzzleFlashPov) muzzleFlashPov.update(dt * 1000);
        shotThisFrame = false;
      }
      remotePlayerSync.updateRemoteMixers(dt);
      if (hitboxDummy) {
        hitboxDummy.position.set(snap.position.x, snap.position.y, snap.position.z);
        hitboxDummy.rotation.set(0, snap.yaw + Math.PI, 0);
        if (hitboxDummyMixer) {
          playerAnimationSystem.playStaticIdlePose(hitboxDummyMixer);
          hitboxDummyMixer.update(dt);
        }
        const positions = getHitboxPositionsFromModel(hitboxDummy);
        if (positions) {
          lastHitboxPositionsRaw = positions;
          lastHitboxPositions = {
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
          lastHitboxPositionsRaw = null;
          lastHitboxPositions = null;
        }
      } else {
        lastHitboxPositionsRaw = null;
        lastHitboxPositions = null;
      }
      remotePlayerSync.update(netClient.getRoom(), dt);
      debugHitboxes.setVisible(
        debugMode,
        viewmodelState?.viewmodelIsArmsOnly ?? false
      );
      const roomForDebug = netClient.getRoom();
      const localPos = debugMode ? movement.position : null;
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
        lastHitboxPositionsRaw ?? undefined
      );
      sceneManager.render(cameraSystem.getCamera());
      updatePlayerHealthBars(netClient.getRoom(), cameraSystem.getCamera(), dt);
      const room = netClient.getRoom();
      const localPlayer = room ? room.state.players.get(room.sessionId) : null;
      const shield = (localPlayer as { shield?: number })?.shield ?? MAX_SHIELD;
      const maxShield = (localPlayer as { maxShield?: number })?.maxShield ?? MAX_SHIELD;
      const hp = localPlayer?.health ?? MAX_HEALTH;
      const maxHealth = localPlayer?.maxHealth ?? MAX_HEALTH;
      const ammo = localPlayer?.ammo ?? WEAPON_STUB.ammo;
      const maxAmmo = localPlayer?.maxAmmo ?? WEAPON_STUB.maxAmmo;
      const playerName = (localPlayer?.id && localPlayer.id.trim().length > 0)
        ? localPlayer.id
        : room?.sessionId ?? "Player";
      updateHUD(shield, maxShield, hp, maxHealth, ammo, maxAmmo, playerName, debugMode);
      updateScreenDamageFeedback(dt, shield, MAX_SHIELD, hp, MAX_HEALTH);
      updateHitIndicators(snap.yaw, snap.pitch, dt, debugMode);
      updateKillfeed(dt);
      updateCrosshairHitFeedback(dt);
      tracerSystem.update(dt * 1000);
      impactSystem.update(dt * 1000);
      if (clientConfig.debugOverlay) {
        const netInfo =
          room !== null
            ? { connected: true, playerCount: room.state.players.size }
            : { connected: false, playerCount: 0 };
        updateDebugOverlay(
          snap.velocity,
          snap.state,
          input.getState().sprint,
          netInfo,
          debugMode,
          getLastHitAngle(),
          netClient.getPing()
        );
      }
    });

  window.addEventListener("resize", () => {
    const { w, h } = getCanvasSize();
    cameraSystem.resize(w, h);
    sceneManager.resize(w, h);
  });

  initAssets().then(async () => {
    setLoadingMessage("Connecting to server…", 60);
    netClient.connect(clientConfig.serverUrl);
    const joined = await netClient.joinOrCreate("arena_ffa");
    if (!joined) {
      console.warn("Could not join arena_ffa – playing offline");
    } else {
      setLoadingMessage("Joining arena…", 85);
      const room = netClient.getRoom();
      if (room) {
        remotePlayerSync.setup(room);
        room.onMessage(
          "hit",
          (payload: {
            targetId: string;
            hitboxType?: "head" | "body";
            hitX?: number;
            hitY?: number;
            hitZ?: number;
          }) => {
            onPlayerHit(payload.targetId);
            triggerCrosshairHit();
            // Impact at the actual hit point if the server provided it
            if (
              payload.hitX !== undefined &&
              payload.hitY !== undefined &&
              payload.hitZ !== undefined
            ) {
              impactSystem.spawnImpact({
                x: payload.hitX,
                y: payload.hitY,
                z: payload.hitZ,
              });
              return;
            }
            // Fallback: approximate impact on remote player for the shooter
            const target = room.state.players.get(payload.targetId);
            if (target) {
              const yOffset =
                payload.hitboxType === "head"
                  ? HEAD_HITBOX_HEIGHT
                  : PLAYER_HEIGHT * 0.5;
              impactSystem.spawnImpact({
                x: target.x,
                y: target.y + yOffset,
                z: target.z,
              });
            }
          }
        );
        room.onMessage(
          "hitReceived",
          (payload: {
            dirX: number;
            dirY: number;
            dirZ: number;
            hitX?: number;
            hitY?: number;
            hitZ?: number;
          }) => {
            onHitReceived(payload.dirX, payload.dirY, payload.dirZ);
            // Impact at the actual hit point (where the bullet hit the victim), not in front of the camera
            if (
              payload.hitX !== undefined &&
              payload.hitY !== undefined &&
              payload.hitZ !== undefined
            ) {
              impactSystem.spawnImpact({
                x: payload.hitX,
                y: payload.hitY,
                z: payload.hitZ,
              });
            } else {
              const cam = cameraSystem.getCamera();
              const eyePos = cam.position.clone();
              const dir = new THREE.Vector3(
                payload.dirX,
                payload.dirY,
                payload.dirZ
              ).normalize();
              impactSystem.spawnImpact(
                eyePos.clone().addScaledVector(dir, 1)
              );
            }
          }
        );
        room.onMessage("kill", (payload: KillEventPayload) => {
          handleKillEvent(room, payload);
          if (room.sessionId === payload.killerId) {
            triggerCrosshairKill();
          }
        });
        room.onMessage(
          "shot",
          (payload: {
            shooterId: string;
            ox: number;
            oy: number;
            oz: number;
            dx: number;
            dy: number;
            dz: number;
            hitX?: number;
            hitY?: number;
            hitZ?: number;
          }) => {
            remotePlayerSync.onShot(payload);
            // For the local shooter, also snap the POV tracer and spark to the authoritative hit point.
            if (
              payload.shooterId === room.sessionId &&
              payload.hitX !== undefined &&
              payload.hitY !== undefined &&
              payload.hitZ !== undefined
            ) {
              const hitPoint = new THREE.Vector3(
                payload.hitX,
                payload.hitY,
                payload.hitZ
              );
              if (viewmodelState?.muzzleNodeRef) {
                const muzzleWorld = new THREE.Vector3();
                viewmodelState.muzzleNodeRef.getWorldPosition(muzzleWorld);
                const dir = hitPoint.clone().sub(muzzleWorld).normalize();
                const length = muzzleWorld.distanceTo(hitPoint);
                tracerSystem.retargetLast(muzzleWorld, dir, length);
              }
              impactSystem.spawnImpact(hitPoint);
            }
          }
        );
        await remotePlayerSync.waitForLocalSpawnAndSync(room);
      }
    }
    setLoadingMessage("Ready!", 100);
    await new Promise((r) => setTimeout(r, 300));
    const snap = movement.getSnapshot();
    cameraSystem.setTargetPosition(
      snap.position.x,
      snap.position.y + PLAYER_EYE_HEIGHT,
      snap.position.z
    );
    cameraSystem.setRotation(snap.yaw, snap.pitch);
    cameraSystem.snapToTarget();
    hideLoadingScreen();
    loop.start();
    if (clientConfig.debugOverlay && typeof window !== "undefined") {
      (window as { setPlayerSkin?: (id: string) => void }).setPlayerSkin = (
        id: string
      ) => {
        if (playerViewModel) setModelSkin(playerViewModel, id);
      };
    }
  });
}
