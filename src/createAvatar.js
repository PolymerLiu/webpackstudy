import avatar from './avatar.jpg'

function Avatar () {
    let img = new Image()
    img.src = avatar
    img.classList.add('avatar')
    const root = document.getElementById('root')
    root.append(img)
}

export default Avatar