module.exports = (api) => {
  // import statements must be compiled in test env
  // in other environments, modules must be set to false to enable tree shaking
  // more info: https://jestjs.io/docs/en/getting-started#using-babel

  const useESModules = !api.env(['test']);
  return {
    ignore: ['**/__test__', '**/*.story.js', '**/*.test.js'],
    plugins: [
      '@babel/plugin-transform-runtime',
      'transform-react-remove-prop-types',
      '@babel/plugin-transform-react-constant-elements',
    ],
    presets: [
      [
        '@babel/preset-env',
        {
          bugfixes: true,
          browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
          debug: process.env.RBC_BUILD_VERBOSE === 'true',
          modules: useESModules ? false : 'commonjs',
          shippedProposals: api.env('modern'),
        },
      ],
      [
        '@babel/preset-react',
        {
          runtime: 'automatic',
        },
      ],
    ],
  };
};
