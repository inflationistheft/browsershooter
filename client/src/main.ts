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
  createLoadingScreen,
  setLoadingMessage,
  hideLoadingScreen,
} from "./systems/ui/LoadingScreen.js";
import { createDebugOverlay, updateDebugOverlay } from "./debug/DebugOverlay.js";
import { WEAPON_STUB } from "./systems/gameplay/WeaponStub.js";
import { ColyseusClient } from "./systems/networking/ColyseusClient.js";
import { inputStateToPlayerInput } from "./systems/networking/inputMapping.js";
import { resolveAnimationClipId } from "shared";
import type { ArenaState, PlayerStateSchema } from "shared";
import {
  loadPlayerModel,
  loadDummyModel,
  loadSkinTexture,
  applySkinToModel,
  setModelSkin,
  createPlaceholderMesh,
} from "./systems/assetLoader/AssetLoader.js";
import { PlayerAnimationSystem } from "./systems/animation/PlayerAnimationSystem.js";
import { PLAYER_EYE_HEIGHT, CROUCH_EYE_HEIGHT, DEFAULT_MAX_HEALTH } from "shared";

const app = document.getElementById("app");
if (!app) throw new Error("No #app");

const canvas = document.createElement("canvas");
app.appendChild(canvas);

function getCanvasSize(): { w: number; h: number } {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  return { w, h };
}

const { w: initW, h: initH } = getCanvasSize();
const sceneManager = new SceneManager(canvas);
const cameraSystem = new FPSCamera(75, initW / initH || 16 / 9, 0.1, 1000);
sceneManager.resize(initW, initH);
cameraSystem.resize(initW, initH);
const input = new InputSampler();
input.requestPointerLock(canvas);

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

const movement = new FPSMovementController();
createLoadingScreen(app);
createHUD(app);
if (clientConfig.debugOverlay) createDebugOverlay(app);

const physics = { raycast: (): boolean => false };
const loop = new GameLoop();
const netClient = new ColyseusClient();
let inputTick = 0;

/** Smoothed eye height for crouch transition (120ms). */
let currentEyeHeight = PLAYER_EYE_HEIGHT;
const CROUCH_TRANSITION_TAU = 0.04; // ~120ms to 95%

// Player model (FPS): attached to camera
let playerViewModel: THREE.Object3D | null = null;
/** Mixer for local FPS view model (only when using same GLB as dummy). */
let localPlayerMixer: THREE.AnimationMixer | null = null;
/** Template for cloning remote players (same model as dummies). */
let dummyTemplate: THREE.Object3D | null = null;
let dummyIdleClip: THREE.AnimationClip | undefined;
let playerAnimationSystem: PlayerAnimationSystem;
/** Remote players: sessionId -> { mesh, mixer } */
const remotePlayerMeshes = new Map<string, THREE.Object3D>();
const remotePlayerMixers = new Map<string, THREE.AnimationMixer>();
/** Interpolation: 1 - exp(-dt/TAU). ~100ms to 95% of target. */
const REMOTE_INTERP_TAU = 0.05;
/** Distance threshold (m) before correcting local position toward server. */
const RECONCILE_THRESHOLD = 0.5;
/** Blend factor when reconciling (higher = faster correction). */
const RECONCILE_LERP = 0.25;
/** True after we have applied initial spawn from server (fallback for late state sync). */
let hasAppliedInitialSpawn = false;
/** Idle = "idleaiming" (zusammengeschrieben) oder "idle aiming", case-insensitive; sonst "idle", sonst erster Clip. */
function findIdleClip(animations: THREE.AnimationClip[]): THREE.AnimationClip | undefined {
  if (!animations.length) return undefined;
  const normalized = (n: string) => n.toLowerCase().replace(/\s+/g, "");
  const idleAiming = animations.find((c) => normalized(c.name) === "idleaiming");
  if (idleAiming) return idleAiming;
  const idle = animations.find((c) => c.name === "idle");
  if (idle) return idle;
  return animations[0];
}

async function initAssets(): Promise<void> {
  setLoadingMessage("Loading characters and arena…", 15);
  const useSameModel =
    clientConfig.playerModelUrl === clientConfig.dummyModelUrl &&
    clientConfig.playerModelUrl.trim() !== "";

  let playerModel: THREE.Object3D;
  let dummyResult: { scene: THREE.Object3D; animations: THREE.AnimationClip[] };

  if (useSameModel) {
    dummyResult = await loadDummyModel(clientConfig.dummyModelUrl);
    playerModel = cloneSkeleton(dummyResult.scene);
    playerModel.updateMatrixWorld(true);
  } else {
    const [pm, dr] = await Promise.all([
      loadPlayerModel(clientConfig.playerModelUrl),
      loadDummyModel(clientConfig.dummyModelUrl),
    ]);
    playerModel = pm;
    dummyResult = dr;
  }

  playerViewModel = playerModel;

  // Load and apply player skin (PNG from /models/skins/{id}.png)
  if (clientConfig.playerSkin) {
    const playerSkinTex = await loadSkinTexture(clientConfig.playerSkin);
    if (playerSkinTex) applySkinToModel(playerModel, playerSkinTex);
  }

  const cam = cameraSystem.getCamera();
  cam.add(playerModel);
  playerModel.position.set(0, -PLAYER_EYE_HEIGHT * 0.5, -0.4);
  playerModel.rotation.set(0, 0, 0);
  playerModel.scale.setScalar(1);

  setLoadingMessage("Loading characters and arena…", 40);
  const idleClip = findIdleClip(dummyResult.animations);
  dummyTemplate = dummyResult.scene;
  dummyIdleClip = idleClip;
  playerAnimationSystem = new PlayerAnimationSystem(clientConfig.animationClipNames);
  playerAnimationSystem.init(dummyResult.animations);

  if (useSameModel && dummyResult.animations.length > 0) {
    localPlayerMixer = new THREE.AnimationMixer(playerModel);
    playerAnimationSystem.playClip(localPlayerMixer, "idle");
  }
}

function addRemotePlayerMesh(
  key: string,
  localId: string,
  player: PlayerStateSchema
): void {
  if (key === localId) return;
  if (remotePlayerMeshes.has(key)) return;

  const scene = sceneManager.getScene();
  let clone: THREE.Object3D;
  if (dummyTemplate && dummyIdleClip) {
    clone = cloneSkeleton(dummyTemplate);
    clone.updateMatrixWorld(true);
    loadSkinTexture("orange").then((tex) => {
      if (tex) applySkinToModel(clone, tex);
    });
  } else {
    clone = createPlaceholderMesh();
    ((clone as THREE.Mesh).material as THREE.MeshStandardMaterial).color.setHex(0xff6600);
  }
  clone.position.set(player.x, player.y, player.z);
  clone.rotation.set(0, player.yaw + Math.PI, 0);
  scene.add(clone);
  remotePlayerMeshes.set(key, clone);
  const mixer = new THREE.AnimationMixer(clone);
  playerAnimationSystem.playClip(mixer, player.animationState || "idle");
  remotePlayerMixers.set(key, mixer);
}

function removeRemotePlayerMesh(key: string): void {
  const scene = sceneManager.getScene();
  const mesh = remotePlayerMeshes.get(key);
  const mixer = remotePlayerMixers.get(key);
  if (mesh) {
    scene.remove(mesh);
    remotePlayerMeshes.delete(key);
  }
  if (mixer) {
    mixer.stopAllAction();
    remotePlayerMixers.delete(key);
  }
}

function syncLocalSpawnFromServer(room: { sessionId: string; state: ArenaState }): void {
  const localState = room.state.players.get(room.sessionId);
  if (!localState) return;
  movement.position.x = localState.x;
  movement.position.y = localState.y;
  movement.position.z = localState.z;
  movement.velocity.x = localState.vx;
  movement.velocity.y = localState.vy;
  movement.velocity.z = localState.vz;
  movement.yaw = localState.yaw;
  movement.pitch = localState.pitch;
  hasAppliedInitialSpawn = true;
}

/** Wait for local player to appear in room state, then sync spawn. Resolves immediately if already present. */
function waitForLocalSpawnAndSync(
  room: { sessionId: string; state: ArenaState }
): Promise<void> {
  const localState = room.state.players.get(room.sessionId);
  if (localState) {
    syncLocalSpawnFromServer(room);
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const handler = (_player: PlayerStateSchema, key: string) => {
      if (key === room.sessionId) {
        removeOnAdd();
        syncLocalSpawnFromServer(room);
        resolve();
      }
    };
    const removeOnAdd = room.state.players.onAdd(handler, true);
  });
}

function reconcileLocalWithServer(room: { sessionId: string; state: ArenaState } | null): void {
  if (!room) return;
  const localState = room.state.players.get(room.sessionId);
  if (!localState) return;
  if (!hasAppliedInitialSpawn) {
    syncLocalSpawnFromServer(room);
    return;
  }
  const dx = localState.x - movement.position.x;
  const dy = localState.y - movement.position.y;
  const dz = localState.z - movement.position.z;
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  if (dist <= RECONCILE_THRESHOLD) return;
  const t = RECONCILE_LERP;
  movement.position.x += dx * t;
  movement.position.y += dy * t;
  movement.position.z += dz * t;
  movement.velocity.x += (localState.vx - movement.velocity.x) * t;
  movement.velocity.y += (localState.vy - movement.velocity.y) * t;
  movement.velocity.z += (localState.vz - movement.velocity.z) * t;
  movement.yaw += ((localState.yaw - movement.yaw + Math.PI) % (2 * Math.PI) - Math.PI) * t;
  movement.pitch += (localState.pitch - movement.pitch) * t;
}

function setupRemotePlayers(room: { sessionId: string; state: ArenaState }): void {
  const localId = room.sessionId;

  const addRemote = (player: PlayerStateSchema, key: string): void => {
    addRemotePlayerMesh(key, localId, player);
  };

  const removeRemote = (_player: unknown, key: string): void => {
    removeRemotePlayerMesh(key);
  };

  room.state.players.onAdd(addRemote, true);
  room.state.players.onRemove(removeRemote);
}

function updateRemotePlayers(
  room: { sessionId: string; state: ArenaState } | null,
  dt: number
): void {
  if (!room) return;

  const localId = room.sessionId;
  const alpha = 1 - Math.exp(-dt / REMOTE_INTERP_TAU);

  room.state.players.forEach((player, key) => {
    if (key === localId) return;

    let mesh = remotePlayerMeshes.get(key);
    if (!mesh) {
      addRemotePlayerMesh(key, localId, player);
      mesh = remotePlayerMeshes.get(key);
    }
    if (mesh) {
      mesh.position.lerp(
        new THREE.Vector3(player.x, player.y, player.z),
        alpha
      );
      const targetYaw = player.yaw + Math.PI;
      const dy = ((targetYaw - mesh.rotation.y + Math.PI) % (2 * Math.PI)) - Math.PI;
      mesh.rotation.y += dy * alpha;
      const mixer = remotePlayerMixers.get(key);
      if (mixer) {
        const clipId = player.animationState || "idle";
        const ctx: { vy?: number; sprint?: boolean; timeScale?: number } = {};
        if (clipId === "jump") ctx.vy = player.vy;
        if (player.animationTimeScale !== 1) ctx.timeScale = player.animationTimeScale;
        playerAnimationSystem.playClip(mixer, clipId, Object.keys(ctx).length ? ctx : undefined);
      }
    }
  });

  const toRemove: string[] = [];
  const stateKeys = new Set<string>();
  room.state.players.forEach((_, key) => stateKeys.add(String(key)));
  remotePlayerMeshes.forEach((_, key) => {
    if (!stateKeys.has(String(key))) toRemove.push(key);
  });
  toRemove.forEach((key) => removeRemotePlayerMesh(key));
}

loop
  .setTickCallback((dt) => {
    const state = input.getState();
    movement.update(dt, state, physics);
    const room = netClient.getRoom();
    if (room) {
      netClient.sendInput(inputStateToPlayerInput(state, inputTick));
      inputTick++;
      reconcileLocalWithServer(room);
    }
    input.tick();
    const snap = movement.getSnapshot();
    const targetEyeHeight = snap.crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
    currentEyeHeight = THREE.MathUtils.lerp(
      currentEyeHeight,
      targetEyeHeight,
      1 - Math.exp(-dt / CROUCH_TRANSITION_TAU)
    );
    cameraSystem.setTargetPosition(snap.position.x, snap.position.y + currentEyeHeight, snap.position.z);
    cameraSystem.setRotation(snap.yaw, snap.pitch);
  })
  .setRenderCallback((dt) => {
    const state = input.getState();
    const snap = movement.getSnapshot();
    if (localPlayerMixer) {
      const clipId = resolveAnimationClipId({
        moveX: state.moveX,
        moveZ: state.moveZ,
        sprint: state.sprint,
        crouching: snap.crouching,
        movementState: snap.state,
      });
      const ctx: { vy?: number; sprint?: boolean } = {};
      if (clipId === "jump") ctx.vy = snap.velocity.y;
      if (clipId === "strafeLeftFast" || clipId === "strafeRightFast") ctx.sprint = state.sprint;
      playerAnimationSystem.playClip(localPlayerMixer, clipId, Object.keys(ctx).length ? ctx : undefined);
    }
    cameraSystem.update(dt);
    if (localPlayerMixer) localPlayerMixer.update(dt);
    remotePlayerMixers.forEach((m) => m.update(dt));
    updateRemotePlayers(netClient.getRoom(), dt);
    sceneManager.render(cameraSystem.getCamera());
    const room = netClient.getRoom();
    const localPlayer = room ? room.state.players.get(room.sessionId) : null;
    const hp = localPlayer?.health ?? DEFAULT_MAX_HEALTH;
    const ammo = localPlayer?.ammo ?? WEAPON_STUB.ammo;
    const maxAmmo = localPlayer?.maxAmmo ?? WEAPON_STUB.maxAmmo;
    updateHUD(hp, ammo, maxAmmo);
    if (clientConfig.debugOverlay) {
      const snap = movement.getSnapshot();
      const room = netClient.getRoom();
      const netInfo =
        room !== null
          ? { connected: true, playerCount: room.state.players.size }
          : { connected: false, playerCount: 0 };
      updateDebugOverlay(snap.velocity, snap.state, input.getState().sprint, netInfo);
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
      setupRemotePlayers(room);
      await waitForLocalSpawnAndSync(room);
    }
  }
  setLoadingMessage("Ready!", 100);
  await new Promise((r) => setTimeout(r, 300));
  hideLoadingScreen();
  const snap = movement.getSnapshot();
  cameraSystem.setTargetPosition(
    snap.position.x,
    snap.position.y + PLAYER_EYE_HEIGHT,
    snap.position.z
  );
  cameraSystem.setRotation(snap.yaw, snap.pitch);
  cameraSystem.update(1 / 60);
  loop.start();
  // Dev: setPlayerSkin('orange') in console to change player skin at runtime
  if (clientConfig.debugOverlay && typeof window !== "undefined") {
    (window as { setPlayerSkin?: (id: string) => void }).setPlayerSkin = (id: string) => {
      if (playerViewModel) setModelSkin(playerViewModel, id);
    };
  }
});
