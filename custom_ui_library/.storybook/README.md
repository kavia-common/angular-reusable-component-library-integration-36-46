# Storybook (Angular + Builder)

This workspace uses Storybook 8 with the Angular builder wired via angular.json.

Run:
- Start: npm run storybook (alias of ng run ui-health:storybook)
- Build: npm run build-storybook (alias of ng run ui-health:build-storybook)

Config:
- Config directory: .storybook (main.ts, preview.ts)
- Builder: @storybook/builder-webpack5
- Framework: @storybook/angular

Notes:
- Global styles loaded from src/styles.css and projects/ui-health/src/lib/styles/tokens.css
- Ensure Node.js >= 18 for Storybook 8
