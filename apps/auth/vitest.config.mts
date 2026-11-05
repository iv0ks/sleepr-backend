import { defineConfig } from 'vitest/config';
import { sharedConfig } from '@repo/vitest-config';

export default defineConfig({
  ...sharedConfig,
  resolve: {
    alias: {
      '@': './src',
    },
  },
  test: {
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.e2e-spec.ts',
    ],
  },
  oxc: false,
});
