### Client-Architektur (High-Level)

- **Entry-Point**: `client/src/main.ts`
  - Initialisiert das `#app`‑Element, erzeugt das Canvas und entscheidet anhand der URL‑Parameter zwischen:
    - **Tuner** (`?tuner=1` / `?tuner=3p`)
    - **Blockout-Editor** (`?editor=1`, bootet `tools/editor`)
    - **Spielmodus** (Standard-Fall)
- **GameLoop** (`client/src/core/GameLoop.ts`):
  - Feste Simulations-Tickrate über `TICK_MS` aus `shared`, Render mit variabler Framerate.
  - Ruft pro Tick `ClientGame.update(dt)` und pro Frame `ClientGame.render(dt)` auf.
- **ClientGame** (`client/src/core/ClientGame.ts`):
  - Orchestriert Tick- und Render-Systeme; `addTickSystem` / `addRenderSystem`; Reihenfolge der Registrierung = Ausführungsreihenfolge.
- **GameSessionState** (`client/src/game/GameSessionState.ts`):
  - Gemeinsamer, mutabler Pro-Frame-Zustand (z. B. `shotThisFrame`, `lastLocalHealth`, `localRespawnNoLerpTime`, Cooldowns, `inputTick`, `debugMode`, `currentEyeHeight`, Hitbox-Positionen für Input).
- **GameSystems** (`client/src/game/GameSystems.ts`):
  - **Tick**: `LocalPlayerTickSystem` (Input, Movement, Kamera-Ziel, Respawn, Schuss-Logik), `NetworkingTickSystem` (PlayerInput bauen, senden, Reconcile).
  - **Render**: `ViewmodelRenderSystem` (Kamera-Lerp, lokales Viewmodel, Tracer/Muzzle, Remote-Mixer), `SceneAndDebugRenderSystem` (Hitbox-Dummy, Remote-Sync, Debug-Hitboxes, Scene-Render), `UiHudRenderSystem` (Healthbars, HUD, Damage/Hit/Killfeed/Crosshair, Tracer/Impact, Debug-Overlay).
  - Alle Systeme erhalten einen gemeinsamen `GameContext` (State + Refs auf Subsysteme).

### Wichtige Systeme im Spielmodus

- **Rendering**
  - `SceneManager` (`client/src/systems/rendering/SceneManager.ts`): Hält Three.js‑Scene, Renderer und die aktuelle Map‑Instanz.
  - VFX:
    - `BulletTracerSystem` (`client/src/game/BulletTracerSystem.ts`): Pooled Bullet‑Tracers.
    - `BulletImpactSystem` (`client/src/game/BulletImpactSystem.ts`): Einschuss-Sparks/Decals.
- **Kamera**
  - `FPSCamera` (`client/src/systems/camera/FPSCamera.ts`): Glättet Position/Rotation, erhält pro Tick ein Movement‑Snapshot und wird pro Frame interpoliert.
- **Input**
  - `InputSampler` (`client/src/systems/input/InputState.ts`):
    - Liest Tastatur/Maus, erzeugt einen `InputState` (moveX/moveZ, jump, slide, crouch, dash, yaw/pitch, shoot, reload, debug).
    - Bietet Pointer‑Lock‑Handling und Maus‑Sensitivität (geteilt mit Editor).
- **Movement**
  - `FPSMovementController` (`client/src/systems/movement/FPSMovementController.ts`):
    - Adaptiert `InputState` in ein `MovementStepInput` für `shared/src/movement/stepPlayerMovement.ts`.
    - Hält aktuelle Position/Velocity/Yaw/Pitch und gibt bei Bedarf ein `MovementSnapshot` an andere Systeme aus.
  - Shared‑Logik:
    - `stepPlayerMovement`, `tickMovementTimers` in `shared/src/movement/stepPlayerMovement.ts`.
    - `StaticWorld` in `shared/src/world/StaticWorld.ts` + Arenageometrie in `shared/src/arena`.
- **Networking**
  - `ColyseusClient` (`client/src/systems/networking/ColyseusClient.ts`):
    - Baut Verbindung (`connect`), joint Räume (`joinOrCreate`), sendet `PlayerInput` (`sendInput`) und misst Ping.
  - `inputStateToPlayerInput` (`client/src/systems/networking/inputMapping.ts`):
    - Mappt `InputState` + Movement-Snapshot + Aim‑Richtung in `PlayerInput` (shared).
  - `RemotePlayerSync` (`client/src/game/RemotePlayerSync.ts`):
    - Spawnt/entfernt 3rd‑Person‑Meshes für andere Spieler.
    - Interpoliert remote Position/Rotation, synchronisiert Spawns und führt sanfte Reconciliation gegen den Server durch.
    - Koppelt 3rd‑Person‑Waffen, Mündungsfeuer (3P) und Animation (`PlayerAnimationSystem`) an die replizierte State.
- **UI / HUD**
  - Hauptkomponenten unter `client/src/systems/ui/`:
    - `HUD.ts`: Crosshair, Health-/Shield‑Bar, Dash‑Indikator, Weapon‑Panel, Respawn-Overlay.
    - `PlayerHealthBars.ts`: Healthbars über getroffenen Gegnern (Screen‑Space, begrenzte Anzahl).
    - `HitIndicator.ts`, `ScreenDamageFeedback.ts`, `CrosshairHitFeedback.ts`, `Killfeed.ts`, `PauseMenu.ts`, `SettingsMenu.ts`.
  - Debug:
    - `DebugOverlay.ts` / `DebugVisualization.ts`: zusätzliche Infos zu Movement, Netzwerk und Hitbox‑Positionen.
- **Map Loading**
  - `MapLoader` (`client/src/systems/mapLoader/MapLoader.ts`):
    - Lädt `MapData` aus `public/maps/*.json`, instanziiert Prefab‑Meshes und erzeugt die `StaticWorld` via `buildStaticWorldFromMap`.

### Tick vs. Render – Datenfluss

- **Tick** (über `ClientGame.update(dt)`):
  1. **LocalPlayerTickSystem**: Liest `InputState`, aktualisiert Movement, Kamera-Ziel, Respawn-Handling, Schuss-/Reload-Cooldowns und setzt `state.shotThisFrame` bei Schuss.
  2. **NetworkingTickSystem**: Baut `PlayerInput` (inkl. `lastHitboxPositions` aus State), sendet via `ColyseusClient.sendInput`, erhöht `inputTick`, ruft `RemotePlayerSync.reconcile(room)` auf.
- **Render** (über `ClientGame.render(dt)`):
  1. **ViewmodelRenderSystem**: Kamera-Lerp/Snap (inkl. Respawn-Fenster), lokales Viewmodel/Animation/Muzzle/Tracer, setzt `state.shotThisFrame = false`, `updateRemoteMixers(dt)`.
  2. **SceneAndDebugRenderSystem**: Hitbox-Dummy aktualisieren, `state.lastHitboxPositions` setzen, `RemotePlayerSync.update`, Debug-Hitboxes, `SceneManager.render(camera)`.
  3. **UiHudRenderSystem**: Healthbars, HUD, Damage-/Hit-/Killfeed-/Crosshair-Feedback, Tracer/Impact-Update, Debug-Overlay.

### Verantwortungstrennung (Soll-Zustand)

- **Shared**: Deterministische Spielregeln (Movement, Kollisionswelt, Tuning, Protokoll/Typen).
- **Client**:
  - **Input**: Nur Sampling und Entprellung – keine Gameplay-Entscheidungen.
  - **Movement/Camera**: Prediction, Crouch-/Slide-/Dash‑Zustände, Kameraverfolgung.
  - **Networking**: Senden von `PlayerInput`, Empfangen von `ArenaState` + Events (`hit`, `hitReceived`, `kill`, `shot`).
  - **Rendering/VFX/UI**: Rein visuelle Darstellung; keine Server-Autorität.
- **Server** (nur der Vollständigkeit halber): Autoritative Movement-/Hit-/Damage‑Entscheidungen auf Basis der shared‑Logik.

