const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 打包分析插件
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry:'./src/index.js',
  // entry:{
  //     main: './src/index.js',
  //     sub: './src/index.js',
  // },
  module:{
    rules:[
      {
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
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_module/,
        loader: 'babel-loader',
        options: {
          presets: [["@babel/preset-env",{
            // 兼容性测试，根据对应的浏览器决定是否使用polyfill转换代码
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "17",
                safari: "11.1",
              },
            useBuiltIns: 'usage'
          }]]
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
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
    new BundleAnalyzerPlugin()
  ]
}
module.exports = config