import type { LocalizedContent } from "../../../../lib/content/ui-text";

export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
  ctaLabel: string;
  ctaHref: string;
};

export const SERVICES_CONTENT = {
  en: {
    title: "Who I help!",
    items: [
      {
        title: "For Developers",
        description:
          "1:1 mentoring for students and junior developers who want practical backend engineering guidance.",
        icon: "graduation-cap",
        ctaLabel: "Explore Mentorship",
        ctaHref: "#contact"
      },
      {
        title: "For Startups",
        description:
          "Architecture consulting and engineering guidance for startups building scalable products.",
        icon: "layers",
        ctaLabel: "Discuss Your Product",
        ctaHref: "#contact"
      }
    ] satisfies ServiceItem[]
  },
  fa: {
    title: "خدمات",
    items: [
      {
        title: "برای توسعه‌دهندگان",
        description:
          "منتورینگ یک‌به‌یک برای دانشجویان و توسعه‌دهندگان تازه‌کار که به دنبال راهنمایی عملی مهندسی بک‌اند هستند.",
        icon: "graduation-cap",
        ctaLabel: "کاوش منتورینگ",
        ctaHref: "#contact"
      },
      {
        title: "برای استارتاپ‌ها",
        description:
          "مشاوره معماری و راهنمایی مهندسی برای استارتاپ‌هایی که محصول مقیاس‌پذیر می‌سازند.",
        icon: "layers",
        ctaLabel: "گفتگو درباره محصول شما",
        ctaHref: "#contact"
      }
    ] satisfies ServiceItem[]
  }
} satisfies LocalizedContent<{
  title: string;
  items: ServiceItem[];
}>;
