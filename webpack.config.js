const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode:'development',
    // entry:'./src/index.js',
    entry:{
        main: './src/index.js',
        sub: './src/index.js',
    },
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
        },
        {
            test: /\.less$/,
            // css-loader负责处理各css文件间的关系（比如在一个css文件中import另外一个css文件）,并将这些文件合并成一段css
            // style-loader 负责将生成的css添加到对应的标签上
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        // 在less文件里边引入其他less文件，同样需要经过下方的俩各loader处理
                        // loader是从下往上执行的
                        importLoaders: 2,
                        modules: true
                    }
                },
                'less-loader',
                'postcss-loader',

            ]
        }
    ]
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Webpack Study',
        template: './src/template.html'
        }),
    ]
}

module.exports = config