# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured in this project.

## Architecture

This is a single-page personal portfolio site built with React 19 and Vite (no router, no state management library). `src/main.jsx` mounts `App` into `#root`; `App.jsx` is the only place components are composed, in a fixed top-to-bottom order: `Header` → a `Skills` list → a `Projects` list → `Contact`.

- **Section components** (`Header.jsx`, `Skills.jsx`, `Projects.jsx`, `Contact.jsx`) are plain, unstyled-by-default functional components living directly in `src/` (not in a `components/` subfolder). `Skills` and `Projects` are repeated by passing different props (`image`, `alt`, and for `Projects` also `title`/`description`) from `App.jsx` — content for each skill/project entry is hardcoded inline in `App.jsx` rather than pulled from a data file.
- All styling is currently global: `src/index.css` and `src/App.css` (no CSS modules, no CSS-in-JS, no Tailwind).
- Icons: `bootstrap-icons` is a dependency, but `Header.jsx` currently inlines raw SVG markup for social icons directly in JSX rather than using the package's icon components/classes.
- Static assets referenced by URL (e.g. favicon) live in `public/`.
- ESLint (`eslint.config.js`) is flat-config based: `js.configs.recommended` + `eslint-plugin-react-hooks` (flat recommended) + `eslint-plugin-react-refresh` (vite preset), scoped to `**/*.{js,jsx}`, browser globals, JSX parsing enabled. `dist/` is globally ignored.
