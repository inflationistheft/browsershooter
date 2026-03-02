/**
 * Viewmodel tuner boot: minimal scene, asset loading, viewmodel setup, render loop.
 * Accessed via ?tuner=1. No networking, movement, or HUD.
 */

import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { SceneManager } from "../systems/rendering/SceneManager.js";
import { FPSCamera } from "../systems/camera/FPSCamera.js";
import { clientConfig } from "../config/index.js";
import {
  createLoadingScreen,
  setLoadingMessage,
  hideLoadingScreen,
} from "../systems/ui/LoadingScreen.js";
import {
  loadPlayerModelWithAnimations,
  loadViewmodelWithAnimations,
  loadViewmodelWeapon,
  loadSkinTexture,
  applySkinToModel,
} from "../systems/assetLoader/AssetLoader.js";
import { PlayerAnimationSystem } from "../systems/animation/PlayerAnimationSystem.js";
import { PLAYER_EYE_HEIGHT } from "shared";
import type { AnimationClipId } from "shared";
import {
  tunerPovDefault,
  tunerPovOffsets,
  type PovOffset,
} from "./TunerState.js";
import { createTunerPanel } from "./TunerPanel.js";
import {
  createViewmodelMovementState,
  updateViewmodelMovement,
  type ViewmodelMovementInput,
} from "../game/ViewmodelMovement.js";
import type { MovementStateName } from "../systems/movement/FPSMovementController.js";

function getCurrentPovCfg(clipId: AnimationClipId): PovOffset {
  return tunerPovOffsets[clipId] ?? tunerPovDefault;
}

/** Map selected clip to simulated movement input for procedural POV effects. */
function getSimulatedMovementInput(
  clipId: AnimationClipId,
  dt: number,
  yaw: number,
  pitch: number,
  shotThisFrame: boolean
): ViewmodelMovementInput {
  const WALK_SPEED = 4;
  const RUN_SPEED = 8;
  const CROUCH_SPEED = 2;

  const map: Partial<
    Record<
      AnimationClipId,
      {
        velocity: { x: number; y: number; z: number };
        state: MovementStateName;
        crouching: boolean;
      }
    >
  > = {
    idle: { velocity: { x: 0, y: 0, z: 0 }, state: "grounded", crouching: false },
    walk: { velocity: { x: 0, y: 0, z: WALK_SPEED }, state: "grounded", crouching: false },
    walkBackwards: { velocity: { x: 0, y: 0, z: -WALK_SPEED * 0.7 }, state: "grounded", crouching: false },
    strafeLeft: { velocity: { x: -WALK_SPEED, y: 0, z: 0 }, state: "grounded", crouching: false },
    strafeRight: { velocity: { x: WALK_SPEED, y: 0, z: 0 }, state: "grounded", crouching: false },
    strafeLeftFast: { velocity: { x: -WALK_SPEED, y: 0, z: 0 }, state: "grounded", crouching: false },
    strafeRightFast: { velocity: { x: WALK_SPEED, y: 0, z: 0 }, state: "grounded", crouching: false },
    run: { velocity: { x: 0, y: 0, z: RUN_SPEED }, state: "grounded", crouching: false },
    jump: { velocity: { x: 0, y: 2, z: WALK_SPEED }, state: "airborne", crouching: false },
    slide: { velocity: { x: 0, y: 0, z: RUN_SPEED }, state: "sliding", crouching: true },
    crouchForward: { velocity: { x: 0, y: 0, z: CROUCH_SPEED }, state: "grounded", crouching: true },
    crouchBackward: { velocity: { x: 0, y: 0, z: -CROUCH_SPEED }, state: "grounded", crouching: true },
    crouchLeft: { velocity: { x: -CROUCH_SPEED, y: 0, z: 0 }, state: "grounded", crouching: true },
    crouchRight: { velocity: { x: CROUCH_SPEED, y: 0, z: 0 }, state: "grounded", crouching: true },
  };
  const fallback = map.idle!;
  const sim = map[clipId] ?? fallback;
  return {
    dt,
    velocity: sim.velocity,
    state: sim.state,
    crouching: sim.crouching,
    yaw,
    pitch,
    shotThisFrame,
  };
}

export async function bootTuner(app: HTMLElement, canvas: HTMLCanvasElement): Promise<void> {
  createLoadingScreen(app);
  setLoadingMessage("Loading viewmodel tuner…", 10);

  const { w: initW, h: initH } = getCanvasSize(canvas);
  const sceneManager = new SceneManager(canvas);
  const cameraSystem = new FPSCamera(90, initW / initH || 16 / 9, 0.1, 1000);
  sceneManager.getScene().add(cameraSystem.getCamera());
  sceneManager.resize(initW, initH);
  cameraSystem.resize(initW, initH);

  setLoadingMessage("Loading characters and arena…", 15);
  const playerResult = await loadPlayerModelWithAnimations(clientConfig.playerModelUrl);
  const playerTemplate = playerResult.scene;
  const playerAnimations = playerResult.animations;

  let viewmodelSource: THREE.Object3D = playerTemplate;
  let viewmodelAnimations = playerAnimations;

  if (clientConfig.viewmodelArmsUrl) {
    const povResult = await loadViewmodelWithAnimations(clientConfig.viewmodelArmsUrl);
    if (povResult.animations.length > 0 && povResult.scene) {
      viewmodelSource = povResult.scene;
      viewmodelAnimations = povResult.animations;
    }
  }

  const viewmodelModel = cloneSkeleton(viewmodelSource);
  viewmodelModel.updateMatrixWorld(true);

  if (clientConfig.playerSkin) {
    const playerSkinTex = await loadSkinTexture(clientConfig.playerSkin);
    if (playerSkinTex) applySkinToModel(viewmodelModel, playerSkinTex);
  }

  const viewmodelRoot = new THREE.Group();
  viewmodelRoot.position.set(0, 0, 0);
  viewmodelRoot.quaternion.identity();
  viewmodelRoot.scale.setScalar(1);

  const viewmodelHolder = new THREE.Group();
  viewmodelHolder.add(viewmodelModel);
  viewmodelModel.position.set(0, 0, 0);
  viewmodelModel.rotation.set(0, 0, 0);
  viewmodelModel.scale.setScalar(1);
  viewmodelRoot.add(viewmodelHolder);
  cameraSystem.getCamera().add(viewmodelRoot);

  viewmodelModel.traverse((obj) => {
    obj.frustumCulled = false;
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) mesh.renderOrder = 100;
  });

  /** Weapon in separate holder – decoupled from POV. Sibling of viewmodelHolder. */
  let weaponContainerRef: THREE.Group | null = null;

  if (clientConfig.viewmodelWeaponUrl) {
    const weaponScene = await loadViewmodelWeapon(clientConfig.viewmodelWeaponUrl);
    if (weaponScene) {
      weaponScene.rotation.x = Math.PI / 2;
      weaponScene.rotation.z = -Math.PI / 2;

      const weaponContainer = new THREE.Group();
      weaponContainer.add(weaponScene);
      weaponContainerRef = weaponContainer;

      const baseScale = clientConfig.viewmodelWeaponScale ?? 1;
      const grip = clientConfig.viewmodelWeaponGripOffset ?? { x: 0, y: 0, z: 0 };
      weaponScene.position.set(grip.x, grip.y, grip.z);
      weaponScene.scale.setScalar(baseScale);

      viewmodelRoot.add(weaponContainer);

      weaponScene.traverse((obj) => {
        obj.frustumCulled = false;
        const m = obj as THREE.Mesh;
        if (m.isMesh) {
          m.renderOrder = 101;
          const mats = Array.isArray(m.material) ? m.material : [m.material];
          for (const mat of mats) {
            if (mat && "side" in mat) {
              (mat as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
            }
          }
        }
      });
    }
  }

  setLoadingMessage("Loading characters and arena…", 40);
  const playerAnimationSystem = new PlayerAnimationSystem(clientConfig.animationClipNames);
  playerAnimationSystem.init(viewmodelAnimations);

  let localPlayerMixer: THREE.AnimationMixer | null = null;
  if (viewmodelAnimations.length > 0) {
    localPlayerMixer = new THREE.AnimationMixer(viewmodelModel);
    playerAnimationSystem.playStaticIdlePose(localPlayerMixer);
  }

  const movementState = createViewmodelMovementState();
  const recoilTrigger = { value: false };
  const panel = createTunerPanel(cameraSystem, { triggerRecoil: recoilTrigger });

  setLoadingMessage("Ready!", 100);
  await new Promise((r) => setTimeout(r, 300));
  hideLoadingScreen();

  const banner = document.createElement("div");
  banner.textContent = "Viewmodel Tuner – POV (Arme) und Weapon unabhängig einstellbar";
  banner.style.cssText = `
    position: fixed; top: 12px; left: 12px; z-index: 100;
    padding: 10px 18px; background: rgba(0,0,0,0.7); color: #4af; font-family: system-ui, sans-serif;
    font-size: 18px; border-radius: 6px; pointer-events: none;
  `;
  app.appendChild(banner);

  const crosshair = document.createElement("div");
  crosshair.id = "tuner-crosshair";
  crosshair.style.cssText = `
    position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%);
    width: 24px; height: 24px; pointer-events: none; z-index: 50;
  `;
  crosshair.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="12" y1="6" x2="12" y2="3" stroke="#8f8" stroke-width="1"/>
      <line x1="12" y1="21" x2="12" y2="18" stroke="#8f8" stroke-width="1"/>
      <line x1="6" y1="12" x2="3" y2="12" stroke="#8f8" stroke-width="1"/>
      <line x1="21" y1="12" x2="18" y2="12" stroke="#8f8" stroke-width="1"/>
      <circle cx="12" cy="12" r="1" fill="#8f8"/>
    </svg>
  `;
  app.appendChild(crosshair);

  cameraSystem.setTargetPosition(0, PLAYER_EYE_HEIGHT, 0);
  cameraSystem.setRotation(0, 0);
  cameraSystem.snapToTarget();

  let lastTime = performance.now();
  let mouseDown = false;
  let lastMouseX = 0;
  let lastMouseY = 0;
  let yaw = 0;
  let pitch = 0;

  canvas.addEventListener("mousedown", (e) => {
    if (e.button === 0) {
      mouseDown = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    }
  });
  canvas.addEventListener("mouseup", (e) => {
    if (e.button === 0) mouseDown = false;
  });
  canvas.addEventListener("mouseleave", () => {
    mouseDown = false;
  });
  canvas.addEventListener("mousemove", (e) => {
    if (mouseDown) {
      const dx = (e.clientX - lastMouseX) * 0.003;
      const dy = (e.clientY - lastMouseY) * 0.003;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      yaw -= dx;
      pitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, pitch - dy));
      cameraSystem.setRotation(yaw, pitch);
    }
  });

  window.addEventListener("resize", () => {
    const { w, h } = getCanvasSize(canvas);
    cameraSystem.resize(w, h);
    sceneManager.resize(w, h);
    const cam = cameraSystem.getCamera();
    cam.aspect = w / h;
    cam.updateProjectionMatrix();
  });

  function animate(): void {
    requestAnimationFrame(animate);
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    const clipId = panel.getSelectedClipId();
    if (localPlayerMixer) {
      playerAnimationSystem.playStaticIdlePose(localPlayerMixer);
    }
    cameraSystem.update(dt);

    const cfg = getCurrentPovCfg(clipId);
    viewmodelHolder.position.set(cfg.x, cfg.y, cfg.z);
    viewmodelHolder.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
    viewmodelHolder.scale.setScalar(cfg.scale);

    const shotThisFrame = recoilTrigger.value;
    if (shotThisFrame) recoilTrigger.value = false;
    const movementInput = getSimulatedMovementInput(clipId, dt, yaw, pitch, shotThisFrame);
    const { position: procPos, rotation: procRot } = updateViewmodelMovement(movementState, movementInput);
    viewmodelRoot.position.copy(procPos);
    viewmodelRoot.rotation.set(procRot.x, procRot.y, procRot.z, "YXZ");

    if (localPlayerMixer) localPlayerMixer.update(dt);
    viewmodelModel.updateMatrixWorld(true);

    if (weaponContainerRef) {
      const off = clientConfig.viewmodelWeaponOffset;
      const povOff = clientConfig.viewmodelWeaponPovOffset ?? { x: 0, y: 0, z: 0 };
      weaponContainerRef.position.set(
        0.25 + off.x + povOff.x,
        -0.4 + off.y + povOff.y,
        -0.7 + off.z + povOff.z
      );
      weaponContainerRef.rotation.set(0, 0, 0);
      const grip = clientConfig.viewmodelWeaponGripOffset ?? { x: 0, y: 0, z: 0 };
      const rotX = clientConfig.viewmodelWeaponRotationX ?? 0;
      const rotY = clientConfig.viewmodelWeaponRotationY ?? 0;
      const rotZ = clientConfig.viewmodelWeaponRotationZ ?? 0;
      const baseScale = clientConfig.viewmodelWeaponScale ?? 1;
      const ws = weaponContainerRef.children[0];
      if (ws) {
        const w = ws as THREE.Object3D;
        w.position.set(grip.x, grip.y, grip.z);
        w.rotation.set(Math.PI / 2 + rotX, rotY, rotZ);
        w.scale.setScalar(baseScale);
      }
    }

    sceneManager.render(cameraSystem.getCamera());
  }
  animate();
}

function getCanvasSize(canvas: HTMLCanvasElement): { w: number; h: number } {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  return { w, h };
}
