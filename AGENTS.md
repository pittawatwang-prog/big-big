# Repository Guidelines

## Project Structure & Module Organization

This is a dependency-free static GitHub Pages site. `index.html` owns the page markup, CSS, and browser JavaScript. Keep the experience self-contained unless a change clearly needs another file. `test-index.js` is the lightweight Node check for page structure and bubble content. `Asset/SF2_JPN_flyer.jpg` is a visual reference, not a runtime asset. The generated mascot should be `mascot.webp` at repository root; it is intentionally not present yet.

## Build, Test, and Development Commands

No build step exists. Open `index.html` in a browser for a quick visual check, or serve the folder locally:

```powershell
python -m http.server 8000
node test-index.js
```

The first command serves the site at `http://localhost:8000`; the second verifies the inline script parses, the click/timer behavior remains configured, and all 24 bubble lines exist. Run the test after every page change.

## Coding Style & Naming Conventions

Use two-space indentation in HTML, CSS, and JavaScript. Keep styles and small page behavior in `index.html`; do not add a framework, build tooling, or package dependency for this one-page site. Use CSS custom properties for reusable colors, kebab-case for HTML IDs/classes, and camelCase for JavaScript functions and variables. Preserve keyboard access, image alt text, and the `prefers-reduced-motion` rule when changing animation.

## Testing Guidelines

Keep tests dependency-free with Node built-ins. Add focused assertions to `test-index.js` when adding interactive behavior. Prefer observable checks: expected elements, listener/timer configuration, and content counts. For visual changes, check desktop and mobile browser layouts manually.

## Commit & Pull Request Guidelines

This workspace has no Git history yet, so no existing commit convention applies. Use short imperative Conventional Commit messages, for example `feat: add mascot animation` or `fix: keep bubble on screen`. PRs should explain visitor-facing changes, link relevant issues, include a screenshot or GIF for visual updates, and state `node test-index.js` result.

## Publishing

GitHub Pages serves this repository as a static site. Do not commit API keys, access tokens, or private source artwork. Confirm `mascot.webp` is original or licensed before publishing.
