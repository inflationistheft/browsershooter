import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  root: ".",
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    host: "0.0.0.0", // reachable via Tailscale IP / LAN (not only localhost)
    allowedHosts: true, // allow Tailscale MagicDNS (e.g. fedora.xxx.ts.net) and other hostnames
  },
  build: {
    outDir: "dist",
    target: "es2022",
  },
});
