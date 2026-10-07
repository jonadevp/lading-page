## Stack

Astro 7 (static, no framework components) + Tailwind CSS 4 via `@tailwindcss/vite`. Single package, pnpm. Node >= 22.12.

## Commands

- `pnpm dev` — dev server (use `astro dev --background` and manage with `astro dev stop|status|logs`)
- `pnpm build` — production build; this is the only real verification step; there are no test/lint/typecheck scripts
- `pnpm astro check` — typecheck, but `@astrojs/check` is NOT installed; add it before this works

## Gotchas

- Tailwind 4: no `tailwind.config.*`; theme tokens and the dark variant live in `src/styles/global.css` (`@theme inline`, `@custom-variant dark`). Dark mode is class-based (`.dark` on `<html>`, set by an inline script in `Layout.astro` and toggled via localStorage `theme` key `"dark"|"light"|"system"`).
- Fonts are loaded through Astro's `fonts` config in `astro.config.mjs` (local woff2 in `src/assets/fonts/`); never add `<link>` tags for them — use the `--font-*` CSS variables / `--font-sans|display|mono` utilities.
- Page content is data-driven from `src/cv.json` — prefer editing it over hardcoding in components.
- Path aliases (`@components`, `@layouts`, `@services`, `@types`, `@/*`) are defined in `tsconfig.json`; note `@services`/`@types` dirs don't exist yet.
- `pnpm-workspace.yaml` exists only for `allowBuilds` (esbuild, sharp) — this is NOT a monorepo; don't add workspace packages to it without intent.
- View transitions are on (`ClientRouter` in Layout); any theme/script side effects must survive `astro:page-load`.
- README.md is the stock Astro starter template; ignore it. CLAUDE.md duplicates the dev-server section here.

## Docs

https://docs.astro.build
