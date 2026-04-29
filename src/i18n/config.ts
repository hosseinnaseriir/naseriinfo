export type Locale = "en" | "fa";

export const locales: Locale[] = ["en", "fa"];

export const localeConfig: Record<Locale, { dir: "ltr" | "rtl"; label: string }> = {
  en: { dir: "ltr", label: "English" },
  fa: { dir: "rtl", label: "فارسی" }
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
