/**
 * PUBLIC_INTERFACE
 * Storybook preview configuration to load global styles for the Angular workspace.
 * This imports Tailwind base and the library token CSS for accurate theming.
 */
import type { Preview } from '@storybook/angular';
import '../src/styles.css';
import '../projects/ui-health/src/lib/styles/tokens.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#f9fafb' },
        { name: 'white', value: '#ffffff' }
      ],
    },
    controls: { expanded: true }
  }
};

export default preview;
