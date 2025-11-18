import type { StorybookConfig } from '@storybook/angular';

/**
 * Storybook v8 Angular builder configuration
 * - docs: https://storybook.js.org/docs/angular/get-started/install
 * - Angular builder migration notes: https://github.com/storybookjs/storybook/blob/next/code/frameworks/angular/README.md
 *
 * We explicitly configure the Angular framework with Webpack 5 builder here and
 * ensure staticDirs are compatible with missing optional paths via { skipUnresolved: true }.
 */
const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {
      /**
       * Use the Angular builder so Storybook uses Angular CLI/Builder integration
       * to discover and compile Angular projects in this workspace.
       */
      builder: {
        name: '@storybook/angular/webpack5'
      }
    },
  },
  stories: [
    '../projects/ui-health/src/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  /**
   * Keep static assets available to stories. The `.storybook/public` folder is optional.
   * Use skipUnresolved: true so Storybook won't fail if a path doesn't exist locally.
   */
  staticDirs: [
    { from: '../src/assets', to: '/assets', skipUnresolved: true },
    { from: './public', to: '/', skipUnresolved: true },
  ],
  /**
   * Ensure TypeScript is handled correctly in strict Angular workspaces.
   */
  typescript: {
    // Let Storybook handle TS with Angular's tsconfig
    check: false,
    // Use default reactDocgen to 'false' for Angular
    reactDocgen: false as any
  },
};
export default config;
