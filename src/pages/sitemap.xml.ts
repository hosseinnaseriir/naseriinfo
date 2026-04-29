import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const fallbackSite = "https://example.com";

export const GET: APIRoute = async () => {
  const base = (import.meta.env.SITE as string | undefined) ?? fallbackSite;
  const root = new URL(base);
  const articleEntries = await getCollection("articles");

  const staticPaths = ["/", "/en", "/fa", "/en/articles", "/fa/articles"];
  const articlePaths = articleEntries.map((entry) => `/${entry.data.locale}/articles/${entry.id.replace(/\.md$/, "")}`);

  const allPaths = [...new Set([...staticPaths, ...articlePaths])];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPaths
  .map((path) => {
    const cleanPath = path.replace(/\/+$/, "") || "/";
    const enAlt = `/en${cleanPath.replace(/^\/(en|fa)/, "")}`.replace(/\/+$/, "") || "/en";
    const faAlt = `/fa${cleanPath.replace(/^\/(en|fa)/, "")}`.replace(/\/+$/, "") || "/fa";
    return `<url>
  <loc>${new URL(cleanPath, root).toString()}</loc>
  <xhtml:link rel="alternate" hreflang="en" href="${new URL(enAlt, root).toString()}" />
  <xhtml:link rel="alternate" hreflang="fa" href="${new URL(faAlt, root).toString()}" />
  <xhtml:link rel="alternate" hreflang="x-default" href="${new URL("/en", root).toString()}" />
</url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
