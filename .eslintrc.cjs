/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['index']
      }
    ],
    'no-useless-escape': 'off'
  }
  // overrides: [
  //   {
  //     files: ['*.ts', '*.tsx', '*.vue'],
  //     rules: { 'no-undef': 'off' }
  //   }
  // ],
  // rules: {
  //   'vue/multi-word-component-names': 'off',
  //   'prettier/prettier': 'error',
  //   '@typescript-eslint/no-explicit-any': 'off',
  //   'vue/require-default-prop': 'off',
  //   '@typescript-eslint/ban-ts-comment': 'off',
  //   'no-useless-escape': 'off'
  // }
}
