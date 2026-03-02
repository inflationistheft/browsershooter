/**
 * Server-only extended state per player. Not replicated.
 * Colyseus schema holds replicated fields; this holds shoot cooldowns, hitbox cache, etc.
 */
export function createPlayerExtendedState() {
    return {};
}
