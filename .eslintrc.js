module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'i18next',
        'react-hooks'],
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        indent: ['error', 4],
        'react/jsx-filename-extension': ['error',
            {
                extensions: ['.js', '.jsx', 'tsx'],
            }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error',
            {
                argsIgnorePattern: '^_',
            }],
        'react/require-default-props': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['error',
            {
                devDependencies: true,
            }],
        'no-underscore-dangle': 'off',
        'react/button-has-type': 'error',
        'max-len': ['error',
            {
                code: 120,
                ignoreComments: true,
            }],
        semi: ['error', 'never'],
        'linebreak-style': ['error', 'windows'],
        quotes: ['error', 'single'],
        'jsx-quotes': ['error', 'prefer-single'],
        'i18next/no-literal-string': ['error', {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
    },
    overrides: [{
        files: ['**/src/**/*.{test,stories}.{tsx,ts}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
    globals: {
        __IS_DEV__: true,
    },
}
