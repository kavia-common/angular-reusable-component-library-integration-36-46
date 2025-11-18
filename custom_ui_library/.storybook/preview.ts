import type { Preview } from '@storybook/angular';

// Import global stylesheet to ensure Tailwind layers and tokens are present
import '../src/styles.css';
// Explicitly import tokens.css as well, to guarantee variables exist even if consumers customize styles.css
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
