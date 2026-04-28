# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint (v9 flat config)
```

No test framework is configured.

## Stack

- **Next.js 16.2.4** with App Router — read `node_modules/next/dist/docs/` before writing code (see AGENTS.md)
- **React 19.2.4** — Server Components enabled by default
- **TypeScript 5** — strict mode, path alias `@/*` → project root
- **Tailwind CSS v4** — configured via `@theme` directive in `app/globals.css`, no `tailwind.config.*` file

## Architecture

The project uses Next.js App Router with no `src/` directory — the `app/` folder sits at the root.

- `app/layout.tsx` — root layout, Geist font, global metadata
- `app/page.tsx` — home page (`/`)
- `app/globals.css` — Tailwind v4 import + `@theme` variables for colors and fonts, including dark mode via `prefers-color-scheme`

ESLint uses the v9 flat config format (`eslint.config.mjs`). PostCSS uses `@tailwindcss/postcss` (not the classic `tailwindcss` PostCSS plugin).
