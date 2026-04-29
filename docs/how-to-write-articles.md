# How to Write Articles

This project supports bilingual articles with `locale: en` or `locale: fa`.

## 1) Create an article file

Create a markdown file in:

- `src/content/articles/your-slug.md`

Use this frontmatter:

```md
---
locale: en
title: Your title
excerpt: A short summary for cards and SEO
publishedAt: "2026-04-30"
tags: ["tag1", "tag2"]
coverImage: "/media/articles/your-image.jpg"
---
```

## 2) Locale rules

- English article: `locale: en`
- Farsi article: `locale: fa`
- Routing is automatic:
  - EN: `/en/articles/<slug>`
  - FA: `/fa/articles/<slug>`

## 3) Images in articles

For simple usage in markdown:

```md
![Alt text](/media/articles/sample.jpg)
```

Best practice:

- Put images under `public/media/articles/`
- Always include descriptive `alt` text
- Keep file size low (`webp` preferred)

## 4) Videos in articles

For markdown-only pages, use HTML iframe blocks:

```html
<div style="position:relative;padding-top:56.25%;">
  <iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video"
    loading="lazy"
    allowfullscreen
    style="position:absolute;inset:0;width:100%;height:100%;border:0;"
  ></iframe>
</div>
```

For app pages/components, use `VideoEmbed.astro`:

- `src/components/ui/media/VideoEmbed.astro`
- It selects YouTube/Aparat by locale preference

## 5) Optional: component shortcodes in articles (recommended)

If you want to use `<Figure />` and `<VideoEmbed />` directly inside article content, move to MDX.

Install:

```bash
npm install @astrojs/mdx
```

Then add MDX integration in `astro.config.mjs`.
