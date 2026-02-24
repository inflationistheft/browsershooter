# Technische Architektur

- **Client:** TypeScript, Three.js, Vite. Systeme: Rendering, Input, Camera, Movement, Physics (Rapier), Networking (Colyseus), Gameplay/Weapons, UI/HUD, AssetLoader, MapLoader.
- **Server:** Node.js + TypeScript, Colyseus (authoritative Rooms). Tick-basierte Simulation, Rapier für Collision, Movement-Validation, Combat, State-Sync.
- **Shared:** Typen, Protokolle, Konstanten, Tuning (Movement, Weapons).
- **Update-Reihenfolge Client:** Input → Networking → Movement → Physics → Gameplay → Camera → Rendering → UI → Debug.
- **Repo-Struktur:** Siehe Plan (client/, server/, shared/, tools/editor/, docs/).

Erweiterung: siehe `plan.md` bzw. `.cursor/plans/`.
