const merge = require('webpack-merge')
const WorkboxPlugin = require('workbox-webpack-plugin')
const commonConfig = require('./webpack.common')

const config = {
    mode:'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
        })
      ]
}

module.exports = merge(commonConfig,config)
