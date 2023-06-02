var regEx1 = new RegExp('text')
var regEx1 = /text/

var str1 = new String("welcome to my World")
var str2 = 'html css javascript'

var reg1 = /css/
var out1 = regEx1.test('123')
console.log(out1)
var out2 = reg1.exec(str2)
console.log(out2)
document.write(out2)
var out2 = /css/.exec(str2)
console.log(out2)

var str2 = "html css javascript"
var reg3 = /css/i
var reg4 = new RegExp('css', 'i')

var string = 'javascript jquery ajax'
var out = string.split(/jquery/)
console.log(out)

var regExp = /script/
var out = string.replace(regExp, "$`")
console.log(out)
var regExp = /script/
var out = string.replace(regExp, "$'")
console.log(out)

var out = /script/ig.exec(string)
console.log(out)

var reg = /script/ig
var out = /script/ig.exec(string)
console.log(out)

var out = string.match(reg)
console.log(out)

// //////

var str1 = new String("my welcome to my world")
var reg = /^my/ig
var out = str1.replace(reg, "your")
console.log(out)
var reg = /world$/ig
var out = str1.replace(reg, "세계")
console.log(out)

var out = str1.replace(/[my]/, "너")
console.log(out)
var out = str1.replace(/[^my]/, "안녕")
console.log(out)

var reg = /\d\d\d-{12}\d\d\d/
var str1 = "010-1234"
var str2 = "123-2223"
console.log(string.search(reg))
console.log(string.match(reg))

var email = /\w+@\w+\.\+/
var out = email.test("abc@duam.net")
console.log(out)

function addComma(number) {
    var leg = /(^[+-]?\d+)(\d{3})/
    var string = String(number)

    while (reg.test(number)) {
        string = string.replace(reg, '$1,$2')
        // console.log(out)
    }
    return string
}
console.log(addComma('12345678'))

var reg = /(\d+)(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})(\d{3})/
var string = "6234458934234"
string = string.replace(reg, "$1,$2,$3,$4,$5")
console.log(string)

var userName = prompt("당신의 이름은?")
reg1 = /^[가-힝]{2,5}/
while (true) {
    if (reg1.test(userName))
        break
    alert("이름 입력 형식이 잘못되었습니다")
    userName = prompt("당신의 이름은?")
}
var userCell = prompt("당신의 핸드폰 번호는?")
reg2 = /^(010|016|011)\d{3,4}\d{4}$/
while (true) {
    if (reg2.test(userCell))
        break
    alert("핸드폰 입력 형식이 잘못되었습니다")
    userName = prompt("당신의 핸드폰 번호는?")
}
var userEmail = prompt("당신의 이메일은?")
reg3 = /^Ww{5,12}@{a,z}\d{3,4}\d{4}$/





















