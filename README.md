# miguelantunes.eu

Personal webpage of Miguel Antunes García, live at [www.miguelantunes.eu](https://www.miguelantunes.eu).

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com), starting from the [Astrofy](https://github.com/manuelernestog/astrofy) template. Every push to `main` is deployed to GitHub Pages by [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Development

With Docker (no local Node needed), the dev server runs at http://localhost:4321 with live reload:

```bash
docker compose up
```

Or with a local Node 24 and pnpm 10:

```bash
pnpm install
pnpm dev
```

`pnpm build` writes the static site to `dist/`.

## Updating content

| What | Where |
| --- | --- |
| Home page intro and contact | `src/content/Introduction.astro`, `src/content/ContactInfo.astro` |
| News | `src/content/news.ts` |
| Publications | One `.md` file per paper in `src/content/journal_pubs/`, `conference_pubs/` or `preprints/` |
| Teaching | `src/content/undergraduate_subjects/`, `graduate_subjects/`, `undergraduate_theses/` |
| CV | `src/pages/cv.astro` |

### Adding a publication

Each publication file gets its own page at `/publications/<file name>`. The frontmatter fields are defined in `src/content.config.ts`, the body of the file is the abstract:

```yaml
---
title: "Paper title"
conference: Conference name     # journal: for journal_pubs, venue: and status: for preprints
authors:
    - Miguel Antunes-García      # highlighted automatically
teaser: ../../assets/teasers/paper.png   # optional, stored in src/assets/teasers/
paper_url: https://...          # optional links: paper_url, arxiv_url, code_url, project_url, weights_url
doi: 10.xxxx/xxxx               # optional
date: 2026-01-31
bibtex: |
    @inproceedings{...}
---

Abstract text.
```
