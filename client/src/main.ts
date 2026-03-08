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
  buildDuel1v1StaticWorld,
  buildDuel1v1RefStaticWorld,
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

/** Wedge (ramp) geometry: flat bottom, slope along axis. In local space centered at origin. */
function createRampWedgeGeometry(
  minX: number, maxX: number, minY: number, maxY: number, minZ: number, maxZ: number,
  rampAxis: "x" | "z", rampInverted: boolean
): THREE.BufferGeometry {
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
  const toLocal = (x: number, y: number, z: number) => [x - cx, y - cy, z - cz];
  let v0: number[], v1: number[], v2: number[], v3: number[], v4: number[], v5: number[];
  if (rampAxis === "z") {
    if (!rampInverted) {
      v0 = toLocal(minX, minY, minZ); v1 = toLocal(maxX, minY, minZ);
      v2 = toLocal(maxX, minY, maxZ); v3 = toLocal(minX, minY, maxZ);
      v4 = toLocal(minX, maxY, maxZ); v5 = toLocal(maxX, maxY, maxZ);
    } else {
      v0 = toLocal(minX, maxY, minZ); v1 = toLocal(maxX, maxY, minZ);
      v2 = toLocal(maxX, minY, maxZ); v3 = toLocal(minX, minY, maxZ);
      v4 = toLocal(minX, minY, minZ); v5 = toLocal(maxX, minY, minZ);
    }
  } else {
    if (!rampInverted) {
      v0 = toLocal(minX, minY, minZ); v1 = toLocal(minX, minY, maxZ);
      v2 = toLocal(maxX, minY, maxZ); v3 = toLocal(maxX, minY, minZ);
      v4 = toLocal(maxX, maxY, maxZ); v5 = toLocal(maxX, maxY, minZ);
    } else {
      v0 = toLocal(maxX, minY, minZ); v1 = toLocal(maxX, minY, maxZ);
      v2 = toLocal(minX, minY, maxZ); v3 = toLocal(minX, minY, minZ);
      v4 = toLocal(minX, maxY, maxZ); v5 = toLocal(minX, maxY, minZ);
    }
  }
  const pos = new Float32Array([
    ...v0, ...v1, ...v2, ...v3, ...v4, ...v5,
  ]);
  const idx = new Uint16Array([
    0, 1, 2, 0, 2, 3, 0, 1, 5, 0, 5, 4, 0, 3, 4, 1, 2, 5, 2, 3, 4, 2, 4, 5,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setIndex(new THREE.BufferAttribute(idx, 1));
  geo.computeVertexNormals();
  return geo;
}

/** Classify duel arena block from AABB: ramp, ceiling (thin high Y), floor (thin low Y), else wall. */
function getDuelBlockType(b: {
  minY: number;
  maxY: number;
  rampAxis?: "x" | "z";
  rampInverted?: boolean;
}): "floor" | "wall" | "ramp" | "ceiling" {
  if (b.rampAxis != null && b.rampInverted !== undefined) return "ramp";
  const thin = b.maxY - b.minY < 0.5;
  if (thin && b.minY > 4) return "ceiling";
  if (thin) return "floor";
  return "wall";
}

/** Low-poly hull texture: large panels, thin seams, subtle per-panel shade variation (Halo-like). */
function createArenaHullTexture(options: {
  baseR: number;
  baseG: number;
  baseB: number;
  panelSize: number;
  seamR: number;
  seamG: number;
  seamB: number;
  panelShadeVariation: number;
}): THREE.CanvasTexture {
  const { baseR, baseG, baseB, panelSize, seamR, seamG, seamB, panelShadeVariation } = options;
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const imageData = ctx.createImageData(size, size);
  const data = imageData.data;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const gx = Math.floor(x / panelSize);
      const gy = Math.floor(y / panelSize);
      const onSeamX = x % panelSize === 0;
      const onSeamY = y % panelSize === 0;
      const isSeam = onSeamX || onSeamY;
      const shade = (gx + gy) % 2 === 0 ? 1 : 1 - panelShadeVariation;
      const i = (y * size + x) * 4;
      if (isSeam) {
        data[i + 0] = seamR;
        data[i + 1] = seamG;
        data[i + 2] = seamB;
      } else {
        data[i + 0] = Math.round(Math.max(0, Math.min(255, baseR * shade)));
        data[i + 1] = Math.round(Math.max(0, Math.min(255, baseG * shade)));
        data[i + 2] = Math.round(Math.max(0, Math.min(255, baseB * shade)));
      }
      data[i + 3] = 255;
    }
  }
  ctx.putImageData(imageData, 0, 0);

  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(1.2, 1.2);
  tex.needsUpdate = true;
  return tex;
}

/** Duel arena materials: low-poly hull, Halo-like sci-fi, subtle texture. */
function createDuelArenaMaterials(): {
  floor: THREE.MeshStandardMaterial;
  wall: THREE.MeshStandardMaterial;
  ramp: THREE.MeshStandardMaterial;
  ceiling: THREE.MeshStandardMaterial;
} {
  const hullOpts = {
    panelSize: 64,
    seamR: 82,
    seamG: 88,
    seamB: 98,
    panelShadeVariation: 0.06,
  };
  const floorTex = createArenaHullTexture({
    ...hullOpts,
    baseR: 228,
    baseG: 232,
    baseB: 240,
  });
  const wallTex = createArenaHullTexture({
    ...hullOpts,
    baseR: 218,
    baseG: 224,
    baseB: 235,
  });
  const ceilingTex = createArenaHullTexture({
    ...hullOpts,
    baseR: 212,
    baseG: 218,
    baseB: 230,
  });

  const floor = new THREE.MeshStandardMaterial({
    map: floorTex,
    color: 0xffffff,
    roughness: 0.65,
    metalness: 0.2,
  });
  const wall = new THREE.MeshStandardMaterial({
    map: wallTex,
    color: 0xffffff,
    roughness: 0.55,
    metalness: 0.28,
  });
  const ramp = new THREE.MeshStandardMaterial({
    map: floorTex,
    color: 0xffffff,
    roughness: 0.65,
    metalness: 0.2,
    side: THREE.DoubleSide,
  });
  const ceiling = new THREE.MeshStandardMaterial({
    map: ceilingTex,
    color: 0xffffff,
    roughness: 0.55,
    metalness: 0.28,
  });
  return { floor, wall, ramp, ceiling };
}

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
  let duelLampsGroup: THREE.Group | null = null;

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
          if (duelLampsGroup) duelLampsGroup.visible = perf.duelLampsEnabled;
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
    // Room from URL (?room=arena_1v1 or ?room=1v1) overrides config
    const urlRoom = typeof window !== "undefined"
      ? new URLSearchParams(window.location.search).get("room")?.toLowerCase()
      : null;
    const roomName =
      urlRoom === "1v1" || urlRoom === "arena_1v1"
        ? "arena_1v1"
        : urlRoom === "1v1_ref" || urlRoom === "arena_1v1_ref"
          ? "arena_1v1_ref"
          : urlRoom === "ffa" || urlRoom === "arena_ffa"
            ? "arena_ffa"
            : clientConfig.roomName;

    const isDuelRef = roomName === "arena_1v1_ref";
    const isDuelSmall = roomName === "arena_1v1";

    if (isDuelSmall || isDuelRef) {
      setLoadingMessage("Loading duel arena…", 55);
      const duelWorld = isDuelRef ? buildDuel1v1RefStaticWorld() : buildDuel1v1StaticWorld();
      const duelGroup = new THREE.Group();
      const mats = createDuelArenaMaterials();
      for (const b of duelWorld.blocks) {
        const cx = (b.minX + b.maxX) / 2, cy = (b.minY + b.maxY) / 2, cz = (b.minZ + b.maxZ) / 2;
        const blockType = getDuelBlockType(b);
        const isRamp = blockType === "ramp";
        const geo = isRamp
          ? createRampWedgeGeometry(
              b.minX, b.maxX, b.minY, b.maxY, b.minZ, b.maxZ,
              b.rampAxis!, b.rampInverted!
            )
          : new THREE.BoxGeometry(b.maxX - b.minX, b.maxY - b.minY, b.maxZ - b.minZ);
        const mat =
          blockType === "ramp"
            ? mats.ramp
            : blockType === "floor"
              ? mats.floor
              : blockType === "ceiling"
                ? mats.ceiling
                : mats.wall;
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(cx, cy, cz);
        mesh.castShadow = false;
        mesh.receiveShadow = true;
        duelGroup.add(mesh);
      }
      const lampsGroup = new THREE.Group();
      const LILA = 0xaa88ff;
      const duelLampPositions: [number, number, number][] = [
        [20.490659578661653, 5.65, 18.48239626579279],
        [17.641128024397815, 5.65, 0.0367070548557625],
        [18.03684834366855, 5.65, -12.737097335087755],
        [-0.1407457458905403, 11.65, 7.738486140792297],
        [3.723808311784971, 11.65, 0.6080742346658519],
        [-3.7610099774199957, 11.65, 0.618005956039425],
        [0.1729123650605257, 11.65, -6.62643190136915],
        [-17.21381269681255, 5.65, -0.2258076396672953],
        [-19.465686589104074, 5.65, 17.67060638650029],
        [-18.076036525254224, 5.65, -13.482203455746449],
        [0.05906777363913374, 4.576719884817777, 19.9],
        [0.06647359374698025, -1.3213083998510213, -19.9],
        [0.0262903965857183, 0.9261021268136503, -19.9],
        [-0.31377494162787073, -0.35, -12.634181531820634],
        [-0.2925846268465414, -0.35, -2.3106685073100692],
        [-0.1048362887723721, -0.35, 16.770803853594426],
      ];
      for (const [lx, ly, lz] of duelLampPositions) {
        const lamp = new THREE.PointLight(LILA, 5, 14, 2);
        lamp.position.set(lx, ly, lz);
        lampsGroup.add(lamp);
      }
      duelGroup.add(lampsGroup);
      duelLampsGroup = lampsGroup;
      duelLampsGroup.visible = initialPerf.duelLampsEnabled ?? true;
      sceneManager.setDefaultArenaVisible(false);
      sceneManager.setMapGroup(duelGroup);
      movement.setStaticWorld(duelWorld);
    } else {
      setLoadingMessage("Loading map…", 55);
      try {
        const loaded = await loadMapFromURL("/maps/arena_blockout.json");
        sceneManager.setDefaultArenaVisible(false);
        sceneManager.setMapGroup(loaded.group);
        movement.setStaticWorld(loaded.staticWorld);
      } catch (err) {
        console.warn("Failed to load map JSON, using built-in arena.", err);
      }
    }

    setLoadingMessage("Connecting to server…", 60);
    netClient.connect(clientConfig.serverUrl);
    const joined = await netClient.joinOrCreate(roomName);
    if (!joined) {
      console.warn(`Could not join ${roomName} – playing offline`);
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
