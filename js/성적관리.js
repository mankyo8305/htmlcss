function Student(name, html, css, js, java) {
    this.name = name
    this.html = html
    this.css = css
    this.js = js
    this.java = java
    this.getSum = function () {
        return this.html + this.css + this.js + this.java
    }
    this.getAvg = function () {
        return this.getSum() / 4
    }
    this.toString = function () {
        return this.name + " " + this.getSum() + " " + this.getAvg()
    }
}

var students = []
students.push(new Student("원빈", 10, 20, 30, 40))
students.push(new Student("강동원", 14, 24, 36, 47))
students.push(new Student("아이유", 50, 40, 10, 30))
students.push(new Student("빅스타", 11, 20, 40, 60))
students.push(new Student("지져스", 20, 21, 35, 30))
students.push(new Student("스님", 30, 23, 34, 60))
students.push(new Student("두목", 12, 60, 75, 80))
students.push(new Student("강도", 18, 23, 67, 50))
students.push(new Student("도둑", 70, 22, 31, 44))
students.push(new Student("마하", 11, 50, 37, 43))
students.push(new Student("슬럼독", 60, 60, 70, 10))

console.log(students)


function allStudent() {
    var output = "이름 총점 평균 <br> <hr>"

    var students2 = students.sort((a, b) => {
        if (a.getSum() > b.getSum()) return 1
        if (a.getSum() == b.getSum()) return 0
        if (a.getSum() < b.getSum()) return -1
    })
    for (var i in students) {
        output += (Number(i) + 1) + " : " + students[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output
}

function good() {
    var output = "이름 총점 평균 <br> <hr>"

    var students2 = students.sort(function (a, b) {
        return b.getSum() - a.getSum()
    }).slice(0, 3)

    for (var i in students2) {
        output += (Number(i) + 1) + " : " + students2[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output
}

function bad() {
    var output = "이름 총점 평균 <br> <hr>"

    var students2 = students.sort(function (a, b) {
        return b.getSum() - a.getSum()
    }).reverse().slice(0, 3)

    for (var i in students2) {
        output += (Number(i) + 1) + " : " + students2[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output
}

function jang() {
    var output = "이름 총점 평균 <br> <hr>"

    var students3 = students.sort(function (a, b) {
        return b.getSum() - a.getSum()
    }).slice(3, 6)

    for (var i in students3) {
        output += (Number(i) + 1) + " : " + students3[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output
}

function del() {
    var output = "이름 총점 평균 <br> <hr>"
    students.splice(0, 1)

    for (var i in students) {
        output += (Number(i) + 1) + " : " + students[i].toString() + "<br>"
    }
    output += "<hr>"
    list.innerHTML = output
}

function reload() {
    location.reload()
}
// ///////

var date = new Date()
var year = date.getFullYear()
var month = date.getMonth()
var day = date.getDate()
var dow = date.getDay()

switch (dow) {
    case 0: dow = "일요일"
        break
    case 1: dow = "월요일"
        break
    case 4: dow = "목요일"
        break
}
var time = document.getElementById("time")
time.innerHTML = ` ${year}년  ${month}월 ${day}일 ${dow}`

var time2 = document.getElementById("time2")
setInterval(function () {
    time2.innerHTML = new Date().toLocaleTimeString()
    console.log(`시간 확인`)
}, 1000)
console.log(new Date().getHours())
if (date.getHours() == 18)
    alert(`퇴근시간`)










