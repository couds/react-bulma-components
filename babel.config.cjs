module.exports = (api) => {
  // import statements must be compiled in test env
  // in other environments, modules must be set to false to enable tree shaking
  // more info: https://jestjs.io/docs/en/getting-started#using-babel

  const useESModules = !api.env(['test']);
  return {
    plugins: ['babel-plugin-transform-react-remove-prop-types'],
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          debug: process.env.RBC_BUILD_VERBOSE === 'true',
          modules: useESModules ? false : 'commonjs',
        },
      ],
      ['@babel/preset-react'],
    ],
  };
};
