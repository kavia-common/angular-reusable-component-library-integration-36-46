/**
 * PUBLIC_INTERFACE
 * Storybook main configuration for Angular 19 workspace using the Angular builder.
 * Ensures framework '@storybook/angular' is used and configDir is resolved by Angular builder targets.
 */
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  stories: [
    '../projects/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials'
  ],
  docs: {
    defaultName: 'Docs'
  }
};

export default config;
