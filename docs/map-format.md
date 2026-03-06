# Map-Format (JSON)

- **Schema:** `version`, `name`, `gridSize`, `prefabs[]`, `spawnPoints[]`.
- **Koordinaten:** 1 Einheit = 1 m. Alle Positionen im Weltkoordinatensystem (Y = Höhe).
- **Grid/Snap:** `gridSize` in Metern; Editor snappt Prefab-Positionen und -Rotation (90°‑Schritte) auf dieses Grid. Alle AABBs (Kollision und Editor-Debug) werden aus Position, Size und Rotation (Y, 90°‑Schritte) abgeleitet – einheitlich für Boden, Wand, Rampe und alle Kollisions-Prefabs.
- **AABB-Regel:** Bei Änderungen an Prefabs (z. B. Rampe, Größe, flache Basis) müssen **AABB, Kollision und Debug-Wireframe immer mitgeführt werden**, damit sie mit Mesh/Placement identisch bleiben. Gleiche Logik in Shared (`StaticWorld.ts`), Editor (`buildEditorStaticWorld`, `findTopSurfaceYAt`, `rebuildCollisionDebugMeshes`) und ggf. Client-MapLoader.

## Prefabs

- **Eintrag in Map:**  
  - `id`: Referenz auf Prefab-Definition (z.B. `"floor_4x4"`).  
  - `position: [x, y, z]`: Weltposition des Prefabs, Pivot in der Regel im **Zentrum auf Bodenhöhe**.  
  - `rotation: number`: Rotation um die Y‑Achse in Grad (0/90/180/270).

- **Prefab-Definitionen:** `shared/src/data/prefabDefs.json`
  - `mesh`: Asset‑Key oder `"placeholder"` (Blockout‑Default).
  - `collision`: `"box" | "trimesh" | "ramp" | "none"` – Blockout: `"box"` (Boden/Wand), `"ramp"` (Rampe, begehbare Schräge).
  - `size: [sx, sy, sz]`: Volle Ausdehnung des Prefabs in Metern (Breite X, Höhe Y, Tiefe Z).  
    - Bei `"box"`‑Kollision: AABB aus `position ± size/2`.
    - Bei `"ramp"`: Keil; Oberfläche am tiefen Ende 0.2 m flach (bündig mit Boden), danach Schräge. Boden-Y aus Rampenformel; Kollision wie Box im Footprint.
    - Beispiel: `"floor_4x4"` mit `size: [4, 0.2, 4]` = 4×4 m Bodenplatte, 0.2 m Dicke.

- **Blockout‑Prefabs (prefabDefs.json):**
  - **Boden/Decke:** `floor_2x2`, `floor_4x4` (Standard), `drop_floor`, `ceiling` – alle `box`, begehbar, blockieren Schuss.
  - **Wände:** `wall_2x4` (2×6×0.2 m), `wall_4x4` (4×6×0.2 m), `wall_4x1` (4×1×0.2 m, niedrige Wand), `wall_4x2` (4×2×0.2 m) – `box`, `walkableTopOnly: true` (nur Oberseite begehbar, Seiten = Wand/Wallbounce). Hinweis: Die IDs (z. B. wall_4x4) sind historisch; die tatsächliche Größe steht in `size` (Breite × Höhe × Tiefe).
  - **Lampen (Deko, Licht):** `wall_lamp_warm_yellow`, `wall_lamp_orange`, `wall_lamp_cold_white`, `wall_lamp_blue`, `wall_lamp_purple` – `collision: "none"` (keine Kollision). Client und Editor rendern ein kleines emissives Mesh plus PointLight für Sci‑Fi‑Ambiente. Platzierung erfolgt wie bei normalen Prefabs (Grid + Rotation), bevorzugt an Wänden auf gewünschter Höhe (z.B. 4 m bei 6 m Wänden).
  - **Rampe:** `ramp_1x4` – Keil, 4×1.2×2 m (4 m breit, 1 m Steigung über 2 m Tiefe), `walkableTopOnly: true`. Nur die **Oberseite** (Schräge + flache Basis) ist begehbar; von hinten/hoher Seite oder von der Seite wirkt die Rampe wie eine Wand (kein Hochziehen/Teleport). Man läuft von der **tiefen Seite** hoch. Am tiefen Ende 0.2 m flache Basis (bündig mit Boden), danach Schräge. AABB beginnt bei minY + 0.2 (siehe AABB-Regel).
  - **Block:** `solid_block` (2×2×2) – `box`, `walkableTopOnly: true` (nur Oberseite begehbar).
  - **Cover:** `ledge_half_cover`, `ledge_full_cover` – `box`, `walkableTopOnly: true` (nur Oberseite begehbar, Seiten = Wand/Wallbounce).
  - **Special:** `spawn_point` – visueller Marker, `collision: "none"`. Spawn‑Logik nutzt weiter `spawnPoints[]` in der Map.  
  - **kill_volume** – `collision: "none"` (kein Stand, kein Schussblock). Spieler‑Logik ist implementiert: Server prüft Spielerposition gegen Kill-Volume-AABBs (Position + Size + Rotation wie bei anderen Prefabs) und löst bei Aufenthalt sofort Tod + Respawn aus.

## Spawnpunkte

- **Eintrag in Map:**  
  - `team: number`: Team‑Index (FFA nutzt z.B. `0` für „neutral“).  
  - `position: [x, y, z]`: Weltposition des Spawnpunkts (Auge/Füße: abhängig von Gameplay‑Tuning).  
  - `rotation: number`: Y‑Rotation in Grad (Startblickrichtung).
- **Verwendung:** Spawnpunkte werden vom Server (ArenaFFA) für **Join** und **Respawn** genutzt: `pickSpawn()` wählt zufällig einen Eintrag aus `spawnPoints[]`. Fehlen Spawnpunkte in der Map, werden Fallback-Offsets verwendet.
- **Validierung:**  
  - Editor und Server prüfen, dass sich **direkt unter dem Spawnpunkt** (z.B. unterhalb der Füße) ein gültiger Boden‑Collider befindet.  
  - Ungültige Spawns werden im Editor visuell markiert und nicht für FFA‑Spawns verwendet.

## Kollision und Begehbarkeit (wichtig)

- **Prinzip:** Jedes Prefab mit `collision: "box"` oder `"ramp"` erzeugt einen Block in der StaticWorld und blockiert Schuss. Bei `ramp` wird zusätzlich `rampAxis` gesetzt (Schräge). **Wände, Ledges und Rampen** haben in prefabDefs `walkableTopOnly: true`: nur die **Oberseite** (bzw. die Schräge bei Rampe) ist begehbar; von unten/seitlich/von der hohen Seite wirkt es als Wand (kein Hochziehen, Wallbounce). Der Spieler wird nur von der richtigen Seite (z. B. tiefe Seite der Rampe) auf die Lauffläche gezogen.
- **Implementierung:**
  - **Shared:** `shared/src/world/StaticWorld.ts` – `buildStaticWorldFromMap()` baut aus Map + prefabDefs die `blocks[]` (inkl. `walkableTopOnly` wo definiert). `getGroundYAt(px, pz, world, margin, py?)` liefert die Höhe der Oberfläche; bei `walkableTopOnly`-Blöcken zählt die Oberseite nur, wenn `py` bereits auf/über der Oberseite ist (`py >= block top - margin`). `ramp_1x4` hat einen Fallback-Def.
  - **Bewegung:** `shared/src/movement/stepPlayerMovement.ts` nutzt `getGroundYAt(…, state.y)` und `resolveStaticWorldXZ`; Spieler wird auf Boden-/Rampenfläche gesnappt, ohne seitliches Hochziehen auf Wände/Ledges.
  - **Editor (Player-Mode):** Die Kollisionswelt im Editor wird **lokal** aus den platzierten Prefabs erzeugt (`buildEditorStaticWorld()`), inkl. `walkableTopOnly` aus prefabDefs. Siehe Abschnitt „Grid/Snap“: AABBs aus Position, Size, Rotation. **Debug (B im Player-Mode):** AABBs werden farblich getrennt – **Grün** = Laufflächen (Oberseite, Rampen-Schräge), **Orange** = Wand/Seiten (nicht begehbar).
  - **Nicht entfernen:** Diese lokale Erzeugung der StaticWorld im Editor beibehalten, damit Begehbarkeit unabhängig vom Shared-Build funktioniert.

- **Rampen (ramp_1x4): Kollision und Movement (Detail):**
  - **Ramp-Runs (durchgehende Schräge):** Hintereinander platzierte Rampen gleicher Rotation und gleicher „Reihe“ (Schritt = RAMP_DEPTH entlang der Steigungsachse) werden zu **Runs** gruppiert (Shared: `getRampRuns`, Editor: gleiche Logik in `buildEditorStaticWorld`). Beim Aufbau der Kollisions-Blöcke bekommen **Fortsetzungs-Segmente** (ab dem zweiten im Run) `minY = maxY` des Vorgänger-Segments – keine zweite 0,2‑m-Basis an der Naht. So ist die Schräge an den Übergängen stetig (kein Stufen- oder Durchfall-Effekt).
  - **Bodenabfrage (getGroundYAt / isOnRamp):** Ein Rampen-Block wird nur berücksichtigt, wenn `(px, pz)` innerhalb seiner **Steigungsachse** (axis span + kleiner Naht-Überlapp `RAMP_AXIS_SEAM`) liegt. So „reicht“ das Nachbar-Segment nicht per AABB-Margin in den eigenen Bereich und klemmt nicht mehr auf den Rand-Y – das Runtergehen fühlt sich flüssig an.
  - **Sliden auf Rampen:** Die Bewegung projiziert die Schwerkraft in die Schräge (`rampSlideGravityFactor` in `shared/src/tuning/movement.ts`): bergab wird das Momentum länger gehalten bzw. beschleunigt, bergauf wird gebremst. Caps auf `slideMaxSpeedOnRamp` bleiben bestehen.
  - **Kein Durchfallen beim Sliden in die Rampe:** Snap auf Boden nutzt überall `GROUND_SNAP_TOLERANCE` (Slide, Landung aus der Luft, Dash, „stillSliding“). Zusätzlich: Wenn im Slide an der neuen Position kein gültiger Boden gefunden wird, wird ein Punkt halbes dt zurück entlang der Bewegungsrichtung abgefragt und bei gültigem Boden darauf gesnappt – so fällt man nicht durch, wenn man in einem Frame von Flur auf die Rampe rutscht.

## Loader

- **Client:** `MapLoader` lädt Map‑JSON aus `public/maps/` (z.B. `/maps/arena_blockout.json`), instanziiert Prefab‑Meshes (Three.js) und baut daraus eine **StaticWorld**‑Kollisionsrepräsentation (AABBs).  
- **Server:** Lädt dieselbe Map‑Datei relativ zum Projekt‑Root aus `maps/` (z.B. `maps/arena_blockout.json`), baut nur die StaticWorld (keine Meshes) für Movement, Spawns und Hitscan‑LOS.

## Workflow

- **Editor (tools/editor):**
  - Map im Blockout‑Editor erstellen.
  - `window.exportMapJSON()` im Dev‑Tools‑Console‑Kontext aufrufen und das Ergebnis als `arena_blockout.json` o.Ä. in `maps/` bzw. `public/maps/` speichern.
- **Client:**
  - `client/src/main.ts` lädt beim Start `/maps/arena_blockout.json` via `loadMapFromURL` und injiziert die Map in `SceneManager` + `FPSMovementController` (StaticWorld).
- **Server:**
  - `serverConfig.arenaMapPath` (Env `ARENA_MAP_PATH`, Default `maps/arena_blockout.json`) legt fest, welche Map für ArenaFFA geladen wird.
  - `ArenaFFARoom` lädt die gleiche Datei, baut StaticWorld, nutzt `spawnPoints` für Join/Respawn und verwendet die StaticWorld für Movement und Hitscan‑LOS.

