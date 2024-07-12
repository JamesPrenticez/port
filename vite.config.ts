/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001,
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "istanbul", // istanbul or 'c8'
    },
    setupFiles: ["src/setupTest.ts"],
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true
      },
    },
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
        { find: '@constants', replacement: '/src/constants' },
      ],
    }),
  ],
});
