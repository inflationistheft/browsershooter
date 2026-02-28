/**
 * Maps client InputState to PlayerInput for network transmission.
 * slideJustPressed and slideIntentTicks are client-only; server gets slide boolean.
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
  debugMode?: boolean
): PlayerInput {
  const out: PlayerInput = {
    tick,
    moveX: state.moveX,
    moveZ: state.moveZ,
    sprint: state.sprint,
    jump: state.jump,
    slide: state.slide,
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
  if (debugMode) out.debugMode = true;
  if (hitboxPositions) {
    // Use feet as reference – all bones from same model, offsets always < 2m for humanoid
    const feet = hitboxPositions.feet;
    const toOffset = (b: { x: number; y: number; z: number }) => ({
      x: b.x - feet.x,
      y: b.y - feet.y,
      z: b.z - feet.z,
    });
    const headO = toOffset(hitboxPositions.head);
    const bodyO = toOffset(hitboxPositions.bodyCenter);
    const spineO = toOffset(hitboxPositions.spineTop);
    const pelvisO = toOffset(hitboxPositions.pelvis);
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
    out.feetX = 0;
    out.feetY = 0;
    out.feetZ = 0;
  }
  return out;
}
