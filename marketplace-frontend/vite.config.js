import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/marketplace/', // 👈 Muy importante para GitHub Pages
  plugins: [react()],
});


