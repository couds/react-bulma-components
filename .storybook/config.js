import { configure } from '@storybook/react';

const context = require.context('../src', true, /\.story\.(js|jsx)$/);

function loadStories() {
  context.keys().sort().forEach(context);
}

configure(loadStories, module);
