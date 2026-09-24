# Portfolio

**Pages:** Home (`/`: intro, latest journal posts, work list, short about) · Work (`/work/`: project feed + case studies) · Journal (`/journal/`) · About (`/about/`)

Personal portfolio built with [Astro](https://astro.build), deployed to GitHub Pages.

## Everyday tasks

| Task | How |
|---|---|
| Run locally | `npm run dev` → http://localhost:4321 |
| Edit name, role, intro, about text, email, socials | `src/site.ts` |
| Add a case study | Add a Markdown file to `src/content/projects/` (copy an existing one) — it appears on Home (list) and Work (feed) |
| Add a cover image | Put the image next to the Markdown file and set `cover: ./my-image.jpg` |
| Write a journal post | Add a Markdown file to `src/content/journal/` |
| Hide a project or post | Set `draft: true` in its frontmatter |
| Add your portrait | Save it as `src/assets/portrait.jpg` |
| Update experience / music / challenges | Edit the lists in `src/data/*.yaml` (shown in file order). For music, paste share links as `spotify:` and `apple:` |
| Add or change an icon | Pick one on [lucide.dev/icons](https://lucide.dev/icons/), then add it in `src/components/Icon.astro` |
| Publish | Commit and push to `main` — GitHub Actions builds and deploys |

## How the animations work

- **Page transitions:** `@view-transition { navigation: auto; }` in `src/styles/global.css`.
  Project images morph between the home feed and the case study (shared `view-transition-name`).
- **Line-by-line text reveal:** add `data-lines` to any plain-text element (script in `src/layouts/Base.astro`).
- **Scrolling title:** `src/components/Marquee.astro`, used at the top of each case study.
- **Link underlines, dock hover:** CSS transitions.
- **Light / dark:** follows the visitor's system setting automatically (`prefers-color-scheme` in `global.css`).
- Everything is switched off for users with "reduce motion" enabled.

## Design system

All design decisions live in **`src/styles/tokens.css`**. Components and pages only use these tokens — no hard-coded sizes, spacing, colours or timings.

**Type scale** — base 17px, each step × √φ (≈ 1.272), so every second step is exactly the golden ratio:

| Token | Size / line height | Used for |
|---|---|---|
| `--text-sm` | 13 / 20 | dates, labels, captions, footer (mono) |
| `--text-base` | 17 / 28 | body text (28 ≈ 17 × φ) |
| `--text-md` | 22 / 32 | lead paragraphs, project titles |
| `--text-lg` | 28 / 36 | page titles |
| `--text-xl` · `--text-2xl` | 35 / 44 · 44 / 52 | reserved for larger headings |
| `--text-3xl` → `--text-5xl` | 72 → 188 | display (case-study marquee) |

**Spacing** — 4/8 scale, named by pixel value: `--space-4`, `-8`, `-12`, `-16`, `-24`, `-32`, `-40`, `-48`, `-64`, `-80`, `-96`, `-128` (plus `--space-2` for optical nudges).

**Components** (`src/components/`):

| Component | What it is |
|---|---|
| `Link` | Text link with animated underline (`variant`: plain, underlined, muted) |
| `DateLabel` | Mono date, "October 2025" or "oct 2025" |
| `ListRow` | Content left, meta right; with `href` the row gets a hover highlight |
| `Section` | Icon + label on the left, content on the right (About page) |
| `Lead` | Large intro paragraph that reveals line by line |
| `Pill` | Small rounded tag ("present") |
| `Track` | Music entry: cover, title, artist, Spotify / Apple Music links |
| `Challenge` | Challenge with a checkbox (filled + struck through when done) and an optional subline |
| `Pager` | Back / next links at the end of a page |
| `PageHeader` | Small title + description at the top of Work and Journal |
| `MoreLink` | "all posts →" style link to a full list |
| `Icon` | Lucide icons in two sizes (`sm` 16, `md` 20) |
| `Marquee` | Scrolling display title |
| `ProjectMedia` | Project cover image or gradient placeholder |
| `Dock` | Bottom navigation |
