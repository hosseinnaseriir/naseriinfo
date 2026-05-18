import type { LocalizedContent } from "../../../lib/content/ui-text";

export const TOOLBAR_CONTENT = {
  en: {
    themeToggle: "Toggle light/dark theme",
    switchTo: (label: string) => `Switch to ${label}`
  },
  fa: {
    themeToggle: "تغییر حالت روشن/تاریک",
    switchTo: (label: string) => `تغییر به ${label}`
  }
} satisfies LocalizedContent<{
  themeToggle: string;
  switchTo: (label: string) => string;
}>;
