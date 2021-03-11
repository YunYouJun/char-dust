import { defineConfig } from "vite";
import path from "path";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "index.ts"),
      name: pkg.name,
    },
  },
});
