import { getRelativeLocaleUrl } from "astro:i18n";
import { BLOG_PATH, POST_LOCALES, type PostLocale } from "@/content.config";
import { slugifyStr } from "./slugify";
import config from "@/config";

/**
 * The first folder under `src/content/posts` is the language.
 * `posts/en/my-post.md` → "en", `posts/es/mi-articulo.md` → "es".
 */
export function getPostLocale(filePath: string | undefined, id = ""): PostLocale {
  const firstFolder = (filePath ?? "")
    .replace(BLOG_PATH, "")
    .split("/")
    .filter(Boolean)[0]
    ?.toLowerCase();
  const candidate = firstFolder ?? id.split("/")[0]?.toLowerCase();
  return (POST_LOCALES as readonly string[]).includes(candidate ?? "")
    ? (candidate as PostLocale)
    : (config.site.lang as PostLocale);
}

/** Path segments that belong in the URL: language folders are excluded. */
function getPostPathSegments(filePath: string | undefined): string[] {
  return (
    filePath
      ?.replace(BLOG_PATH, "")
      .split("/")
      .filter(path => path !== "")
      .filter(path => !path.startsWith("_"))
      .slice(0, -1)
      .filter(path => !(POST_LOCALES as readonly string[]).includes(path.toLowerCase()))
      .map(segment => slugifyStr(segment)) ?? []
  );
}

function getIdSlug(id: string): string {
  const postId = id.split("/");
  return postId.length > 0 ? String(postId[postId.length - 1]) : id;
}

export function getPostSlugPath(id: string, filePath: string | undefined): string {
  const pathSegments = getPostPathSegments(filePath);
  const slug = getIdSlug(id);
  return pathSegments.length > 0
    ? [...pathSegments, slug].join("/")
    : String(slug);
}

/**
 * Route param for `getStaticPaths`, relative to the pages root.
 * The default language has no prefix, other languages are prefixed.
 * e.g. "my-post" (en) or "es/mi-articulo" (es)
 */
export function getPostSlug(id: string, filePath: string | undefined): string {
  const locale = getPostLocale(filePath, id);
  const slugPath = getPostSlugPath(id, filePath);
  return locale === config.site.lang ? slugPath : `${locale}/${slugPath}`;
}

/**
 * Fully navigable URL, respecting locale routing and the configured base.
 * e.g. `/my-post` or `/es/mi-articulo`
 */
export function getPostUrl(
  id: string,
  filePath: string | undefined,
  locale: string | undefined = getPostLocale(filePath, id)
): string {
  return getRelativeLocaleUrl(locale, getPostSlugPath(id, filePath));
}
