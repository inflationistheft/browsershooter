/**
 * Maps client InputState to PlayerInput for network transmission.
 * slideIntentTicks is sent so server can honor short taps (same as client).
 */

import type { InputState } from "../input/InputState.js";
import type { PlayerInput } from "shared";

export interface HitboxPositionsInput {
  head: { x: number; y: number; z: number };
  bodyCenter: { x: number; y: number; z: number };
  spineTop: { x: number; y: number; z: number };
  pelvis: { x: number; y: number; z: number };
  feet: { x: number; y: number; z: number };
}

export function inputStateToPlayerInput(
  state: Readonly<InputState>,
  tick: number,
  clientPos?: { x: number; y: number; z: number },
  hitboxPositions?: HitboxPositionsInput,
  aimDir?: { x: number; y: number; z: number },
  debugMode?: boolean,
  /** Eye position when shooting (camera position). Used for shoot origin to match crosshair. */
  shootEyePos?: { x: number; y: number; z: number }
): PlayerInput {
  const out: PlayerInput = {
    tick,
    moveX: state.moveX,
    moveZ: state.moveZ,
    sprint: state.sprint,
    jump: state.jump,
    slide: state.slide,
    slideIntentTicks: state.slideIntentTicks > 0 ? state.slideIntentTicks : undefined,
    crouch: state.crouch,
    yaw: state.yaw,
    pitch: state.pitch,
    shoot: state.shoot,
    reload: state.reload,
  };
  if (clientPos) {
    out.clientX = clientPos.x;
    out.clientY = clientPos.y;
    out.clientZ = clientPos.z;
  }
  if (aimDir) {
    out.aimDirX = aimDir.x;
    out.aimDirY = aimDir.y;
    out.aimDirZ = aimDir.z;
  }
  if (state.shoot && aimDir) {
    out.shootAimX = aimDir.x;
    out.shootAimY = aimDir.y;
    out.shootAimZ = aimDir.z;
    const pos = shootEyePos ?? clientPos;
    if (pos) {
      out.shootClientX = pos.x;
      out.shootClientY = pos.y;
      out.shootClientZ = pos.z;
    }
  }
  if (debugMode) out.debugMode = true;
  if (hitboxPositions && clientPos) {
    // Use clientPos as reference so server gets: player + (head - clientPos) ≈ head
    const toOffset = (b: { x: number; y: number; z: number }) => ({
      x: b.x - clientPos.x,
      y: b.y - clientPos.y,
      z: b.z - clientPos.z,
    });
    const headO = toOffset(hitboxPositions.head);
    const bodyO = toOffset(hitboxPositions.bodyCenter);
    const spineO = toOffset(hitboxPositions.spineTop);
    const pelvisO = toOffset(hitboxPositions.pelvis);
    const feetO = toOffset(hitboxPositions.feet);
    out.headX = headO.x;
    out.headY = headO.y;
    out.headZ = headO.z;
    out.bodyCenterX = bodyO.x;
    out.bodyCenterY = bodyO.y;
    out.bodyCenterZ = bodyO.z;
    out.spineTopX = spineO.x;
    out.spineTopY = spineO.y;
    out.spineTopZ = spineO.z;
    out.pelvisX = pelvisO.x;
    out.pelvisY = pelvisO.y;
    out.pelvisZ = pelvisO.z;
    out.feetX = feetO.x;
    out.feetY = feetO.y;
    out.feetZ = feetO.z;
  }
  return out;
}
