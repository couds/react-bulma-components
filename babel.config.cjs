module.exports = {
  plugins: ['babel-plugin-transform-react-remove-prop-types'],
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        debug: process.env.RBC_BUILD_VERBOSE === 'true',
        modules: 'commonjs',
      },
    ],
    ['@babel/preset-react'],
  ],
};
