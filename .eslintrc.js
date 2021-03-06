/* global module */

module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    './config/eslint/detect-errors.js',
    './config/eslint/code-style.js',
  ],
  parserOptions: {
    sourceType: 'module',
  },
  globals: {
    fetch: false,
  },
}
