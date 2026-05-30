import { sveltekit } from "@sveltejs/kit/vite";
import pluginYaml from "@modyfi/vite-plugin-yaml";

const config = {
	plugins: [sveltekit(), pluginYaml()],
};

export default config;
