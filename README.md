# browsershooter

3D Multiplayer Browser Arena-Shooter (Desktop, First Person). Low-poly, authoritative multiplayer (Colyseus), Apex-inspired movement, GLB pipeline, blockout map editor.

## Tech stack

- **Client:** TypeScript, Three.js, Vite, Rapier (WASM)
- **Server:** Node.js, TypeScript, Colyseus
- **Shared:** Types, protocol, tuning
- **Editor:** `tools/editor` – blockout map editor (separate Vite app)

## Setup

```bash
npm install
npm run build -w shared   # build shared before client/editor
```

## Scripts

- **`npm run dev`** – baut shared einmal und startet Server + Client (ein Befehl)
- `npm run dev:client` – nur Client (Vite, Port 3000)
- `npm run dev:server` – nur Server (Colyseus, Port 2567)
- `npm run editor` – Map-Editor (Port 3001)

Nach Start: Browser **http://localhost:3000** öffnen, auf die Szene klicken (Pointer Lock), WASD + Maus. **Sprint:** Shift, **Slide:** Strg (im Lauf), **Slide-Jump:** im Slide Space.

**Eigene GLB-Modelle:** GLBs in `client/public/models/` legen und per `.env` oder Config nutzen: `VITE_PLAYER_MODEL_URL=/models/player.glb`, `VITE_DUMMY_MODEL_URL=/models/dummy.glb`. Leer = Platzhalter-Boxen.

## Structure

- `client/` – game frontend
- `server/` – Colyseus rooms and simulation
- `shared/` – types, constants, tuning
- `tools/editor/` – map blockout editor
- `docs/` – architecture and context docs

See `docs/` and the architecture plan for details.
