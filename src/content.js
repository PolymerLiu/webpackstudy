export default function Content () {
    var dom = document.getElementById('root')
    var content = document.createElement('div')
    content.innerText = 'Content'
    dom.append(content)
}