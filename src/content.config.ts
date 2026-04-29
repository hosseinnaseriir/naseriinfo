import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/articles" }),
  schema: z.object({
    locale: z.enum(["en", "fa"]),
    title: z.string(),
    excerpt: z.string(),
    publishedAt: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { articles };
