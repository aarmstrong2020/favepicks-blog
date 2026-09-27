# FavePicks.blog

Static website configured for GitHub-connected Cloudflare Workers.

## Cloudflare Workers setup

1. Create a GitHub repository called `favepicks-blog` and upload the extracted contents of this package to its `main` branch. At repository root, you should see `wrangler.jsonc` and `dist/` (with `dist/index.html`). Do not upload only the ZIP file.
2. In Cloudflare, go to Workers & Pages > Create application > Continue with GitHub. Select `favepicks-blog`.
3. Project name: `favepicks-blog`. Leave Build command blank. Deploy command: `npx wrangler deploy`. Root directory: repository root. The `wrangler.jsonc` file supplies the static assets directory.
4. Deploy and review the temporary workers.dev URL before connecting `favepicks.blog` under Custom domains.

Pushing a commit to the connected `main` branch triggers another build and deployment.

## Editing

The pages are plain HTML under `dist/`; shared CSS and JavaScript are under `dist/assets/`. For a new article, add `dist/blog/article-slug/index.html`, link to it from the blog page, and add its URL to `dist/sitemap.xml`. Keep the affiliate disclosure visible when adding affiliate links.

This package is based on the September 26, 2026 export. It does not contain an author dashboard, checkout, credentials, or GitHub remote.
