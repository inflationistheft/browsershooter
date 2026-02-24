# GLB/GLTF Asset-Konventionen

- **Scale:** Einheit 1 = 1m. Modelle in Metern exportieren.
- **Origin:** Boden auf Y=0, Mitte XZ für Charaktere.
- **Naming:** Klare Clip-Namen (Idle, Walk, Run, Jump, …), Bones konsistent (hand_r, hand_l, muzzle, shell_eject).
- **Sockets/Attachment:** hand_r, muzzle, shell_eject als Bones oder leere Nodes.
- **Validierung:** Fehlende Bones/Clips, Skala, Sockets prüfen (Tool oder Build-Step).
- **Pipeline:** AssetLoader (client) lädt GLB über Three.js GLTFLoader; Animation Mixer/Clips; später Weapon-Sockets an Skeleton.

Erweiterung: siehe Plan Abschnitt 4.
