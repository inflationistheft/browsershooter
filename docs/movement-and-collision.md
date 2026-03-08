### Movement & Collision – Übersicht

- **Ziele**
  - Einheitliches Movement- und Kollisionsverhalten auf **Client**, **Server** und im **Blockout-Editor**.
  - Möglichkeit für Prediction/Reconciliation auf dem Client bei autoritativem Server.
  - Klare Trennung zwischen:
    - **Bewegungszustand & Steuersignalen**
    - **Kollisionsrepräsentation der Welt (StaticWorld)**
    - **Tuning-Parametern** (Geschwindigkeiten, Beschleunigungen, Dämpfungen).

### Kernbausteine

- **Movement-Logik (shared)**
  - Datei: `shared/src/movement/stepPlayerMovement.ts`
  - API:
    - `tickMovementTimers(ext, dt)` – pflegt Timer im `MovementExtState` (Cooldowns, Dash, Slide).
    - `stepPlayerMovement(state, input, dt, playerRadius, staticWorld?)` – führt einen Simulationsschritt aus.
    - `createDefaultExt()` – erzeugt einen initialen `MovementExtState`.
  - Zustände:
    - `movementState: "grounded" | "sliding" | "airborne"`.
    - `MovementExtState` enthält Slide-/Dash-/Wallbounce‑spezifische Hilfswerte.

- **StaticWorld & Arena-Geometrie (shared)**
  - Datei: `shared/src/world/StaticWorld.ts`
  - Struktur:
    - `StaticWorld { blocks: StaticBlockCollider[] }` mit AABBs (min/max X/Y/Z) und optional:
      - `walkableTopOnly: boolean` – nur Oberseite begehbar (z.B. Wände, Ledges).
      - `rampAxis: "x" | "z"`, `rampInverted: boolean` – für Rampen.
  - **Vertikale Kollision (Boden/Decke) – verbindliche Regel:** Siehe **`docs/horizontal-surfaces-collision.md`**. Kurz: Kein Snapping, keine relative Flächenwahl (`py`). Flächen sind von beiden Seiten solide; Treffer beim vertikalen Schritt über `getSurfaceHeightsAt` + `getSurfaceHit` + ggf. `getHighestSurfaceAtOrBelow`. Immer so umsetzen.
  - Funktionen:
    - `getSurfaceHeightsAt(px, pz, world, margin)` – alle horizontalen Flächenhöhen an (x,z).
    - `getSurfaceHit(yFrom, yTo, surfaces)` – welche Fläche wird beim Weg von yFrom nach yTo getroffen (Landung oder Decke).
    - `getHighestSurfaceAtOrBelow(y, surfaces)` – „Boden unter den Füßen“ für State/Korrektur.
    - `getGroundYAt(px, pz, world, margin, py?)` – bleibt u.a. für Rampen-Gradient; vertikale Bewegung nutzt die Surface-APIs.
    - `isOnRamp(px, pz, world, radius, py)` – prüft, ob sich der Spieler auf einer Rampe befindet.
    - `resolveStaticWorldXZ(x, y, z, radius, world)` – löst Kollision in XZ‑Ebene gegen Blocks.
    - `buildStaticWorldFromMap(map, prefabDefs)` – baut `StaticWorld` aus `MapData` + Prefab-Definitionen.
    - `rayStaticWorldIntersection` – einfache Raycasts gegen die Block-Geometrie.

- **Tuning**
  - Datei: `shared/src/tuning/movement.ts`
  - Enthält Geschwindigkeiten, Beschleunigungen und Faktoren für:
    - Walk/Strafe, Crouch, Slide (enter speed, decay, Slide‑Jump‑Multiplikator).
    - Dash (Dauer, Geschwindigkeit, Cooldown).
    - Gravity, Max‑Fallgeschwindigkeit, Rampen‑Verhalten (z.B. `rampSlideGravityFactor`).

### Verwendung auf Client, Server und im Editor

- **Client**
  - `FPSMovementController` (`client/src/systems/movement/FPSMovementController.ts`):
    - Hält `MovementStepState` + `MovementExtState`.
    - Ruft pro Tick `tickMovementTimers` und `stepPlayerMovement` mit der `StaticWorld` auf.
    - Hält einen lesbaren `MovementSnapshot` für Kamera, Viewmodel und HUD.
  - `StaticWorld` kommt aus `MapLoader` (`client/src/systems/mapLoader/MapLoader.ts`), das `MapData` aus `public/maps/*.json` lädt.

- **Server**
  - `ArenaFFARoom` (`server/src/rooms/ArenaFFA.ts`):
    - Lädt dieselbe Map‑Datei (Standard: `maps/arena_blockout.json`).
    - Erzeugt `StaticWorld` und Kill-Volumes (`buildStaticWorldFromMap`, `buildKillVolumesFromMap`).
    - Führt Movement/Collision pro Server‑Tick mit denselben shared‑Funktionen aus (`tickMovementTimers`, `stepPlayerMovement`).
    - Nutzt `rayStaticWorldIntersection` und Arena‑Helper für Hitscan‑LOS.

- **Blockout-Editor**
  - Datei: `tools/editor/src/main.ts`
    - Erzeugt eine lokale `StaticWorld` aus den aktuell platzierten Prefabs (`buildEditorStaticWorld`).
    - Verwendet ebenfalls `tickMovementTimers` und `stepPlayerMovement`, sodass das „Playtest“-Movement im Editor sehr nah am Live-Game liegt.
    - Debug‑Overlay (`B` im Player-Mode) zeigt AABBs und Rampen-Wireframes.

### Zustandsfluss pro Tick (Client/Server)

- Eingabe:
  - Rohinput (Client) → `MovementStepInput` (moveX/moveZ/jump/slide/crouch/dash/yaw/pitch).
- Verarbeitung:
  - `tickMovementTimers(ext, dt)` – reduziert Timer, setzt ggf. neue Cooldowns.
  - `stepPlayerMovement(state, input, dt, radius, staticWorld)`:
    - verarbeitet Dash-Phase,
    - steuert Grounded/Sliding/Airborne‑Zustand (inkl. Rampen, Slide‑Enter/Exit, Slide‑Jump),
    - integriert Schwerkraft und Velocity,
    - vertikale Kollision über Flächen-Treffer (`getSurfaceHeightsAt`, `getSurfaceHit`, `getHighestSurfaceAtOrBelow`) – siehe `docs/horizontal-surfaces-collision.md`; kein Snapping,
    - löst Wand-Kollisionen (`resolveStaticWorldXZ` + `applyWallVelocitySlide`),
    - behandelt Wallbounce (Reflexion + Boost) in der Airborne‑Phase.
- Ausgabe:
  - Aktualisiertes `MovementStepState` für nächsten Tick.
  - Auf Client zusätzlich `MovementSnapshot` für Kamera & Viewmodel.

### Wichtig für zukünftige Änderungen

- **Horizontale Flächen / Boden-Decke (verbindlich)**
  - Änderungen an vertikaler Kollision (Boden, Decke, Fall-through, Snapping) müssen der Festlegung in **`docs/horizontal-surfaces-collision.md`** folgen: solide Flächen von beiden Seiten, Treffer über `getSurfaceHit`, kein Snapping, keine relative Flächenwahl.

- **Determinismus**
  - `stepPlayerMovement` und `StaticWorld` sollten **keine** I/O‑Side‑Effects enthalten (keine `fetch`/Logging-Aufrufe im Hot‑Path).
  - Änderungen an Movement/Tuning sollten konsistent auf Client & Server ausgerollt werden (beide nutzen dieselben shared‑Module).

- **StaticWorld-Konsistenz**
  - Jede Änderung an Prefab‑Definitionen (`prefabDefs.json`) muss in:
    - `buildStaticWorldFromMap` (Shared),
    - `buildEditorStaticWorld` + zugehörigen Debug-/AABB‑Helfern im Editor
    gespiegelt werden.
  - `docs/map-format.md` beschreibt die AABB‑Regeln und Rampen‑Runs; bei größeren Änderungen sollten beide Dateien aktualisiert werden.

- **Editor vs. Runtime**
  - Der Editor baut seine StaticWorld **lokal**, um unabhängig vom Shared‑Build zu funktionieren und Playtests direkt im Editor zu ermöglichen.
  - Ziel ist weiterhin, dass Editor, Client und Server dieselbe Semantik für „begehbar“, „Wand“, „Rampe“ und Kill‑Volumes teilen.

