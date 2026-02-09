# Harisrujan C – Portfolio

AI Product Architect & GenAI Mentor portfolio site.

## Tech Stack

- Vite
- TypeScript
- React
- shadcn/ui
- Tailwind CSS
- Framer Motion

## Local Development

```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

## Build

```sh
npm run build
```

## Deploy to GitHub Pages

### Automatic Deployment (Recommended)

The project is configured with GitHub Actions for automatic deployment. Simply:

1. **Enable GitHub Pages** in your repository settings:
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the changes

2. **Push to main branch**: Every push to the `main` branch will automatically build and deploy your site.

Your site will be available at: `https://harisrujan.github.io/new_portfolio_2026/`

### Manual Deployment

Alternatively, you can deploy manually:

```sh
npm run deploy
```

This will build the project and push it to the `gh-pages` branch.
