/**
 * Every locale the site publishes. English is the default and has no URL
 * prefix; all other locales live under their own prefix.
 *
 * Keep this as the single source of truth: `astro.config.ts`,
 * `src/content.config.ts` and the language switcher all read it.
 */
export const LOCALES = [
  "en",
  "es",
  "ja",
  "zh-cn",
  "ko",
  "ru",
  "pt",
  "de",
  "it",
  "no",
  "fr",
] as const;

export type Locale = (typeof LOCALES)[number];

/** Native language names, shown in the language switcher. */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: "English",
  es: "Español",
  ja: "日本語",
  "zh-cn": "简体中文",
  ko: "한국어",
  ru: "Русский",
  pt: "Português",
  de: "Deutsch",
  it: "Italiano",
  no: "Norsk",
  fr: "Français",
};
