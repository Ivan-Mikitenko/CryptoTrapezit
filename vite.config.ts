import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [react()],
	resolve: {
		// TODO: поправить
		alias: {
			'@slices': path.resolve(__dirname, './src/slices'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@api': path.resolve(__dirname, './src/api'),
			'@styles': path.resolve(__dirname, './src/styles')
			// Пример добавления других алиасов
			// '@components': path.resolve(__dirname, './src/components'),
		}
	},
	base: '/CryptoTrapezit/',
	build: {
		outDir: 'build'
	}
});
