const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    mode:'development',
    // inline表示map文件打包进bundle文件
    // cheap表示只显示错误代码的行数
    // module表示对依赖包也做了相关映射
    // eval是最快的一种方式，无map文件
    devtool: 'cheap-module-eval-source-map',
    // 生产环境建议配置成cheap-module-eval-source-map
    entry:'./src/index.js',
    // entry:{
    //     main: './src/index.js',
    //     sub: './src/index.js',
    // },
    devServer:{
        contentBase: './dist',
        open: true,
        // mock 代理地址
        proxy: {
            '/api': 'https://www.baidu.com'
        }
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
        // 后台用index.html,静态资源放到CDN，此处可配置CDN地址，会在打包好的文件前边加上下方地址
        // publicPath: 'https://www.baidu.com',
        publicPath: '/',
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