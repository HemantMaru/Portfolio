import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePluginSitemap } from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePluginSitemap({
      hostname: "https://hemantmaru.vercel.app",
    }),
  ],
});
