/**
 * Entry: init systems, game loop, FPS movement, GLB player/dummies.
 */

import * as THREE from "three";
import { GameLoop } from "./core/GameLoop.js";
import { clientConfig } from "./config/index.js";
import { InputSampler } from "./systems/input/InputState.js";
import { FPSCamera } from "./systems/camera/FPSCamera.js";
import { FPSMovementController } from "./systems/movement/FPSMovementController.js";
import { SceneManager } from "./systems/rendering/SceneManager.js";
import { createHUD, updateHUD } from "./systems/ui/HUD.js";
import { createDebugOverlay, updateDebugOverlay } from "./debug/DebugOverlay.js";
import { WEAPON_STUB } from "./systems/gameplay/WeaponStub.js";
import { loadPlayerModel, loadDummyWithAnimation } from "./systems/assetLoader/AssetLoader.js";
import { PLAYER_EYE_HEIGHT, CROUCH_EYE_HEIGHT } from "shared";

const app = document.getElementById("app");
if (!app) throw new Error("No #app");

// Block Ctrl+W/N/T as early as possible so browser doesn't close tab (capture phase, first listener).
window.addEventListener(
  "keydown",
  (e: KeyboardEvent) => {
    const code = e.code;
    const key = e.key?.toLowerCase();
    if (e.ctrlKey && (code === "KeyW" || code === "KeyN" || code === "KeyT" || key === "w" || key === "n" || key === "t")) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  },
  { capture: true }
);

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

// Player model (FPS): attached to camera
let playerViewModel: THREE.Object3D | null = null;
// Dummies: in scene + animation mixers
const dummyMeshes: THREE.Object3D[] = [];
const dummyMixers: THREE.AnimationMixer[] = [];
/** Dummy positions in meters (1 unit = 1 m); y = half character height so feet on ground. */
const DUMMY_POSITIONS: [number, number, number][] = [[5, 0.9, 5], [-4, 0.9, 6], [3, 0.9, -5]];

function findIdleClip(animations: THREE.AnimationClip[]): THREE.AnimationClip | null {
  const byName = animations.find((c) => /rifle\s*aim\s*idle|idle|aim\s*idle/i.test(c.name));
  return byName ?? animations[0] ?? null;
}

async function initAssets(): Promise<void> {
  const [playerModel, dummyResult] = await Promise.all([
    loadPlayerModel(clientConfig.playerModelUrl),
    loadDummyWithAnimation(clientConfig.dummyModelUrl, clientConfig.dummyIdleAnimationUrl),
  ]);
  playerViewModel = playerModel;
  const cam = cameraSystem.getCamera();
  cam.add(playerModel);
  playerModel.position.set(0, -PLAYER_EYE_HEIGHT * 0.5, -0.4);
  playerModel.rotation.set(0, 0, 0);
  playerModel.scale.setScalar(1);

  const scene = sceneManager.getScene();
  const idleClip = findIdleClip(dummyResult.animations);
  for (const [x, y, z] of DUMMY_POSITIONS) {
    const clone = dummyResult.scene.clone(true);
    clone.position.set(x, y, z);
    scene.add(clone);
    dummyMeshes.push(clone);
    if (idleClip) {
      const mixer = new THREE.AnimationMixer(clone);
      const action = mixer.clipAction(idleClip);
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
      dummyMixers.push(mixer);
    }
  }
}

loop
  .setTickCallback((dt) => {
    const state = input.getState();
    movement.update(dt, state, physics);
    const snap = movement.getSnapshot();
    const eyeHeight = snap.crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
    cameraSystem.setTargetPosition(snap.position.x, snap.position.y + eyeHeight, snap.position.z);
    cameraSystem.setRotation(snap.yaw, snap.pitch);
  })
  .setRenderCallback((dt) => {
    for (const mixer of dummyMixers) mixer.update(dt);
    cameraSystem.update(dt);
    sceneManager.render(cameraSystem.getCamera());
    updateHUD(100, WEAPON_STUB.ammo, WEAPON_STUB.maxAmmo);
    if (clientConfig.debugOverlay) {
      const snap = movement.getSnapshot();
      updateDebugOverlay(snap.velocity, snap.state, input.getState().sprint);
    }
  });

window.addEventListener("resize", () => {
  const { w, h } = getCanvasSize();
  cameraSystem.resize(w, h);
  sceneManager.resize(w, h);
});

initAssets().then(() => loop.start());
