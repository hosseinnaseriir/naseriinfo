import type { LocalizedContent } from "../../../../lib/content/ui-text";

export const ARTICLES_PAGE_CONTENT = {
  en: {
    title: "Articles",
    description: "Article archive in English.",
    empty: "No articles published yet.",
    back: "Back to home"
  },
  fa: {
    title: "مقالات",
    description: "آرشیو مقالات فارسی.",
    empty: "هنوز مقاله‌ای منتشر نشده است.",
    back: "بازگشت به خانه"
  }
} satisfies LocalizedContent<{
  title: string;
  description: string;
  empty: string;
  back: string;
}>;
