module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    "allowImportExportEverywhere": true
  },
  plugins: [
    'react',
  ],
  rules: {
  },
  "overrides": [
    {
      "files": ["test/*.spec.js", "cypress/integration/*.spec.js"], // Or *.test.js
      "rules": {
        "no-undef": "off",
        "no-unused-expressions": "off"
      }
    }
  ],
};
