import type { Locale } from "../../i18n/config";

export type LocalizedContent<T> = Record<Locale, T>;

export function getContent<T>(bundle: LocalizedContent<T>, locale: Locale): T {
  return bundle[locale];
}
