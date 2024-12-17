import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/website/",
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        web: './web.html',
      },
    },
  },
});
