const path = require('path');

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'jest/globals': true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['jest', 'react', 'prettier'],
  rules: {
    'react/display-name': 0,
    'prettier/prettier': 'error',
    'no-console': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js')
          }
        }
      }
    }
  ]
};
