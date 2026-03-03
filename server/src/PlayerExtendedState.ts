/**
 * Server-only extended state per player. Not replicated.
 * Colyseus schema holds replicated fields; this holds shoot cooldowns, hitbox cache, etc.
 */

import type { PlayerInput } from "shared";

export interface PlayerExtendedState {
  lastInput?: Partial<PlayerInput>;
  shootCooldownTicks?: number;
  lastDamageTick?: number;
  reloadTicks?: number;
  respawnTicks?: number;
  /** Movement ext - used by stepPlayerMovement. */
  slideTime?: number;
  slideJumpCooldownTimer?: number;
  slideEnterCooldownTimer?: number;
  slideOnLand?: boolean;
  horSpeedWhenJumped?: number;
  lastApproachVx?: number;
  lastApproachVz?: number;
  lastJumpHeld?: boolean;
  lastHasSlideIntent?: boolean;
  /** Cached hitbox world positions from client input. */
  headX?: number;
  headY?: number;
  headZ?: number;
  bodyCenterX?: number;
  bodyCenterY?: number;
  bodyCenterZ?: number;
  spineTopX?: number;
  spineTopY?: number;
  spineTopZ?: number;
  pelvisX?: number;
  pelvisY?: number;
  pelvisZ?: number;
  feetX?: number;
  feetY?: number;
  feetZ?: number;
}

export function createPlayerExtendedState(): PlayerExtendedState {
  return {};
}
