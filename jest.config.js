module.exports = {
  rootDir: 'src',
  testMatch: ['**/*.test.js'],
  coverageDirectory: '<rootDir>/../.coverage',
  collectCoverageFrom: [
    '**/*.js',
    '!**/node_modules/**',
    '!**/*.story.js',
    '!**/*.test.js',
  ],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|less|s(c|a)ss)$': '<rootDir>/../__mocks__/style.js',
  },
};
