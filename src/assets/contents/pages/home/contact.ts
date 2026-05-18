import type { LocalizedContent } from "../../../../lib/content/ui-text";

export const CONTACT_CONTENT = {
  en: {
    title: "Book a Call (email included)",
    fields: {
      title: "Title",
      titlePlaceholder: "Need help with my product...",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "Message",
      messagePlaceholder: "Write your context...",
      agree: "I agree to be contacted by email"
    },
    submit: "Send Request"
  },
  fa: {
    title: "رزرو تماس (به همراه ایمیل)",
    fields: {
      title: "عنوان",
      titlePlaceholder: "برای محصولم کمک نیاز دارم...",
      email: "Email",
      emailPlaceholder: "you@example.com",
      message: "پیام",
      messagePlaceholder: "توضیح کوتاه بنویسید...",
      agree: "با تماس از طریق ایمیل موافقم"
    },
    submit: "ارسال درخواست"
  }
} satisfies LocalizedContent<{
  title: string;
  fields: {
    title: string;
    titlePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    agree: string;
  };
  submit: string;
}>;
