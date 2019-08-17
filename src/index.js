// babel/polyfill的作用机制：其并未导出任何模块，只是把Windows不存在的对象挂载到Windows上
// 所以在使用Tree Shaking的时候@babel/polyfill会失效，我们只需要在package.json里边加上 "sideEffects":['@babel/polyfill'],意思是对@babel/polyfill不做Tree Shaking
// 当把"sideEffects"设置为false时，表示对所有模块都做Tree Shaking
import '@babel/polyfill'
// import CSS 文件也同理

// Tree Shaking 只支持ES module （import）的引入方式
import {add} from './math'
add(1,1)