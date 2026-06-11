# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on 0.0.0.0 (accessible on LAN)
npm run build    # Production build (runs next-sitemap postbuild automatically)
npm run lint     # ESLint via next-lint
npm run prettier # Format with Prettier
```

No test suite is configured.

## Architecture

Personal portfolio site built with **Next.js 13 (Pages Router)** and **Chakra UI v2**.

### Rendering & routing
- `pages/_app.js` — wraps every page in `ChakraProvider` (with custom theme), `Fonts`, `GlobalStyles`, and `AnimatePresence` for page transitions.
- `pages/_document.js` — custom Next.js document.
- `pages/index.js` — single-page portfolio: About, Work Experience, Education, Projects, Skills sections.
- `pages/projects/[slug].js` — one file per project detail page under `pages/projects/`.
- `pages/404.js` — custom 404.

### Layout system (two levels)
- `components/layouts/main.js` — outermost shell: `<Head>`, `<NavBar>`, profile header (photo, name, contact icons, CV download), and `<Footer>`. Receives `router` from `_app.js`.
- `components/layouts/article.js` — inner motion wrapper used on every page/section; handles Framer Motion enter/exit animation (`opacity + y` slide) and sets the `<title>` tag.

### Theme (`libs/theme.js`)
- Extended Chakra theme with custom `fonts` (Space Mono throughout), `styles.global` (body background per color mode), custom `Heading` variants (`section-title`, `page-title`, `skills`), and `Link` base style.
- Light mode: blue-ish accent `#779ECB`; dark mode: orange accent `#f3a269`. Use `useColorModeValue('#779ECB', '#f3a269')` for themed accents.
- Color mode follows system preference (`useSystemColorMode: true`).

### Key components
- `Section` — Framer Motion div with staggered `delay` prop; wrap content blocks to get fade-in on load.
- `Experience` — renders a job/education entry (company, position, dates, summary text).
- `Projects` / `ProjectGridItem` — horizontally scrollable project card carousel on the index page; each card links to its detail page.
- `project.js` — `Title`, `ProjectImage`, `Meta` primitives used inside project detail pages.
- `Skills` — skill icon grid.
- `NavBar` / `Footer` / `ThemeToggleButton` — site chrome.

### Adding a project
1. Create `pages/projects/[slug].js` using the `Layout` wrapper from `components/layouts/article.js`.
2. Add a thumbnail image to `public/images/projects/[slug]/`.
3. Import the thumbnail in `components/projects.js` and add a `<ProjectGridItem>` entry to the carousel.

### Static assets
- `public/files/` — CV PDF and TFM PDF.
- `public/images/` — profile photo, logos, project thumbnails and media.

### Sitemap
`next-sitemap.config.js` targets `https://www.dmunoz.dev/` and generates `sitemap.xml` + `robots.txt` on every build.
