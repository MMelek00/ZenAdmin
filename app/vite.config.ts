import react from "@vitejs/plugin-react";
import envars from "envars";
import { defineConfig } from "vite";

// Load environment variables for the target environment
envars.config();

// The list of environment variables required by the app
const defineVars = ["APP_ENV", "APP_NAME", "APP_HOSTNAME"];

/**
 * Vite configuration
 * https://vitejs.dev/config/
 */
export default defineConfig({
  cacheDir: `../.cache/vite-${process.env.npm_package_name}`,

  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },

  define: Object.fromEntries(
    defineVars.map((key) => [key, JSON.stringify(process.env[key])])
  ),

  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-react
    react({
      jsxRuntime: "classic",
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],

  server: {
    proxy: {
      "/api": {
        target: process.env.API_ORIGIN,
        changeOrigin: true,
      },
    },
  },
});
