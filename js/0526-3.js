// //윈도우.오픈
// 윈도우점 클로즈
// 윈도우점 프린트
// 윈도우점 무브바이
// 윈도우점 무브투
// 윈도우점 리사이즈투
// 윈도우점 포커스
// 윈도우점 불러

// var child = window.open("", "", "width=300", "height=200")
// var width = screen.width
// var height = screen.height
// child.moveTo(0, 0)
// child.resizeTo(width, height)

// setInterval(function () {
//     child.moveBy(10, 10)
//     child.resizeBy(-20, -20)
// }, 1000)

var out = ''
for (var key in screen) {
    out += `${key} : ${screen[key]} <br>`
}
document.write(out)
document.write("<hr>")

var out = ''
for (var key in location) {
    out += `${key} : ${location[key]} <br>`
}
document.write(out)

var out = ''
for (var key in navigator) {
    out += `${key} : ${navigator[key]} <br>`
}
document.write(out)
document.write("<hr>")

var navi = navigator.userAgent
console.log(navi)

var mobile = ["iphone", "android", "nokia", "window", "opera"]
var navi = navigator.userAgent.toLowerCase()

// for (var i = 0; i < mobile.length; i++) {
//     if (navi.indexOf(mobile[i] < 0)) {
//         location.href = "http://m.naver.com"
//     } else {
//         location.href = "http://www.naver.com"
//     }
// }

// window.onload = function () {
//     document.querySelector('h1').style.background = 'red'
// }
// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('h2').style.background = 'blue'
// })

var navi = navigator.userAgent.toLowerCase()

document.write(navigator.appCodeName + "<br>")
document.write(navigator.appName + "<br>")
document.write(navigator.appVersion + "<br>")
document.write(navigator.language + "<br>")
document.write(navigator.product + "<br>")
document.write(navigator.platform + "<br>")
console.log(navigator.geolocation)
console.log(navigator.geolocation.getcurren)
console.log(navigator.geolocation.getcurren.getCurrenPosision)
console.log(navigator.location.latitude)




















