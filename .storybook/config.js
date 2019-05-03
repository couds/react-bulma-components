import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import extraViewports from './extra-viewports.json';

import 'index.sass';

addParameters({
  options: {
    name: 'React Bulma Components',
    url: 'https://github.com/couds/react-bulma-components',
    showAddonPanel: true,
  },
});

addDecorator(withKnobs);

addDecorator(withInfo({
  source: false,
}));

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
