# Horizontale Flächen – Kollision (Festlegung)

**WICHTIG: Diese Regel ist verbindlich. Alle vertikalen Kollisionen (Boden/Decke) müssen so umgesetzt werden.**

**Oben (Kopf/Decke):** Beim Hochgehen (Sprung, Walljump) prallt der **Kopf** an der Decke ab – kein Durchdringen. In `stepPlayerMovement` wird dafür die **Kopfhöhe** (`state.y + playerHeight`) gegen horizontale Flächen getestet; Treffer → `state.y = hitCeiling - playerHeight`, `vy = 0`. Beim Fallen bleibt die Fuß-Logik (Landung). Siehe Abschnitt 4.

## Grundsatz

- **Kein Snapping.** Es gibt kein „relatives“ Boden-Picking (z.B. „nur Boden unter mir“ vs. „über mir“). Keine Teleport-Korrektur nachträglich.
- **Boden ist immer solide.** Man fällt nie durch den Boden. Man kommt auch nicht von unten durch eine Decke/durch einen Boden darüber.
- **Schwerkraft + feste horizontale Ebenen.** Jede horizontale Fläche (Oberkante und Unterkante von Blöcken) ist von **beiden Seiten** undurchdringbar. Logik: „Wurde auf dem Weg von yFrom nach yTo eine Fläche gekreuzt? → Stopp auf genau dieser Fläche.“

## Implementierung (immer so)

### 1. Flächenhöhen an (x, z)

- **API:** `getSurfaceHeightsAt(px, pz, world, margin)` in `shared/src/world/StaticWorld.ts`
- Liefert **alle** horizontalen Flächenhöhen an dieser XZ-Position:
  - Pro Block: **minY** (Unterkante = „Decke von unten“) und **Oberseite** (Rampen-Schräge bzw. maxY)
- **Rampen:** Über das gesamte XZ-Footprint des Blocks (kein Axis-Seam-Skip), damit an Rampenkanten nicht durchgefallen wird; die Schräge ist einfach die horizontale Fläche mit Höhe = getBlockTopYAt(px, pz).
- **Deduplizierung:** Fast gleiche Höhen (≤ 0.02 Abstand) werden zusammengefasst, um überlappende/doppelte Flächen zu vermeiden.
- Kein `py`, keine Filterung nach Spielerhöhe – nur die geometrischen Flächen.

### 2. Treffer beim vertikalen Schritt

- **API:** `getSurfaceHit(yFrom, yTo, surfaces)` in `shared/src/world/StaticWorld.ts`
- Bedeutung: Beim Weg von `yFrom` nach `yTo` – wurde eine Fläche aus `surfaces` gekreuzt?
  - **Fall (yTo < yFrom):** Treffer = **höchste** Fläche im Intervall [yTo, yFrom] → Landung.
  - **Sprung (yTo > yFrom):** Treffer = **tiefste** Fläche im Intervall [yFrom, yTo] → Kopf an Decke.
- Rückgabe: Trefferhöhe oder `null` (kein Treffer). **Kein Snapping** – nur Stopp auf der getroffenen Fläche.

### 3. „Boden unter den Füßen“ (Korrektur / State)

- **API:** `getHighestSurfaceAtOrBelow(y, surfaces)` in `shared/src/world/StaticWorld.ts`
- Wird genutzt für:
  - „Stehe ich auf einem Boden?“ (State: grounded/sliding)
  - Kleine Penetrations-Korrektur nach Wall-Resolve oder am Ende des Schritts (nur wenn `state.y` unter dieser Fläche liegt).

### 4. Bewegung (stepPlayerMovement)

- **Airborne / Dash / Sliding:** Nach Integration von Y (Parameter: `playerRadius`, `playerHeight`):
  1. `surfaces = surfacesAt(state.x, state.z, staticWorld, margin)`
  2. **Beim Hochgehen** (yCandidate > state.y): Kopf-Segment – `hit = getSurfaceHit(state.y + playerHeight, yCandidate + playerHeight, surfaces)`; bei Treffer `state.y = hit - playerHeight`, `vy = 0`.
  3. **Beim Fallen** (yCandidate ≤ state.y): Fuß-Segment – `hit = getSurfaceHit(state.y, yCandidate, surfaces)`; bei Treffer `state.y = hit`, `vy = 0` plus Landungs-Logik (grounded/sliding).
  4. Sonst: `state.y = yCandidate`
- **Grounded:** Nach Integration: `floor = getHighestSurfaceAtOrBelow(state.y + tolerance, surfaces)`; wenn „auf Boden“ → `state.y = floor`, sonst airborne.
- **Post-Wall / Final:** `floor = getHighestSurfaceAtOrBelow(state.y + tolerance, surfaces)`; wenn `state.y < floor` → `state.y = floor`, `vy = 0`.

## Was wir nicht tun

- **Kein `py`-Parameter** in der vertikalen Kollisionslogik (kein „Boden nur unter mir“ / „Decke nur über mir“ als Filter). Flächen sind fest; Treffer ergibt sich aus dem Bewegungssegment.
- **Kein `Math.max(yCandidate, ground)`** mit einem „ground“, der von der Spielerhöhe abhängt – das führt zu Snap nach oben (z.B. an obere Etage).
- **Kein nachträgliches Hochziehen** außer der kleinen Korrektur „state.y < floor“ (Penetration), und nur mit `getHighestSurfaceAtOrBelow`, nie mit einer „höchsten Fläche an (x,z)“ unabhängig von der aktuellen Höhe.

## Referenzen

- Implementierung: `shared/src/world/StaticWorld.ts` (`getSurfaceHeightsAt`, `getSurfaceHit`, `getHighestSurfaceAtOrBelow`)
- Verwendung: `shared/src/movement/stepPlayerMovement.ts` (Airborne, Dash, Sliding, Grounded, Post-Wall, Final)
- Übersicht Movement/Kollision: `docs/movement-and-collision.md`
