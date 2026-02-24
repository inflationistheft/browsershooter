# Technische Entscheidungen (ADR-light)

- **Rapier statt Cannon/Andere:** Einheitliche Physik Client+Server, WASM, gute Performance; kinematisches Movement.
- **Map als JSON:** Git-diff-freundlich, manuell editierbar, versionierbar.
- **Editor getrennt vom Spiel:** Keine Spiel-Logik im Editor; klare Trennung; tools/editor eigenes Vite-Projekt.
- **Monolithisches Repo:** Ein Codebase, einfacheres Debugging, workspaces für client/server/shared/editor.
- **Colyseus:** Authoritative Rooms, Schema-basierter State-Sync, TypeScript-Support.
