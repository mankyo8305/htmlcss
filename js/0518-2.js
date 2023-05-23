var li = document.getElementsByTagName("li")
console.log(li)
li[0].style.backgroundColor = 'red'
li[1].style.backgroundColor = 'blue'

for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = "gold"
    li[i].style.border = '2px solid black'
    li[i].style.margin = "5px"
}
for (var i of li) {
    i.style.padding = "10px"
}
for (var i in li) {
    if (!isNaN(i))
        li[i].style.borderRadius = "10px"
}



var menu = document.getElementsByClassName("menu")[0]
console.log(menu)
menu.style.border = "3px solid tomato"

var lia = document.querySelector("li>a")
console.log(lia)
lia.style.fontSize = "25px"
var lia = document.querySelectorAll('li>a')
console.log(lia)


for (var i = 0; i < lia.length; i++) {
    lia[i].style.color = "black"
    lia[i].style.fontSize = "25px"

}

Array.from(li).forEach((element) => {
    element.style.textAlign = "center"
});

main_title.innerHTML = "DOCUMENT MODEL"
main_title.innerHTML = "DOCUMENT MODEL"

// html.innerHTML = "<span>innerHTML</span>"
// html.textContent = "<span>innerHTML</span>"

var h1 = document.getElementsByTagName("h1")
document.write(h1.length)
document.write("<hr>")
document.write(h1.item(0))
document.write("<hr>")
document.write(h1.item(0).nodeName)
document.write("<hr>")
document.write(h1.item(0).nodeValue)
document.write("<hr>")
document.write(h1.item(0).childNodes[0].nodeValue)
document.write("<hr>")
document.write(h1.item(2).childNodes[0].nodeValue)
document.write("<hr>")

var header = document.getElementById("header")
document.write(header.childNodes)
console.log(header.childNodes)
document.write("<hr>")
document.write(header.childNodes[0].nodeValue)
document.write("<hr>")
document.write(header.childNodes[1])
document.write("<hr>")
document.write(header.childNodes[1].nodeName)
document.write("<hr>")
var span = document.querySelector("h2>span")
document.write("<hr>")
document.write(span.parentNode.nodeName)
document.write("<hr>")
document.write(header.childNodes[1])
document.write("<hr>")
document.write(header.childNodes[1].nodeName)
document.write("<hr>")

var html = document.getElementById("html")
document.write(html.nextSibling.nodeName)
document.write("<hr>")
document.write(html.nextSibling.nextSibling.nodeName)
document.write("<hr>")
document.write(html.children)
console.log(header.children)
document.write("<hr>")
console.log(header.nodeType)
document.write("<hr>")
console.log(header.className)

var ul = document.querySelector("ul")
console.log(ul.children[1])

header.classList.add("wellcome")
header.classList.remove("wellcome")

document.write(header.id)
document.write(header.title)
document.write(header.childElementCount)

















