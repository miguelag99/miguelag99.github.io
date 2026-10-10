# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal academic site of Miguel Antunes García (www.miguelantunes.eu). Static Astro 7 site styled with Tailwind CSS 4 + DaisyUI 5 (single `business` theme), derived from the Astrofy template. Every push to `main` is built and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Commands

Package manager is pnpm 10 on Node 24 (keep the versions in `compose.yaml` and `deploy.yml` in sync).

```bash
pnpm install
pnpm dev          # dev server at http://localhost:4321
pnpm build        # static output in dist/
pnpm preview      # serve the built site
pnpm astro check  # type-check .astro/.ts (prompts to install @astrojs/check, not a dependency yet)
docker compose up # same dev server without a local Node, uses polling for live reload on Windows
```

There are no tests and no linter. `pnpm build` is the validation step: it fails on content that doesn't match the collection schemas and on broken image imports.

`.claude/launch.json` defines a `dist` preview server that serves the already built `dist/` folder with Python, so run `pnpm build` before previewing with it.

## Architecture

### Content is data, pages are templates

Almost every content change is an edit under `src/content/`, not in `src/pages/`:

- **Collections** (`src/content.config.ts`): six `glob`-loaded Markdown collections. Note that collection names differ from their folder names:

  | Collection | Folder |
  | --- | --- |
  | `journal_publications` | `journal_pubs/` |
  | `conference_publications` | `conference_pubs/` |
  | `preprints` | `preprints/` |
  | `undergrad_projects` | `undergraduate_theses/` |
  | `undergrad_subjects` | `undergraduate_subjects/` |
  | `grad_subjects` | `graduate_subjects/` |

- **News** is a typed array in `src/content/news.ts`, grouped by year. `description` is an HTML string rendered as-is; links inside it must use `class="text-link"`.
- **Home intro and contact** are Astro fragments (`src/content/Introduction.astro`, `ContactInfo.astro`), and the **CV** is hand-written in `src/pages/cv.astro`.

### Publications

The three publication collections share `publicationFields` in `content.config.ts` and differ only in the venue field (`journal`, `conference`, or `venue` + `status` for preprints). `src/lib/publications.ts` is the single access point: `getPublications()` merges the three into one date-descending `Publication[]` with a normalized `kind` and `venue`. Use it instead of calling `getCollection` on those collections directly.

- `src/pages/publications/[id].astro` generates one page per entry at `/publications/<file name>`, with newer/older navigation taken from the sorted list. File names must therefore be unique across the three folders.
- The Markdown body is the abstract; it is also truncated for the page's meta description.
- `teaser` is an `image()` path relative to the `.md` file (images live in `src/assets/teasers/`) and doubles as the Open Graph image.
- Author highlighting goes through `isOwnName` (matches `/^Miguel Antunes/`), used by `AuthorList.astro`.
- Adding a preprint or paper usually also means adding a `news.ts` item linking to `/publications/<id>`.

The frontmatter template for a new publication is in `README.md`.

### Layout and navigation

`src/layouts/Layout.astro` wraps every page (DaisyUI drawer with sidebar, header, footer) and takes `title`, `description`, `image`, `ogType` and `sideBarActiveItemID`. The sidebar entries are hardcoded in `src/components/SideBarMenu.astro`; `sideBarActiveItemID` must match the `id` of one of its links (`home`, `publications`, `teaching`, `cv`). A new top-level page needs both a file in `src/pages/` and a menu entry.

The layout enables Astro's `ClientRouter` (view transitions), so page scripts that touch the DOM must run on `astro:page-load` rather than once at load time, as in `publications/[id].astro`.

`site` in `astro.config.mjs` drives canonical and social preview URLs; `BaseHead.astro` falls back to `/social_img.png` when a page passes no `image`.

### Styling and animations

Tailwind 4 is configured entirely in `src/styles/global.css` (no `tailwind.config`): plugins, the DaisyUI theme, the `text-link` utility and the `fade-in-up` keyframes are declared there.

Entrance animations go through `src/lib/animations.ts`: `enter(step)` for an explicit stagger step, or `createStagger()` to hand out consecutive steps in template order. The delay class names are spelled out in full in that file because Tailwind only detects classes that appear literally in the sources, so don't build them with string interpolation.
