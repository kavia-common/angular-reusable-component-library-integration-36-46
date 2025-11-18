# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
npm start
# or: ng serve
```

Once the server is running, open your browser and navigate to:
- App: http://localhost:3000 (configured in angular.json)
- Storybook: http://localhost:6006 (see below)

The application will automatically reload whenever you modify any of the source files.

## How to view the sample Health Dashboard

The app integrates the local @custom/ui-health library and exposes a sample Health Dashboard/Overview page composed from library components.

- Default route is `/dashboard`.
- The app redirects from `/` to `/dashboard`.

Steps:
1. Start the dev server (`npm start`).
2. Open http://localhost:3000/dashboard (or simply http://localhost:3000).

You should see:
- Header with date-range text and an Export button.
- Filters toolbar with range buttons and a search input.
- Responsive grid of stat cards.
- Two chart cards (one with a placeholder chart area).
- A "Recent Activity" list using activity items.
- Progress ring and bars. All styles use Tailwind + tokens.css globally.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Storybook (for @custom/ui-health library)

This workspace includes Storybook 8 for the reusable UI library and uses the Angular builder for startup/build.

Run:
- Start Storybook via Angular builder
  ```bash
  npm run storybook
  # equivalent: ng run ui-health:storybook
  ```
  Then open http://localhost:6006.

- Build a static Storybook site
  ```bash
  npm run build-storybook
  # equivalent: ng run ui-health:build-storybook
  ```

Targets:
- angular.json contains ui-health targets:
  - "storybook" -> builder "@storybook/angular:storybook" with "configDir": ".storybook"
  - "build-storybook" -> builder "@storybook/angular:build-storybook" with "configDir": ".storybook"

Config location:
- The Storybook configuration is at the workspace root: `.storybook/main.ts` and `.storybook/preview.ts`.

Styles:
- Global styles are loaded (src/styles.css) and the library tokens.css via angular.json to ensure tokens and Tailwind classes are available.

Static assets:
- If you need static assets, create `.storybook/public/` and then enable `staticDirs: ['.storybook/public']` in `.storybook/main.ts`.

Troubleshooting:
- If `@storybook/angular:storybook` builder is not found, run `npm install` to ensure the devDependencies are installed.
- Requires Node.js >= 18 for Storybook 8.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
