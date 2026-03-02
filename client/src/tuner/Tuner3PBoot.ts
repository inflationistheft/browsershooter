/**
 * Third-person weapon tuner boot: full character, weapon on RightHand, orbit camera.
 * Animation plays for real. Accessed via ?tuner=3p.
 */

import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { SceneManager } from "../systems/rendering/SceneManager.js";
import { clientConfig } from "../config/index.js";
import {
  createLoadingScreen,
  setLoadingMessage,
  hideLoadingScreen,
} from "../systems/ui/LoadingScreen.js";
import {
  loadPlayerModelWithAnimations,
  loadViewmodelWeapon,
  loadSkinTexture,
  applySkinToModel,
} from "../systems/assetLoader/AssetLoader.js";
import { PlayerAnimationSystem } from "../systems/animation/PlayerAnimationSystem.js";
import type { AnimationClipId } from "shared";
import { findRightHandBone } from "../systems/animation/getHitboxPositions.js";
import {
  tuner3pWeaponDefault,
  tuner3pWeaponGripOffset,
  tuner3pWeaponOffsets,
} from "./Tuner3PState.js";
import { createTuner3PPanel } from "./Tuner3PPanel.js";

function getCurrentWeaponCfg(clipId: AnimationClipId) {
  return tuner3pWeaponOffsets[clipId] ?? tuner3pWeaponDefault;
}

function getCanvasSize(canvas: HTMLCanvasElement): { w: number; h: number } {
  const w = canvas.clientWidth || window.innerWidth;
  const h = canvas.clientHeight || window.innerHeight;
  return { w, h };
}

export async function bootTuner3P(
  app: HTMLElement,
  canvas: HTMLCanvasElement
): Promise<void> {
  createLoadingScreen(app);
  setLoadingMessage("Loading 3P weapon tuner…", 10);

  const { w: initW, h: initH } = getCanvasSize(canvas);
  const sceneManager = new SceneManager(canvas);
  const camera = new THREE.PerspectiveCamera(
    60,
    initW / initH || 16 / 9,
    0.1,
    1000
  );
  sceneManager.getScene().add(camera);
  sceneManager.resize(initW, initH);

  setLoadingMessage("Loading character…", 20);
  const playerResult = await loadPlayerModelWithAnimations(
    clientConfig.playerModelUrl
  );
  const playerTemplate = playerResult.scene;
  const playerAnimations = playerResult.animations;

  const characterModel = cloneSkeleton(playerTemplate);
  characterModel.position.set(0, 0, 0);
  characterModel.rotation.set(0, 0, 0);
  characterModel.scale.setScalar(1);
  sceneManager.getScene().add(characterModel);

  if (clientConfig.playerSkin) {
    const skinTex = await loadSkinTexture(clientConfig.playerSkin);
    if (skinTex) applySkinToModel(characterModel, skinTex);
  }

  characterModel.traverse((obj) => {
    obj.frustumCulled = false;
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) mesh.renderOrder = 0;
  });

  let weaponContainerRef: THREE.Group | null = null;
  if (clientConfig.viewmodelWeaponUrl) {
    const weaponScene = await loadViewmodelWeapon(clientConfig.viewmodelWeaponUrl);
    if (weaponScene) {
      weaponScene.rotation.x = Math.PI / 2;
      weaponScene.rotation.z = -Math.PI / 2;

      const weaponContainer = new THREE.Group();
      weaponContainer.add(weaponScene);
      weaponContainerRef = weaponContainer;
      sceneManager.getScene().add(weaponContainer);

      weaponScene.traverse((obj) => {
        obj.frustumCulled = false;
        const m = obj as THREE.Mesh;
        if (m.isMesh) {
          m.renderOrder = 1;
          const mats = Array.isArray(m.material) ? m.material : [m.material];
          for (const mat of mats) {
            if (mat && "side" in mat) {
              (mat as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
            }
          }
        }
      });
      if (import.meta.env?.DEV) {
        console.info("[3P Tuner] Weapon loaded, following RightHand world position");
      }
    } else if (import.meta.env?.DEV) {
      console.warn("[3P Tuner] Weapon failed to load:", clientConfig.viewmodelWeaponUrl);
    }
  }

  const _handPos = new THREE.Vector3();
  const _handQuat = new THREE.Quaternion();
  const _offsetVec = new THREE.Vector3();

  setLoadingMessage("Loading animations…", 60);
  const playerAnimationSystem = new PlayerAnimationSystem(
    clientConfig.animationClipNames
  );
  playerAnimationSystem.init(playerAnimations);

  const mixer = new THREE.AnimationMixer(characterModel);
  playerAnimationSystem.playClip(mixer, "idle");

  const panel = createTuner3PPanel((clipId) => {
    playerAnimationSystem.playClip(mixer, clipId);
  });

  setLoadingMessage("Ready!", 100);
  await new Promise((r) => setTimeout(r, 300));
  hideLoadingScreen();

  const banner = document.createElement("div");
  banner.textContent = "3P Weapon Tuner – Character + Weapon, Animation läuft";
  banner.style.cssText = `
    position: fixed; top: 12px; left: 12px; z-index: 100;
    padding: 10px 18px; background: rgba(0,0,0,0.7); color: #4af; font-family: system-ui, sans-serif;
    font-size: 18px; border-radius: 6px; pointer-events: none;
  `;
  app.appendChild(banner);

  const target = new THREE.Vector3(0, 1, 0);
  let orbitYaw = 0;
  let orbitPitch = 0.3;
  let orbitDistance = 5;

  function updateOrbitCamera(): void {
    const x = target.x + orbitDistance * Math.cos(orbitPitch) * Math.sin(orbitYaw);
    const y = target.y + orbitDistance * Math.sin(orbitPitch);
    const z = target.z + orbitDistance * Math.cos(orbitPitch) * Math.cos(orbitYaw);
    camera.position.set(x, y, z);
    camera.lookAt(target);
    camera.updateMatrixWorld();
  }
  updateOrbitCamera();

  let lastTime = performance.now();
  let mouseDown = false;
  let lastMouseX = 0;
  let lastMouseY = 0;

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
      orbitYaw -= dx;
      orbitPitch = Math.max(
        -Math.PI / 2 + 0.1,
        Math.min(Math.PI / 2 - 0.1, orbitPitch - dy)
      );
      updateOrbitCamera();
    }
  });
  canvas.addEventListener("wheel", (e) => {
    e.preventDefault();
    orbitDistance = Math.max(2, Math.min(15, orbitDistance + e.deltaY * 0.002));
    updateOrbitCamera();
  }, { passive: false });

  window.addEventListener("resize", () => {
    const { w, h } = getCanvasSize(canvas);
    sceneManager.resize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  });

  function animate(): void {
    requestAnimationFrame(animate);
    const now = performance.now();
    const dt = (now - lastTime) / 1000;
    lastTime = now;

    mixer.update(dt);
    characterModel.updateMatrixWorld(true);

    const clipId = panel.getSelectedClipId();
    const cfg = getCurrentWeaponCfg(clipId);

    if (weaponContainerRef) {
      const rightHand = findRightHandBone(characterModel);
      if (rightHand) {
        rightHand.getWorldPosition(_handPos);
        rightHand.getWorldQuaternion(_handQuat);
        _offsetVec.set(cfg.x, cfg.y, cfg.z).applyQuaternion(_handQuat);
        weaponContainerRef.position.copy(_handPos).add(_offsetVec);
        weaponContainerRef.quaternion.copy(_handQuat);
      } else {
        weaponContainerRef.position.set(0, 1.2, 1);
      }
      const ws = weaponContainerRef.children[0];
      if (ws) {
        const w = ws as THREE.Object3D;
        w.position.set(
          tuner3pWeaponGripOffset.x,
          tuner3pWeaponGripOffset.y,
          tuner3pWeaponGripOffset.z
        );
        w.rotation.set(Math.PI / 2 + cfg.rotX, cfg.rotY, cfg.rotZ);
        w.scale.setScalar(cfg.scale);
      }
    }

    sceneManager.render(camera);
  }
  animate();
}
