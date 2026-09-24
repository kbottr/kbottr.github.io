import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { load } from 'js-yaml';

// Loads a YAML list and remembers each item's position, so the site
// shows items in the order they're written (no ids needed).
const yamlList = (path: string) =>
  file(path, {
    parser: (text) =>
      (load(text) as Record<string, unknown>[]).map((item, i) => ({ id: String(i), ...item, order: i })),
  });

// Case studies: one Markdown file each in src/content/projects/
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(), // shown as "October 2025"; newest first
      summary: z.string(), // 1–3 sentences on the home page
      kind: z.string(),
      role: z.string(),
      team: z.string().optional(),
      quote: z.object({ text: z.string(), source: z.string() }).optional(),
      // Optional cover image, relative to the Markdown file, e.g. ./aurora/cover.jpg
      cover: image().optional(),
      // Gradient colours used when there is no cover
      colors: z.tuple([z.string(), z.string(), z.string()]),
      draft: z.boolean().default(false),
    }),
});

// Journal posts: one Markdown file each in src/content/journal/
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// About page lists, edited as YAML in src/data/
const experience = defineCollection({
  loader: yamlList('src/data/experience.yaml'),
  schema: z.object({
    order: z.number(),
    role: z.string(),
    company: z.string(),
    start: z.string(), // e.g. "03 / 2023"
    end: z.string().optional(), // leave out for "Present"
  }),
});

const music = defineCollection({
  loader: yamlList('src/data/music.yaml'),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    artist: z.string(),
    spotify: z.string().url().optional(), // link to the track/album on Spotify
    apple: z.string().url().optional(), // link to the track/album on Apple Music
    cover: z.string().optional(), // image URL, or a file in public/ like /music/album.jpg
  }),
});

const goals = defineCollection({
  loader: yamlList('src/data/goals.yaml'),
  schema: z.object({
    order: z.number(),
    text: z.string(),
    status: z.enum(['todo', 'doing', 'done']).default('todo'),
  }),
});

export const collections = { projects, journal, experience, music, goals };
