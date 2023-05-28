import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "vbt-archiv",
			fallback: "index.html",
		}),
		paths: {
			base: "/vbt-archiv",
		},
	},
};

export default config;
