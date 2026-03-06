/**
 * Entry: init systems, game loop, FPS movement, GLB player/dummies.
 */

import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { GameLoop } from "./core/GameLoop.js";
import { ClientGame } from "./core/ClientGame.js";
import { clientConfig } from "./config/index.js";
import { InputSampler } from "./systems/input/InputState.js";
import { FPSCamera } from "./systems/camera/FPSCamera.js";
import { FPSMovementController } from "./systems/movement/FPSMovementController.js";
import { SceneManager } from "./systems/rendering/SceneManager.js";
import { createHUD } from "./systems/ui/HUD.js";
import { createPlayerHealthBars, onPlayerHit } from "./systems/ui/PlayerHealthBars.js";
import { createHitIndicator, onHitReceived } from "./systems/ui/HitIndicator.js";
import { createScreenDamageFeedback } from "./systems/ui/ScreenDamageFeedback.js";
import {
  createCrosshairHitFeedback,
  triggerCrosshairHit,
  triggerCrosshairKill,
} from "./systems/ui/CrosshairHitFeedback.js";
import {
  createLoadingScreen,
  setLoadingMessage,
  hideLoadingScreen,
} from "./systems/ui/LoadingScreen.js";
import { loadMapFromURL } from "./systems/mapLoader/MapLoader.js";
import { createDebugOverlay } from "./debug/DebugOverlay.js";
import { DebugHitboxVisualization } from "./debug/DebugVisualization.js";
import { ColyseusClient } from "./systems/networking/ColyseusClient.js";
import {
  loadPlayerModelWithAnimations,
  loadMuzzleFlashTextures,
  setModelSkin,
} from "./systems/assetLoader/AssetLoader.js";
import { MuzzleFlashEffect } from "./game/MuzzleFlashSystem.js";
import { PlayerAnimationSystem } from "./systems/animation/PlayerAnimationSystem.js";
import {
  PLAYER_EYE_HEIGHT,
  HEAD_HITBOX_HEIGHT,
  PLAYER_HEIGHT,
  type KillEventPayload,
  type HitMessagePayload,
  type HitReceivedPayload,
  type ShotMessagePayload,
} from "shared";
import { createGameSessionState } from "./game/GameSessionState.js";
import {
  type GameContext,
  LocalPlayerTickSystem,
  NetworkingTickSystem,
  ViewmodelRenderSystem,
  SceneAndDebugRenderSystem,
  UiHudRenderSystem,
} from "./game/GameSystems.js";
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
import { createKillfeed, handleKillEvent } from "./systems/ui/Killfeed.js";
import { BulletTracerSystem } from "./game/BulletTracerSystem.js";
import { BulletImpactSystem } from "./game/BulletImpactSystem.js";

const app = document.getElementById("app");
if (!app) throw new Error("No #app");

const canvas = document.createElement("canvas");
app.appendChild(canvas);

const tunerParam = new URLSearchParams(window.location.search).get("tuner");
const editorParam = new URLSearchParams(window.location.search).get("editor");
if (tunerParam === "1") {
  void import("./tuner/TunerBoot.js").then((m) => m.bootTuner(app, canvas));
} else if (tunerParam === "3p") {
  void import("./tuner/Tuner3PBoot.js").then((m) => m.bootTuner3P(app, canvas));
} else if (editorParam === "1") {
  void import("../../tools/editor/src/main.js").then((m) =>
    m.bootEditor(app, {
      initViewmodel: async (camera) => {
        const playerResult = await loadPlayerModelWithAnimations(clientConfig.playerModelUrl);
        const wrapper = { getCamera: () => camera };
        const result = await initViewmodel(
          playerResult.scene,
          playerResult.animations,
          wrapper as import("./systems/camera/FPSCamera.js").FPSCamera
        );
        const editorAnimSystem = new PlayerAnimationSystem(clientConfig.animationClipNames);
        editorAnimSystem.init(result.viewmodelAnimations);
        const editorMixer = new THREE.AnimationMixer(result.viewmodelModel);
        return {
          viewmodelState: result.viewmodelState,
          updateViewmodelFrame,
          updateViewmodelAnimation(dt: number) {
            editorAnimSystem.playStaticIdlePose(editorMixer);
            editorMixer.update(dt);
          },
        };
      },
    })
  );
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
    if (!pauseMenuHandle && app) {
      pauseMenuHandle = createPauseMenu(app, {
        onResume: () => exitToGame(),
        onBackToLobby: () => {
          netClient.disconnect();
          window.location.reload();
        },
        onOpenSettings: () => openSettings(),
      });
    }
    pauseMenuHandle?.show();
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
    if (!settingsMenuHandle && app) {
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
    settingsMenuHandle?.show(SettingsTab.Performance);
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
  const physics = { raycast: (): boolean => false };
  const loop = new GameLoop();
  const game = new ClientGame();
  const state = createGameSessionState(PLAYER_EYE_HEIGHT);
  const ctx: GameContext = {
    state,
    getIsPlaying: () => uiState === UiState.Playing,
    input,
    movement,
    camera: cameraSystem,
    physics,
    netClient,
    remotePlayerSync,
    sceneManager,
    tracerSystem,
    impactSystem,
    debugHitboxes,
    crouchTransitionTau: clientConfig.tuning.crouchTransitionTau,
    tracerFirstPersonLength: clientConfig.tracerFirstPersonLength ?? 20,
    debugOverlayEnabled: !!clientConfig.debugOverlay,
    localPlayerMixer: null,
    playerViewModel: null,
    viewmodelState: null,
    hitboxDummy: null,
    hitboxDummyMixer: null,
    muzzleFlashPov: null,
  };

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
    ctx.playerAnimationSystem = playerAnimationSystem;
    ctx.viewmodelState = viewmodelState;
    ctx.localPlayerMixer = localPlayerMixer;
    ctx.playerViewModel = playerViewModel;
    ctx.hitboxDummy = hitboxDummy;
    ctx.hitboxDummyMixer = hitboxDummyMixer;
    ctx.muzzleFlashPov = muzzleFlashPov;
  }

  game.addTickSystem(new LocalPlayerTickSystem(ctx));
  game.addTickSystem(new NetworkingTickSystem(ctx));
  game.addRenderSystem(new ViewmodelRenderSystem(ctx));
  game.addRenderSystem(new SceneAndDebugRenderSystem(ctx));
  game.addRenderSystem(new UiHudRenderSystem(ctx));

  loop
    .setTickCallback((dt) => {
      game.update(dt);
    })
    .setRenderCallback((dt) => {
      game.render(dt);
    });

  window.addEventListener("resize", () => {
    const { w, h } = getCanvasSize();
    cameraSystem.resize(w, h);
    sceneManager.resize(w, h);
  });

  initAssets().then(async () => {
    setLoadingMessage("Loading map…", 55);
    try {
      const loaded = await loadMapFromURL("/maps/arena_blockout.json");
      sceneManager.setMapGroup(loaded.group);
      movement.setStaticWorld(loaded.staticWorld);
    } catch (err) {
      console.warn("Failed to load map JSON, using built-in arena.", err);
    }

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
        room.onMessage("hit", (payload: HitMessagePayload) => {
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
        room.onMessage("hitReceived", (payload: HitReceivedPayload) => {
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
        room.onMessage("shot", (payload: ShotMessagePayload) => {
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
