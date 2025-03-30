import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Préprocesseur pour PostCSS/Tailwind et SCSS
  preprocess: vitePreprocess({
    // Optionnel : active les styles globaux si besoin
    style: {
      css: 'postcss',
    },
  }),

  kit: {
    adapter: adapter({
      // Options spécifiques si déploiement sur Vercel/Netlify
      edge: false, // Désactivé pour compatibilité i18n
      split: true  // Meilleures perfs en production
    }),

    // Sécurité : Protection CSRF (activé par défaut)
    csrf: {
      checkOrigin: process.env.NODE_ENV === 'production',
    },

    // Alias pour les imports (optionnel mais pratique)
    alias: {
      $i18n: './src/lib/i18n',
      $components: './src/lib/components'
    }
  }
};

export default config;
