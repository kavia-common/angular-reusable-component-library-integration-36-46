import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../projects/ui-health/src/lib/**/*.stories.@(ts|mdx)',
    '../projects/ui-health/src/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  docs: {
    autodocs: true
  }
};

export default config;
