import type { LocalizedContent } from "../../../lib/content/ui-text";

export const LAYOUT_CONTENT = {
  en: {
    defaultTitle: "Naseri Info",
    defaultDescription: "Personal website"
  },
  fa: {
    defaultTitle: "Naseri Info",
    defaultDescription: "وب‌سایت شخصی"
  }
} satisfies LocalizedContent<{
  defaultTitle: string;
  defaultDescription: string;
}>;
