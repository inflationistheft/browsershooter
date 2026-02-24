# Multiplayer-Modell

- **Authoritative Server:** Colyseus Room ist Single Source of Truth.
- **Client:** Input-Sampling, Client-side Prediction (Movement), Reconciliation (Local Player), Interpolation (Remote Players).
- **Tickrate MVP:** 20–30 Hz; Ziel 40–60 Hz.
- **Datenfluss:** Client sendet Input-Commands → Server tickt (Movement, Combat) → State-Sync an alle → Client reconcilied/interpoliert.
- **Room-Typen:** FFA (ArenaFFARoom), TDM (später).
- **MVP Netcode:** State Sync, Input als Commands, keine Lag Compensation.

Details: Plan Abschnitt 5.
