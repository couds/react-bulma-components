import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

console.log('set Options', setOptions);

setOptions({
  name: 'React Bulma Components',
  url: 'https://github.com/couds/react-bulma-components',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
});


const context = require.context('../src', true, /\.story\.(js|jsx)$/);

function loadStories() {
  context.keys().sort().forEach(context);
}

configure(loadStories, module);
