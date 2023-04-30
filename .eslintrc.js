module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'eslint-config-prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/self-closing-comp': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
