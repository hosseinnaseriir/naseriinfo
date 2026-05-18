import type { LocalizedContent } from "../../../../lib/content/ui-text";

export const HOME_ARTICLES_CONTENT = {
  en: {
    title: "Articles",
    empty: "No articles published yet."
  },
  fa: {
    title: "مقالات",
    empty: "هنوز مقاله‌ای منتشر نشده است."
  }
} satisfies LocalizedContent<{
  title: string;
  empty: string;
}>;
