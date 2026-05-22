import type { LocalizedContent } from "../../../../lib/content/ui-text";

export const CONTACT_CONTENT = {
  en: {
    title: "Book a Call",
    disabledNote: "The contact form is temporarily unavailable. Email me directly and I'll reply as soon as I can.",
    emailCta: "Email me"
  },
  fa: {
    title: "رزرو تماس",
    disabledNote: "فرم تماس موقتاً غیرفعال است. مستقیم ایمیل بزنید تا در اولین فرصت پاسخ بدهم.",
    emailCta: "ارسال ایمیل"
  }
} satisfies LocalizedContent<{
  title: string;
  disabledNote: string;
  emailCta: string;
}>;
