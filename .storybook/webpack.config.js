const path = require('path');
const { DefinePlugin } = require('webpack');

module.exports = ({ config: defaultConfig }) => {
  const config = {
    ...defaultConfig,
    mode: 'development',
    module: {
      ...defaultConfig.module,
      rules: [
        {
          test: /\.story\.js?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        },
        ...defaultConfig.module.rules,
      ],
    },
    resolve: {
      ...defaultConfig.resolve,
      modules: ['node_modules', 'src', ...defaultConfig.resolve.modules],
      alias: {
        ...defaultConfig.resolve.alias,
        'react-bulma-components/lib': path.resolve(__dirname, '../src'),
      },
      // https://github.com/graphql/graphql-js#using-in-a-browser
    },
    plugins: [
      ...defaultConfig.plugins,
      // graphql sources check process variable
      new DefinePlugin({
        process: JSON.stringify(true),
      }),
    ],
  };
  return config;
};
