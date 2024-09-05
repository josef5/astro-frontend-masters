import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
	site: 'https://astro-frontend-masters.netlify.app',
	output: 'hybrid',
	experimental: {
		assets: true,
	},
	integrations: [react(), solid()],
	adapter: netlify(),
});
