import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/Components'),
      utils: path.resolve(__dirname, './src/utils'),
      types: path.resolve(__dirname, './src/types'),
    },
  },
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
});
