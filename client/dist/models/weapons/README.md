# Waffen für Viewmodel (FPS-Arme)

Lege hier die GLB-Datei der Waffe ab. Standard: **battlerifle.glb**

- Wenn deine Datei z. B. „Battle Rifle.glb“ heißt, benenne sie zu `battlerifle.glb` um (ohne Leerzeichen).
- Alternativ in `.env` eintragen: `VITE_VIEWMODEL_WEAPON_URL=/models/weapons/Battle Rifle.glb`

**Wichtig für die Waffe:**
- Pivot/Griff am Ursprung (0,0,0) der Waffe – dort wird sie am Right-Hand-Bone angeheftet
- Ausrichtung: Lauf sollte in -Z zeigen (von der rechten zur linken Hand)
- Mixamo-Rig: Bone `mixamorig:RightHand`
