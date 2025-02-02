module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['root', 'docs', 'playground', 'lib', 'cli', 'release', 'nuxt-module', '@mazui/cli'],
    ],
  },
}
