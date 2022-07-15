import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  server: {
    open: true,
  },
  preview: {
    port: 8080,
    open: true,
  },
});
