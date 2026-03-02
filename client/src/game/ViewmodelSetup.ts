/**
 * POV viewmodel setup: arms, weapon, two-point anchoring.
 */

import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { PLAYER_EYE_HEIGHT } from "shared";
import {
  BONE_RIGHT_HAND,
  BONE_RIGHT_HAND_ALT,
  BONE_RIGHT_HAND_ALT2,
  BONE_LEFT_HAND,
  BONE_LEFT_HAND_ALT,
  BONE_LEFT_HAND_ALT2,
} from "shared";
import { clientConfig } from "../config/index.js";
import {
  loadViewmodelWithAnimations,
  loadViewmodelWeapon,
  loadSkinTexture,
  applySkinToModel,
} from "../systems/assetLoader/AssetLoader.js";
import type { FPSCamera } from "../systems/camera/FPSCamera.js";

/** POV offsets (x, y, z, rotX, rotY, rotZ, scale). */
export const POV_DEFAULT = {
  x: 0.37,
  y: -5.34,
  z: 0.55,
  rotX: -0.03,
  rotY: 2.968,
  rotZ: -0.02,
  scale: 3.21,
};

export interface ViewmodelState {
  playerViewModel: THREE.Object3D;
  viewmodelHolder: THREE.Group;
  viewmodelIsArmsOnly: boolean;
  weaponContainerRef: THREE.Group | null;
  twoPointRefs: {
    rightHand: THREE.Bone;
    leftHand: THREE.Bone;
    gripleft: THREE.Object3D;
    gLeftLocal: THREE.Vector3;
  } | null;
  weaponPovDecoupled: boolean;
}

export interface InitViewmodelResult {
  viewmodelModel: THREE.Object3D;
  viewmodelAnimations: THREE.AnimationClip[];
  viewmodelState: ViewmodelState;
  weaponTemplate3P: THREE.Object3D | null;
}

export async function initViewmodel(
  playerTemplate: THREE.Object3D,
  playerAnimations: THREE.AnimationClip[],
  cameraSystem: FPSCamera
): Promise<InitViewmodelResult> {
  const camera = cameraSystem.getCamera();
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
  }

  const isArmsOnly = viewmodelSource !== playerTemplate;
  const viewmodelModel = cloneSkeleton(viewmodelSource);
  viewmodelModel.updateMatrixWorld(true);

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

  const viewmodelHolder = new THREE.Group();
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
  camera.add(viewmodelHolder);

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

  viewmodelModel.traverse((obj) => {
    obj.frustumCulled = false;
    const mesh = obj as THREE.Mesh;
    if (mesh.isMesh) mesh.renderOrder = 100;
  });

  let weaponContainerRef: THREE.Group | null = null;
  let twoPointRefs: ViewmodelState["twoPointRefs"] = null;
  let weaponPovDecoupled = false;
  let weaponTemplate3P: THREE.Object3D | null = null;

  if (isArmsOnly && clientConfig.viewmodelWeaponUrl) {
    const weaponScene = await loadViewmodelWeapon(clientConfig.viewmodelWeaponUrl);
    if (weaponScene) {
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

      if (isArmsOnly) {
        twoPointRefs = null;
        weaponPovDecoupled = true;
        cameraSystem.getCamera().add(weaponContainer);
        const grip = clientConfig.viewmodelWeaponGripOffset ?? { x: 0, y: 0, z: 0 };
        weaponScene.position.set(grip.x, grip.y, grip.z);
        weaponScene.scale.setScalar(baseScale);
        if (import.meta.env?.DEV) {
          console.info("[Viewmodel] POV weapon decoupled (camera child), scale:", baseScale);
        }
      } else if (useTwoPoint && rightHandBone && leftHandBone && gripleftNode) {
        const gLeftLocal = gripleftNode.position.clone();
        twoPointRefs = {
          rightHand: rightHandBone,
          leftHand: leftHandBone,
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
            if (mat && "side" in mat) {
              (mat as THREE.MeshStandardMaterial).side = THREE.DoubleSide;
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

  return {
    viewmodelModel,
    viewmodelAnimations,
    viewmodelState: {
      playerViewModel: viewmodelModel,
      viewmodelHolder,
      viewmodelIsArmsOnly: isArmsOnly,
      weaponContainerRef,
      twoPointRefs,
      weaponPovDecoupled,
    },
    weaponTemplate3P,
  };
}

const _vec3A = new THREE.Vector3();
const _vec3B = new THREE.Vector3();
const _vec3C = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _quatB = new THREE.Quaternion();

/** Update POV weapon/arms each render frame. Call after mixer.update. */
export function updateViewmodelFrame(state: ViewmodelState): void {
  const { viewmodelHolder, viewmodelIsArmsOnly, weaponContainerRef, twoPointRefs, weaponPovDecoupled, playerViewModel } = state;

  if (viewmodelHolder && viewmodelIsArmsOnly) {
    const cfg = POV_DEFAULT;
    viewmodelHolder.position.set(cfg.x, cfg.y, cfg.z);
    viewmodelHolder.rotation.set(cfg.rotX, cfg.rotY, cfg.rotZ);
    viewmodelHolder.scale.setScalar(cfg.scale);
  }

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
}
