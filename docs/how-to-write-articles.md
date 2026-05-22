# How to add external articles

Articles are **not** stored as markdown in this repo. Each entry is a link to a post you published elsewhere (Medium, LinkedIn, Virgool, etc.).

## 1) Edit the article list

Open `src/assets/data/articles.ts` and add an object to `EN_ARTICLES` or `FA_ARTICLES`:

```ts
{
  id: "my-post-slug",
  title: "Your article title",
  description: "Short summary shown on the card.",
  publishedAt: "2026-05-01",
  platform: "medium", // medium | linkedin | virgool | x | devto
  url: "https://medium.com/@you/your-post"
}
```

- **English** → `EN_ARTICLES` (shown on `/en` and `/en/articles`)
- **Farsi** → `FA_ARTICLES` (shown on `/fa` and `/fa/articles`)

## 2) Platform badges

Labels are defined in `src/assets/contents/common/article-platforms.ts`.  
Supported platforms: `medium`, `linkedin`, `virgool`, `x`, `devto`.

To add a new platform, extend `ArticlePlatform` in `articles.ts`, add a label in `article-platforms.ts`, and optionally an icon in `ArticlePlatformBadge.astro`.

## 3) Behaviour

- Cards on the home page and `/en/articles` / `/fa/articles` open the **external URL** in a new tab.
- There is no on-site article detail page.
