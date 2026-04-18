import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  middleware: "src/middleware.ts",
  ssr: true,
  
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  
  server: {
    preset: "bun"
  }
});
