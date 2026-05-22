import type { Locale } from "../../i18n/config";

export type ArticlePlatform = "medium" | "linkedin" | "virgool" | "x" | "devto";

export type ExternalArticle = {
  id: string;
  title: string;
  description: string;
  url: string;
  platform: ArticlePlatform;
  publishedAt: string;
};

export const EN_ARTICLES: ExternalArticle[] = [
  {
    id: "ascii-translator",
    title: "What Is the Translator Between Humans and Computers? ASCII!",
    description:
      "How ASCII bridges human letters and binary so CPUs can store characters like A as numbers and bits.",
    publishedAt: "2026-05-19",
    platform: "medium",
    url: "https://medium.com/@naseri.develop/what-is-the-translator-between-humans-and-computers-ascii-201eb8b7b4eb"
  },
  {
    id: "computer-understands-hi",
    title: 'How Does a Computer Understand Text Like "Hi!"?',
    description:
      "From keyboard to CPU: how text becomes numbers, then binary patterns, and back to letters on your screen.",
    publishedAt: "2026-05-09",
    platform: "medium",
    url: "https://medium.com/@naseri.develop/how-does-a-computer-understand-text-like-hi-881951b9062e"
  }
];

export const FA_ARTICLES: ExternalArticle[] = [
  {
    id: "computer-understands-hi-fa",
    title: "کامپیوتر چطور متنی مثل «hi» رو چاپ می‌کنه؟",
    description:
      "کشف حقیقت ساده پشت اینکه کامپیوتر چطور متن، اعداد و بیت‌ها را به هم تبدیل می‌کند.",
    publishedAt: "1405-02-19",
    platform: "virgool",
    url: "https://virgool.io/@m_16982683/%DA%A9%D8%A7%D9%85%D9%BE%DB%8C%D9%88%D8%AA%D8%B1-%DA%86%D8%B7%D9%88%D8%B1-%D9%85%D8%AA%D9%86%DB%8C-%D9%85%D8%AB%D9%84-hi-%D8%B1%D9%88-%DA%86%D8%A7%D9%BE-%D9%85%DB%8C%DA%A9%D9%86%D9%87-wcvwtoncf1tp"
  }
];

export const ARTICLES_BY_LOCALE = {
  en: EN_ARTICLES,
  fa: FA_ARTICLES
} satisfies Record<Locale, ExternalArticle[]>;
