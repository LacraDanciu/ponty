module.exports = {
  extends: ['google', 'plugin:react/recommended'],
  plugins: ['react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'valid-jsdoc': [0],
    'require-jsdoc': [0],
  },
};
