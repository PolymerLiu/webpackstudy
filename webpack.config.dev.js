const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const config = {
    mode:'development',
    // inline表示map文件打包进bundle文件
    // cheap表示只显示错误代码的行数
    // module表示对依赖包也做了相关映射
    // eval是最快的一种方式，无map文件
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'cheap-module-eval-source-map',
    // 生产环境建议配置成cheap-module-eval-source-map
    
    devServer:{
        contentBase: './dist',
        open: true,
        // mock 代理地址
        proxy: {
            '/api': 'https://www.baidu.com'
        },
        hot: true,
        // hotOnly: true
    },
    // 只有在development环境下才需要有下方配置
    optimization: {
        usedExports: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commonConfig,config)