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
import { createDebugOverlay, updateDebugOverlay } from "./debug/DebugOverlay.js";
import { WEAPON_STUB } from "./systems/gameplay/WeaponStub.js";
import { ColyseusClient } from "./systems/networking/ColyseusClient.js";
import { inputStateToPlayerInput } from "./systems/networking/inputMapping.js";
import type { ArenaState, PlayerStateSchema } from "shared";
import {
  loadPlayerModel,
  loadDummyModel,
  loadSkinTexture,
  applySkinToModel,
  setModelSkin,
  createPlaceholderMesh,
} from "./systems/assetLoader/AssetLoader.js";
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

window.addEventListener("beforeunload", (e) => {
  if (input.isPointerLocked()) {
    e.preventDefault();
    (e as { returnValue: string }).returnValue = "";
  }
});

canvas.addEventListener("mousedown", (e) => e.button === 0 && input.setShoot(true));
canvas.addEventListener("mouseup", (e) => e.button === 0 && input.setShoot(false));

const movement = new FPSMovementController();
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
// Dummies: in scene, each with Idle animation
const dummyMeshes: THREE.Object3D[] = [];
const dummyMixers: THREE.AnimationMixer[] = [];
/** Template for cloning remote players (same model as dummies). */
let dummyTemplate: THREE.Object3D | null = null;
let dummyIdleClip: THREE.AnimationClip | undefined;
/** Remote players: sessionId -> { mesh, mixer } */
const remotePlayerMeshes = new Map<string, THREE.Object3D>();
const remotePlayerMixers = new Map<string, THREE.AnimationMixer>();
/** Interpolation: 1 - exp(-dt/TAU). ~100ms to 95% of target. */
const REMOTE_INTERP_TAU = 0.05;
/** Distance threshold (m) before correcting local position toward server. */
const RECONCILE_THRESHOLD = 0.5;
/** Blend factor when reconciling (higher = faster correction). */
const RECONCILE_LERP = 0.25;
/** Dummy positions in meters (1 unit = 1 m); y = 0 = Boden (GLB-Origin typisch an den Füßen). */
const DUMMY_POSITIONS: [number, number, number][] = [[5, 0, 5], [-4, 0, 6], [3, 0, -5]];

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
  const [playerModel, dummyResult] = await Promise.all([
    loadPlayerModel(clientConfig.playerModelUrl),
    loadDummyModel(clientConfig.dummyModelUrl),
  ]);
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

  const idleClip = findIdleClip(dummyResult.animations);
  dummyTemplate = dummyResult.scene;
  dummyIdleClip = idleClip;
  const scene = sceneManager.getScene();
  const skins = clientConfig.dummySkins;
  for (let i = 0; i < DUMMY_POSITIONS.length; i++) {
    const [x, y, z] = DUMMY_POSITIONS[i];
    const clone = cloneSkeleton(dummyResult.scene);
    const skinId = skins[i % skins.length];
    const skinTex = await loadSkinTexture(skinId);
    if (skinTex) applySkinToModel(clone, skinTex);
    clone.position.set(x, y, z);
    scene.add(clone);
    dummyMeshes.push(clone);
    if (idleClip) {
      const mixer = new THREE.AnimationMixer(clone);
      mixer.clipAction(idleClip).play();
      dummyMixers.push(mixer);
    }
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
  if (dummyIdleClip) {
    const mixer = new THREE.AnimationMixer(clone);
    mixer.clipAction(dummyIdleClip).play();
    remotePlayerMixers.set(key, mixer);
  }
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
}

function reconcileLocalWithServer(room: { sessionId: string; state: ArenaState } | null): void {
  if (!room) return;
  const localState = room.state.players.get(room.sessionId);
  if (!localState) return;
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
    cameraSystem.update(dt);
    dummyMixers.forEach((m) => m.update(dt));
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
          ? {
              connected: true,
              playerCount: room.state.players.size,
              remoteMeshCount: remotePlayerMeshes.size,
            }
          : { connected: false, playerCount: 0, remoteMeshCount: 0 };
      updateDebugOverlay(snap.velocity, snap.state, input.getState().sprint, netInfo);
    }
  });

window.addEventListener("resize", () => {
  const { w, h } = getCanvasSize();
  cameraSystem.resize(w, h);
  sceneManager.resize(w, h);
});

initAssets().then(async () => {
  netClient.connect(clientConfig.serverUrl);
  const joined = await netClient.joinOrCreate("arena_ffa");
  if (!joined) {
    console.warn("Could not join arena_ffa – playing offline");
  } else {
    const room = netClient.getRoom();
    if (room) {
      setupRemotePlayers(room);
      syncLocalSpawnFromServer(room);
    }
  }
  loop.start();
  // Dev: setPlayerSkin('orange') in console to change player skin at runtime
  if (clientConfig.debugOverlay && typeof window !== "undefined") {
    (window as { setPlayerSkin?: (id: string) => void }).setPlayerSkin = (id: string) => {
      if (playerViewModel) setModelSkin(playerViewModel, id);
    };
  }
});
