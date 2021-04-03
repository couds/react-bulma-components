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
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push('node_modules', 'src');
    config.resolve.alias['react-bulma-components/lib'] = path.resolve(
      __dirname,
      '../src',
    );
    config.resolve.alias['react-bulma-components'] = path.resolve(
      __dirname,
      '../src',
    );
    config.plugins.push(
      new DefinePlugin({
        process: JSON.stringify(true),
      }),
    );

    return config;
  },
};
