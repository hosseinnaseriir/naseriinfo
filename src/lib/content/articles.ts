import { getCollection } from "astro:content";
import type { Locale } from "../../i18n/config";

export interface ArticleSummary {
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  publishedAt: string;
  coverImage?: string;
  tags: string[];
}

export async function getArticles(locale: Locale): Promise<ArticleSummary[]> {
  const items = await getCollection("articles");
  const normalized = items.map((item) => ({
    slug: item.id.replace(/\.(md|mdx)$/, ""),
    locale: item.data.locale,
    title: item.data.title,
    excerpt: item.data.excerpt,
    publishedAt: item.data.publishedAt,
    coverImage: item.data.coverImage,
    tags: item.data.tags
  }));

  const localized = normalized.filter((item) => item.locale === locale);
  const source = localized.length > 0 ? localized : normalized;

  return source
    .map((item) => ({
      slug: item.slug,
      locale: item.locale,
      title: item.title,
      excerpt: item.excerpt,
      publishedAt: item.publishedAt,
      coverImage: item.coverImage,
      tags: item.tags
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
