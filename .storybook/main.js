const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  stories: ['../src/**/*.story.mdx'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          test: [/\.story\.js?$/],
        },
      },
    },
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-events',
    '@storybook/addon-viewport',
    '@storybook/addon-postcss',
    'storybook-addon-react-docgen',
    '@storybook/preset-scss',
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push('node_modules', 'src');
    config.resolve.alias['react-bulma-components'] = path.resolve(
      __dirname,
      '../src',
    );
    return config;
  },
};
