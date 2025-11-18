# @custom/ui-health

Reusable Angular components for a Health Dashboard, styled with Tailwind and aligned with the "Ocean Professional" theme.

- Tailwind + CSS variables exposed via `tokens.css`
- PrimeNG-compatible surface and layout primitives
- Standalone components with documented inputs/outputs
- Demo composition: `ui-health-dashboard-demo`

Usage:
1. Ensure Tailwind is configured in your workspace (postcss + tailwind.config.js).
2. Add `projects/ui-health/src/lib/styles/tokens.css` to your global styles (already wired in angular.json here).
3. Import components directly, e.g.:

```ts
import { StatCardComponent } from '@custom/ui-health';
```

Storybook:
- Components are standalone and include JSDoc-ready inputs for controls.
- Add stories in your Storybook app to visualize each component.

Theme:
- Use `ThemeService` to override CSS variables at runtime if needed.
```ts
themeService.applyTokens({ primary: '#1d4ed8' });
```
