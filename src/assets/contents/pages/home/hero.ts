import type { LocalizedContent } from "../../../../lib/content/ui-text";

export type SocialLinkItem = {
  label: string;
  icon: string;
  href: string;
  disabled?: boolean;
};

export const SOCIAL_LINKS: SocialLinkItem[] = [
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/hosseinnaseriir/" },
  { label: "X", icon: "x", href: "https://x.com/Ho3na3" },
  { label: "Medium", icon: "medium", href: "https://medium.com/@naseri.develop" },
  { label: "GitHub", icon: "github", href: "https://github.com/hosseinnaseriir" },
  { label: "Email", icon: "email", href: "mailto:naseri.develop@gmail.com" },
  { label: "Telegram", icon: "telegram", href: "https://t.me/naseri_info" },
  { label: "Instagram", icon: "instagram", href: "https://instagram.com/naseri.info" },
  { label: "Reddit", icon: "reddit", href: "https://reddit.com/user/", disabled: true }
];

export const HERO_VIDEO = {
  youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  aparatUrl: "https://www.aparat.com/v/abc123"
} as const;

export const HERO_CONTENT = {
  en: {
    profileName: "Hossein Naseri",
    profileRole: "Senior Full-Stack Engineer • Mentor • Consultant",
    headline: "Helping developers grow faster\n& startups build scalable software.",
    subheadline:
      "I mentor junior developers, write practical engineering articles,\n& help teams build reliable systems with clean architecture.",
    socialNavLabel: "Social links",
    videoTitle: "Introduction video",
    bookCall: "Book a Call",
    readArticles: "Read Articles",
    openIntro: "How to trust"
  },
  fa: {
    profileName: "حسین ناصری",
    profileRole: "مشاور فنی و منتور توسعه‌دهندگان",
    headline: "محصول قابل اتکا با معماری درست",
    subheadline: "از طراحی سیستم تا اجرا، تیم شما را در مسیر تحویل سریع‌تر و پایدارتر همراهی می‌کنم.",
    socialNavLabel: "شبکه‌های اجتماعی",
    videoTitle: "ویدیو معرفی",
    bookCall: "رزرو تماس",
    readArticles: "مطالعه مقالات",
    openIntro: "چطور اعتماد کنید"
  }
} satisfies LocalizedContent<{
  profileName: string;
  profileRole: string;
  headline: string;
  subheadline: string;
  socialNavLabel: string;
  videoTitle: string;
  bookCall: string;
  readArticles: string;
  openIntro: string;
}>;
