const path = require('path');

module.exports = {
  env: {
    "browser": true,
    "node": true,
  },
  root: true,
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint"
  },
  // parser: 'babel-eslint',
  extends: [
    "prettier",
    "prettier/standard",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "eslint:recommended"
  ],
  plugins: ["vue", "prettier"],
  rules: {
    'prettier/prettier': 'error',
    // 'no-var': "error",
    'semi': ["error", "always"]
  },
  settings: {
    // 'import/resolver': {
    //   webpack: {
    //     config: path.join(__dirname, 'build', 'webpack', 'development.js'),
    //   },
    // },
  }
};

