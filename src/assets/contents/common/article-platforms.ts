import type { ArticlePlatform } from "../../data/articles";
import type { LocalizedContent } from "../../../lib/content/ui-text";

export const ARTICLE_PLATFORM_LABELS = {
  en: {
    medium: "Medium",
    linkedin: "LinkedIn",
    virgool: "Virgool",
    x: "X",
    devto: "DEV"
  },
  fa: {
    medium: "Medium",
    linkedin: "LinkedIn",
    virgool: "ویرگول",
    x: "X",
    devto: "DEV"
  }
} satisfies LocalizedContent<Record<ArticlePlatform, string>>;
