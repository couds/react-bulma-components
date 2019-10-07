const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const options = process.env.WEBPACK_ENV === 'INCLUDE_CSS' ? {
  output: 'full/index',
  rules: [
    {
      test: /\.s?[ca]ss$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!sass-loader',
    },
  ],
} : {
  output: 'dist/index',
  rules: [
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
};

exports.default = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname),
    filename: `${options.output}.js`,
    sourceMapFilename: `${options.output}.js.map`,
    umdNamedDefine: true,
    libraryTarget: 'umd',
    library: 'react-bulma-components',
    globalObject: process.env.WEBPACK_ENV === 'INCLUDE_CSS' ? 'window' : 'this',
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
  ].concat(
    process.env.WEBPACK_ENV === 'INCLUDE_CSS'
      ? []
      : [
        new MiniCssExtractPlugin({
          filename: 'dist/react-bulma-components.min.css',
        }),
      ],
  ),
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
      ...options.rules,
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
