import { defineConfig } from 'vite';
import react          from '@vitejs/plugin-react';
import { VitePWA }   from 'vite-plugin-pwa';

export default defineConfig({
  base: '/sde-transition-tracker/',

  plugins: [
    react(),

    VitePWA({
      registerType: 'autoUpdate',

      // Include the icon so it's copied to dist/
      includeAssets: ['icon.svg'],

      manifest: {
        name:             'SDE Tracker',
        short_name:       'SDE Tracker',
        description:      'Track your software engineering transition — 5 phases, 157 tasks.',
        theme_color:      '#0d1117',
        background_color: '#0d1117',
        display:          'standalone',
        orientation:      'portrait-primary',
        icons: [
          {
            src:     'icon.svg',
            sizes:   'any',
            type:    'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },

      // Cache all JS, CSS, HTML, and the icon
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg}'],
      },
    }),
  ],

  build: {
    target: 'esnext',
  },
});
