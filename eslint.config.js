// eslint.config.js
export default [
    {
      ignores: ['node_modules/**', 'database/**']
    },
    {
      files: ['**/*.js'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        'no-unused-vars': 'warn',
        'no-console': 'off'
      }
    }
  ];
  