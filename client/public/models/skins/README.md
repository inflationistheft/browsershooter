# Skins

PNG-Texturen hier ablegen, um die **Base-Color (Diffuse)** von Player und Dummies zu überschreiben.

## Dateinamen

- `default.png` – Standard-Skin (ersetzt die eingebettete Diffuse)
- `orange.png` – Orange-Skin
- `purple.png` – Purple-Skin

Beliebige weitere Namen möglich (z.B. `blue.png`, `red.png`). Der Dateiname ohne `.png` ist die Skin-ID.

## Anforderungen

- PNG muss dasselbe UV-Layout wie die Original-Diffuse im GLB haben
- Gleiche Auflösung empfohlen (z.B. 1024×1024)

## Nutzung

**Player-Skin** (über `.env` oder Config):
```env
VITE_PLAYER_SKIN=orange
```

**Dummy-Skins** werden per Index verteilt (default, orange, purple für die drei Dummies).

Fehlende Dateien → GLB nutzt weiter die eingebettete Diffuse.
