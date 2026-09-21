import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import process from 'node:process';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		paths: {
			// No GitHub Pages (site de projeto) o site vive em /<nome-do-repo>.
			// O workflow de deploy injeta BASE_PATH; localmente fica vazio.
			base: process.env.BASE_PATH ?? ''
		}
	}
};

export default config;
