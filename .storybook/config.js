import { configure, setAddon } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// deprecated usage of infoAddon
import infoAddon from '@storybook/addon-info';

setOptions({
  name: 'React Bulma Components',
  url: 'https://github.com/couds/react-bulma-components',
  goFullScreen: false,
  showStoriesPanel: true,
  showAddonPanel: false,
  showSearchBox: false,
  addonPanelInRight: false,
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
});

// deprecated usage of infoAddon
setAddon(infoAddon);

require('../src');

// automatically import all story js files that end with *.stories.js
const req = require.context('../src', true, /\.story\.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);