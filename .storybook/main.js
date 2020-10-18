const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = {
  stories: ['../src/**/*.story.@(js|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-events',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
    const newConfig = { ...config };

    newConfig.resolve.modules.push('node_modules', 'src');
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
