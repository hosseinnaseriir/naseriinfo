import { ARTICLES_BY_LOCALE, type ArticlePlatform, type ExternalArticle } from "../../assets/data/articles";
import { ARTICLE_PLATFORM_LABELS } from "../../assets/contents/common/article-platforms";
import { getContent } from "./ui-text";
import type { Locale } from "../../i18n/config";

export type { ArticlePlatform, ExternalArticle };

export interface ArticleItem {
  id: string;
  locale: Locale;
  title: string;
  description: string;
  url: string;
  platform: ArticlePlatform;
  platformLabel: string;
  publishedAt: string;
}

function toArticleItems(articles: ExternalArticle[], locale: Locale): ArticleItem[] {
  const platformLabels = getContent(ARTICLE_PLATFORM_LABELS, locale);

  return articles
    .map((article) => ({
      id: article.id,
      locale,
      title: article.title,
      description: article.description,
      url: article.url,
      platform: article.platform,
      platformLabel: platformLabels[article.platform],
      publishedAt: article.publishedAt
    }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getArticles(locale: Locale): ArticleItem[] {
  return toArticleItems(ARTICLES_BY_LOCALE[locale], locale);
}
