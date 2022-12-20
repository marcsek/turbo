module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['turbo', 'prettier', 'plugin:@typescript-eslint/recommended'],
  tsconfigRootDir: __dirname,
  rules: {
    'react/jsx-key': 'off',
    'prefer-const': 'error',
    '@typescript-eslint/consistent-type-imports': 'warn',
  },
};
