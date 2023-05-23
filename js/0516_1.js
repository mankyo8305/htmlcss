function sayHello(msg) {
    console.log(`hellp ${msg}`);
}
var tel = sayHello('dkgjie');
console.log(tel);

function add(num1, num2) {
    return num1 + num2;
}
var result = add(10, 20);
console.log(result);

function localFunk() {
    var msg = "welcome";
    console.log("함수내에서" + msg);
}
localFunk();

function welcome(name) {
    var name = name || "Friend"
    msg += `to my ${name}`
    console.log(msg)
}
welcome();
welcome("홍길동")

function welcome(naem = "강호동") {
    var msg = "welcome"
    if (name) {
        msg += name
    }
    console.log(msg)
}
welcome("원빈")
welcome();

function myFuc() {
    document.write("<h1>hi hello world</h1>")
}
myFuc()
var myVar = "대한민국"
document.write(myVar)
myFuc()

var myFun1 = function () {
    console.log("나는 익명함수여")
}
myFun1()
var myFun2 = () =>
    console.log("나는 익명함수여")
myFun2()