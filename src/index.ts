/**
 * Cloudflare Worker with Hono - Decap CMS Demo
 *
 * Serves React SPA and provides API endpoints for content
 */

import { Hono } from 'hono'

// Type-safe environment bindings
type Bindings = {
	ASSETS: Fetcher
}

const app = new Hono<{ Bindings: Bindings }>()

/**
 * API Routes - handled before static assets
 */
app.get('/api/health', (c) => {
	return c.json({
		status: 'ok',
		timestamp: new Date().toISOString(),
	})
})

/**
 * Content API - fetch content from static assets
 * In production, content will be served from the built bundle
 */
app.get('/api/content/:page', async (c) => {
	const page = c.req.param('page')
	try {
		// Fetch content file from static assets
		const response = await c.env.ASSETS.fetch(new Request(`${c.req.url.split('/api/content')[0]}/content/${page}.json`))
		if (!response.ok) {
			return c.json({ error: 'Content not found' }, 404)
		}
		const content = await response.json()
		return c.json(content)
	} catch (error) {
		return c.json({ error: 'Failed to load content' }, 500)
	}
})

/**
 * Fallback to Static Assets (React SPA)
 */
app.all('*', (c) => {
	return c.env.ASSETS.fetch(c.req.raw)
})

/**
 * Export Hono app (ES Module format)
 */
export default app
