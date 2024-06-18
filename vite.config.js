import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './jest.setup.ts',
  },
});
