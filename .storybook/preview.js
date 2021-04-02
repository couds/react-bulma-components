import { addDecorator } from '@storybook/react';
import { withPropsTable } from 'storybook-addon-react-docgen';

import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './rewrites.css'

addDecorator(withPropsTable);

export const parameters = {
  layout: 'padded',
  viewMode: 'docs',
  options: {
    storySort: {
      order: ['Welcome', 'Core Component', 'Columns', 'Elements', 'Components', 'Form', 'Layout'],
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: 0, default: true },
  }
};
