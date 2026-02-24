# Arena-Shooter: Plan & Architektur

Kurzreferenz. Vollständiger Plan (Teil A) liegt in `.cursor/plans/` (Cursor Plan).

- **Projektvision:** Low-Poly Browser Arena-Shooter, First Person, authoritative Multiplayer (Colyseus), Apex-inspiriertes Movement, GLB-Pipeline, Blockout-Editor unter `tools/editor`.
- **Tech:** Client (TypeScript, Three.js, Vite, Rapier), Server (Node.js, Colyseus), Shared (Typen, Protokolle, Tuning).
- **Struktur:** `client/`, `server/`, `shared/`, `tools/editor/`, `docs/`.
- **Phasen:** MVP (Teil B Scaffold + Teil C Vertical Slice) → Phase 2 (Movement voll, TDM, Lag Comp) → Phase 3 (Modi, Anticheat).
- **Kontextdokumente:** `architecture.md`, `multiplayer.md`, `movement.md`, `assets.md`, `map-format.md`, `decisions.md`.

Siehe auch Definition of Done (MVP) und Risiken/Entscheidungen im vollständigen Plan.
