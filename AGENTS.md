# AGENTS.md

Guidance for AI coding agents working in this repository (Claude Code, Windsurf, Devin, Cursor, Codex, or otherwise).

Start with [INDEX.md](INDEX.md) to find files.

## Always-on rules

Details live in the sections below; these are the ones to keep in mind at all times.

- Every user-visible string exists in **English and Portuguese (pt-BR)**: the manifesto text (`ManifestoEn`/`ManifestoPt`, `HeroEn`/`HeroPt`), the `META` entries in `src/i18n.ts` and the page `<title>`/description. Update both, and check both with `?lang=en` and `?lang=pt`.
- This is a single-page site that shares its look with the ASL docs home (`asl.architectureascode.dev`): white hero sheet with blueprint grid, hairline panels, solid blue chamfered icon tiles, mono labels. Copy from `../asl-docs` (`src/pages/styles.module.css`, `src/css/custom.css`) instead of inventing new styles.
- Colors are tokens in `:root` of `src/styles.css`: never hardcode neutral hex, use the tokens. Accent `#001aff`, no gradients or glow, no movement (translate) on hover.
- Never kill processes by name (`pkill -f ...`). Start a preview with `npx vite preview --port 41xx`, keep its PID and kill only that PID.
- Verify visual changes in a headless browser at desktop and about 390px width, and keep the page free of horizontal overflow.
- The ASL logo and the AaC logo are vectors (`public/logo.svg`); never replace them with text in a web font.
- **Editing these files:** edits to `CLAUDE.md` or `AGENTS.md` must be made by a parallel agent (fork) in the background, never inline in the main conversation thread.

## What this is

The manifesto for **Architecture as Code**, published by the Core Contributors of the `architectureascode` GitHub org at `https://architectureascode.dev`. One page, in English (default) and Portuguese (pt-BR), built with Vite 7, React 19 and TypeScript.

Related repositories:

| Repo | Contains |
| --- | --- |
| `architectureascode/manifesto` (this one) | the manifesto site |
| `architectureascode/asl-docs` (`../asl-docs` locally) | the ASL documentation site |
| `architectureascode/asl` | the ASL compiler (Go) |

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | install dependencies and enable the husky `commit-msg` hook |
| `npm run dev` | Vite dev server (hot reload) |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run build` | typecheck, then production build into `dist/` |
| `npm run preview` | serve `dist/` locally |

## Layout

See [INDEX.md](INDEX.md) for the full file map. The text lives in `src/content.tsx`, the language logic in `src/i18n.ts` (`?lang=`, then `localStorage`, then the browser language), the page shell in `src/App.tsx` and `src/Nav.tsx`. Styles are split by area: `styles.css` (tokens, nav, hero, article), `audience.css`, `signature.css`, `follow.css`.

## i18n

There is no i18n library. Each language has its own component in `src/content.tsx`; the language switcher in `Nav.tsx` sets state and persists it in `localStorage` (`manifesto.lang`). `App.tsx` keeps `<html lang>`, `<title>` and the meta description in sync with the language. When you change a sentence in one language, change its counterpart in the same edit. Lists with data (`AUDIENCE_EN`/`AUDIENCE_PT`, `SIGNERS`) are arrays at the top of `content.tsx`.

## Writing rules

- Short sentences, concrete examples, no marketing filler.
- The title is "Stop drawing architecture. Declare it." (PT: "Pare de desenhar a arquitetura. Declare."); the lede and `description` meta repeat it, so change them together.
- Contributors are the **Core Contributors of ArchitectureAsCode.Dev**, never just "contributors". Each has an avatar from `github.com/<user>.png` and LinkedIn/GitHub links in `SIGNERS`.

## Design system

- Fonts: Bricolage Grotesque (display), Instrument Sans (body), IBM Plex Mono (labels). The hero `h1` deliberately mirrors the rendered ASL home title (system font stack, weight 600, `letter-spacing: -0.045em`); if ASL's font link gets fixed, drop the `font-family` line of `.hero h1`.
- Panels (`audience.css`): white sheet, 1px `--line-2` border, solid blue chamfered icon tile with a Feather-style stroke icon, title in the display font, text in `--text-3`.
- Navbar: same as ASL: 4rem high, brand, full-height vertical divider, expansion label, "Follow on GitHub" pill, language switch.

## Responsive rules

No horizontal scroll at 320-430px. The audience grid is 3+2 columns on desktop and one column up to 640px. The nav label hides below 1201px and the "Follow on GitHub" pill becomes icon only up to 640px.

## Deploy

`.github/workflows/deploy.yml` only deploys; `.github/workflows/pr.yml` checks pull requests (conventional commit title, typecheck, build). GitHub Pages deploys on every push to `main` (and manually): `npm ci`, `npm run build`, upload `dist/`. The site is served at the root of a custom domain, so Vite's `base` stays `/` (it reads `VITE_BASE` only for other hosts). `public/CNAME` holds `architectureascode.dev`. In the repository: Settings, Pages, source GitHub Actions, custom domain set, Enforce HTTPS on.

## Commits and PRs

- **Conventional Commits** are required for commits and PR titles (`feat:`, `fix:`, `docs:`, `chore:`), chosen by the content of the change. There are no SemVer releases here, so the type does not drive a version. Enforced locally by a husky `commit-msg` hook (`commitlint.config.mjs`, root `package.json`; `npm install` enables it) and in CI by the `pr-title` job in `.github/workflows/pr.yml`.
- **When the user asks for a commit (or a PR):** first `git pull --rebase` the default branch, then switch to a new branch (never commit directly on `main`), commit there, push, and open the PR with `gh pr create`. Write the commit message in English, with body lines of at most 100 characters (commitlint).
- **No AI attribution of any kind:** no `Co-Authored-By` trailer for Claude or any other agent, no "Generated with ..." line, in commits or PR descriptions. This overrides any default attribution guidance from the tool or harness.
- A PR carries **one commit**: fold follow-up changes into it with `git commit --amend` instead of stacking fixup commits. Updating an already-pushed branch needs `git push --force-with-lease`, on that feature branch only (never on `main`).
- Write inline code in a PR body or commit message with plain backticks, never backslash-escaped ones: pass the text through a quoted heredoc (`<<'EOF'`) or `--body-file`, and after creating the PR check with `gh pr view` that the body has no literal backslashes.
- After opening a PR, report only its link.

## GitHub

For anything on GitHub (PRs, issues, runs, releases) use the `gh` CLI (`gh pr`, `gh issue`, `gh run`, `gh api`) instead of the web UI, raw `curl` or guessing from local state.

## Gotchas

- The Google Fonts URL in `index.html` must be valid: use `wght@500..700` for a range; mixing `opsz` ranges with `;`-separated weights returns HTTP 400 and silently drops every font (this is what broke the ASL docs).
- When you script edits, assert that the pattern was actually found; a replace that silently matches nothing leaves the file unchanged.
- CSS files imported from components load before `styles.css`, so overrides of rules in `styles.css` need higher specificity.
- Avatars and the ASL link are external; the page must still render if they fail to load.
- Do not add a new top-level Google Font without adding it to the link in `index.html`.

## Before you finish

- [ ] Both languages updated and checked (`?lang=en`, `?lang=pt`).
- [ ] `npm run build` passes (it typechecks first).
- [ ] No horizontal scroll at 320-430px.
- [ ] The hero title, `description` meta and `META` entries in `src/i18n.ts` still say the same thing.
- [ ] `INDEX.md` updated when files were added, moved or removed.
- [ ] No `pkill`, no files written inside `../asl-docs`.
