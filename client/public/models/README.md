# Modelle & Animationen

- **Player:** GLB/GLTF hier ablegen (z. B. `player.glb`) – FPS-View-Model (Arme/Waffe oder Vollkörper).
- **Dummy:** GLB für Dummies (z.  B. `dummy.glb`) – wird geklont für Gegner/Test-Charaktere.

In `.env` oder `client/.env` eintragen:
- `VITE_PLAYER_MODEL_URL=/models/player.glb`
- `VITE_DUMMY_MODEL_URL=/models/dummy.glb`

---

**animations/** – Ordner für Animations-Clips (GLB mit Animationen oder separate Dateien).  
Namen z. B. nach `docs/assets.md`: Idle, Walk, Run, Jump, Crouch, Slide, Shoot, Reload.
