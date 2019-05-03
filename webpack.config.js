const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.default = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname),
    filename: 'dist/index.js',
    sourceMapFilename: 'dist/index.js.map',
    umdNamedDefine: true,
    libraryTarget: 'umd',
    library: 'react-bulma-components',
  },
  watchOptions: {
    poll: 250,
    ignored: /node_modules/,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'react-bulma-components.min',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new ProgressBarPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'reports/report.html',
      openAnalyzer: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/react-bulma-components.min.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [
            ['@babel/preset-env', {
              targets: {
                browsers: ['last 2 versions', 'not safari < 11', 'not ie < 11'],
              },
            }],
            '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
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
      {
        test: /\.s?[ca]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'resolve-url-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
  },
};
