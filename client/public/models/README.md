# Modelle & Animationen

- **Player:** GLB/GLTF hier ablegen (z. B. `player.glb`) – FPS-View-Model (Arme/Waffe oder Vollkörper).
- **Dummy:** GLB für Dummies (z.  B. `dummy.glb`) – wird geklont für Gegner/Test-Charaktere.

In `.env` oder `client/.env` eintragen:
- `VITE_PLAYER_MODEL_URL=/models/player.glb`
- `VITE_DUMMY_MODEL_URL=/models/dummy.glb`
- `VITE_VIEWMODEL_WEAPON_URL=/models/weapons/battlerifle.glb` (optional)
- `VITE_PLAYER_SKIN=orange` (optional – PNG aus `skins/`)

---

**weapons/** – Waffen-GLB für das Viewmodel (POV-Arme). Wird am Right-Hand-Bone verankert.  
Siehe `weapons/README.md`. Standard: `battlerifle.glb`.

**skins/** – PNG-Texturen für Base-Color-Varianten (default.png, orange.png, purple.png).  
Siehe `skins/README.md`.

**animations/** – Ordner für Animations-Clips (GLB mit Animationen oder separate Dateien).  
Namen z. B. nach `docs/assets.md`: Idle, Walk, Run, Jump, Crouch, Slide, Shoot, Reload.
