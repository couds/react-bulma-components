// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const path = require('path');

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.s(c|a)ss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.md$/,
        use: "raw-loader"
      }
    ],
  },
  resolve: {
    modules: ['node_modules', 'src'],
    alias: {
      '_variables.sass': path.resolve(__dirname, '..', 'src/components/_variables.sass'),
    },
  },
};
