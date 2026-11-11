import { defineConfig } from 'vitest/config';

// Only the pure modules (slugs, links, images, language choice) are tested here.
export default defineConfig({
  test: { include: ['src/**/*.test.ts'], environment: 'node' },
});
