# Decap CMS Demo with Cloudflare Workers

A modern website template featuring Decap CMS (formerly Netlify CMS) for content management, deployed on Cloudflare's edge network.

## Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Backend**: Cloudflare Workers + Hono
- **Build Tool**: Vite
- **CMS**: Decap CMS
- **Deployment**: Cloudflare Pages/Workers

## Features

- ✅ Git-based content management with Decap CMS
- ✅ No database required - content stored as JSON files
- ✅ Edge-deployed for global performance
- ✅ Modern React with TypeScript
- ✅ Tailwind CSS v4 for styling
- ✅ Hot module reloading in development

## Project Structure

```
decapcms-demo/
├── client/              # React application
│   └── src/
│       ├── components/  # React components
│       ├── App.tsx      # Main app component
│       ├── main.tsx     # React entry point
│       └── index.css    # Tailwind styles
├── public/
│   ├── admin/          # Decap CMS admin interface
│   │   ├── index.html
│   │   └── config.yml  # CMS configuration
│   └── content/        # Content files (managed by CMS)
│       ├── hero.json
│       ├── about.json
│       ├── services.json
│       └── contact.json
├── src/
│   └── index.ts        # Cloudflare Worker (Hono app)
├── vite.config.ts      # Vite configuration
├── wrangler.jsonc      # Cloudflare Workers configuration
└── package.json

```

## Getting Started

### Prerequisites

- Node.js v22+ (you have v22.16.0)
- npm or pnpm
- GitHub account (for CMS authentication)
- Cloudflare account (for deployment)

### Local Development

1. **Install dependencies** (already done):
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

   This starts the Cloudflare Workers development server with Vite HMR.

3. **Access the site**:
   - Frontend: `http://localhost:8787`
   - CMS Admin: `http://localhost:8787/admin`

### Content Management

The CMS admin interface is available at `/admin`. In development, you can use the **test-repo** backend to edit content locally without GitHub authentication.

To use GitHub as the backend (recommended for production):

1. Create a GitHub repository for this project
2. Update `public/admin/config.yml`:
   ```yaml
   backend:
     name: github
     repo: YOUR_USERNAME/decapcms-demo
     branch: main
   ```
3. Configure GitHub OAuth (see Decap CMS docs)

### Building for Production

```bash
npm run build
```

This builds:
- React app → `dist/client/`
- Worker script → `dist/index.js`

### Deployment to Cloudflare

1. **Update wrangler.jsonc**:
   - Add your Cloudflare account ID
   - Set your desired worker name

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Set up GitHub Actions** (optional):
   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
         - run: npm ci --legacy-peer-deps
         - run: npm run deploy
           env:
             CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
   ```

## Content Structure

Content is stored as JSON files in `public/content/`:

### Hero Section (`hero.json`)
```json
{
  "title": "Page Title",
  "subtitle": "Subtitle text",
  "ctaText": "Button text",
  "ctaLink": "#section"
}
```

### About Section (`about.json`)
```json
{
  "title": "About Us",
  "content": "Markdown content supported"
}
```

### Services Section (`services.json`)
```json
{
  "title": "Our Services",
  "services": [
    {
      "title": "Service Name",
      "description": "Service description"
    }
  ]
}
```

### Contact Section (`contact.json`)
```json
{
  "title": "Get In Touch",
  "email": "hello@example.com",
  "phone": "+1 (555) 123-4567",
  "address": "123 Main St"
}
```

## Customization

### Adding New Sections

1. Create a component in `client/src/components/`
2. Add content file to `public/content/`
3. Configure CMS collection in `public/admin/config.yml`
4. Load in `App.tsx`

### Styling

Tailwind CSS v4 is configured with custom theme variables in `client/src/index.css`.

## Troubleshooting

### React 19 Peer Dependency Warnings

Decap CMS hasn't fully updated to React 19 yet. The `--legacy-peer-deps` flag handles this. The warnings are safe to ignore - React maintains good backwards compatibility.

### CMS Not Saving Changes

Ensure you've:
1. Configured the GitHub backend correctly
2. Set up OAuth for GitHub authentication
3. Pushed your changes to the repository

### Build Errors

If you encounter build errors:
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

## Resources

- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Hono Framework](https://hono.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## License

MIT

---

**Built with Claude Code** 🤖
