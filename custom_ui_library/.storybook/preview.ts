import type { Preview } from '@storybook/angular';

// Import global styles so components render with the app's design system
import '../src/styles.css';
import '../projects/ui-health/src/lib/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'padded',
    options: {
      storySort: {
        order: ['UI Health', ['Header', 'Stat Card', 'Chart Card', 'Progress Ring', 'Progress Bar', 'Filters Toolbar', 'Layout Grid', 'Demo (Overview Composition)']],
      },
    },
  },
};

export default preview;
