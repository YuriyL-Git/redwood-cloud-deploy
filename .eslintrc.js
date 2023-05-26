module.exports = {
  extends: ['@redwoodjs/eslint-config'],
  rules: {
    'jsx-a11y/no-onchange': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    semi: [1, 'always'],
    'prettier/prettier': ['error', { semi: true }],
  },
};
