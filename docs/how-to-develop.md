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
- Content source: `src/content/articles/`
- Localized pages: `src/pages/[lang]/`
- Design tokens: `src/styles/tokens.css`
- Project rules: `.cursor/rules/`

## i18n and SEO

- Supported locales: `en`, `fa`
- Homepages: `/en`, `/fa`
- Article listing: `/<lang>/articles`
- Article detail: `/<lang>/articles/<slug>`
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

## Media workflow

- Store static images in `public/media/`
- Use markdown image syntax for article body
- Use `VideoEmbed.astro` for locale-aware embeds in pages
- Optional MDX unlocks direct component shortcodes in content
