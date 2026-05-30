import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import pluginYaml from "@modyfi/vite-plugin-yaml";

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST }), pluginYaml()],
	test: {
		globals: true,
		environment: "jsdom",
	},
});
