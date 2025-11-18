# Storybook configuration (Angular builder)

This Storybook is configured for Angular v19 with the Storybook v8 Angular builder.

Key files:
- main.ts: framework '@storybook/angular' with builder '@storybook/angular/webpack5'
- preview.ts: loads global styles (src/styles.css and library tokens.css)
- public/: static assets served at root (optional)

Docs:
- https://storybook.js.org/docs/angular/get-started/install
- https://github.com/storybookjs/storybook/blob/next/code/frameworks/angular/README.md

Run:
- npm run storybook:angular (Angular builder)
- npm run build-storybook:angular (Angular builder)
- npm run storybook (direct CLI)
- npm run build-storybook (direct CLI)
