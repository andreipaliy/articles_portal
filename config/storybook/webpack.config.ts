import { RuleSetRule } from 'webpack'
import path from 'path'
import { BuildPaths } from '../build/types/config'
import { cssBuildLoader } from '../build/loaders/cssBuildLoader'

export default ({ config }) => {
    const paths: Pick<BuildPaths, 'src'> = {
        src: path.resolve(__dirname, '..', '..', 'src'),
    }

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config?.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config.module?.rules?.map(
            (rule: RuleSetRule) => {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i }
                }

                return rule
            },
        )
    }

    config?.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    })
    config?.module?.rules?.push(cssBuildLoader(true))

    return config
}
