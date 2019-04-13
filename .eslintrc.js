module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/recommended',
      '@vue/standard'
    ],
    plugins: [
        'vue'
    ],
    rules: {
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'indent': 2,
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        'max-len': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
