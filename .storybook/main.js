const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  stories: ['../src/**/*.story.@(js|mdx)'],
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
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-events',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
    const newConfig = { ...config };

    newConfig.resolve.modules.push('node_modules', 'src');
    newConfig.resolve.alias['react-bulma-components/lib'] = path.resolve(
      __dirname,
      '../src',
    );
    newConfig.resolve.alias['react-bulma-components'] = path.resolve(
      __dirname,
      '../src',
    );
    newConfig.plugins.push(
      new DefinePlugin({
        process: JSON.stringify(true),
      }),
    );

    return config;
  },
};
