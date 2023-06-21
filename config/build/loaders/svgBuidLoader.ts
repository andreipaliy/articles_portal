export const svgBuildLoader = () => ({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
})
