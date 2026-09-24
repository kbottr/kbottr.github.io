# Portfolio

Personal portfolio built with [Astro](https://astro.build), deployed to GitHub Pages.

## Everyday tasks

| Task | How |
|---|---|
| Run locally | `npm run dev` → http://localhost:4321 |
| Edit name, headline, intro, email | `src/site.ts` |
| Add a case study | Add a Markdown file to `src/content/projects/` (copy an existing one) |
| Add a cover image | Put the image next to the Markdown file and set `cover: ./my-image.jpg` |
| Hide a project | Set `draft: true` in its frontmatter |
| Reorder projects | Change `order` (lower comes first) |
| Publish | Commit and push to `main` — GitHub Actions builds and deploys |

## How the animations work

- **Page transitions:** `@view-transition { navigation: auto; }` in `src/styles/global.css`.
- **Shared-element morphs:** the card image and title on the home page share a
  `view-transition-name` with the hero and heading on the case-study page
  (`media-<slug>` / `title-<slug>`).
- **Scroll reveals & parallax:** CSS `animation-timeline: view()`, no JavaScript.
- Everything is switched off for users with "reduce motion" enabled.
