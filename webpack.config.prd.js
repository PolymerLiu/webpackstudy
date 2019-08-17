const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const config = {
    mode:'production',
    devtool: 'cheap-module-source-map',
}

module.exports = merge(commonConfig,config)
