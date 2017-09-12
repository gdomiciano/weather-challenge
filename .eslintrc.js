module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'airbnb-base',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    rules: {
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'import/prefer-default-export': 0,
        'indent': [2, 4, { 'SwitchCase': 1 }], // change default indent number
        'no-console': 0,
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // allow debugger during development
        'max-len': 0,
        'import/no-extraneous-dependencies': 0,
    },
};
