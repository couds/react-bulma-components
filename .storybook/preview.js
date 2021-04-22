import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

import test from './rewrites.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';

console.log(test);

addDecorator(withPropsTable);

export const parameters = {
  layout: 'padded',
  viewMode: 'docs',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      "tablet": {
        "name": "Tablet",
        "styles": {
          "width": "1023px",
          "height": "963px"
        },
        "type": "tablet"
      },
      "desktop": {
        "name": "Desktop",
        "styles": {
          "width": "1215px",
          "height": "100%"
        },
        "type": "desktop"
      },
      "widescreen": {
        "name": "Widescreen",
        "styles": {
          "width": "1407px",
          "height": "100%"
        },
        "type": "desktop"
      },
      "fullhd": {
        "name": "Fullhd",
        "styles": {
          "width": "1920px",
          "height": "100%"
        },
        "type": "desktop"
      },
    }
  },
  options: {
    storySort: {
      order: ['Welcome', 'Changelog', 'Core Component', 'Columns', 'Elements', 'Components', 'Form', 'Layout'],
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: 0, default: true },
  }
};
