module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: [
       'eslint:recomended',
       'plugin:@typescript-eslint/eslint-recomended',
       'plugin:@typescript-eslint/recomended',
       'plugin:prittier/recomended',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parse: '@typescript-eslint/parser',
    parseoptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    rules:{},
    };
