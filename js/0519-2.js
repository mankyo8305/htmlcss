window.onload = function () {
    var ul = document.querySelector('ul')
    var h2 = document.querySelector('h2')
    console.log(ul.childNodes)

    var nodes = ul.childNodes
    nodes.item(1).style.color = "tomato"
    var text1 = ul.childNodes.item(1).firstChild.nodeValue
    var text2 = ul.childNodes.item(3).firstChild.nodeValue
    h2.innerHTML = text1 + text2

    var li = document.getElementsByTagName('li')
    li[0].parentNode.style.border = "3px solid cyan"
    var text3 = ul.childNodes.item(3).textContent
    h2.innerHTML = text2 + text3 + text1

    document.getElementById('wrap').children[3].style.color = "skyblue"
    var p = document.getElementsByTagName("p")[1]
    p.style.background = "gold"

    var nexObj = p.nextSibling
    while (nexObj.nodeType != 1) {
        nexObj = nexObj.nextSibling
    }
    nexObj.style.background = 'pink'

    var s = document.getElementById('food')
    var child = s.firstChild
    var child2 = s.lastChild

    // while (child) {
    //     if (child.nodeType == 1 && child2.nodeType == 1) {
    //         child.style.background = 'silver'
    //     }
    child = child.nextSibling
    child2 = child2.previousSibling
    child.style.background = 'orange'
    child2.style.background = 'purple'

    document.fm.style.border = "3px solid orange"
    document.fm.submit.style.background = "steelblue"
    document.fm.submit.style.border = "none"
    document.fm.submit.style.width = "100px"
    document.fm.submit.style.height = "50px"
    document.fm.submit.style.outline = "5px solid tomato"
    document.forms[1].style.border = "5px solid skyblue"
    document.forms[1].elements[0].style.border = "5px solid lightblue"
    fm2.input2.style.background = "cyan"

    fm3.ch.checked = true

    fm3.name.onfocus = function () {
        var text = fm3.name.value
        var span = document.querySelector('span')
        span.innerHTML = text + "님 어서오세요"
    }
    fm3.name.onblur = function () {
        var text = fm3.name.value
        var span = document.querySelector('span')
        span.innerHTML = text + "님 안녕히가세요"
    }
    var pw2 = fm3.pw2
    pw2.disabled = true

    fm3.onsubmit = function () {
        var pw = fm3.pw
        var pw2 = fm3.pw2
        pw2.value = pw.value
        fm3.name.defaultValue = "원빈"
        return false

    }
}
// }