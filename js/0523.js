var num = 20;
num.toString();
console.log(num.toString())
console.log(num.toString(2))
console.log(num.toString(16))
console.log(Math.PI);
console.log(Math.ceil(Math.PI))
console.log(Math.PI)
var num2 = 30.1234
console.log(num2.toFixed(4))
console.log(num2.toFixed(1))

var a = "100"
var b = 100
console.log(isNaN(a))
console.log(isNaN(b))
console.log(isNaN("wel"))
console.log(typeof a)
console.log(typeof b)
console.log(typeof parseInt(a))
var margin = "10px"
margin1 = Number(margin)
margin2 = parseInt(margin)
console.log(margin1)
console.log(margin2)
var padding = "18.5%"
console.log(parseInt(padding))
console.log(parseFloat(padding))
console.log(Math.floor(Math.random() * 45) + 2)

// var 로또 = []

// for (var i = 0; i <= 45; i++) {
//     로또.push(i)
// }

// document.write(로또)
// document.write("<br>")
// document.write("이번주 당첨번호")
// // var num = Math.floor(로또.length * Math.random())

// for (var i = 0; i < 6; i++) {
//     document.write(Math.floor(로또.length * Math.random() + 1) + ", ")
// }

// Array.prototype.random = function () {
//     var index = Math.floor(로또.length * Math.random());
//     return this[index]
// }

// document.write("<br>")
// document.write("다음주 당첨번호 <br>")
// for (var i = 0; i < 6; i++) {
//     document.write(로또.random() + " , ")
// }

var str = "welcom to my world"
var str1 = "안녕 하세요"
console.log(str.length)
console.log(str1[1])
console.log(str.toLowerCase)
console.log(str.toUpperCase)
console.log(str.substring(2, 5))
if (str1.indexOf("핵") > -1) {
    console.log("하가 있습니다")
} else {
    console.log("글자가 없습니다.")
}

var hello = "hello"
console.log(hello.repeat(3))

console.log("a" < "c")
console.log("a".codePointAt())

if (str.indexOf("성인") > -1) {
    console.log("금칙어가 있다")
    console.log(str.indexOf("성인"))
}

var 과일 = ['사과', '귤', '배', '청포도', '오렌지', '라임']
var fruit = ['apple', 'orange', 'berry', 'lime']

console.log(과일)
console.log(과일.push("수박"))
console.log(과일)
console.log(fruit.pop())
console.log(fruit)
console.log(과일.unshift("깔라만시"))
console.log(과일)
console.log(fruit.shift)
console.log(fruit)

console.log(과일.splice(1, 2))
console.log(과일)

과일.forEach((i, index) => {
    console.log(`${index} : ${i}`)
})
console.log(과일.lastIndexOf('라임'))

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var result = arr.find(item => {
    return item % 9 == 0
})
console.log("==" + result)

var user = [
    { name: "원빈", age: 30 },
    { name: "원빈2", age: 10 },
    { name: "원빈3", age: 5 }
]
console.log(result)

var result = user.filter(a => {
    if (a.age < 30) {
        return true
    }
    return false
})

console.log(result)

var fruit = ['apple', 'orange', 'berry', 'lime']

console.log(fruit.length)
var result = fruit.filter(f => {
    return f.length >= 5
})
console.log(result)

document.write("안녕")

var output = "<ul>"
fruit.forEach((item, index) => {
    output += `<li>${index + 1} : ${item}`
})
document.write(output)

var user2 = user.map((a, i) => {
    return a.age > 20
})
console.log(user2)
var user2 = user.map((a, i) => {
    return a.age
})
console.log(user2)

var str = "why are u so serius?"
console.log(str)
var split = str.split("s")
console.log(split)




































