import type { Preview } from '@storybook/angular';

/**
 * Global styles for Storybook:
 * - src/styles.css: Tailwind layers, Prime styles, and base resets
 * - tokens.css: library tokens to ensure variables are always present
 */
import '../src/styles.css';
import '../projects/ui-health/src/lib/styles/tokens.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true, sort: 'requiredFirst' },
    options: {
      storySort: {
        order: ['UI Health', ['Header', 'Filters Toolbar', 'Layout Grid', 'Stat Card', 'Chart Card', 'Activity Item', 'Progress Ring', 'Progress Bar']]
      }
    }
  }
};

export default preview;
