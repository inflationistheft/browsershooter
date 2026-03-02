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
  setModelSkin,
} from "./systems/assetLoader/AssetLoader.js";
import { PlayerAnimationSystem } from "./systems/animation/PlayerAnimationSystem.js";
import {
  PLAYER_EYE_HEIGHT,
  CROUCH_EYE_HEIGHT,
  MAX_SHIELD,
  MAX_HEALTH,
} from "shared";
import { RemotePlayerSync } from "./game/RemotePlayerSync.js";
import {
  initViewmodel,
  updateViewmodelFrame,
  type ViewmodelState,
} from "./game/ViewmodelSetup.js";

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
  const sceneManager = new SceneManager(canvas);
  const cameraSystem = new FPSCamera(90, initW / initH || 16 / 9, 0.1, 1000);
  sceneManager.getScene().add(cameraSystem.getCamera());
  sceneManager.resize(initW, initH);
  cameraSystem.resize(initW, initH);
  const input = new InputSampler();
  input.requestPointerLock(canvas);

  const movement = new FPSMovementController();
  const netClient = new ColyseusClient();

  const remotePlayerSync = new RemotePlayerSync({
    sceneManager,
    movement,
    playerAnimationSystem: undefined as unknown as PlayerAnimationSystem,
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
  if (clientConfig.debugOverlay) createDebugOverlay(app);

  const debugHitboxes = new DebugHitboxVisualization(sceneManager.getScene());
  let debugMode = false;
  let lastHitboxPositions: HitboxPositionsInput | null = null;
  let lastHitboxPositionsRaw: HitboxPositions | null = null;

  const physics = { raycast: (): boolean => false };
  const loop = new GameLoop();
  let inputTick = 0;

  let currentEyeHeight = PLAYER_EYE_HEIGHT;

  let playerViewModel: THREE.Object3D | null = null;
  let viewmodelState: ViewmodelState | null = null;
  let localPlayerMixer: THREE.AnimationMixer | null = null;
  let playerTemplate: THREE.Object3D | null = null;
  let playerAnimationSystem: PlayerAnimationSystem;
  let hitboxDummy: THREE.Object3D | null = null;
  let hitboxDummyMixer: THREE.AnimationMixer | null = null;

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
      const room = netClient.getRoom();
      if (room) {
        const aimDir = cameraSystem.getAimDirection();
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
        if (playerInput.shoot) input.consumeOneShoot();
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
      cameraSystem.update(dt);
      if (localPlayerMixer) localPlayerMixer.update(dt);
      if (playerViewModel) playerViewModel.updateMatrixWorld(true);
      if (viewmodelState) updateViewmodelFrame(viewmodelState);
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
      const hp = localPlayer?.health ?? MAX_HEALTH;
      const ammo = localPlayer?.ammo ?? WEAPON_STUB.ammo;
      const maxAmmo = localPlayer?.maxAmmo ?? WEAPON_STUB.maxAmmo;
      updateHUD(shield, hp, ammo, maxAmmo, debugMode);
      updateHitIndicators(snap.yaw, snap.pitch, dt, debugMode);
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
          getLastHitAngle()
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
        room.onMessage("hit", (payload: { targetId: string }) => {
          onPlayerHit(payload.targetId);
        });
        room.onMessage(
          "hitReceived",
          (payload: { dirX: number; dirY: number; dirZ: number }) => {
            onHitReceived(payload.dirX, payload.dirY, payload.dirZ);
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
