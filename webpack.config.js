const path = require('path')

const config = {
    mode:'development',
    entry:'./index.js',
    module:{
        rules:[{
            test: /\.(jpg|png|gif)$/,
            use: {
                // url-loader和file-loader作用比较相似
                // url-loader会把图片文件转换成base64格式的文件（此文件尺寸比图片体积还大）
                loader: 'url-loader',
                options: {
                    // placeholder  占位符
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    // 下方表示，当文件尺寸小于200kb的时候，该文件将被打包进bundle.js以base64的格式，大于20kb时被打包到dist文件夹以图片的形式
                    limit: 20480
                }
            }
        }]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
}

module.exports = config