module.exports = {
  extends: ['@redwoodjs/eslint-config'],
  rules: {
    'jsx-a11y/no-onchange': 'off',
    semi: [1, 'always'],
    'prettier/prettier': ['error', { semi: true }],
  },
};
