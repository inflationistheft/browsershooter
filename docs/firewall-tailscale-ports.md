# Firewall: Ports nur für Tailscale öffnen

**Hinweis:** Wenn du **Tailscale Serve** nutzt (siehe `docs/tailscale-and-production.md`, Abschnitt „Tailscale Serve“), musst du **keine** Firewall-Regeln setzen – der Traffic läuft dann durch den Tailscale-Tunnel.

Diese Anleitung brauchst du nur, wenn du **ohne** Tailscale Serve arbeitest (Server und Client direkt auf deiner Tailscale-IP erreichbar).

Damit dein Kumpel das Spiel erreicht, müssen die Ports **4173** (Client) und **2567** (Game-Server) erreichbar sein. Statt sie für alle zu öffnen, erlauben wir sie **nur für Tailscale** (Quell-IPs 100.64.0.0/10). So bleibt der Rechner sicher.

## Einmal ausführen (mit sudo)

```bash
# Nur Verbindungen aus dem Tailscale-Netz (100.64.0.0/10) erlauben
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="100.64.0.0/10" port port="4173" protocol="tcp" accept'
sudo firewall-cmd --permanent --add-rich-rule='rule family="ipv4" source address="100.64.0.0/10" port port="2567" protocol="tcp" accept'
sudo firewall-cmd --reload
```

## Prüfen

```bash
sudo firewall-cmd --list-rich-rules
```

Dort sollten die beiden `source address="100.64.0.0/10"`-Regeln für 4173 und 2567 erscheinen.

## Rücksetzen (Ports wieder schließen)

```bash
sudo firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address="100.64.0.0/10" port port="4173" protocol="tcp" accept'
sudo firewall-cmd --permanent --remove-rich-rule='rule family="ipv4" source address="100.64.0.0/10" port port="2567" protocol="tcp" accept'
sudo firewall-cmd --reload
```
