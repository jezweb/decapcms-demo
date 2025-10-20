import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		cloudflare({
			configPath: 'wrangler.jsonc',
		}),
	],
	build: {
		outDir: 'dist/client',
		emptyOutDir: true,
	},
	publicDir: 'public',
})
