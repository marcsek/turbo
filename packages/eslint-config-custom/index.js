module.exports = {
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname + '../../../apps',
  },
  plugins: ['@typescript-eslint'],
  extends: ['turbo', 'prettier', 'plugin:@typescript-eslint/recommended'],

  rules: {
    'react/jsx-key': 'off',
    'prefer-const': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
};
