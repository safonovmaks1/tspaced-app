import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			// eslint-disable-next-line no-undef
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		react(),
		imagemin({
			jpeg: { quality: 70 },
		}),
	],
	server: {
		host: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3001/',
				changeOrigin: true,
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
});
