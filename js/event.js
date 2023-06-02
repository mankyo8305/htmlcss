function play() {
    box1.innerHTML += "이벤트핸들러 사용"
}
function play2() {
    box2.innerHTML += "welcome"
}
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')

if (window.addEventListener) {
    btn1.addEventListener('click', play, false)
    btn1.addEventListener('click', play2, false)
} else if (window.attachEvent) {
    btn1.attachEvent('onclick', play)
    btn1.attachEvent('onclick', play2)
}
// btn1.onclick = play//실행x
// btn2.onclick = play2
// btn1.onclick = play2

header.onclick = function (e) {
    console.log(this)
    console.log(e)
    var event = e || window.envet

    header.onclick = null
    for (var key in e) {
        box.innerHTML += `<p>${key} : ${e[key]}`
    }
}

a.onclick = function () {
    ca.innerHTML = Number(ca.innerHTML) + 1
}
b.onclick = function () {
    cb.innerHTML = parseInt(cb.innerHTML) + 1
    a.onclick()
}

var stop = setInterval(b.onclick, 1000)
c.onclick = function () {
    clearInterval(stop)
}
d.onclick = function () {
    stop = setInterval(b.onclick, 1000)
}
// daum.onclick = function (e) {
//     this.style.backgroun = 'pink'
//     // return false
// }

function naver() {
    naver2.style.background = 'red'
    return false
}
daum.addEventListener('click', function () {
    this.style.backgroun = 'pink'
})


var form = document.getElementById('form')
form.onsubmit = function (e) {
    // form.onsubmit = function () {
    var val = name2.value
    console.log(val)
    if (val.replace(/가-힝]/g, "").length == 0) {
        return true
    } else {
        alert('한글이름을 입력하세요')
        e.preventDefault()
    }
}
// }

function handler(e) {
    var phase = ['캡쳐링', '타겟', '버블링']
    console.log(e.target.nodeName, this.nodeName, phase[e.eventPhase - 1])
}
// button.addEventListener('click', handler, true)
// field.addEventListener('click', handler, true)
// body.addEventListener('click', handler, true)
// html.addEventListener('click', handler, true)

// button.addEventListener('click', handler, false)
// field.addEventListener('click', handler, false)
// body.addEventListener('click', handler, false)
// html.addEventListener('click', handler, false)

a.onclick = function () {
    this.style.backgroun = "gold"
    e.stopPropagation()
}
p.onclick = function (e) {
    this.style.backgroun = "cyan"
}















