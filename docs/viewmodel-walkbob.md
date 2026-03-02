# WalkBob – technische Dokumentation

Dokumentation der aktuellen WalkBob-Implementierung in `client/src/game/ViewmodelMovement.ts`, damit du gezielt verbessern kannst.

---

## Übersicht

WalkBob bewegt den ViewmodelRoot (Arme + Waffe) prozedural beim Laufen: kleine vertikale, seitliche und Rotations-Offsets, die als Welle laufen. Keine GLB-Animation.

---

## 1. Eingabedaten

- **velocity** (x, y, z): Spieler-Geschwindigkeit pro Frame
- **state**: `grounded` | `sliding` | `airborne`
- **crouching**: true wenn geduckt

---

## 2. moveFactor (0..1)

```
horSpeed = sqrt(vx² + vz²)
rawFactor = min(1, horSpeed / 8)           // 8 = MAX_SPEED_FOR_FACTOR
targetMoveFactor = (grounded && horSpeed > 0.15 && !sliding) ? rawFactor : 0
moveFactor = lerp(moveFactor, targetMoveFactor, dt / 0.06)
```

- Geglätteter Anteil der Bewegung (0 = still, 1 = Vollspeed)
- Bob läuft nur, wenn `targetMoveFactor > 0`
- Bei Slide oder airborne wird auf 0 geblendet

---

## 3. Bob-Phase

```
targetPhaseSpeed = (grounded && speed>0.15 && !slide)
  ? min(1, horSpeed/8) * bobFrequency * bobMultiplier : 0
smoothedPhaseSpeed = lerp(smoothedPhaseSpeed, targetPhaseSpeed, dt / phaseSpeedSmoothTau)
bobPhase += dt * smoothedPhaseSpeed
```

- **bobPhase** läuft kontinuierlich, wird nie zurückgesetzt
- **smoothedPhaseSpeed** verhindert Stottern beim Stoppen
- Phase-Speed aus geglätteter horSpeed, nicht nur moveFactor

---

## 4. Strafe vs. Vorwärts (A/D vs. W/S)

**Erkennung:** `forwardWeight = abs(vz) / (abs(vx) + abs(vz))`, `strafeWeight = abs(vx) / …`

### A) Strafe Lean (state-basiert, kein Sinus)

Konstanter Haltungs-Offset, solange A/D gedrückt:

- **strafeLeanX**: Position leicht zur Seite (in Bewegungsrichtung)
- **strafeLeanRoll**: Kleiner Roll (Z) in Strafe-Richtung
- Geglättet mit `strafeLeanTau`, blendet beim Stoppen sauber raus

### B) Strafe Bob (Sinus, andere Achsen-Mischung)

Wenn Strafe dominiert (`strafeWeight` hoch):

- **Y-Bob reduziert** (yMult = 1 - strafeWeight * 0.7)
- **X-Bob erhöht** (xMult = 1 + strafeWeight * 0.5)
- **Roll-Bob stärker** (rollMult = 1 + strafeWeight * 0.8)
- Gleiche Frequenz wie Vorwärtslauf, keine phase*2

**Diagonal (W+D):** Mischung aus beidem (forwardWeight + strafeWeight ≈ 1).

---

## 5. Wellenform (Position + Rotation)

```
phase = bobPhase
ampBlend = smooth ramp 0..1 from moveFactor (threshold 0.05)
wY = 0.4 + 0.6 * forwardWeight
wX = 0.4 + 0.6 * strafeWeight
wRoll = 0.5 + 0.5 * strafeWeight

yMult   = 1 - strafeWeight * strafeBobYReduce
xMult   = 1 + strafeWeight * strafeBobXBoost
rollMult = 1 + strafeWeight * strafeBobRollBoost

bobY    = ampY * ampBlend * wY * yMult * sin(phase)
bobX    = ampX * ampBlend * wX * xMult * sin(phase + 0.3)
bobRoll = ampRoll * ampBlend * wRoll * rollMult * sin(phase + 0.7)
bobPitch = ampPitch * ampBlend * sin(phase + 0.4)
```

**Koordinaten:**

- **bobY**: vertikal, reduziert beim Strafe
- **bobX**: lateral, erhöht beim Strafe
- **bobRoll**: Roll, stärker beim Strafe
- **strafeLeanX/Roll**: additiver Haltungs-Offset

**Strafe-Tuning:**

| Param | Standard | Bedeutung |
|-------|----------|-----------|
| strafeLeanX | 0.01 | seitlicher Position-Offset |
| strafeLeanRoll | 0.025 | Roll-Offset in Strafe-Richtung |
| strafeLeanTau | 0.06 | Blend-Zeit für Lean |
| strafeBobYReduce | 0.7 | Y-Bob-Reduktion bei Strafe |
| strafeBobXBoost | 0.5 | X-Bob-Verstärkung bei Strafe |
| strafeBobRollBoost | 0.8 | Roll-Bob-Verstärkung bei Strafe |

**Amplituden (Standard):**

| Param | Wert   | Bedeutung            |
|-------|--------|----------------------|
| bobAmplitudeY   | 0.01512 | vertikale Amplitude  |
| bobAmplitudeX   | 0.0156  | seitliche (Links-Rechts) |
| bobAmplitudeRoll  | 0.0052  | Roll-Amplitude       |
| bobAmplitudePitch | 0.00258 | Pitch-Amplitude      |

---

## 6. Wo es in die ViewmodelRoot fließt

```
_targetPos.set(bobX + strafeLeanX, bobY + slideY, recoilPullback + slideZ)
_targetRot.set(swayPitch + recoilPitch + bobPitch, swayYaw, slideRotZ + recoilRoll + bobRoll + strafeLeanRoll, "YXZ")
```

Bob-Offsets werden additiv mit Sway, Recoil und Slide kombiniert.  
Dann: `_pos.lerp(_targetPos)` und `_rot` lerp zu `_targetRot` (Tau 0.025).

---

## 7. Verhalten im Detail

| Situation | moveFactor | Bob-Phase | Bob-Output |
|-----------|------------|-----------|------------|
| Idle (velocity 0) | → 0 (geglättet) | stoppt | → 0 (über m) |
| Walk (velocity ~4) | ~0.5 | läuft | volle Welle |
| Run (velocity ~8) | 1 | läuft schneller | stärkere Welle |
| Crouch walk | ~0.5 * 0.5 | langsamer | halbe Amplitude |
| Slide | 0 | stoppt | 0 |
| Airborne | 0 | stoppt | 0 |
| Strafe (D) | ~0.5 | läuft | wenig Y, viel X + Roll + Lean rechts |
| Diagonal (W+D) | ~0.5 | läuft | Mischung Vorwärts- + Strafe-Bob |

---

## 8. Mögliche Anpassungen

- **Schritt-Timing:** Frequenz ist fest (`bobFrequency: 10`), nicht an echte Schrittlänge gekoppelt
- **Wellenform:** Y und X nutzen `sin`, keine Perlin oder komplexere Kurven
- **Phasenversatz:** X und Roll haben feste Offsets (0.3, 0.7)
- **Speed-Mapping:** `MAX_SPEED_FOR_FACTOR = 8` ist fest
- **Richtungs-Einfluss:** Vorwärts vs. Strafe haben unterschiedliche Bob-Mischung und Strafe-Lean

---

## 9. Relevante Dateien

- **Logik:** `client/src/game/ViewmodelMovement.ts` (Zeilen 87–115)
- **Tuning:** `client/src/config/index.ts` → `tuning.povMovement`
