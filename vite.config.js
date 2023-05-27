import { sveltekit } from "@sveltejs/kit/vite";
import pluginYaml from "vite-plugin-yaml2";

const config = {
	plugins: [sveltekit(), pluginYaml()],
};

export default config;
