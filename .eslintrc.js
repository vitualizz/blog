module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true
  },
  globals: {
    '_': true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
  }
}
