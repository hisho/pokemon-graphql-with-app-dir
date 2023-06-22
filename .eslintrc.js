module.exports = {
  extends: ['next/core-web-vitals', 'plugin:perfectionist/recommended-natural'],
  ignorePatterns: ['src/lib/gql/**'],
  rules: {
    'react/display-name': 'off',
  },
}
