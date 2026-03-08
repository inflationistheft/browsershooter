#!/usr/bin/env bash
# Startet Server + Client (ohne Build). Vorher einmal: npm run build
cd "$(dirname "$0")/.."
echo "Server + Client starten..."
echo "  Lokal: http://localhost:4173"
echo "  Tailscale: tailscale serve set-config tailscale-serve.json  → dann Link von Tailscale nutzen"
echo ""
exec npm run start:game
