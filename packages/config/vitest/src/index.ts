import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export const sharedConfig = {
  test: {
    globals: true,
    root: './',
    environment: 'node',
  },
  plugins: [
    // Habilita el soporte completo para los decoradores y metadatos de NestJS
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
};
