import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';
import react from '@astrojs/react';

export default defineConfig({
	output: 'server',
	site: 'https://astro-frontend-masters.netlify.app',
	experimental: {
		assets: true,
	},
	integrations: [react(), solid()],
});
