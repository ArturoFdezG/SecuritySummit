import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/SecuritySummit/",  // GitHub Pages serves from /repo-name/
  server: {
    port: 5173
  }
});
