/*
PUBLIC_INTERFACE
This is the public API surface of the @custom/ui-health library.
It exports components and services for consumers to import.
Note: Keep this list exhaustive so Storybook and consumers can auto-discover symbols.
*/

export * from './lib/tokens/theme.tokens';
export * from './lib/services/theme.service';

export * from './lib/components/header/header.component';
export * from './lib/components/filters-toolbar/filters-toolbar.component';
export * from './lib/components/layout-grid/layout-grid.component';

export * from './lib/components/stat-card/stat-card.component';
export * from './lib/components/chart-card/chart-card.component';
export * from './lib/components/activity-item/activity-item.component';

export * from './lib/components/progress-ring/progress-ring.component';
export * from './lib/components/progress-bar/progress-bar.component';

/* Demo export to simplify local preview usage in the host app */
export * from './lib/demo/health-dashboard-demo.component';
