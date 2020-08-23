import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
import { select, withKnobs } from '@storybook/addon-knobs';
import {
  configureViewport,
  INITIAL_VIEWPORTS,
} from '@storybook/addon-viewport';
import extraViewports from './extra-viewports.json';

import 'bulma/css/bulma.min.css';

setOptions({
  name: 'React Bulma Components',
  url: 'https://github.com/couds/react-bulma-components',
  showAddonPanel: true,
});

addDecorator(withKnobs);

addDecorator(
  withInfo({
    source: false,
  }),
);

configureViewport({
  viewports: {
    ...INITIAL_VIEWPORTS,
    ...extraViewports,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.story.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
