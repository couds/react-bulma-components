const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const options = process.env.WEBPACK_ENV === 'INCLUDE_CSS' ? {
  output: 'full/index',
  plugins: [
    {
      test: /\.s(c|a)ss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
  ],
} : {
  output: 'dist/index',
  plugins: [
    {
      test: /\.s(c|a)ss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!sass-loader',
      }),
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader',
      }),
    },
  ],
};

module.exports = {
  devtool: 'source-maps',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname),
    filename: `${options.output}.js`,
    sourceMapFilename: `${options.output}.js.map`,
    umdNamedDefine: true,
    libraryTarget: 'umd',
    library: 'react-bulma-components',
  },
  plugins: [
    new ProgressBarPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin({
      filename: 'react-bulma-components.min.css',
      allChunks: true,
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
          plugins: ['transform-class-properties', 'transform-object-rest-spread'],
        },
      },
      {
        test: /\.json/, // Only .json files
        loader: 'json-loader', // Run both loaders
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      ...options.plugins,
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
};
