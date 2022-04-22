import path from "path";
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import {mdsvex} from "mdsvex";

export default {
	kit: {
		adapter: adapter(),
		
		browser: {
			router: true,
		},
		
		trailingSlash: "always",
		
		vite: {
			resolve: {
				alias: {
					$src: path.resolve("./src"),
					$utils: path.resolve("./src/utils"),
					$actions: path.resolve("./src/actions"),
					$components: path.resolve("./src/components"),
					$css: path.resolve("./src/css"),
				},
			},
		},
	},
	
	extensions: [".svelte", ".svx"],
	
	hot: false,
	
	preprocess: [
		preprocess({
			scss: {
				includePaths: ["src/css"],
			},
		}),
		
		mdsvex({
			layout: {
				_: "src/routes/projects/_post.svelte",
			},
		}),
	],
};
