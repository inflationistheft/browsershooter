# Map-Format (JSON)

- **Schema:** version, name, gridSize, prefabs[], spawnPoints[].
- **prefabs:** id (Referenz auf Prefab-Definition), position [x,y,z], rotation (Y Grad).
- **Prefab-Definitionen:** shared/src/data/prefabDefs.json: mesh, collision (box/trimesh/none), size/extents.
- **Grid/Snap:** gridSize in Metern; Editor snappt Position und optional Rotation (90°).
- **Loader:** MapLoader (client) liest JSON, instanziiert Meshes + Rapier-Collider. Server lädt gleiche Map nur für Collision.

Beispiel: Plan Abschnitt 7.
