# Movement-Architektur

- **Schichten:** Input Sampling → Movement State Machine → Movement Execution (Rapier Queries) → Server Validation.
- **States:** Grounded, Airborne, Sliding, WallContact.
- **Tuning:** Zentral in `shared/src/tuning/movement.ts` (accel, friction, jump, slide, wall bounce, coyote, jump buffer).
- **Debug:** Velocity, State, Ground Normal, Tick Drift, FPS (client/src/debug/DebugOverlay).

Details: Plan Abschnitt 6.
