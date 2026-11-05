import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';
import { sharedConfig } from '@repo/vitest-config';

export default defineConfig({
  ...sharedConfig,
  test: {
    ...sharedConfig.test,
    // Package-specific overrides if needed.
    root: './test',
    include: ['**/*.e2e-spec.ts'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/*.test.ts',
    ],
  },
  resolve: {
    alias: {
      '@': './src',
    },
    tsconfigPaths: true,
  },
  plugins: [
    // This is required to build the test files with SWC.
    swc.vite({
      // Explicitly set the module type to avoid inheriting this value from a `.swcrc` config file.
      module: { type: 'es6' },
    }),
  ],
  oxc: false,
});
