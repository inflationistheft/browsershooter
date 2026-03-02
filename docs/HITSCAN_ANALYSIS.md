# Hitscan & Hit-Registration – Code-Analyse & Best Practices

## Übersicht

Dieses Dokument analysiert unser Schieß-System im Vergleich zu etablierten Best Practices aus Competitive FPS (Valve, Overwatch, Valorant, Gabriel Gambetta).

---

## Best Practices (Industrie-Standard)

### 1. Ray-Origin: Kamera-Position

**Regel:** Der Ray muss dort starten, wo der Spieler visuell zielt – also an der **Kamera-Position** (Augen-Höhe), nicht an der Physics-Position.

- **Unity:** `ScreenPointToRay()` / `ViewportPointToRay()` – Ray von Near-Clipping-Plane
- **Unreal:** `GetPlayerViewPoint()` für Kamera-Transform
- **Grund:** Parallax – wenn die Kamera (z.B. durch Smoothing) hinter der echten Spielerposition zurückbleibt, würde ein Ray von der Physics-Position nicht mit dem Fadenkreuz übereinstimmen.

**Unser Stand:** ✅ **Umgesetzt.** Beim Schuss senden wir `shootClientX/Y/Z` = Kamera-Position (`getEyePosition()`). Server nutzt diese direkt als Ray-Origin (ohne +eyeHeight).

---

### 2. Schussgebundene Daten (Shot-Tied Input)

**Regel:** Der Client sendet beim Schuss die exakten Werte **zum Schusszeitpunkt** – Position, Richtung, optional Timestamp.

- **Gabriel Gambetta:** *"Client sends exact timestamp of your shot, and the exact aim of the weapon"*
- **Ziel:** Kein Input-Timing-Mismatch – der Server soll nicht 1–2 Ticks alte Daten verwenden.

**Unser Stand:** ✅ **Umgesetzt.** `shootAimX/Y/Z` und `shootClientX/Y/Z` werden nur bei `shoot: true` gesendet und serverseitig bevorzugt verwendet.

---

### 3. Latency Concealment

**Regel:** Client zeigt sofort Effekte (Muzzle Flash, Sound, Recoil); permanente Ergebnisse (Damage, Hitmarker) erst nach Server-Bestätigung.

**Unser Stand:** ✅ Effekte auf Client; Damage nur nach `"hit"` vom Server.

---

### 4. Server-Side Rewind (Lag Compensation)

**Regel:** Der Server rekonstruiert die Welt zum Zeitpunkt des Schusses und raycastet gegen **vergangene** Ziel-Positionen, nicht gegen die aktuellen.

- **Ablauf:** Client sendet Timestamp → Server rewinded alle Ziele auf ihre Position zu diesem Zeitpunkt → Raycast gegen rewindete Welt
- **Valorant/Overwatch:** Animation-Rollback, Bounding-Box-Optimierung
- **Conditional Lag Compensation:** Rewind auf z.B. 250–500 ms begrenzen (Battlefield 4, Overwatch, CoD)

**Unser Stand:** ❌ **Nicht implementiert.** Wir raycasten gegen die **aktuellen** Server-Positionen der Ziele. Bei Latenz und bewegten Zielen kann das zu „verpassten“ Treffern führen, obwohl der Spieler sauber gezielt hat.

---

## Unsere aktuelle Architektur

### Ray-Origin (Stand: nach Parallax-Fix)

| Szenario                | Origin-Quelle           | Beschreibung                               |
|-------------------------|-------------------------|--------------------------------------------|
| Schuss mit shoot-Daten  | `shootClientX/Y/Z`      | Kamera-Position (Augen-Höhe)               |
| Schuss ohne shoot-Daten | `clientX/Y/Z` + eyeHeight | Füße + Augenhöhe (Fallback)             |
| Kein Client-Pos         | `shooter.x/y/z` + eyeHeight | Server-Position                         |

### Ray-Richtung

| Szenario                | Richtungs-Quelle        |
|-------------------------|-------------------------|
| Mit shoot-Daten         | `shootAimX/Y/Z`         |
| Mit aimDir              | `aimDirX/Y/Z`           |
| Fallback                | Server yaw/pitch        |

### Trust-Radius

- `CLIENT_POS_TRUST_RADIUS = 5m` – Client-Position wird nur innerhalb 5 m von der Server-Position akzeptiert (Anti-Cheat).

### Hitbox-Layout (Server)

- **Head:** Sphäre, optional bone-basiert
- **Body:** Vertikale Kapsel, optional bone-basiert
- **LOS-Check:** `rayArenaIntersection` gegen Wände vor Hit

---

## Bewertung: Was ist Best Practice?

| Aspekt                | Best Practice              | Unser Stand    | Bewertung                    |
|-----------------------|----------------------------|----------------|------------------------------|
| Ray von Kamera        | Ja                         | Ja             | ✅ Entspricht                 |
| Shot-tied aim/pos     | Ja                         | Ja             | ✅ Entspricht                 |
| Latency Concealment   | Ja                         | Ja             | ✅ Entspricht                 |
| Server-Side Rewind    | Ja (Ziele zurückspulen)    | Nein           | ⚠️ Nächster möglicher Schritt |

---

## Empfehlung: Server-Side Rewind (Optional)

Für einen echten Competitive-Standard wäre **Lag Compensation** der nächste Schritt:

1. **Client** sendet `shootTimestamp` (geschätzte Server-Zeit beim Schuss, z.B. `serverTime - RTT/2 - interpolationDelay`).
2. **Server** speichert pro Tick die Positionen aller Spieler in einem History-Buffer (z.B. 500 ms).
3. Beim Schuss: Server wählt den passenden Vergangenheits-Snapshot, rewinded Ziel-Hitboxen, führt Raycast aus, setzt danach alles zurück.

**Aufwand:** Deutlich höher (History-Speicher, Rollback-Logik, ggf. animation-basierte Hitboxen wie bei Valorant).

**Für MVP/Low-Latency:** Unser aktueller Ansatz (Kamera-Origin + Shot-tied-Daten) deckt den häufigsten Fall ab: **sich bewegender Schütze** und **Input-Timing**. Das Problem „Ziel hat sich bewegt, seit ich gezielt habe“ bleibt ohne Rewind bestehen.

---

## Datenfluss (aktuell)

```
Client Tick:
  movement.update() → snap
  camera.setTargetPosition(snap + eyeHeight), setRotation(yaw, pitch)
  aimDir = camera.getAimDirection()
  shootEyePos = state.shoot ? camera.getEyePosition() : undefined
  sendInput({ ..., aimDir, shootAim/shootClient bei shoot })

Server Tick:
  onInput → _lastInput = input
  Bewegung (lastInput)
  hitscanRaycast(shooter, lastInput):
    - Origin: shootClient (eye) wenn vorhanden, sonst clientPos+eye / server+eye
    - Richtung: shootAim wenn vorhanden, sonst aimDir, sonst yaw/pitch
    - Ray gegen aktuelle Ziel-Positionen
```

---

## Referenzen

- [Gabriel Gambetta – Lag Compensation](https://www.gabrielgambetta.com/lag-compensation.html)
- [Valve – Latency Compensating Methods](https://developer.valvesoftware.com/wiki/Latency_Compensating_Methods_in_Client/Server_In-game_Protocol_Design_and_Optimization)
- [The Art of Hit Registration](https://danieljimenezmorales.github.io/2023-10-29-the-art-of-hit-registration/)
- Valorant Tech Blog (Unreal Engine, Animation Rollback)
- Overwatch GDC 2017 – Gameplay Architecture and Netcode
