# INDEX.md

File map of `manifesto` for AI agents: where each thing lives and what to touch for a given task. Rules and commands are in [AGENTS.md](AGENTS.md); update this file when files are added, moved or removed.

## Content (every text exists in English and Portuguese)

| Path | What it is |
| --- | --- |
| `src/content.tsx` | The manifesto: `HeroEn`/`HeroPt`, `ManifestoEn`/`ManifestoPt`, audience lists (`AUDIENCE_EN`/`AUDIENCE_PT`), `SIGNERS` (name, LinkedIn, GitHub) and the signature footer |
| `src/i18n.ts` | `Lang` type, `META` (title, description, nav label, "Follow on GitHub", ASL docs link per language), `GITHUB_ORG`, language detection and persistence |

## Site code

| Path | What it is |
| --- | --- |
| `index.html` | Shell, Google Fonts link, default title and description |
| `src/main.tsx` | Entry point |
| `src/App.tsx` | Page shell: language state, `<html lang>`/title/description sync, nav, hero, article |
| `src/Nav.tsx` | Navbar: logo, label, "Follow on GitHub" pill, Manifesto/ASL links, language switch |
| `src/styles.css` | Tokens (`:root`), nav, hero, article, blockquote, lists |
| `src/audience.css` | "Who should read this" panels and the divider that starts the article |
| `src/signature.css` | Contributors footer |
| `src/follow.css` | "Follow on GitHub" pill |
| `vite.config.ts` | Vite config; `base` from `VITE_BASE`, default `/` |
| `tsconfig.json` | TypeScript config |

## Static files

| Path | What it is |
| --- | --- |
| `public/logo.svg` | AaC logo (vector, no font dependency) |
| `public/favicon.svg` | Favicon |
| `public/llms.txt` | Plain-text summary of the manifesto for LLMs (English); keep in sync with `src/content.tsx` |
| `public/CNAME` | `architectureascode.dev` for GitHub Pages |

## Tooling

| Path | What it is |
| --- | --- |
| `.github/workflows/deploy.yml` | Build and deploy to GitHub Pages on push to `main` |
| `.github/workflows/pr.yml` | PR checks: conventional title, typecheck, build |
| `.github/pull_request_template.md` | PR template |
| `commitlint.config.mjs`, `.husky/commit-msg` | Conventional Commits enforced locally |
| `AGENTS.md`, `CLAUDE.md`, `INDEX.md` | Instructions and file map for agents |
