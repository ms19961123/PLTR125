import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.ts?(x)'],
    setupFiles: ['./tests/unit/setup.ts'],
  },
});
