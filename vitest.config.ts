import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import pluginYaml from 'vite-plugin-yaml2';

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST }), pluginYaml()],
	test: {
		globals: true,
		environment: 'jsdom'
	}
});
