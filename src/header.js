export default function Header () {
    var btn = document.createElement('button')
    btn.innerText = '新增'
    document.body.append(btn)

    btn.onclick = function(){
        var div = document.createElement('div')
        div.innerText = 'item'
        document.body.append(div)
    }
}