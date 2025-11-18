# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

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

## Storybook

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
- Do not use obsolete direct "storybook dev" scripts; use the Angular builder scripts above.

Styles:
- Global styles are imported in `.storybook/preview.ts` (src/styles.css and the library tokens.css).

Static assets:
- If you need static assets, create `.storybook/public/` and then enable `staticDirs: ['.storybook/public']` in `.storybook/main.ts`.
- We intentionally removed non-standard `skipUnresolved` to avoid config errors on Storybook 8.

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
