import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@b": path.resolve(__dirname, "./src/home/a/b"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
});
