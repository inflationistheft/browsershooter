/**
 * Player-vs-player collision resolution. Used by server after movement step.
 * Treats players as XZ circles; pushes overlapping players apart and applies
 * a small separation impulse for bounce feel.
 */
export interface PlayerCollisionState {
    x: number;
    y: number;
    z: number;
    vx: number;
    vy: number;
    vz: number;
}
/** Impulse (m/s) applied when separating overlapping players for bounce feel. */
export declare const PLAYER_SEPARATION_IMPULSE = 0.4;
/** Map-like interface for player collection (MapSchema-compatible). */
export interface PlayerCollisionMap {
    get(id: string): PlayerCollisionState | undefined;
    forEach(cb: (p: PlayerCollisionState, id: string) => void): void;
}
/**
 * Resolve player-player overlaps in XZ plane. Mutates positions and velocities.
 * Excludes inactive players (e.g. dead). Iterates to handle 3+ player stacks.
 */
export declare function resolvePlayerCollisions(players: PlayerCollisionMap, isActive: (id: string) => boolean, playerRadius: number, playerHeight: number, iterations?: number): void;
//# sourceMappingURL=playerCollision.d.ts.map