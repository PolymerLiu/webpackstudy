#第一章学习笔记
npm info webpack  （查看webpack的一些信息，比如说版本号）

npx webpack index.js  在当前工程(node_modules文件夹下)寻找webpack并对index.js文件进行打包

npm init 初始化一个项目（加上-y的参数按默认项初始化项目）

npm i webpack@1.0.0 -D   （把1.0.0的webpack安装在devDependencies下）

webpack ---config build/webpack.config.client.js  （指定build文件夹下的webpack.config.client.js为配置文件）

webpack 不指定配置时，把webpack.config.js当作默认的配置文件


webpack 打包文件的三种方式

webpack index.js  （全局安装webpack）
npx webpack index.js (局部安装webpack)
npm run bundle  -> webpack (通过脚本执行webpack命令)

# 第二章学习笔记
