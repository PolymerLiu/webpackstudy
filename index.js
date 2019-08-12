import Header from './src/header'
import SideBar from './src/sidebar'
import Content from './src/content'

import avatar from './src/avatar.jpg'

import './src/index.less'

console.log('============',avatar)
let img = new Image()
img.src = avatar
img.classList.add('avatar')
const root = document.getElementById('root')
root.append(img)

new Header()
new SideBar()
new Content()