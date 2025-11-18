import type { Preview } from '@storybook/angular';

// Import global styles — Tailwind + Prime and design tokens
import '../src/styles.css';
import '../projects/ui-health/src/lib/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['UI Health', ['Header', 'Stat Card', 'Chart Card', 'Progress Ring', 'Progress Bar', 'Filters Toolbar', 'Layout Grid', 'Activity Item'], 'Demo (Overview Composition)'],
      },
    },
  },
};

export default preview;
