import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// uncomment if stumble upon the error 
	// `Function called outside component initialization`
	// optimizeDeps: {
	// 	exclude: ['@urql/svelte'],
	// },
});
