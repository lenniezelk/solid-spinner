import { defineConfig } from 'vitest/config';
import solid from 'vite-plugin-solid';

export default defineConfig({
  resolve: {
    conditions: ['development', 'browser'],
  },
  plugins: [solid()],
  test: {
    deps: {
      registerNodeLoader: true,
    },
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/.[jt]sx?$/],
    },
  },
});
