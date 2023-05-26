var test = document.getElementById('test')

try {
    console.log('welcome')
    throw "무슨에러인가"
} catch (err) {
    test.innerHTML = err.message
}
test.style.color = `red`

var numBox = document.getElementById('numBox')
var btn = document.getElementById('btn')
var errText = document.getElementById('errText')

var show = false
btn.addEventListener('click', function () {
    var val = numBox.value
    errText.innerHTML = 'welcome' + val
    console.log(val)
    try {
        if (val == '') throw "비어있음"
        if (isNaN(val)) throw "숫자가 아닙니다"
        if (val < 1) throw "숫자가 너무 작다"
        if (val > 10) throw "숫자가 너무 크다"
        show = false
    } catch (err) {
        errText.innerHTML = "에러메시지 : " + err
        show = true
    } finally {
        if (show) numBox.value = ""
    }
    errText.style, color = 'red'
})

var num = 123.123455
try {
    console.log(num.toFixed(3))
    console.log(num.toPrecision(100))
    num = num + 1
    // console.log(decodeURI('http://www.daum.net/aaa%%%'))
    // console.log(encodeURI('http://www.daum.net/%%%'))
    console.log(num / 0)
} catch (error) {
    errText2.innerHTML = error.name + ": " + error.message
}

errText2.style.color = 'red'
