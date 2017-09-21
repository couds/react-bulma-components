const path = require('path');

module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'rules': {
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'no-console': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'global-require': 0,
    'jsx-a11y/media-has-caption': 0,
    'import/prefer-default-export': 0,
    'react/forbid-prop-types': 0,
    'max-len': 0,
    'jsx-a11y/accessible-emoji': 0,
    'jsx-a11y/label-has-for': 0,
  },
  'globals': {
    'document': true,
    'window': true
  }
}