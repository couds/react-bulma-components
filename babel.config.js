module.exports = (api) => {
  // import statements must be compiled in test env
  // in other environments, modules must be set to false to enable tree shaking
  // more info: https://jestjs.io/docs/en/getting-started#using-babel

  const isTestEnv = api.env('test');

  return {
    presets: [
      '@babel/preset-react',
      ['@babel/preset-env', { modules: isTestEnv ? 'commonjs' : false }],
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
    ],
  };
};
