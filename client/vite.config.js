import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api-inventory': {
        target: 'http://localhost:3306', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
});