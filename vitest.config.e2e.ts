import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    root: './',
    include: ['**/*.e2e-spec.ts'],
    setupFiles: ['./test/setup-env.ts'],
    // Boot complet d'AppModule + connexion TiDB Cloud réelle : plus long que
    // le défaut vitest (10s), surtout avec plusieurs créations Prisma/bcrypt
    // dans beforeAll.
    hookTimeout: 60000,
    testTimeout: 30000,
  },
});
