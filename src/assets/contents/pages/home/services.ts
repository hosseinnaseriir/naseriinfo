import type { LocalizedContent } from "../../../../lib/content/ui-text";

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  available?: boolean;
};

export const SERVICES_CONTENT = {
  en: {
    title: "Who I help!",
    availableLabel: "Available",
    items: [
      {
        title: "Consulting for Startups",
        description: "Build and scale software systems with strong product-engineering tradeoffs.",
        icon: "rocket",
        available: true
      },
      {
        title: "1:1 Mentorship for Developers",
        description: "Career growth, architecture reviews, and practical technical direction.",
        icon: "mentorship",
        available: true
      }
    ] satisfies ServiceItem[]
  },
  fa: {
    title: "خدمات",
    availableLabel: "در دسترس",
    items: [
      {
        title: "مشاوره برای استارتاپ‌ها",
        description: "کمک به طراحی و توسعه سیستم‌های نرم‌افزاری مقیاس‌پذیر.",
        icon: "rocket",
        available: true
      },
      {
        title: "منتورینگ ۱:۱ توسعه‌دهندگان",
        description: "رشد فنی، مسیر شغلی و تصمیم‌گیری معماری.",
        icon: "mentorship"
      }
    ] satisfies ServiceItem[]
  }
} satisfies LocalizedContent<{
  title: string;
  availableLabel: string;
  items: ServiceItem[];
}>;
