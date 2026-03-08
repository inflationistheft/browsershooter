# Tailscale – so geht’s (nur Config)

**Kein Firewall, keine Ports merken.** Einmal bauen, eine Config, ein Link.

---

## 1. Einmal: Build mit deiner Tailscale-IP

Deine IP holen und Client damit bauen:

```bash
cd /home/seba/GitHub/browsershooter
TAILSCALE_IP=$(tailscale ip -4)
npm run build -w shared && npm run build -w server
VITE_SERVER_URL=ws://${TAILSCALE_IP}:2567 npm run build -w client
```

(Danach musst du nur noch starten + Serve, nicht neu bauen.)

---

## 2. Starten

**Terminal 1 – Spiel (Server + Client):**

```bash
HOST=127.0.0.1 npm run start:game
```

**Terminal 2 – Tailscale Serve (einmal ausführen):**

```bash
cd /home/seba/GitHub/browsershooter
tailscale serve set-config tailscale-serve.json
```

Falls `set-config` bei dir nicht geht, stattdessen:

```bash
tailscale serve 4173
tailscale serve --tcp=2567 tcp://127.0.0.1:2567
```

---

## 3. Link

Tailscale zeigt dir einen Link, z. B. **https://fedora.tail88f92d.ts.net**.  
Diesen Link bei dir und deinem Kumpel im Browser öffnen – fertig. Kein Port, keine Firewall.

---

## Kurz

| Schritt | Befehl |
|--------|--------|
| 1. Build (einmal) | `TAILSCALE_IP=$(tailscale ip -4)` dann Build mit `VITE_SERVER_URL=ws://${TAILSCALE_IP}:2567` |
| 2. Starten | `HOST=127.0.0.1 npm run start:game` |
| 3. Serve | `tailscale serve set-config tailscale-serve.json` (oder die zwei `tailscale serve`-Befehle) |
| 4. Spielen | Link von Tailscale öffnen (https://dein-rechner.xxx.ts.net) |

Mehr Optionen (ohne Serve, Firewall etc.): [tailscale-and-production.md](tailscale-and-production.md)
