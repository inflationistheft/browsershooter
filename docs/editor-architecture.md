### Blockout-Editor – Architekturüberblick

- **Entrypoints**
  - **Standalone Tool**: `tools/editor/index.html` → `tools/editor/src/standalone.ts` → `bootEditor`.
  - **In-Game Integration**: `client/src/main.ts` mit `?editor=1`:
    - Lädt `tools/editor/src/main.ts` dynamisch.
    - Übergibt eine `initViewmodel`‑Funktion, damit der Editor im Player-Mode das echte Viewmodel/Arme nutzen kann.
  - Kern-Implementation: `tools/editor/src/main.ts`.

### Haupt-Bausteine im Editor

- **State / Datenmodell**
  - Prefabs:
    - `EditorPrefabInstance { id: PrefabId; position: [x,y,z]; rotation: number }`.
    - Liste in `prefabInstances: EditorPrefabInstance[]`.
  - Spawns:
    - `EditorSpawnPoint { team, position, rotation, mesh, valid }`.
    - Liste in `spawnPointsInternal: EditorSpawnPoint[]`.
  - Tooling:
    - `ToolMode = "prefab" | "spawn"`.
    - `placementHeightLevel`, `currentPrefab`, `currentRotationDeg`, `currentSpawnRotationDeg`.
  - Undo/Redo:
    - `EditorSnapshot` kapselt Prefabs/Spawns + Editor-Metastate.
    - `undoStack` / `redoStack` mit `UNDO_MAX = 100`.
  - Player-Mode:
    - `PlayerMovementState` (Bewegung wie im Spiel, inkl. `ext` aus `createDefaultExt()`).
    - `PlayerInputState` (WASD/Jump/Slide/Crouch/Dash).

- **Rendering / Three.js**
  - Szene & Kamera:
    - `THREE.Scene`, `PerspectiveCamera`, `WebGLRenderer`.
    - Freiflugkamera im Editor-Modus (`updateFlyCamera`) und FPS‑Kamera im Player-Mode (`updatePlayer`).
  - Prefab-Darstellung:
    - `prefabGroup`: enthält alle platzierten Prefab-Meshes.
    - Ramps (`ramp_1x4`) werden zu Runs gruppiert und über `buildMergedRampMeshes` zu größeren Meshes verschmolzen (weniger Drawcalls, saubere Normals).
    - Ghost/Preview-Meshes für Prefabs und Spawns.
  - Debug:
    - `collisionDebugHelpers`: Linien-/Box‑Meshes, die die Kollisions-AABBs und Rampenflächen visualisieren.
    - Sichtbar, wenn `playerDebug` aktiv ist (Taste `B` im Player-Mode).

- **UI / DOM**
  - Info-Panel (links): Controls, Hotkeys, aktuelles Tool/Prefab/Bauhöhe.
  - Right-Panel:
    - Export-/Import-Buttons (`doExportMap`, `importMapData`).
    - Prefab-Kategorien mit Collapse/Expand.
    - Bauhöhen-Anzeige (`updatePlacementHeightDisplay`).
    - Spawn-Sektion mit Anzahl/Validität (`updateSpawnCountDisplay`).
  - Player-HUD (unten links): Slide/Dash‑Status im Player-Mode.

### Kollisionswelt im Editor

- **Build**
  - `buildEditorStaticWorld()` erzeugt eine lokale `StaticWorld` aus den platzierten Prefabs:
    - Alle Prefabs mit `collision: "box"` → AABBs.
    - Rampen (`ramp_1x4`) → Rampen-Runs wie in `StaticWorld.ts` (zusammenhängende Schräge).
    - `walkableTopOnly` aus `prefabDefs` wird in die Blocks übernommen.
  - `rebuildEditorStaticWorld()` setzt `editorStaticWorld` auf den neuesten Stand (nach Platzieren/Löschen/Import).

- **Movement-Playtest**
  - `enterPlayerMode()`:
    - Wählt Spawn-Position (preferiert valide Spawns, sonst Blockout-Geometrie).
    - Initialisiert `playerState` + `createDefaultExt()`.
    - Schaltet auf FPS‑Kamera um und blendet Player-HUD ein.
  - `updatePlayer(dt)`:
    - Ruft `tickMovementTimers` und `stepPlayerMovement` mit `editorStaticWorld` auf.
    - Setzt Kamera‑Position/Rotation 1:1 aus Movement-State (kein Viewmodel-Bob).
    - Kümmert sich um „Void“-Fälle (Reset auf nächste gültige Oberfläche).

### Map-Format & Workflow

- **Map-Format**
  - Nutzung des Shared-Schemas `MapData` (`shared/src/types/index.ts`):
    - `prefabs: MapPrefabPlacement[]`.
    - `spawnPoints: MapSpawnPoint[]`.
  - Prefab-Definitionen (`shared/src/data/prefabDefs.json`) werden im Editor direkt verwendet:
    - Einheitliche Größen/Kollision, gemeinsame Quelle mit Client & Server.
  - Details siehe `docs/map-format.md`.

- **Export / Import**
  - Export:
    - `exportMapJSON()` baut ein `MapData` aus `prefabInstances` und gültigen `spawnPointsInternal`.
    - `doExportMap()` speichert die Map als JSON (Download im Browser).
  - Import:
    - `importMapData(MapData)`:
      - Validiert `version`, `prefabs`, `spawnPoints`.
      - Rekonstruiert `prefabInstances`, Spawns und `editorStaticWorld`.
      - Aktualisiert Debug‑Meshes und Spawn-Validierung.

### Erweiterungspunkte

- **Neue Prefabs**
  - Prefab in `shared/src/data/prefabDefs.json` ergänzen (ID, `size`, `collision`, `walkableTopOnly`).
  - Editor:
    - `PrefabId`-Union in `tools/editor/src/main.ts` erweitern.
    - In `PREFAB_CATEGORIES` und optional `PREFAB_DISPLAY_NAMES` aufnehmen.
  - Map-Loader/Server:
    - Sicherstellen, dass `buildStaticWorldFromMap` den neuen Prefab-Typ korrekt interpretiert.

- **Neue Tools / Gizmos**
  - Im Editor zunächst über Keyboard‑Shortcuts und interne Funktionen (`addPrefabAt`, `deletePrefabFromPointer`, usw.) integrieren.
  - Später kann ein dedizierter `EditorState`/`EditorActions`‑Layer herausgezogen werden, der die Undo/Redo‑Logik und Toolzustände kapselt.

- **Konsistenz mit Shared**
  - Bei Änderungen an Rampen-/AABB‑Logik:
    - **Immer** `StaticWorld.ts`, `buildEditorStaticWorld`, `findTopSurfaceYAt` und die Debug‑Funktionen synchron halten.
    - `docs/map-format.md` aktualisieren, falls sich das Verhalten für Designer spürbar ändert.

