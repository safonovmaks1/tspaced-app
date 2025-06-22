import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import imagemin from 'vite-plugin-imagemin';

// https://vite.dev/config/
export default defineConfig({
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
