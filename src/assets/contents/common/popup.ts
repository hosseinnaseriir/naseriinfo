import type { LocalizedContent } from "../../../lib/content/ui-text";

export const POPUP_CONTENT = {
  en: {
    close: "Close"
  },
  fa: {
    close: "بستن"
  }
} satisfies LocalizedContent<{
  close: string;
}>;
