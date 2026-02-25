/**
 * Arena wall collision. Uses shared arena geometry.
 */

import {
  resolveArenaWalls as resolveShared,
  applyWallVelocitySlide as applyWallSlideShared,
  type ArenaWallResult,
} from "shared";

export type { ArenaWallResult };
export const resolveArenaWalls = resolveShared;
export const applyWallVelocitySlide = applyWallSlideShared;
