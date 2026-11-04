import { LOCALES } from "@/i18n/locales";
import config from "@/config";

/**
 * Locales that need generated routes.
 *
 * English has no prefix and Spanish already has explicit pages under
 * `src/pages/es`, so neither of them belongs in the `[locale]` routes.
 */
export const PREFIXED_LOCALES = LOCALES.filter(
  locale => locale !== config.site.lang && locale !== "es"
);
