/**
 * Debug visualization: hitboxes, collision shapes, etc. Toggle with B.
 * Matches server hitscan: Head sphere + Body capsule (HEAD_*, BODY_CAPSULE_*).
 * When bone positions are provided, head and body are placed at bone world positions.
 */

import * as THREE from "three";
import {
  HEAD_HITBOX_HEIGHT,
  HEAD_HITBOX_RADIUS,
  BODY_CAPSULE_BOTTOM,
  BODY_CAPSULE_TOP,
  BODY_CAPSULE_RADIUS,
  BODY_CAPSULE_TOP_EXTEND,
  LEGS_CAPSULE_RADIUS,
  HITSCAN_RANGE,
  DEBUG_HEAD_ONLY,
} from "shared";

const HITBOX_OPACITY = 0.3;
/** Ray starts 1m in front of camera so it's visible from the side, not end-on. */
const AIM_RAY_OFFSET = 1;
const AIM_RAY_LENGTH = 50;
const AIM_RAY_COLOR = 0xffff00;
/** Cylinder radius for visibility (thin line is hard to see). */
const AIM_RAY_RADIUS = 0.015;
const LOCAL_COLOR = 0x00ff88; // Cyan-green for local player
const REMOTE_COLOR = 0xff8800; // Orange for remote players
/** Sphere/capsule segments for 3D readability. */
const SEGMENTS = 16;
const DEFAULT_LEGS_LENGTH = 1.0;

/** Returns a group with head (0), body (1), legs (2) as direct children. */
function createHitboxShape(color: number): THREE.Group {
  const group = new THREE.Group();

  const headGeo = new THREE.SphereGeometry(HEAD_HITBOX_RADIUS, SEGMENTS, SEGMENTS);
  const headFill = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: HITBOX_OPACITY,
    depthWrite: false,
  });
  const headWire = new THREE.WireframeGeometry(headGeo.clone());
  const headWireMat = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  });
  const bodyLength = BODY_CAPSULE_TOP - BODY_CAPSULE_BOTTOM;
  const bodyCenterY = (BODY_CAPSULE_BOTTOM + BODY_CAPSULE_TOP) / 2;

  const headGroup = new THREE.Group();
  headGroup.position.set(0, HEAD_HITBOX_HEIGHT, 0);
  headGroup.add(new THREE.Mesh(headGeo, headFill));
  headGroup.add(new THREE.LineSegments(headWire, headWireMat));
  group.add(headGroup);
  const bodyGeo = new THREE.CapsuleGeometry(
    BODY_CAPSULE_RADIUS,
    bodyLength,
    4,
    SEGMENTS
  );
  const bodyFill = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: HITBOX_OPACITY,
    depthWrite: false,
  });
  const bodyGroup = new THREE.Group();
  const bodyMesh = new THREE.Mesh(bodyGeo, bodyFill);
  bodyGroup.add(bodyMesh);

  const bodyWire = new THREE.WireframeGeometry(bodyGeo.clone());
  const bodyWireMat = new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  });
  bodyGroup.add(new THREE.LineSegments(bodyWire, bodyWireMat));
  bodyGroup.position.set(0, bodyCenterY, 0);
  group.add(bodyGroup);

  const legsGeo = new THREE.CapsuleGeometry(
    LEGS_CAPSULE_RADIUS,
    DEFAULT_LEGS_LENGTH,
    4,
    SEGMENTS
  );
  const legsFill = new THREE.MeshBasicMaterial({
    color,
    transparent: true,
    opacity: HITBOX_OPACITY,
    depthWrite: false,
  });
  const legsGroup = new THREE.Group();
  legsGroup.add(new THREE.Mesh(legsGeo, legsFill));
  const legsWire = new THREE.WireframeGeometry(legsGeo.clone());
  legsGroup.add(new THREE.LineSegments(legsWire, new THREE.LineBasicMaterial({
    color,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
  })));
  legsGroup.position.set(0, (BODY_CAPSULE_BOTTOM + 0) / 2, 0);
  group.add(legsGroup);

  return group;
}

const DEFAULT_BODY_LENGTH = BODY_CAPSULE_TOP - BODY_CAPSULE_BOTTOM;

export interface HitboxBonePositions {
  head: THREE.Vector3;
  bodyCenter: THREE.Vector3;
  spineTop: THREE.Vector3;
  pelvis: THREE.Vector3;
  feet: THREE.Vector3;
}

function setHitboxPositions(
  group: THREE.Group,
  rootPos: { x: number; y: number; z: number },
  bonePositions?: HitboxBonePositions
): void {
  const headChild = group.children[0] as THREE.Group;
  const bodyChild = group.children[1] as THREE.Group;
  const legsChild = group.children[2] as THREE.Group;

  if (bonePositions) {
    const { head, bodyCenter, spineTop, pelvis, feet } = bonePositions;
    group.position.set(0, 0, 0);
    headChild.position.set(head.x, head.y, head.z);
    const bodyTopY = spineTop.y + BODY_CAPSULE_TOP_EXTEND;
    const bodyLength = bodyTopY - pelvis.y;
    const bcx = (bodyCenter.x + pelvis.x) / 2;
    const bcy = (pelvis.y + bodyTopY) / 2;
    const bcz = (bodyCenter.z + pelvis.z) / 2;
    bodyChild.position.set(bcx, bcy, bcz);
    bodyChild.scale.set(1, Math.max(0.1, bodyLength) / DEFAULT_BODY_LENGTH, 1);
    const legsLength = pelvis.y - feet.y;
    const lcx = (pelvis.x + feet.x) / 2;
    const lcy = (feet.y + pelvis.y) / 2;
    const lcz = (pelvis.z + feet.z) / 2;
    legsChild.position.set(lcx, lcy, lcz);
    legsChild.scale.set(1, Math.max(0.1, legsLength) / DEFAULT_LEGS_LENGTH, 1);
    bodyChild.visible = !DEBUG_HEAD_ONLY;
    legsChild.visible = !DEBUG_HEAD_ONLY;
  } else {
    group.position.set(rootPos.x, rootPos.y, rootPos.z);
    headChild.position.set(0, HEAD_HITBOX_HEIGHT, 0);
    const bodyCenterY = (BODY_CAPSULE_BOTTOM + BODY_CAPSULE_TOP) / 2;
    bodyChild.position.set(0, bodyCenterY, 0);
    bodyChild.scale.set(1, 1, 1);
    legsChild.position.set(0, BODY_CAPSULE_BOTTOM / 2, 0);
    legsChild.scale.set(1, BODY_CAPSULE_BOTTOM / DEFAULT_LEGS_LENGTH, 1);
    bodyChild.visible = !DEBUG_HEAD_ONLY;
    legsChild.visible = !DEBUG_HEAD_ONLY;
  }
}

export class DebugHitboxVisualization {
  private readonly scene: THREE.Scene;
  private readonly localGroup: THREE.Group;
  private readonly remoteGroups: THREE.Group[] = [];
  private readonly aimRayGroup: THREE.Group;
  private visible = false;
  private maxRemote = 16;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.localGroup = createHitboxShape(LOCAL_COLOR);
    this.localGroup.visible = false;
    this.scene.add(this.localGroup);

    this.aimRayGroup = new THREE.Group();
    const rayGeo = new THREE.CylinderGeometry(
      AIM_RAY_RADIUS,
      AIM_RAY_RADIUS,
      1,
      8
    );
    const rayMat = new THREE.MeshBasicMaterial({
      color: AIM_RAY_COLOR,
      transparent: true,
      opacity: 0.9,
      depthTest: true,
    });
    this.aimRayGroup.add(new THREE.Mesh(rayGeo, rayMat));
    this.aimRayGroup.visible = false;
    this.scene.add(this.aimRayGroup);

    for (let i = 0; i < this.maxRemote; i++) {
      const group = createHitboxShape(REMOTE_COLOR);
      group.visible = false;
      this.scene.add(group);
      this.remoteGroups.push(group);
    }
  }

  setVisible(visible: boolean): void {
    this.visible = visible;
    this.localGroup.visible = visible;
    this.aimRayGroup.visible = visible;
    this.remoteGroups.forEach((g) => (g.visible = false));
  }

  update(
    localPosition: { x: number; y: number; z: number } | null,
    remotePositions: Array<{
      id: string;
      x: number;
      y: number;
      z: number;
      hitboxPositions?: HitboxBonePositions;
    }>,
    localHitboxPositions?: HitboxBonePositions,
    aimRay?: { camera: THREE.PerspectiveCamera }
  ): void {
    if (!this.visible) return;

    if (localPosition) {
      setHitboxPositions(
        this.localGroup,
        localPosition,
        localHitboxPositions
      );
    }

    if (aimRay?.camera) {
      const camPos = new THREE.Vector3();
      aimRay.camera.getWorldPosition(camPos);
      const dir = new THREE.Vector3();
      aimRay.camera.getWorldDirection(dir);
      const len = Math.min(AIM_RAY_LENGTH, HITSCAN_RANGE);
      const start = camPos.clone().add(dir.clone().multiplyScalar(AIM_RAY_OFFSET));
      const end = start.clone().add(dir.clone().multiplyScalar(len));
      const mid = start.clone().add(end).multiplyScalar(0.5);
      this.aimRayGroup.position.set(mid.x, mid.y, mid.z);
      this.aimRayGroup.scale.set(1, len, 1);
      this.aimRayGroup.quaternion.setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        dir.clone().normalize()
      );
      this.aimRayGroup.visible = true;
    } else {
      this.aimRayGroup.visible = false;
    }

    remotePositions.forEach((p, i) => {
      const group = this.remoteGroups[i];
      if (!group) return;
      group.visible = true;
      setHitboxPositions(
        group,
        { x: p.x, y: p.y, z: p.z },
        p.hitboxPositions
      );
    });
    for (let i = remotePositions.length; i < this.remoteGroups.length; i++) {
      this.remoteGroups[i].visible = false;
    }
  }

  dispose(): void {
    this.scene.remove(this.aimRayGroup);
    this.aimRayGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        obj.geometry?.dispose();
        (obj.material as THREE.Material)?.dispose();
      }
    });
    this.scene.remove(this.localGroup);
    this.localGroup.traverse((obj) => {
      if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
        obj.geometry?.dispose();
        if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
        else obj.material?.dispose();
      }
    });
    this.remoteGroups.forEach((g) => {
      this.scene.remove(g);
      g.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.LineSegments) {
          obj.geometry?.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material?.dispose();
        }
      });
    });
  }
}
