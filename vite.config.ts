import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({// https://vite.dev/config/
  base: '/',
  plugins: [react()],
  server: {
    // https: true,  // Enable HTTPS
    host: '0.0.0.0',
    port: 5682,
  }
});