import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { cssBuildLoader } from './loaders/cssBuildLoader'
import { svgBuildLoader } from './loaders/svgBuidLoader'
import { babelBuildLoader } from './loaders/babelBuildLoader'
import { fileBuildLoader } from './loaders/fileBuildLoader'
import { typeScriptBuildLoader } from './loaders/typeScriptbuildLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    return [
        fileBuildLoader(),
        svgBuildLoader(), babelBuildLoader(),
        typeScriptBuildLoader(),
        cssBuildLoader(isDev),
    ]
}
