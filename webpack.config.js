const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const options = process.env.WEBPACK_ENV === 'INCLUDE_CSS' ? {
  output: 'full/index',
  rules: [
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
  rules: [
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
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'reports/report.html',
      openAnalyzer: false,
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin({
      filename: 'dist/react-bulma-components.min.css',
      allChunks: true,
    }),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      mangle: false,
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
      exclude: [/\.min\.js$/gi], // skip pre-minified libs
    }),
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
      ...options.rules,
    ],
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx'],
    alias: {
      '_variables.sass': path.resolve(__dirname, 'src/components/_variables.sass'),
    },
  },
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
    'prop-types': 'commonjs prop-types',
  },
};
