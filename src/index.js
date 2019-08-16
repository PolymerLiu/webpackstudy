import Header from './header'
import SideBar from './sidebar'
import Content from './content'
import Avatar from './createAvatar'

import avatar from './avatar.jpg'

// 在index文件引入该文件，相当于该样式是全局的
import style from './index.css'
console.log('================',);
// Avatar()

// let img = new Image()
// img.src = avatar
// img.classList.add(style.avatar)
// const root = document.getElementById('root')
// root.append(img)



Header()
SideBar()
// new Content()

if(module.hot){
    // 当sidebar.js文件发生变化时，执行回调
    module.hot.accept('./sidebar',() => {
        document.body.removeChild(document.getElementById('number'))
        SideBar()
    })
}