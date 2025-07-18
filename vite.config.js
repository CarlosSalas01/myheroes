import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  // Si tu sitio está en la raíz, no necesitas base. Si está en subcarpeta, usa: base: '/subcarpeta/'
  base: "/",
  build: {
    outDir: "dist",
  },
  // Puedes agregar plugins aquí si los necesitas
  plugins: [eslint()],
});
