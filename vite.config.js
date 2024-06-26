import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';
import path from 'path';

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/Components'),
        utils: path.resolve(__dirname, './src/utils'),
        types: path.resolve(__dirname, './src/types'),
      },
    },
    plugins: [
      react(),
      istanbul({
        include: 'src/*',
        exclude: ['node_modules'],
        extension: ['.js', '.ts', '.jsx', '.tsx'],
        cypress: true,
        requireEnv: false,
      }),
    ],
    css: {
      postcss: './postcss.config.js',
    },
    root: 'src',
    publicDir: '../public',
    include: ['tests-vitest/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    build: {
      outDir: '../dist',
      sourcemap: true,
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: '../config/setupTests.ts',
      coverage: {
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
        exclude: ['src/App.tsx'],
      },
    },
  };
});
