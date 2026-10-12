import { defineConfig } from "vite";

export default defineConfig({
  // GitHub Pages serves this repo from the root of main under /ecotourism-/.
  base: "/ecotourism-/",
  root: "dev",
  publicDir: "../public",
  build: {
    // Compiled site lands in the repository root so Pages can serve it.
    outDir: "../",
    emptyOutDir: false,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
  preview: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
