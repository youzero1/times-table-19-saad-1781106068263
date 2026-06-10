import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  server: { host: '0.0.0.0', port: 5173, hmr: false },
  build: {
    rollupOptions: {
      input: resolve(fileURLToPath(new URL('.', import.meta.url)), 'index.html'),
    },
  },
  optimizeDeps: {
    force: true,
  },
});
