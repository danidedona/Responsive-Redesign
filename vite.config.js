import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: false,
    port: 3000,
    https: false,
    open: true, // Automatically opens the browser
  },
});
