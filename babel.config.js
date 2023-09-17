module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module-resolver',
            {
                root: ['./src'],
                alias: {},
                extensions: [
                    '.ios.ts',
                    '.android.ts',
                    '.ts',
                    '.ios.tsx',
                    '.android.tsx',
                    '.tsx',
                    '.jsx',
                    '.js',
                    '.json',
                    '.png',
                ],
            },
        ],
        [
            'formatjs',
            {
                idInterpolationPattern: '[sha512:contenthash:base64:6]',
                ast: true,
            },
        ],
    ],
    env: {
        production: {
            plugins: [['transform-remove-console', { exclude: ['error', 'warn'] }]],
        },
    },
};
