var 과일 = [
    "사과",
    "수박"
]
let fruit = [
    "apple",
    "melon"
]
const day = [
    "월",
    "화",
    "수"
]

console.log(day.length)
for (var i = 0; i < 과일.length;) {
    document.write(`과일 => ${과일[i]}`)
}
document.write(`<br>`)
for (var i = 0; i < 과일.length; i++) {
    document.write(`${i} ${fruit[i]} <br>`)
}

과일.push("귤")
console.log(귤)

과일.push("참외")
console.log(참외)

과일.pop("참외")
console.log(참외)

day.unshift('일')
console.log(day)

fruit.forEach(function (ele, i) {
    document.write(`${i} => ${ele} <br>`)
}
)
var food = 과일
console.log(과일)
console.log(food == 과일)

function Student(name, kor, math, eng, sci) {
    this.name = name
    this.kor = kor
    this.math = math
    this.eng = eng
    this.sci = sci
    this.getSum = function () { this.kor + this.math + this.eng + this.sci }
    return sum
}

var 학생1 = new Student(
    "원빈", 50, 20, 49, 29
)
document.write(`총점 : ${학생1.getSum()}.`)

Student.prototype.getSum = function () {
    this.kor + this.math + this.eng + this.sci
    return sum
}
document.write("총점 : " + 학생1.getSum())

Student.prototype.getAvg = function () {
    var avg = this.getSum() / 4
    return avg
}

document.write("평균 : " + 학생1.getAvg())

function Car(ml, sd, cr) {
    this.model = ml;
    this.speed = sd
    var color = cr

    this.getSpeed = function () {
        return this.speed
    }
    this.setSpeed = function () {
        if (speed < 0)
            alert("속도는 음수 불가능함")
        return this.speed
    }
}

var 자동차1 = new Car("그랜저", 120, "black")
console.log(자동차1.getSpeed())
console.log(자동차1.speed)
console.log(자동차1.model())

var bmw = {
    color: 'red',
    wheel: 4,
    drive() {
        console.log("bmw drive..")
    }
}
var audi = {
    color: 'blue',
    wheel: 6,
    drive() {
        console.log("audi drive..")
    }
}

var car = {
    color: 'red',
    wheel: 4,
    drive() {
        console.log("drive..")
    }
}
var bmw = {
    color: 'red',

}
bmw.__proto__ = car
console.log(bmw.color)
console.log(bmw.drive())


var audi = {
    color: "white"
}
audi.__proto__ = bmw
audi.drive("장동건")

function Circle(radi) {
    this.radius = radi
    this.getArea = function () {
        var area = this.radius * Math.PI
        return area
    }
}
var circle = new Circle(-5)
document.write(`원의면적 : ${circle.getArea}`)
document.write(`<br>`)


Circle2.prototype.getArea = function () {
    var area = this.radius * Math.PI
    return area
}
var circle2 = new Circle2(6)
document.write(`원의면적 : ${circle.getArea}`)
document.write(`<br>`)

function Circle3(r) {
    var radius = r
    this.getRadius = function () {
        return radius
    }
    this.setRadius = function () {
        if (radius < 0)
            alert("error")
        else
            radius = r
    }
}

Circle3.prototype.getLength = function () {
    return 2 * Math.PI * this.getRadius
}

this.toString = function () {
    return "반지름은" + this.getRadius + "이고둘레는 " + this.getLength
}

var c3 = new Circle3()
c3.setRadius(8)
document.write(c3.toString())
// 
// 
// 
// 
function Grand() { }
Grand.prototype.재산 = "1억원"
document.write(`${Father.재산}`)

var Father = new Grand()
Father.재산 = "2억원"
document.write(`${Father.재산}`)

function Mama() { }
var 엄마 = new Mama()
Mama.prototype.재산 = "5000원"
document.write(`${엄마.재산}`)

function Son() { }
Son.prototype = new Mama()
var 아들 = new Son()
아들.prototype.재산 = 엄마
document.write(`${아들.재산}`)

















