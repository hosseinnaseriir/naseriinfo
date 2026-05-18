import type { LocalizedContent } from "../../../../lib/content/ui-text";

export const INTRO_CONTENT = {
  en: {
    title: "How to trust",
    experienceHighlight: "+8 years",
    experienceFocus:
      "Focused on software engineering, scalability, Node.js, architecture, and real-world systems.",
    experienceItems: [
      "Worked with startups",
      "large systems",
      "Mentoring developers",
      "Architecture reviews",
      "bootstrapping startups",
      "Production Systems"
    ],
    techMarqueeLabel: "Technologies and tools"
  },
  fa: {
    title: "چطور اعتماد کنید",
    experienceHighlight: "+۸ سال",
    experienceFocus:
      "تمرکز بر مهندسی نرم‌افزار، مقیاس‌پذیری، Node.js، معماری و سیستم‌های واقعی.",
    experienceItems: [
      "همکاری با استارتاپ‌ها",
      "سیستم‌های بزرگ",
      "منتورینگ توسعه‌دهندگان",
      "بازبینی معماری",
      "راه‌اندازی استارتاپ",
      "سیستم‌های پروداکشن"
    ],
    techMarqueeLabel: "فناوری‌ها و ابزارها"
  }
} satisfies LocalizedContent<{
  title: string;
  experienceHighlight: string;
  experienceFocus: string;
  experienceItems: string[];
  techMarqueeLabel: string;
}>;
