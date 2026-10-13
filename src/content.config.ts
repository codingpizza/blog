import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/posts";

/** Language folders under BLOG_PATH. The folder decides the post locale. */
export const POST_LOCALES = ["en", "es"] as const;
export type PostLocale = (typeof POST_LOCALES)[number];

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: () =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      // cover images live in public/images, so keep this a plain path
      ogImage: z.string().optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      // --- codingpizza import fields ---
      /** slug of the same article in the other language, when a translation exists */
      translationOf: z.string().optional(),
      /** categories carried over from WordPress */
      categories: z.array(z.string()).default([]),
      /** the original WordPress URL, kept for traceability */
      sourceUrl: z.string().optional(),
      /** the WordPress post id */
      wpId: z.number().optional(),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
    lang: z.enum(POST_LOCALES).optional(),
    sourceUrl: z.string().optional(),
    wpId: z.number().optional(),
  }),
});

export const collections = { posts, pages };
