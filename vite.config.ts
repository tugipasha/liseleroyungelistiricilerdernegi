import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // GitHub Pages sunucu çalıştıramaz: siteyi statik HTML olarak üret.
    spa: { enabled: true },
    prerender: {
      enabled: true,
      crawlLinks: true,
      // Hiçbir yerden link verilmeyen sayfalar crawler'a görünmüyor, elle ekli:
      pages: [{ path: "/about" }, { path: "/oyunlar" }],
    },
  },
  nitro: false,
  vite: {
    build: { outDir: "dist" },
    server: { host: "0.0.0.0", port: 3000, allowedHosts: true },
  },
});
