import Header from './src/header'
import SideBar from './src/sidebar'
import Content from './src/content'
import Avatar from './src/createAvatar'

import avatar from './src/avatar.jpg'

// 在index文件引入该文件，相当于该样式是全局的
import style from './src/index.less'

Avatar()

let img = new Image()
img.src = avatar
img.classList.add(style.avatar)
const root = document.getElementById('root')
root.append(img)

new Header()
new SideBar()
new Content()