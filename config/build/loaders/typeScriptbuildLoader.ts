export const typeScriptBuildLoader = () => ({
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
})
