/**
 * Reads bone world positions for hitbox anchoring.
 * Used for local player (send to server) and debug visualization.
 * Must be called after mixer.update(dt) so bones reflect the current animation pose.
 */

import * as THREE from "three";
import {
  BONE_HEAD,
  BONE_HEAD_ALT,
  BONE_HEAD_ALT2,
  BONE_HEAD_TOP,
  BONE_HEAD_TOP_ALT,
  BONE_HEAD_TOP_ALT2,
  BONE_SPINE,
  HEAD_HITBOX_OFFSET_FORWARD,
  BONE_SPINE_FALLBACK,
  BONE_SPINE_ALT2,
  BONE_SPINE_ALT,
  BONE_SPINE_ALT3,
  BONE_SPINE_ALT4,
  BONE_SPINE_ALT5,
  BONE_SPINE_ALT6,
  BONE_SPINE_ALT7,
  BONE_HIPS,
  BONE_HIPS_ALT,
  BONE_HIPS_ALT2,
  BONE_LEFT_FOOT,
  BONE_LEFT_FOOT_ALT,
  BONE_LEFT_FOOT_ALT2,
  BONE_RIGHT_FOOT,
  BONE_RIGHT_FOOT_ALT,
  BONE_RIGHT_FOOT_ALT2,
} from "shared";

export interface HitboxPositions {
  head: THREE.Vector3;
  bodyCenter: THREE.Vector3;
  spineTop: THREE.Vector3;
  pelvis: THREE.Vector3;
  feet: THREE.Vector3;
}

function findBone(skeleton: THREE.Skeleton, names: string[]): THREE.Bone | undefined {
  for (const name of names) {
    const bone = skeleton.getBoneByName(name);
    if (bone) return bone;
  }
  return undefined;
}

function findSkeleton(root: THREE.Object3D): THREE.Skeleton | null {
  let skel: THREE.Skeleton | null = null;
  root.traverse((obj) => {
    const mesh = obj as THREE.SkinnedMesh;
    if (mesh.isSkinnedMesh && mesh.skeleton && !skel) {
      skel = mesh.skeleton;
    }
  });
  return skel;
}

/**
 * Ensure full hierarchy from root down to bones has current world matrices.
 * Model is typically a child of the camera; update from top (camera/scene) down.
 */
function ensureBoneMatricesCurrent(model: THREE.Object3D): void {
  let root: THREE.Object3D = model;
  while (root.parent) root = root.parent;
  root.updateMatrixWorld(true);
}

/**
 * Get world-space positions for head, spine, and hips from an animated character model.
 * Call after mixer.update(dt) so bones are in current pose (strafe, crouch, jump, etc.).
 * Returns null if model has no skeleton or required bones.
 */
export function getHitboxPositionsFromModel(model: THREE.Object3D): HitboxPositions | null {
  if (!model) return null;
  const skeleton = findSkeleton(model);
  if (!skeleton) return null;

  const headBone = findBone(skeleton, [BONE_HEAD, BONE_HEAD_ALT, BONE_HEAD_ALT2]);
  const headTopBone = findBone(skeleton, [BONE_HEAD_TOP, BONE_HEAD_TOP_ALT, BONE_HEAD_TOP_ALT2]);
  const spineBone = findBone(skeleton, [BONE_SPINE_ALT2, BONE_SPINE_ALT4, BONE_SPINE_ALT7]); // Spine (lower)
  const spine1Bone = findBone(skeleton, [BONE_SPINE_FALLBACK, BONE_SPINE_ALT3, BONE_SPINE_ALT6]); // Spine1 (mid)
  const spine2Bone = findBone(skeleton, [BONE_SPINE, BONE_SPINE_ALT, BONE_SPINE_ALT5]); // Spine2 (chest, fallback)
  const hipsBone = findBone(skeleton, [BONE_HIPS, BONE_HIPS_ALT, BONE_HIPS_ALT2]);

  if (!headBone || !hipsBone) return null;
  const anySpine = spineBone ?? spine1Bone ?? spine2Bone;
  if (!anySpine) return null;

  // Update full hierarchy (camera -> model -> bones) so bone matrixWorld reflects current animation
  ensureBoneMatricesCurrent(model);

  const head = new THREE.Vector3();
  head.setFromMatrixPosition(headBone.matrixWorld);
  if (headTopBone) {
    const headTop = new THREE.Vector3().setFromMatrixPosition(headTopBone.matrixWorld);
    head.add(headTop).multiplyScalar(0.5);
  }
  const forward = new THREE.Vector3();
  headBone.getWorldDirection(forward);
  head.addScaledVector(forward, HEAD_HITBOX_OFFSET_FORWARD);
  const pelvis = new THREE.Vector3();
  pelvis.setFromMatrixPosition(hipsBone.matrixWorld);

  const bodyCenter = new THREE.Vector3();
  if (spineBone && spine1Bone) {
    const posSpine = new THREE.Vector3().setFromMatrixPosition(spineBone.matrixWorld);
    const posSpine1 = new THREE.Vector3().setFromMatrixPosition(spine1Bone.matrixWorld);
    bodyCenter.addVectors(posSpine, posSpine1).multiplyScalar(0.5);
  } else {
    bodyCenter.setFromMatrixPosition(anySpine.matrixWorld);
  }

  const spineTop = new THREE.Vector3();
  const spineTopBone = spine2Bone ?? spine1Bone ?? spineBone;
  spineTop.setFromMatrixPosition(spineTopBone!.matrixWorld);

  const leftFoot = findBone(skeleton, [BONE_LEFT_FOOT, BONE_LEFT_FOOT_ALT, BONE_LEFT_FOOT_ALT2]);
  const rightFoot = findBone(skeleton, [BONE_RIGHT_FOOT, BONE_RIGHT_FOOT_ALT, BONE_RIGHT_FOOT_ALT2]);
  const feet = new THREE.Vector3();
  if (leftFoot && rightFoot) {
    const leftPos = new THREE.Vector3().setFromMatrixPosition(leftFoot.matrixWorld);
    const rightPos = new THREE.Vector3().setFromMatrixPosition(rightFoot.matrixWorld);
    feet.addVectors(leftPos, rightPos).multiplyScalar(0.5);
  } else if (leftFoot) {
    feet.setFromMatrixPosition(leftFoot.matrixWorld);
  } else if (rightFoot) {
    feet.setFromMatrixPosition(rightFoot.matrixWorld);
  } else {
    feet.copy(pelvis).lerp(new THREE.Vector3(pelvis.x, pelvis.y - 0.9, pelvis.z), 1);
  }

  return { head, bodyCenter, spineTop, pelvis, feet };
}
