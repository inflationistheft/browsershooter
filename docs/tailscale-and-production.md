# Spiel mit Tailscale starten & Production-Modus (bessere Performance)

## Warum Production statt `npm run dev`?

- **`npm run dev`**: Vite und der Server laufen im Entwicklungsmodus. Der Client wird nicht optimiert gebaut (kein Minify, kein Tree-Shaking, Source Maps, HMR), der Server nutzt `tsx watch`. Das ist bequem zum Entwickeln, aber **Performance und Latenz sind schlechter**.
- **Production-Build**: Der Client wird einmal gebaut (minifiziert, optimiert), der Server läuft als kompilierter Node-Prozess. **Bessere Performance und stabilere FPS** – genau das, was du für Spielen (und für Tailscale-Tests) willst.

---

## 1. Production-Build lokal bauen und starten

### Schritte

1. **Alles bauen** (shared, client, server):

   ```bash
   npm run build
   ```

2. **Server starten** (Colyseus, Port 2567):

   ```bash
   npm run start -w server
   ```

3. **Client ausliefern** – eine der Optionen:

   - **Vite Preview** (Port standardmäßig 4173):
     ```bash
     npm run preview -w client
     ```
     Dann im Browser: **http://localhost:4173**

   - **Oder statischen Ordner auf Port 3000** (z. B. mit `serve`):
     ```bash
     npx serve client/dist -p 3000
     ```
     Dann im Browser: **http://localhost:3000**

Damit läuft das Spiel im Production-Modus lokal; Qualität und vor allem **Performance** sind besser als bei `npm run dev`.

---

## 2. Spiel mit Tailscale starten (Multiplayer von überall)

Tailscale gibt dem Rechner eine feste Adresse im VPN (z. B. `100.x.x.x` oder ein MagicDNS-Name wie `rechner-name`). Andere können dann über diese Adresse auf deinen Server und die Client-Seite zugreifen.

### Voraussetzungen

- Auf dem **Host-Rechner** (wo das Spiel läuft): Tailscale installiert und eingeloggt.
- **Spieler** (andere Rechner): ebenfalls Tailscale installiert und im selben Tailnet, oder du nutzt Tailscale Funnel/Share (siehe unten).

### A) Zwei Wege: mit Tailscale Serve (ohne Firewall) oder direkt (mit Firewall)

**Option 1 – Tailscale Serve (empfohlen, keine Firewall nötig)**  
Der Traffic läuft durch den Tailscale-Tunnel. Du musst **keine** Firewall-Ports öffnen.

1. **Server nur auf localhost:**  
   `HOST=127.0.0.1 npm run start -w server`
2. **Client wie gewohnt:**  
   `npm run preview -w client` (läuft auf localhost:4173)
3. **Tailscale Serve starten** (zwei Befehle, oder eine Config-Datei):

   **Variante A – zwei Befehle (einfach):**
   ```bash
   tailscale serve 4173
   tailscale serve --tcp=2567 tcp://127.0.0.1:2567
   ```
   (Zweiten Befehl in anderem Terminal oder mit `--bg` im Hintergrund.)

   **Variante B – Config-Datei (ein Befehl):**  
   Im Projekt liegt `tailscale-serve.json`. Einmal anwenden:
   ```bash
   tailscale serve set-config tailscale-serve.json
   ```

4. **Link für Kumpel:**  
   - Webseite: **https://DEIN-MAGICDNS-NAME** (z. B. `https://mein-pc`) oder **http://100.70.234.6:4173**  
   - Der Game-Client verbindet sich weiter mit **ws://DEINE-TAILSCALE-IP:2567** (wie beim Build mit `VITE_SERVER_URL`).

**Option 2 – Direkt (ohne Serve)**  
Server lauscht auf allen Interfaces; Firewall muss die Ports 4173 und 2567 erlauben (am besten nur für Tailscale, siehe `docs/firewall-tailscale-ports.md`).

- **`HOST=0.0.0.0`** (Default im Projekt):
  ```bash
  npm run start -w server
  ```
- Kumpel öffnet **http://DEINE-TAILSCALE-IP:4173**

### B) Client so bauen, dass er den richtigen Server verwendet

Der Colyseus-Server wird im Client über **`VITE_SERVER_URL`** eingebunden. Diese URL wird **beim Build** in den Client reingeschrieben. Für Tailscale musst du also **beim Build** die URL setzen, unter der der Server von den Spielern erreichbar ist.

1. **Tailscale-Adresse des Host-Rechners ermitteln**
   - Auf dem Host: `tailscale ip -4` (IPv4) oder im Tailscale-Dashboard den Rechner anklicken.
   - Oder MagicDNS: z. B. `rechner-name` (ohne `.local` wenn MagicDNS aktiv ist, je nach Einstellung).

2. **Client mit dieser URL bauen**
   - Ersetze `DEIN-TAILSCALE-NAME-ODER-IP` durch deinen Host-Namen oder die Tailscale-IP (z. B. `100.64.1.2` oder `mein-pc`).

   ```bash
   VITE_SERVER_URL=ws://DEIN-TAILSCALE-NAME-ODER-IP:2567 npm run build -w client
   ```

   Wenn du das ganze Projekt neu bauen willst (shared + client + server), aber nur der Client die URL braucht:

   ```bash
   npm run build -w shared
   npm run build -w server
   VITE_SERVER_URL=ws://DEIN-TAILSCALE-NAME-ODER-IP:2567 npm run build -w client
   ```

3. **Client ausliefern**
   - Auf dem **gleichen Host** wie der Server:
     ```bash
     npm run preview -w client
     ```
     oder
     ```bash
     npx serve client/dist -p 3000
     ```

### C) So verbinden sich andere Spieler

- **Alle im selben Tailnet**: Sie öffnen im Browser die Adresse deines Rechners, z. B.:
  - **http://DEIN-TAILSCALE-NAME-ODER-IP:4173** (wenn du `npm run preview -w client` nutzt),
  - oder **http://DEIN-TAILSCALE-NAME-ODER-IP:3000** (wenn du `serve` auf 3000 nutzt).
- Der gebaute Client verbindet sich dann automatisch mit `ws://DEIN-TAILSCALE-NAME-ODER-IP:2567` (weil du das beim Build gesetzt hast).

### Kurz-Checkliste Tailscale

| Schritt | Befehl / Aktion |
|--------|------------------|
| 1. Tailscale auf Host laufen lassen | `tailscale status` |
| 2. Host-Adresse notieren | `tailscale ip -4` oder MagicDNS-Namen |
| 3. Client mit Server-URL bauen | `VITE_SERVER_URL=ws://<HOST>:2567 npm run build -w client` |
| 4. Server starten | `npm run start -w server` |
| 5. Client ausliefern | `npm run preview -w client` oder `npx serve client/dist -p 3000` |
| 6. Andere Spieler | Im Browser `http://<HOST>:4173` bzw. `:3000` öffnen |

### Invite-Link für Kumpel (ins Tailnet einladen)

Damit dein Kumpel dein Spiel erreicht, muss er zuerst in **dein Tailnet**. Dafür schickst du ihm einen **Tailscale-Einladungslink**:

1. **Link erzeugen:** [Tailscale Admin → Users](https://login.tailscale.com/admin/users) öffnen → **Invite external users** → Tab **Copy invite link** → **Generate & copy invite link**. Der Link wird in die Zwischenablage kopiert.
2. **Link schicken:** Den Link per Chat/Mail an deinen Kumpel senden.
3. **Kumpel:** Tailscale [installieren](https://tailscale.com/download), Link im Browser öffnen und anmelden. Danach ist er in deinem Tailnet.
4. **Spiel-Link schicken:** Danach schickst du ihm die Spiel-URL, z. B. `http://DEINE-TAILSCALE-IP:4173` (oder deinen MagicDNS-Namen, z. B. `http://mein-pc:4173`). Das öffnet er im Browser und kann mitspielen.

Du kannst also **zwei Links** nacheinander schicken: zuerst den Tailscale-Invite, dann (wenn er drin ist) den Spiel-Link.

### Vorher testen (ohne Kumpel)

Du kannst prüfen, ob alles funktioniert, **bevor** du jemanden einlädst:

1. **Tailscale-IP holen:** `tailscale ip -4` (z. B. `100.64.1.2`).
2. **Client mit dieser URL bauen:**  
   `VITE_SERVER_URL=ws://100.64.1.2:2567 npm run build -w client` (deine IP einsetzen).
3. **Server + Client starten:**  
   `npm run start -w server` und in anderem Terminal `npm run preview -w client`.
4. **Test auf dem gleichen Rechner:** Im Browser **nicht** `localhost` öffnen, sondern **http://DEINE-TAILSCALE-IP:4173** (z. B. `http://100.64.1.2:4173`).  
   – Lädt das Spiel und du kommst in die Arena (ggf. „Play“ o. Ä.)? Dann ist der Aufruf über die Tailscale-Adresse ok.
5. **Optional – zweites Gerät:** Handy oder anderer PC mit Tailscale (gleicher Account oder schon eingeladener Testnutzer), im Browser **http://DEINE-TAILSCALE-IP:4173** öffnen. So testest du genau die Situation wie beim Kumpel.

Wenn Schritt 4 (oder 5) klappt, wird es auch mit dem Kumpel funktionieren, sobald er im Tailnet ist.

---

## 3. Optional: Nur lokal spielen (localhost)

Wenn du nur auf dem gleichen Rechner spielst, reicht der Standard:

- Build: `npm run build`
- Server: `npm run start -w server`
- Client: `npm run preview -w client` → **http://localhost:4173**

Dann verwendet der Client die Default-URL `ws://localhost:2567` (steht in `client/src/config/index.ts`).

---

## 4. Wenn nichts geht – Checkliste

1. **Spiel im eigenen Terminal starten:**  
   `npm run start:game` oder `./scripts/start-game.sh` (zwei Terminals: Server + `npm run preview -w client` geht auch).

2. **Zuerst localhost testen:** Browser **http://localhost:4173** – geht das? Wenn nein: Port frei? (`ss -tlnp | grep 4173`), Build vorhanden? (`npm run build`).

3. **Tailscale-URL (z. B. MagicDNS) geht nicht:**  
   - Mit **Tailscale Serve:** `tailscale serve 4173` und `tailscale serve --tcp=2567 tcp://127.0.0.1:2567` ausführen.  
   - Ohne Serve: Firewall öffnen (nur für Tailscale), siehe [docs/firewall-tailscale-ports.md](firewall-tailscale-ports.md).

4. **„Host not allowed“ im Browser:** In `client/vite.config.ts` ist `preview.allowedHosts: true` gesetzt – Preview neu starten.

5. **Kumpel kommt nicht rein:** Er muss im Tailnet sein (Einladungslink), dann **http://DEINE-TAILSCALE-IP:4173** (oder dein MagicDNS mit Serve) nutzen.

---

## 5. Zusammenfassung Performance

- **Bessere Performance**: Immer dann, wenn du **gebauten** Client und **produktiven** Server nutzt (`npm run build` + `npm run start -w server` + Client aus `client/dist` mit `preview` oder `serve`).
- **Schlechtere Performance**: Wenn du mit `npm run dev` arbeitest (unoptimierter Client, Dev-Server).
- **Tailscale**: Server mit `HOST=0.0.0.0` (oder Default), Client mit `VITE_SERVER_URL=ws://<Tailscale-Host>:2567` bauen, dann können alle im Tailnet über die Tailscale-Adresse des Hosts verbinden. Mit **Tailscale Serve** brauchst du keine Firewall zu öffnen.
