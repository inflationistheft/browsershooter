/**
 * Maps client InputState to PlayerInput for network transmission.
 * slideJustPressed and slideIntentTicks are client-only; server gets slide boolean.
 */

import type { InputState } from "../input/InputState.js";
import type { PlayerInput } from "shared";

export function inputStateToPlayerInput(state: Readonly<InputState>, tick: number): PlayerInput {
  return {
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
}
