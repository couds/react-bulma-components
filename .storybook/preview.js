import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './rewrites.css'

addDecorator(withPropsTable);

console.log(JSON.stringify(MINIMAL_VIEWPORTS, null, 2))

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
      order: ['Welcome', 'Core Component', 'Columns', 'Elements', 'Components', 'Form', 'Layout'],
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: 0, default: true },
  }
};
