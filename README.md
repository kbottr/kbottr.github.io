# Portfolio

Personal portfolio built with [Astro](https://astro.build), deployed to GitHub Pages.

## Everyday tasks

| Task | How |
|---|---|
| Run locally | `npm run dev` → http://localhost:4321 |
| Edit name, role, intro, about text, email, socials | `src/site.ts` |
| Add a case study | Add a Markdown file to `src/content/projects/` (copy an existing one) |
| Add a cover image | Put the image next to the Markdown file and set `cover: ./my-image.jpg` |
| Write a journal post | Add a Markdown file to `src/content/journal/` |
| Hide a project or post | Set `draft: true` in its frontmatter |
| Add your portrait | Save it as `src/assets/portrait.jpg` |
| Update experience / music / goals | Edit the lists in `src/data/*.yaml` (shown in file order) |
| Publish | Commit and push to `main` — GitHub Actions builds and deploys |

## How the animations work

- **Page transitions:** `@view-transition { navigation: auto; }` in `src/styles/global.css`.
  Project images morph between the home feed and the case study (shared `view-transition-name`).
- **Line-by-line text reveal:** add `data-lines` to any plain-text element (script in `src/layouts/Base.astro`).
- **Scrolling title:** `src/components/Marquee.astro`, used at the top of each case study.
- **Link underlines, dock hover:** CSS transitions.
- **Light / dark:** follows the visitor's system setting automatically (`prefers-color-scheme` in `global.css`).
- Everything is switched off for users with "reduce motion" enabled.
