/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// eslint-disable-next-line import/no-unused-modules
export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      src: '/src',
      images: '/src/assets/images',
      containers: '/src/containers',
      components: '/src/components',
      helpers: '/src/helpers',
    },
  },
});
