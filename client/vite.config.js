import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api-inventory': {
        target: 'https://react-ecommerce-server-bj4l.onrender.com', 
        changeOrigin: true,
        secure: false,
      },
    },
  },
});