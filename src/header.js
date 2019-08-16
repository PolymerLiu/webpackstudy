export default function Header () {
    var btn = document.createElement('button')
    btn.innerText = 1
    btn.setAttribute('id','button')
    document.body.append(btn)

    btn.onclick = function(){
        var div = document.getElementById('button')
        div.innerText =  parseInt(div.innerText)+ 1
    }
}