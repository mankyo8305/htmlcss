// localStorage.setItem("name", "강감찬")
// localStorage.setItem("name1", "을지문덕")

// localStorage.removeItem("name1")
// localStorage.setItem("name1","을지문덕")
// localStorage.clear()
// localStorage.setItem("name","강감찬")
// localStorage.setItem("name","을지문덕")
document.cookie = "color=black"

var date = new Date()
date.setMinutes(date.getMinutes() + 1)
document.cookie = `color = black; expires${date.toUTCString()}`

// 쿠키값읽기
console.log(document.cookie.match(/color/))

// 쿠키값삭제
document.cookie = 'color1=blue; max-age=${"0"}'

console.log(document.cookie)

console.log(document.cookie)

var value = document.cookie
console.log(value)

var cookieItem = value.split(";")
console.log(cookieItem)
var obj = {}

cookieItem.forEach((item) => {
    var elem = item.split("=")
    console.log(elem)
    var key = elem[0].trim()
    var val = elem[1]
    obj[key] = val
})
console.log("분리된 쿠키")
console.log(obj)




























