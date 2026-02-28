# Hitscan Debug – Code-Analyse

## Aktuelle Architektur (nach Refactoring)

### Hitbox-Layout (Server)
- **Head**: Sphäre bei `y + HEAD_HITBOX_HEIGHT` (1.55m), Radius `HEAD_HITBOX_RADIUS` (0.18m)
- **Body**: Capsule von `y + BODY_CAPSULE_BOTTOM` (0.2m) bis `y + BODY_CAPSULE_TOP` (1.1m), Radius `BODY_CAPSULE_RADIUS` (0.35m)
- **Priorität**: Zuerst Head testen, dann Body (damit Body keine Head-Treffer „wegfängt“)

### Ray-Origin
- Standing: `player.y + PLAYER_EYE_HEIGHT` (1.6m)
- Crouching: `player.y + CROUCH_EYE_HEIGHT` (1.0m)

### Shoot-Input
- `_pendingShoot`: wird bei `shoot: true` gesetzt, erst beim Abfeuern zurückgesetzt (verhindert verlorene Klicks)

### LOS-Check
- Nach Ray–Head/Body-Treffer: `rayArenaIntersection` prüft, ob eine Wand vor dem Trefferpunkt liegt. Bei Blockierung wird der Treffer verworfen.

### Server-Bewegung
- **Slide** und **Crouch** werden auf dem Server simuliert (analog zum Client) → weniger Position-Desync

## Datenfluss

### Client → Server (Input)
1. **Client tick** (30 Hz): `input.getState()` → `movement.update()` → `sendInput(inputStateToPlayerInput(state))` → `reconcileLocalWithServer()`
2. **inputStateToPlayerInput** sendet: `{ tick, moveX, moveZ, sprint, jump, slide, yaw, pitch, shoot, reload }`
3. **Server onInput**: Speichert `_lastInput`; bei `shoot: true` wird `_pendingShoot` gesetzt

### Server (Hitscan)
1. Pro Tick: Bewegung (inkl. Slide/Crouch), dann Schuss bei `shouldShoot` (lastInput.shoot oder _pendingShoot)
2. Ray-Origin abhängig von Crouch
3. Ray-Head-Sphere und Ray-Body-Capsule, Priorität Head
4. LOS-Check gegen Arena-Wände

### Client (Debug-Visualisierung)
- Head-Sphäre + Body-Capsule pro Spieler (lokal: `movement.position`, remote: `room.state.players`)
