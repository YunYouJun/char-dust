import path from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pkg from "./packages/char-dust/package.json";

import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: `/${pkg.name}/`,
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        icons: [
          {
            src: "/img/icons/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/img/icons/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
});
