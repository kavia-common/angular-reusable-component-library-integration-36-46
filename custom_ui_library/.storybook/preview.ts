import type { Preview } from '@storybook/angular';

// Ensure tokens are available globally inside Storybook preview
import '../projects/ui-health/src/lib/styles/tokens.css';
import '../src/styles.css';

const preview: Preview = {
  parameters: {
    controls: { expanded: true }
  }
};

export default preview;
