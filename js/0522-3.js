var a = document.querySelectorAll('a');
console.log(a[1].getAttribute('value'));

for (var i of a) {
    i.style.backgroundColor = i.getAttribute('value')
}
for (var i of a) {
    i.setAttribute('index', i)
}
for (var i of a) {
    i.addEventListener('click', function () {
        this.style.color = this.dataset.color
        this.innerHTML = this.dataset.coffeName

    })
}

var btn = document.querySelectorAll('button')
var str = ''
str += "<ul>"
str += "<li>javaScript</li>"
str += "<li>jquery</li>"
str += "<li>ajax</li>"
str += "</ul>"

var box = document.getElementById('box')

btn[0].onclick = addList;

function addList() {

    box.innerHTML = str
}

btn[1].onclick = delList;
function delList() {

    box.innerHTML = ""
}

btn[2].onclick = togList;
var i = 0
function togList() {
    i % 2 == 0 ? addList() : delList()
    i++
}