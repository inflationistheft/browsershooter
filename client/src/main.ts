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
import {
  loadPlayerModel,
  loadDummyModel,
  loadSkinTexture,
  applySkinToModel,
  setModelSkin,
} from "./systems/assetLoader/AssetLoader.js";
import { PLAYER_EYE_HEIGHT, CROUCH_EYE_HEIGHT } from "shared";

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

/** Smoothed eye height for crouch transition (120ms). */
let currentEyeHeight = PLAYER_EYE_HEIGHT;
const CROUCH_TRANSITION_TAU = 0.04; // ~120ms to 95%

// Player model (FPS): attached to camera
let playerViewModel: THREE.Object3D | null = null;
// Dummies: in scene, each with Idle animation
const dummyMeshes: THREE.Object3D[] = [];
const dummyMixers: THREE.AnimationMixer[] = [];
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

loop
  .setTickCallback((dt) => {
    const state = input.getState();
    movement.update(dt, state, physics);
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

initAssets().then(() => {
  loop.start();
  // Dev: setPlayerSkin('orange') in console to change player skin at runtime
  if (clientConfig.debugOverlay && typeof window !== "undefined") {
    (window as { setPlayerSkin?: (id: string) => void }).setPlayerSkin = (id: string) => {
      if (playerViewModel) setModelSkin(playerViewModel, id);
    };
  }
});
