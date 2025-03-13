// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';


import alpinejs from '@astrojs/alpinejs';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss(), alpinejs()]
  },

  experimental: {
    svg: true,
  },

  integrations: [alpinejs()],
  adapter: netlify()
});