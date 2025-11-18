import type { Preview } from '@storybook/angular';

/**
 * Storybook preview configuration
 * - docs: https://storybook.js.org/docs/angular/configure/story-rendering
 *
 * Global styles pulled in so library tokens and Tailwind utilities are available in stories.
 * Note: We reference src/styles.css which in turn imports the library tokens.css.
 */
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
    options: {
      storySort: {
        order: ['UI Health', ['Header', 'Stat Card', 'Chart Card', 'Activity Item', 'Progress Ring', 'Progress Bar', 'Filters Toolbar', 'Layout Grid', 'Demo (Overview Composition)']],
      },
    },
    // Enable docs/controls from addon-essentials
    docs: {
      source: {
        type: 'auto',
      },
    },
    // Backgrounds can be toggled to visualize tokens
    backgrounds: {
      default: 'Surface',
      values: [
        { name: 'Surface', value: '#ffffff' },
        { name: 'Background', value: '#f9fafb' },
      ],
    },
  },
};

export default preview;
