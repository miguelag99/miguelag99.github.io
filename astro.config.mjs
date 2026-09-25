// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      // Docker Desktop bind mounts on Windows don't forward file change events,
      // so the dev container (compose.yaml) enables polling to get live reload
      watch: process.env.WATCH_POLLING ? { usePolling: true, interval: 300 } : undefined
    }
  }
});