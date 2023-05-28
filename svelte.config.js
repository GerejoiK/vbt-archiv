import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "vbt-archiv",
			fallback: "404.html",
		}),
		paths: {
			base: "/vbt-archiv",
		},
		appDir: "internal",
	},
};

export default config;
