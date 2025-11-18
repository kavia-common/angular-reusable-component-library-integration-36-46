# Implementation Notes

This document tracks the progress across steps.

## Step 1 — Verified and Adjusted
- Angular 19 + Tailwind + PrimeNG set up.
- tokens.css is included globally:
  - application build (`angular.json` styles for build/test) includes `projects/ui-health/src/lib/styles/tokens.css`.
  - Storybook imports `src/styles.css` and also `projects/ui-health/src/lib/styles/tokens.css` in `.storybook/preview.ts`.
- Components exported in public API:
  - `projects/ui-health/src/public-api.ts` exports all components, tokens, and ThemeService.
- Styling aligns with Figma Health Dashboard/Overview and Ocean Professional theme:
  - CSS tokens and Tailwind theme variables in `tokens.css` and `tailwind.config.js`.
  - Components use `card-surface`, `ui-section-title`, subtle shadows, rounded corners, and gradient placeholders where relevant.

Result: Step 1 COMPLETE.

## Step 2 — Storybook Configuration Started
- Storybook v8 configured for Angular 19:
  - `.storybook/main.ts` and `.storybook/preview.ts` added.
- Stories added for all components:
  - header, stat-card, chart-card, activity-item, progress-ring, progress-bar, filters-toolbar, layout-grid.
- A composite demo story added to reflect Figma Overview.

Next in Step 2:
- Optionally add Docs MDX and controls refinement per component if needed.

### Storybook static assets
- Updated: Removed non-standard `skipUnresolved` usage. If you need assets, create `.storybook/public/` and add `staticDirs: ['.storybook/public']` in `.storybook/main.ts`.
- We no longer include a placeholder file by default to avoid confusion; the config works without static assets.

### Running Storybook
- Ensure dependencies are installed, then run:
  - `npm run storybook` (serves at http://localhost:6006)
  - `npm run build-storybook` to generate static build in `storybook-static/`.
- Global styles are loaded via `.storybook/preview.ts`:
  - `src/styles.css` (Tailwind + Prime imports)
  - `projects/ui-health/src/lib/styles/tokens.css` (design tokens)
