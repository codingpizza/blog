import { getCollection, type CollectionEntry } from "astro:content";
import { getPostLocale } from "./getPostPaths";

/** Keep only the posts that belong to the given language. */
export function filterPostsByLocale(
  posts: CollectionEntry<"posts">[],
  locale: string
): CollectionEntry<"posts">[] {
  return posts.filter(post => getPostLocale(post.filePath, post.id) === locale);
}

/** Published posts for one language, ready to render. */
export async function getPostsForLocale(
  locale: string
): Promise<CollectionEntry<"posts">[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);
  return filterPostsByLocale(posts, locale);
}
