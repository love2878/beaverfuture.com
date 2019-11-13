module.exports = {
    root: true,
    parserOptions: {
        sourceType: 'module'
    },
    parser: "vue-eslint-parser",
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/recommended'
    ],
    rules: {
        'no-console': 'off',
    }
}