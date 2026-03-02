/**
 * Remote player sync: add/remove/update meshes, reconciliation with server state.
 */

import * as THREE from "three";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import type { ArenaState, PlayerStateSchema } from "shared";
import { clientConfig } from "../config/index.js";
import type { ThirdPersonWeaponOffset } from "../config/index.js";
import { findRightHandBone } from "../systems/animation/getHitboxPositions.js";
import {
  loadSkinTexture,
  applySkinToModel,
  createPlaceholderMesh,
} from "../systems/assetLoader/AssetLoader.js";
import type { PlayerAnimationSystem } from "../systems/animation/PlayerAnimationSystem.js";
import type { SceneManager } from "../systems/rendering/SceneManager.js";
import type { FPSMovementController } from "../systems/movement/FPSMovementController.js";
import type { AnimationClipId } from "shared";


export interface RemotePlayerSyncDeps {
  sceneManager: SceneManager;
  movement: FPSMovementController;
  playerAnimationSystem?: PlayerAnimationSystem;
}

export class RemotePlayerSync {
  private sceneManager: SceneManager;
  private movement: FPSMovementController;
  private playerAnimationSystem: PlayerAnimationSystem;
  playerTemplate: THREE.Object3D | null = null;
  weaponTemplate3P: THREE.Object3D | null = null;
  private remotePlayerMeshes = new Map<string, THREE.Object3D>();
  private remotePlayerMixers = new Map<string, THREE.AnimationMixer>();
  private remotePlayerWeaponContainers = new Map<
    string,
    { container: THREE.Group; weaponScene: THREE.Object3D; rightHandBone: THREE.Bone | null }
  >();
  private hasAppliedInitialSpawn = false;

  private _handPos3p = new THREE.Vector3();
  private _handQuat3p = new THREE.Quaternion();
  private _offsetVec3p = new THREE.Vector3();

  constructor(deps: RemotePlayerSyncDeps) {
    this.sceneManager = deps.sceneManager;
    this.movement = deps.movement;
    this.playerAnimationSystem = deps.playerAnimationSystem!;
  }

  setPlayerAnimationSystem(system: PlayerAnimationSystem): void {
    this.playerAnimationSystem = system;
  }

  setPlayerTemplate(template: THREE.Object3D | null): void {
    this.playerTemplate = template;
  }

  setWeaponTemplate3P(template: THREE.Object3D | null): void {
    this.weaponTemplate3P = template;
  }

  getRemotePlayerMeshes(): Map<string, THREE.Object3D> {
    return this.remotePlayerMeshes;
  }

  private getThirdPersonWeaponCfg(clipId: string): ThirdPersonWeaponOffset {
    const overrides = clientConfig.thirdPersonWeaponOffsets[clipId as AnimationClipId];
    if (overrides) return overrides;
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

  private addRemotePlayerMesh(
    key: string,
    localId: string,
    player: PlayerStateSchema
  ): void {
    if (key === localId) return;
    if (this.remotePlayerMeshes.has(key)) return;

    const scene = this.sceneManager.getScene();
    let clone: THREE.Object3D;
    if (this.playerTemplate) {
      clone = cloneSkeleton(this.playerTemplate);
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
    this.remotePlayerMeshes.set(key, clone);
    const mixer = new THREE.AnimationMixer(clone);
    this.playerAnimationSystem.playClip(mixer, player.animationState || "idle");
    this.remotePlayerMixers.set(key, mixer);

    if (this.weaponTemplate3P) {
      const rightHandBone = findRightHandBone(clone);
      const weaponClone = this.weaponTemplate3P.clone(true);
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
      this.remotePlayerWeaponContainers.set(key, {
        container: weaponContainer,
        weaponScene: weaponClone,
        rightHandBone,
      });
    }
  }

  private removeRemotePlayerMesh(key: string): void {
    const scene = this.sceneManager.getScene();
    const mesh = this.remotePlayerMeshes.get(key);
    const mixer = this.remotePlayerMixers.get(key);
    if (mesh) {
      scene.remove(mesh);
      this.remotePlayerMeshes.delete(key);
    }
    if (mixer) {
      mixer.stopAllAction();
      this.remotePlayerMixers.delete(key);
    }
    const weaponRef = this.remotePlayerWeaponContainers.get(key);
    if (weaponRef) {
      scene.remove(weaponRef.container);
      this.remotePlayerWeaponContainers.delete(key);
    }
  }

  setup(room: { sessionId: string; state: ArenaState }): void {
    const localId = room.sessionId;
    const addRemote = (player: PlayerStateSchema, key: string) => {
      this.addRemotePlayerMesh(key, localId, player);
    };
    const removeRemote = (_: unknown, key: string) => {
      this.removeRemotePlayerMesh(key);
    };
    room.state.players.onAdd(addRemote, true);
    room.state.players.onRemove(removeRemote);
  }

  syncLocalSpawnFromServer(room: { sessionId: string; state: ArenaState }): void {
    const localState = room.state.players.get(room.sessionId);
    if (!localState) return;
    const m = this.movement;
    m.position.x = localState.x;
    m.position.y = localState.y;
    m.position.z = localState.z;
    m.velocity.x = localState.vx;
    m.velocity.y = localState.vy;
    m.velocity.z = localState.vz;
    m.yaw = localState.yaw;
    m.pitch = localState.pitch;
    this.hasAppliedInitialSpawn = true;
  }

  waitForLocalSpawnAndSync(
    room: { sessionId: string; state: ArenaState }
  ): Promise<void> {
    const localState = room.state.players.get(room.sessionId);
    if (localState) {
      this.syncLocalSpawnFromServer(room);
      return Promise.resolve();
    }
    return new Promise((resolve) => {
      const handler = (_: PlayerStateSchema, key: string) => {
        if (key === room.sessionId) {
          removeOnAdd();
          this.syncLocalSpawnFromServer(room);
          resolve();
        }
      };
      const removeOnAdd = room.state.players.onAdd(handler, true);
    });
  }

  reconcile(room: { sessionId: string; state: ArenaState } | null): void {
    if (!room) return;
    const localState = room.state.players.get(room.sessionId);
    if (!localState) return;
    const m = this.movement;

    if (!this.hasAppliedInitialSpawn) {
      this.syncLocalSpawnFromServer(room);
      return;
    }

    const dx = localState.x - m.position.x;
    const dy = localState.y - m.position.y;
    const dz = localState.z - m.position.z;
    const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const { reconcileMin, reconcileThreshold, reconcileLerp, reconcileLerpGentle } =
      clientConfig.tuning;
    if (dist <= reconcileMin) return;

    const t = dist >= reconcileThreshold ? reconcileLerp : reconcileLerpGentle;
    m.position.x += dx * t;
    m.position.y += dy * t;
    m.position.z += dz * t;
    m.velocity.x += (localState.vx - m.velocity.x) * t;
    m.velocity.y += (localState.vy - m.velocity.y) * t;
    m.velocity.z += (localState.vz - m.velocity.z) * t;
    m.yaw += ((localState.yaw - m.yaw + Math.PI) % (2 * Math.PI) - Math.PI) * t;
    m.pitch += (localState.pitch - m.pitch) * t;
  }

  update(room: { sessionId: string; state: ArenaState } | null, dt: number): void {
    if (!room) return;

    const localId = room.sessionId;
    const alpha = 1 - Math.exp(-dt / clientConfig.tuning.remoteInterpTau);

    room.state.players.forEach((player, key) => {
      if (key === localId) return;

      let mesh = this.remotePlayerMeshes.get(key);
      if (!mesh) {
        this.addRemotePlayerMesh(key, localId, player);
        mesh = this.remotePlayerMeshes.get(key);
      }
      if (mesh) {
        mesh.visible = player.health > 0;
        const weaponRef = this.remotePlayerWeaponContainers.get(key);
        if (weaponRef) weaponRef.container.visible = mesh.visible;
        if (mesh.visible) {
          mesh.position.lerp(
            new THREE.Vector3(player.x, player.y, player.z),
            alpha
          );
          const targetYaw = player.yaw + Math.PI;
          const dy = ((targetYaw - mesh.rotation.y + Math.PI) % (2 * Math.PI)) - Math.PI;
          mesh.rotation.y += dy * alpha;
          const mixer = this.remotePlayerMixers.get(key);
          if (mixer) {
            const clipId = player.animationState || "idle";
            const ctx: { vy?: number; sprint?: boolean; timeScale?: number } = {};
            if (clipId === "jump") ctx.vy = player.vy;
            if (player.animationTimeScale !== 1) ctx.timeScale = player.animationTimeScale;
            this.playerAnimationSystem.playClip(
              mixer,
              clipId,
              Object.keys(ctx).length ? ctx : undefined
            );
          }
          if (weaponRef) {
            mesh.updateMatrixWorld(true);
            const hand = weaponRef.rightHandBone;
            const cfg = this.getThirdPersonWeaponCfg(player.animationState || "idle");
            const grip = clientConfig.thirdPersonWeaponGripOffset;
            if (hand) {
              hand.getWorldPosition(this._handPos3p);
              hand.getWorldQuaternion(this._handQuat3p);
              this._offsetVec3p
                .set(cfg.x, cfg.y, cfg.z)
                .applyQuaternion(this._handQuat3p);
              weaponRef.container.position.copy(this._handPos3p).add(this._offsetVec3p);
              weaponRef.container.quaternion.copy(this._handQuat3p);
            }
            weaponRef.weaponScene.position.set(grip.x, grip.y, grip.z);
            weaponRef.weaponScene.rotation.set(
              Math.PI / 2 + cfg.rotX,
              cfg.rotY,
              cfg.rotZ
            );
            weaponRef.weaponScene.scale.setScalar(cfg.scale);
          }
        }
      }
    });

    const toRemove: string[] = [];
    const stateKeys = new Set<string>();
    room.state.players.forEach((_, key) => stateKeys.add(String(key)));
    this.remotePlayerMeshes.forEach((_, key) => {
      if (!stateKeys.has(String(key))) toRemove.push(key);
    });
    toRemove.forEach((key) => this.removeRemotePlayerMesh(key));
  }

  updateRemoteMixers(dt: number): void {
    this.remotePlayerMixers.forEach((m) => m.update(dt));
  }
}
