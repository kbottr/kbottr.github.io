import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kind: z.string(),
      year: z.number(),
      lede: z.string(),
      role: z.string(),
      team: z.string().optional(),
      // Lower numbers appear first on the home page.
      order: z.number().default(100),
      // Optional cover image, relative to the Markdown file, e.g. ./aurora/cover.jpg
      cover: image().optional(),
      // Gradient colours used when there is no cover (and behind it while loading).
      colors: z.tuple([z.string(), z.string(), z.string()]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
