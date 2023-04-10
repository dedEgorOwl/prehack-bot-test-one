import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		https: {
			key: './prehack-bot-test-one-privateKey.key',
			cert: './prehack-bot-test-one.crt'
		}
	},
	plugins: [react()]
})
