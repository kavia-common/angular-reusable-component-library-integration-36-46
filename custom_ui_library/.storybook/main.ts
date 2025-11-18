import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    // Discover all stories inside the UI library
    '../projects/ui-health/src/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  // Keep staticDirs simple; remove invalid skipUnresolved flags (not supported in v8).
  // If you add a .storybook/public directory later, uncomment the line below.
  // staticDirs: ['.storybook/public'],

  // Use webpack5 builder explicitly for clarity in this workspace.
  core: {
    builder: '@storybook/builder-webpack5',
  },
};

export default config;
