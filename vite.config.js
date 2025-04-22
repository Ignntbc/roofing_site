import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Слушать на всех интерфейсах
    port: 5173,      // Укажите порт (по умолчанию 5173)
  },
});