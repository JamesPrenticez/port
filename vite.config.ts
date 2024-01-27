/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // istanbul or 'c8'
    },
    setupFiles: ["src/setupTest.ts"],
  },
  plugins: [
    react(),
    alias({
      entries: [
        { find: '@components', replacement: '/src/components' },
        { find: '@hooks', replacement: '/src/hooks' },
        { find: '@assets', replacement: '/src/assets' },
        { find: '@lib', replacement: '/src/lib' },
        { find: '@data', replacement: '/src/data' },
      ],
    }),
  ],
});
