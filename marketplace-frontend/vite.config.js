import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/marketplace-frontend/', // 👈 Muy importante para GitHub Pages
  plugins: [react()],
});

