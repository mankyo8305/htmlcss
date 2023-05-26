// setInterval(function () { })
// button.addEventListener(type, listener, usecaputre)

function add(a, b, 라라라) {
    var result = a + b
    라라라(result)
}
add(10, 5, function (result) {
    document.write("파라미터로 콜백함수 호출")
    document.write("<br>")
    document.write("더하기 결과 : " + result)
    console.log("결과 : %d", result)
})

// 함수를 리턴하는 경우
function mul(a, b) {
    var result = a * b
    var output = function () {
        return `${a}*${b}=${result}`
    }
    return output
}
var out = mul(5, 6)
document.write("<hr>")
document.write(out)
var out = mul(5, 6)()
document.write("<hr>")
document.write(out)
var out = mul(5, 6)
document.write("<hr>")
document.write(out())
// 클로저를 사용하지않은 예


function fncCount2() {
    var count = 0 //은닉화
    function addCount() {
        count++
        return count
    }
    return addCount
}
var counter = fncCount2()
console.log(counter())
console.log(counter())
console.log(counter())

var color = ['red', 'gold', 'silver', 'blue', 'brown']
var body = document.querySelector('body')
var button = document.querySelector('button')

function bgChange() {
    var i = 0
    function inner() {
        body.style.background = color[i]
        console.log(i)
        i++
        i = i % color.length
    }
    return inner
}
var bgC = bgChange()
button.onclick = function () {
    bgC()
}
