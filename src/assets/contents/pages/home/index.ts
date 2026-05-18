import type { LocalizedContent } from "../../../../lib/content/ui-text";

export const HOME_PAGE_CONTENT = {
  en: {
    title: "Home",
    description: "Personal website with services, articles, and contact options."
  },
  fa: {
    title: "خانه",
    description: "وب‌سایت شخصی، خدمات، مقالات و راه ارتباطی."
  }
} satisfies LocalizedContent<{
  title: string;
  description: string;
}>;
