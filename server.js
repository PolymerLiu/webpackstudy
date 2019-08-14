const webpack = require('webpack')
const express = require('express')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
// 把配置文件传入到webpack中可以获得webpack的编译器，编译器重新执行一次就会重新打包一下代码 
const complier = webpack(config)

// app是一个express的实例
const app = express()
app.use(webpackDevMiddleware(complier,{
    publicPath: config.output.publicPath
}))

app.listen(3000,()=> {
    console.log('================server is runing');
})