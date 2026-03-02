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
  findRightHandBone,
  type HitboxPositions,
} from "./systems/animation/getHitboxPositions.js";
import type { ArenaState, PlayerStateSchema } from "shared";
import {
  loadPlayerModelWithAnimations,
  loadViewmodelWithAnimations,
  loadViewmodelWeapon,
  loadSkinTexture,
  applySkinToModel,
  setModelSkin,
  createPlaceholderMesh,
} from "./systems/assetLoader/AssetLoader.js";
import { PlayerAnimationSystem } from "./systems/animation/PlayerAnimationSystem.js";
import {
  PLAYER_EYE_HEIGHT,
  CROUCH_EYE_HEIGHT,
  MAX_SHIELD,
  MAX_HEALTH,
  BONE_RIGHT_HAND,
  BONE_RIGHT_HAND_ALT,
  BONE_RIGHT_HAND_ALT2,
  BONE_LEFT_HAND,
  BONE_LEFT_HAND_ALT,
  BONE_LEFT_HAND_ALT2,
} from "shared";
import type { AnimationClipId } from "shared";

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
createPlayerHealthBars(app);
createHitIndicator(app);
if (clientConfig.debugOverlay) createDebugOverlay(app);

const debugHitboxes = new DebugHitboxVisualization(sceneManager.getScene());
let debugMode = false;
/** Bone-anchored hitbox positions from previous render (for input and debug viz). */
let lastHitboxPositions: HitboxPositionsInput | null = null;
/** Raw bone positions (Vector3) for debug viz when available. */
let lastHitboxPositionsRaw: HitboxPositions | null = null;

const physics = { raycast: (): boolean => false };
const loop = new GameLoop();
const netClient = new ColyseusClient();
let inputTick = 0;

/** Smoothed eye height for crouch transition (120ms). */
let currentEyeHeight = PLAYER_EYE_HEIGHT;
const CROUCH_TRANSITION_TAU = 0.04; // ~120ms to 95%

// Player model (FPS): follows camera in world space
let playerViewModel: THREE.Object3D | null = null;
let viewmodelHolder: THREE.Group | null = null;
let viewmodelIsArmsOnly = false;
/** Weapon container (child of viewmodel root) – two-point anchored each frame. */
let weaponContainerRef: THREE.Group | null = null;
const _vec3A = new THREE.Vector3();
const _vec3B = new THREE.Vector3();
const _vec3C = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _quatB = new THREE.Quaternion();

/** Refs for two-point solve: RightHand, LeftHand, gripleft node. */
let twoPointRefs: {
  rightHand: THREE.Bone;
  leftHand: THREE.Bone;
  gripleft: THREE.Object3D;
  gLeftLocal: THREE.Vector3;
} | null = null;
/** True when POV weapon is decoupled from arms (attached to viewmodel root). */
let weaponPovDecoupled = false;

/** POV offsets (x, y, z, rotX, rotY, rotZ, scale). Same for all states; per-animation can be added later. */
const POV_DEFAULT = { x: 0.37, y: -5.34, z: 0.55, rotX: -0.03, rotY: 2.968, rotZ: -0.02, scale: 3.21 };

/** Mixer for local FPS view model (when player.glb has animations). */
let localPlayerMixer: THREE.AnimationMixer | null = null;
/** Template for cloning all players (local + remote). From player.glb. */
let playerTemplate: THREE.Object3D | null = null;
let playerAnimationSystem: PlayerAnimationSystem;
/** Invisible clone at movement.position for correct hitbox (camera model is offset). */
let hitboxDummy: THREE.Object3D | null = null;
let hitboxDummyMixer: THREE.AnimationMixer | null = null;
/** Remote players: sessionId -> { mesh, mixer } */
const remotePlayerMeshes = new Map<string, THREE.Object3D>();
const remotePlayerMixers = new Map<string, THREE.AnimationMixer>();
/** Weapon template for 3P (RightHand-anchored). Cloned per remote player. */
let weaponTemplate3P: THREE.Object3D | null = null;
/** Remote player weapon refs: sessionId -> { container, weaponScene, rightHandBone } for world-position follow. */
const remotePlayerWeaponContainers = new Map<
  string,
  {
    container: THREE.Group;
    weaponScene: THREE.Object3D;
    rightHandBone: THREE.Bone | null;
  }
>();

const _handPos3p = new THREE.Vector3();
const _handQuat3p = new THREE.Quaternion();
const _offsetVec3p = new THREE.Vector3();
/** Interpolation: 1 - exp(-dt/TAU). ~100ms to 95% of target. */
const REMOTE_INTERP_TAU = 0.05;
/** Distance threshold (m) before applying strong correction. Below this, gentle pull to prevent drift. */
const RECONCILE_THRESHOLD = 0.05;
/** Blend factor when reconciling (higher = faster correction). */
const RECONCILE_LERP = 0.5;
/** Minimal distance to trigger any correction (avoids jitter). */
const RECONCILE_MIN = 0.01;
/** True after we have applied initial spawn from server (fallback for late state sync). */
let hasAppliedInitialSpawn = false;
async function initAssets(): Promise<void> {
  setLoadingMessage("Loading characters and arena…", 15);

  const playerResult = await loadPlayerModelWithAnimations(clientConfig.playerModelUrl);
  playerTemplate = playerResult.scene;
  const playerAnimations = playerResult.animations;

  let viewmodelSource: THREE.Object3D = playerTemplate;
  let viewmodelAnimations = playerAnimations;

  if (clientConfig.viewmodelArmsUrl) {
    const povResult = await loadViewmodelWithAnimations(clientConfig.viewmodelArmsUrl);
    if (import.meta.env?.DEV) {
      console.info("[Viewmodel] POV load result:", {
        url: clientConfig.viewmodelArmsUrl,
        animCount: povResult.animations.length,
        hasScene: !!povResult.scene,
        usingPOV: povResult.animations.length > 0 && !!povResult.scene,
      });
    }
    if (povResult.animations.length > 0 && povResult.scene) {
      viewmodelSource = povResult.scene;
      viewmodelAnimations = povResult.animations;
    }
    // #region agent log
    fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'fc5eae'},body:JSON.stringify({sessionId:'fc5eae',location:'main.ts:POV-load',message:'POV load result',data:{povAnimCount:povResult.animations.length,hasPovScene:!!povResult.scene,usingPOV:povResult.animations.length>0&&!!povResult.scene,meshCount:povResult.scene?(()=>{let n=0;(povResult.scene as THREE.Object3D).traverse((o)=>{if((o as THREE.Mesh).isMesh)n++});return n})():0},hypothesisId:'H1',timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  }

  const isArmsOnly = viewmodelSource !== playerTemplate;
  viewmodelIsArmsOnly = isArmsOnly;
  const viewmodelModel = cloneSkeleton(viewmodelSource);
  viewmodelModel.updateMatrixWorld(true);
  playerViewModel = viewmodelModel;

  if (clientConfig.playerSkin) {
    const playerSkinTex = await loadSkinTexture(clientConfig.playerSkin);
    if (playerSkinTex) applySkinToModel(viewmodelModel, playerSkinTex);
  }
  if (isArmsOnly) {
    viewmodelModel.position.set(0, 0, 0);
    viewmodelModel.rotation.set(0, 0, 0);
    viewmodelModel.scale.setScalar(1);
  } else {
    viewmodelModel.position.set(0, -PLAYER_EYE_HEIGHT * 0.5, -0.4);
    viewmodelModel.rotation.set(0, 0, 0);
    viewmodelModel.scale.setScalar(1);
  }

  viewmodelHolder = new THREE.Group();
  viewmodelHolder.add(viewmodelModel);
  if (isArmsOnly) {
    const cfg = POV_DEFAULT;
    viewmodelHolder.position.set(cfg.x, cfg.y, cfg.z);
    viewmodelHolder.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
    viewmodelHolder.scale.setScalar(cfg.scale);
  } else {
    viewmodelHolder.position.set(0, 0, 0);
    viewmodelHolder.quaternion.identity();
    viewmodelHolder.scale.setScalar(1);
  }
  cameraSystem.getCamera().add(viewmodelHolder);
  // #region agent log
  (()=>{const meshCount=(()=>{let n=0;viewmodelModel.traverse((o)=>{if((o as THREE.Mesh).isMesh)n++});return n})();fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'fc5eae'},body:JSON.stringify({sessionId:'fc5eae',location:'main.ts:viewmodel-init',message:'Viewmodel setup',data:{isArmsOnly,meshCount,pos:viewmodelModel.position.toArray(),scale:viewmodelModel.scale.x,viewmodelVisible:viewmodelModel.visible,holderInScene:!!viewmodelHolder.parent},hypothesisId:'H2,H3',timestamp:Date.now()})}).catch(()=>{})})();
  // #endregion
  if (import.meta.env?.DEV) {
    const meshNames: string[] = [];
    viewmodelModel.traverse((o) => {
      if ((o as THREE.Mesh).isMesh) meshNames.push((o as THREE.Mesh).name || "(unnamed)");
    });
    console.info("[Viewmodel] Using", isArmsOnly ? "POV arms" : "player fallback", {
      source: isArmsOnly ? clientConfig.viewmodelArmsUrl : clientConfig.playerModelUrl,
      meshNames,
      pos: viewmodelModel.position.toArray(),
      scale: viewmodelModel.scale.x,
    });
  }
  let meshCountH5 = 0;
  viewmodelModel.traverse((obj) => {
    obj.frustumCulled = false;
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) {
      mesh.renderOrder = 100;
      meshCountH5++;
      // depthTest stays true: proper occlusion between overlapping meshes (fingers, palm).
      // Prevents z-fighting, dark splotches, visible triangles.
    }
  });
  // #region agent log
  (()=>{const infos:Record<string,unknown>[]=[];viewmodelModel.updateMatrixWorld(true);viewmodelModel.traverse((o)=>{const m=o as THREE.Mesh;if(m.isMesh){const w=new THREE.Vector3();m.getWorldPosition(w);const geo=m.geometry;const b=new THREE.Box3().setFromObject(m);infos.push({name:m.name,worldPos:w.toArray(),isSkinned:'isSkinnedMesh' in m&&!!(m as THREE.SkinnedMesh).isSkinnedMesh,boundsMin:b.min.toArray(),boundsMax:b.max.toArray(),vertCount:geo?.attributes?.position?.count??0})}});fetch('http://127.0.0.1:7291/ingest/e6ca52ac-ce07-4922-9b3f-cd33fd3e1212',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'fc5eae'},body:JSON.stringify({sessionId:'fc5eae',location:'main.ts:viewmodel-meshes',message:'Viewmodel mesh world pos',data:{meshCount:meshCountH5,meshes:infos},hypothesisId:'H7',timestamp:Date.now()})}).catch(()=>{})})();
  // #endregion

  if (isArmsOnly && clientConfig.viewmodelWeaponUrl) {
    const weaponScene = await loadViewmodelWeapon(clientConfig.viewmodelWeaponUrl);
    if (weaponScene) {
      /** Model barrel points along +X; rotate +90° around X so it points forward. */
      weaponScene.rotation.x = Math.PI / 2;
      weaponScene.rotation.z = -Math.PI / 2;

      let rightHandBone: THREE.Bone | null = null;
      let leftHandBone: THREE.Bone | null = null;
      viewmodelModel.traverse((obj) => {
        const mesh = obj as THREE.SkinnedMesh;
        if (mesh.isSkinnedMesh && mesh.skeleton && !rightHandBone) {
          rightHandBone =
            mesh.skeleton.getBoneByName(BONE_RIGHT_HAND) ??
            mesh.skeleton.getBoneByName(BONE_RIGHT_HAND_ALT) ??
            mesh.skeleton.getBoneByName(BONE_RIGHT_HAND_ALT2) ??
            null;
          leftHandBone =
            mesh.skeleton.getBoneByName(BONE_LEFT_HAND) ??
            mesh.skeleton.getBoneByName(BONE_LEFT_HAND_ALT) ??
            mesh.skeleton.getBoneByName(BONE_LEFT_HAND_ALT2) ??
            null;
        }
      });

      const gripleftNode = weaponScene.getObjectByName("gripleft");
      const weaponContainer = new THREE.Group();
      weaponContainer.add(weaponScene);
      weaponContainerRef = weaponContainer;

      const baseScale = clientConfig.viewmodelWeaponScale ?? 1;
      const useTwoPoint =
        clientConfig.viewmodelWeaponTwoPoint &&
        rightHandBone &&
        leftHandBone &&
        gripleftNode &&
        gripleftNode.position.lengthSq() > 1e-6;
      const usePovDecoupled = isArmsOnly;
      if (usePovDecoupled) {
        twoPointRefs = null;
        weaponPovDecoupled = true;
        cameraSystem.getCamera().add(weaponContainer);
        const grip = clientConfig.viewmodelWeaponGripOffset ?? { x: 0, y: 0, z: 0 };
        weaponScene.position.set(grip.x, grip.y, grip.z);
        weaponScene.scale.setScalar(baseScale);
        if (import.meta.env?.DEV) {
          console.info("[Viewmodel] POV weapon decoupled (1:1 like tuner, camera child), scale:", baseScale);
        }
      } else if (useTwoPoint) {
        const gLeftLocal = gripleftNode.position.clone();
        twoPointRefs = {
          rightHand: rightHandBone!,
          leftHand: leftHandBone!,
          gripleft: gripleftNode,
          gLeftLocal,
        };
        weaponPovDecoupled = false;
        viewmodelModel.add(weaponContainer);
        if (import.meta.env?.DEV) {
          console.info("[Viewmodel] Two-point anchoring: RightHand + LeftHand/gripleft");
        }
      } else {
        twoPointRefs = null;
        weaponPovDecoupled = false;
        if (rightHandBone) {
          (rightHandBone as THREE.Object3D).add(weaponContainer);
          const off = clientConfig.viewmodelWeaponOffset;
          weaponContainer.position.set(off.x, off.y, off.z);
          const grip = clientConfig.viewmodelWeaponGripOffset ?? { x: 0, y: 0, z: 0 };
          weaponScene.position.set(grip.x, grip.y, grip.z);
          weaponScene.scale.setScalar(baseScale);
          if (import.meta.env?.DEV) {
            console.info("[Viewmodel] Single-point (RightHand), scale:", baseScale);
          }
        } else {
          viewmodelModel.add(weaponContainer);
          weaponContainer.position.set(0.25, -0.15, 0.35);
          weaponScene.scale.setScalar(baseScale);
          if (import.meta.env?.DEV) {
            console.warn("[Viewmodel] No RightHand bone, weapon at root fallback");
          }
        }
      }
      weaponScene.traverse((obj) => {
        obj.frustumCulled = false;
        const m = obj as THREE.Mesh;
        if (m.isMesh) {
          m.renderOrder = 101;
          const mats = Array.isArray(m.material) ? m.material : [m.material];
          for (const mat of mats) {
            if (mat) {
              const mt = mat as THREE.Material;
              // depthTest=true: proper occlusion, no z-fighting (same as arms)
              if ("side" in mt) (mt as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
            }
          }
        }
      });
      weaponTemplate3P = weaponScene.clone(true);
    } else if (import.meta.env?.DEV) {
      console.warn("[Viewmodel] Weapon failed to load:", clientConfig.viewmodelWeaponUrl);
    }
  }

  if (clientConfig.viewmodelWeaponUrl && !weaponTemplate3P) {
    const weaponScene = await loadViewmodelWeapon(clientConfig.viewmodelWeaponUrl);
    if (weaponScene) {
      weaponScene.rotation.x = Math.PI / 2;
      weaponScene.rotation.z = -Math.PI / 2;
      weaponTemplate3P = weaponScene;
    }
  }

  setLoadingMessage("Loading characters and arena…", 40);
  playerAnimationSystem = new PlayerAnimationSystem(clientConfig.animationClipNames);
  playerAnimationSystem.init(viewmodelAnimations);

  if (viewmodelAnimations.length > 0) {
    localPlayerMixer = new THREE.AnimationMixer(viewmodelModel);
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

function getThirdPersonWeaponCfg(clipId: string) {
  const overrides = clientConfig.thirdPersonWeaponOffsets[clipId as AnimationClipId];
  if (overrides) {
    return overrides;
  }
  return {
    x: clientConfig.thirdPersonWeaponOffset.x,
    y: clientConfig.thirdPersonWeaponOffset.y,
    z: clientConfig.thirdPersonWeaponOffset.z,
    rotX: clientConfig.thirdPersonWeaponRotationX,
    rotY: clientConfig.thirdPersonWeaponRotationY,
    rotZ: clientConfig.thirdPersonWeaponRotationZ,
    scale: clientConfig.thirdPersonWeaponScale,
  };
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
  if (playerTemplate) {
    clone = cloneSkeleton(playerTemplate);
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

  if (weaponTemplate3P) {
    const rightHandBone = findRightHandBone(clone);
    const weaponClone = weaponTemplate3P.clone(true);
    const weaponContainer = new THREE.Group();
    weaponContainer.add(weaponClone);
    scene.add(weaponContainer);
    weaponClone.traverse((obj) => {
      obj.frustumCulled = false;
      const m = obj as THREE.Mesh;
      if (m.isMesh) {
        const mats = Array.isArray(m.material) ? m.material : [m.material];
        for (const mat of mats) {
          if (mat && "side" in mat) {
            (mat as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
          }
        }
      }
    });
    remotePlayerWeaponContainers.set(key, {
      container: weaponContainer,
      weaponScene: weaponClone,
      rightHandBone,
    });
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
  const weaponRef = remotePlayerWeaponContainers.get(key);
  if (weaponRef) {
    scene.remove(weaponRef.container);
    remotePlayerWeaponContainers.delete(key);
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
  if (dist <= RECONCILE_MIN) return;
  const t = dist >= RECONCILE_THRESHOLD ? RECONCILE_LERP : 0.15;
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
      mesh.visible = player.health > 0;
      const weaponRef = remotePlayerWeaponContainers.get(key);
      if (weaponRef) weaponRef.container.visible = mesh.visible;
      if (mesh.visible) {
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
        if (weaponRef) {
          mesh.updateMatrixWorld(true);
          const hand = weaponRef.rightHandBone;
          const cfg = getThirdPersonWeaponCfg(player.animationState || "idle");
          const grip = clientConfig.thirdPersonWeaponGripOffset;
          if (hand) {
            hand.getWorldPosition(_handPos3p);
            hand.getWorldQuaternion(_handQuat3p);
            _offsetVec3p.set(cfg.x, cfg.y, cfg.z).applyQuaternion(_handQuat3p);
            weaponRef.container.position.copy(_handPos3p).add(_offsetVec3p);
            weaponRef.container.quaternion.copy(_handQuat3p);
          }
          weaponRef.weaponScene.position.set(grip.x, grip.y, grip.z);
          weaponRef.weaponScene.rotation.set(Math.PI / 2 + cfg.rotX, cfg.rotY, cfg.rotZ);
          weaponRef.weaponScene.scale.setScalar(cfg.scale);
        }
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
    if (state.debugModeJustPressed) debugMode = !debugMode;
    movement.update(dt, state, physics);
    const snap = movement.getSnapshot();
    const targetEyeHeight = snap.crouching ? CROUCH_EYE_HEIGHT : PLAYER_EYE_HEIGHT;
    currentEyeHeight = THREE.MathUtils.lerp(
      currentEyeHeight,
      targetEyeHeight,
      1 - Math.exp(-dt / CROUCH_TRANSITION_TAU)
    );
    cameraSystem.setTargetPosition(snap.position.x, snap.position.y + currentEyeHeight, snap.position.z);
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
      if (playerInput.shoot) {
        input.consumeOneShoot();
      }
      inputTick++;
      reconcileLocalWithServer(room);
    }
    input.tick();
  })
  .setRenderCallback((dt) => {
    const snap = movement.getSnapshot();
    if (localPlayerMixer) {
      playerAnimationSystem.playStaticIdlePose(localPlayerMixer);
    }
    cameraSystem.update(dt);
    if (viewmodelHolder && viewmodelIsArmsOnly) {
      const cfg = POV_DEFAULT;
      viewmodelHolder.position.set(cfg.x, cfg.y, cfg.z);
      viewmodelHolder.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
      viewmodelHolder.scale.setScalar(cfg.scale);
    }
    if (localPlayerMixer) localPlayerMixer.update(dt);
    if (playerViewModel) playerViewModel.updateMatrixWorld(true);
    if (viewmodelIsArmsOnly && weaponContainerRef && weaponPovDecoupled) {
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
    } else if (!twoPointRefs && weaponContainerRef) {
      const off = clientConfig.viewmodelWeaponOffset;
      weaponContainerRef.position.set(off.x, off.y, off.z);
      const grip = clientConfig.viewmodelWeaponGripOffset ?? { x: 0, y: 0, z: 0 };
      const rotX = clientConfig.viewmodelWeaponRotationX ?? 0;
      const rotY = clientConfig.viewmodelWeaponRotationY ?? 0;
      const rotZ = clientConfig.viewmodelWeaponRotationZ ?? 0;
      const ws = weaponContainerRef.children[0];
      if (ws) {
        const w = ws as THREE.Object3D;
        w.position.set(grip.x, grip.y, grip.z);
        w.rotation.set(Math.PI / 2 + rotX, rotY, rotZ);
      }
    }
    if (twoPointRefs && weaponContainerRef && playerViewModel) {
      const { rightHand, leftHand, gLeftLocal } = twoPointRefs;
      rightHand.getWorldPosition(_vec3A);
      leftHand.getWorldPosition(_vec3B);
      _vec3B.sub(_vec3A);
      const lenD = _vec3B.length();
      const lenG = gLeftLocal.length();
      if (lenD > 1e-6 && lenG > 1e-6) {
        const cfg = POV_DEFAULT;
        // Geometric scale: grip span = hand distance. Account for viewmodel scale (weapon is child of viewmodel).
        const vmScale = cfg.scale;
        const geometricScale = lenD / (vmScale * lenG);
        const scale = Math.max(0.5, Math.min(geometricScale, 50));
        _vec3B.normalize();
        _vec3C.copy(gLeftLocal).normalize();
        _quat.setFromUnitVectors(_vec3C, _vec3B);
        weaponContainerRef.position.copy(_vec3A);
        playerViewModel.worldToLocal(weaponContainerRef.position);
        playerViewModel.getWorldQuaternion(_quatB);
        weaponContainerRef.quaternion.copy(_quatB).invert().multiply(_quat);
        const weaponScene = weaponContainerRef.children[0];
        if (weaponScene) (weaponScene as THREE.Object3D).scale.setScalar(scale);
      }
    }
    remotePlayerMixers.forEach((m) => m.update(dt));
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
    updateRemotePlayers(netClient.getRoom(), dt);
    debugHitboxes.setVisible(debugMode, viewmodelIsArmsOnly);
    const roomForDebug = netClient.getRoom();
    const localPos = debugMode ? movement.position : null;
    const remotePositions = roomForDebug
      ? Array.from(roomForDebug.state.players.entries())
          .filter(([k]) => k !== roomForDebug.sessionId)
          .filter(([, p]) => p.health > 0)
          .map(([id, p]) => {
            const mesh = remotePlayerMeshes.get(id);
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
    updatePlayerHealthBars(
      netClient.getRoom(),
      cameraSystem.getCamera(),
      dt
    );
    const room = netClient.getRoom();
    const localPlayer = room ? room.state.players.get(room.sessionId) : null;
    const shield = (localPlayer as { shield?: number })?.shield ?? MAX_SHIELD;
    const hp = localPlayer?.health ?? MAX_HEALTH;
    const ammo = localPlayer?.ammo ?? WEAPON_STUB.ammo;
    const maxAmmo = localPlayer?.maxAmmo ?? WEAPON_STUB.maxAmmo;
    updateHUD(shield, hp, ammo, maxAmmo, debugMode);
    updateHitIndicators(snap.yaw, snap.pitch, dt, debugMode);
    if (clientConfig.debugOverlay) {
      const room = netClient.getRoom();
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
      setupRemotePlayers(room);
      room.onMessage("hit", (payload: { targetId: string }) => {
        onPlayerHit(payload.targetId);
      });
      room.onMessage(
        "hitReceived",
        (payload: { dirX: number; dirY: number; dirZ: number }) => {
          onHitReceived(payload.dirX, payload.dirY, payload.dirZ);
        }
      );
      await waitForLocalSpawnAndSync(room);
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
  // Dev: setPlayerSkin('orange') in console to change player skin at runtime
  if (clientConfig.debugOverlay && typeof window !== "undefined") {
    (window as { setPlayerSkin?: (id: string) => void }).setPlayerSkin = (id: string) => {
      if (playerViewModel) setModelSkin(playerViewModel, id);
    };
  }
});
} // end else (game mode)
