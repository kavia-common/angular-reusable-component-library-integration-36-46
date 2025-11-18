import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/angular',
    options: {}
  },
  stories: [
    '../projects/ui-health/src/**/*.stories.@(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials'
  ],
  docs: {
    autodocs: 'tag'
  },
  staticDirs: [
    { from: '../projects/ui-health/src/lib/styles', to: '/styles' },
    { from: './public', to: '/public', skipUnresolved: true }
  ],
  webpackFinal: async (config) => {
    // Ensure PostCSS is used so Tailwind works inside Storybook
    // Storybook 8 already supports PostCSS via default config with Angular builder.
    return config;
  }
};

export default config;
