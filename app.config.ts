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
    routeRules: {
      "/": { swr: 60 * 60 * 3}
    },
    storage: {
      cache: {
        driver: "fs",
        base: "./.cache" 
      }
    },
    preset: "bun",
  }
});
