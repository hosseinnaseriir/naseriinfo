# How to Develop

## Run locally

```bash
npm install
npm run dev
```

## Validate before commit

```bash
npm run astro check
npm run build
```

## Architecture overview

- UI primitives and components: `src/components/ui/`
- Content adapter layer: `src/lib/content/`
- External articles data: `src/assets/data/articles.ts`
- Localized pages: `src/pages/[lang]/`
- Design tokens: `src/styles/tokens.css`
- Project rules: `.cursor/rules/`

## i18n and SEO

- Supported locales: `en`, `fa`
- Homepages: `/en`, `/fa`
- Article listing: `/<lang>/articles` (links open external platforms)
- `Layout.astro` adds:
  - language direction (`dir`)
  - canonical link
  - hreflang alternates
  - OG metadata

## Sitemap and robots

- Sitemap endpoint: `/sitemap.xml`
- Robots file: `public/robots.txt`

Important:

- Replace `https://example.com` with your real domain in:
  - `astro.config.mjs` via `site`
  - `public/robots.txt` sitemap URL

## Articles

- See `docs/how-to-write-articles.md` for adding Medium, LinkedIn, Virgool, etc.
