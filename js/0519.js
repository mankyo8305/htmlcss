window.onload = function () {
}
var 학생0 = { 이름: '민교', 국어: 87, 영어: 23, 수학: 67, 과학: 78 }
var 학생1 = { 이름: '호민', 국어: 63, 영어: 53, 수학: 57, 과학: 88 }
var 학생2 = { 이름: '수민', 국어: 27, 영어: 83, 수학: 47, 과학: 48 }
var 학생3 = { 이름: '강민', 국어: 17, 영어: 23, 수학: 27, 과학: 72 }
var 학생4 = { 이름: '뫼민', 국어: 37, 영어: 83, 수학: 17, 과학: 14 }

var 학생0총점 = 학생0.국어 + 학생0.영어 + 학생0.수학 + 학생0.과학
document.write(`<h2>학생0 총점 : ${학생0총점}</h2>`)

var 학생4총점 = 0

for (var key in 학생4) {
    if (key != '이름')
        학생4총점 = 학생4총점 + 학생4[key]
}
document.write(`<h2>학생4 총점 : ${학생4총점} </h2>`)

var students = []
students.push({ 이름: '선민', 국어: 87, 영어: 23, 수학: 67, 과학: 78 })
students.push(학생1)
students.push(학생2)
students.push(학생3)
students.push(학생4)
console.log(students)

for (var i in students) {
    students[i].getSum = function () {
        return this.과학 + this.국어 + this.영어 + this.수학
    }
    students[i].getAvg = function () {
        return this.getSum() / 4
    }
}
document.write(`학생 2의 총점 : ${students[2].getSum()}`)
document.write(`<br>`)
document.write(`학생 2의 평균 : ${students[2].getAvg()}`)
document.write(`<br>`)
document.write(`<br>`)
document.write(`이름  총점 평균`)
document.write(`<br>`)
document.write(`<br>`)
for (var i in students) {
    document.write(students[i].이름 + ' ' + students[i].getSum() + ' ' + students[i].getAvg())
    document.write(`<br>`)
}
var output = '이름 총점 평균'
for (var i in students) {
    output += '<br>' + students[i].이름 + ' ' + students[i].getSum() + ' ' + students[i].getAvg()
}

document.write(output)

var output = '<hr> 이름 총점 평균 <br> <hr>'
for (var i in students) {
    with (students[i]) {
        output += 이름 + ' ' + getSum() + ' ' + getAvg()
    }
}
document.write(output)

function 학생성적표(name, korean, math, english, science) {
    var 성적출력 = {
        이름: name,
        국어: korean,
        수학: math,
        영어: english,
        과학: science,
        getSum: function () {
            return this.과학 + this.국어 + this.수학 + this.영어
        },
        getAvg: function () {
            return this.getSum() / 4
        },
        toString: function () {
            return this.이름 + " " + this.getSum() + " " + this.getAvg()
        }
    }
    return 성적출력
}

var 학생들 = []
학생들.push(학생성적표('원빈1', 89, 12, 30, 40))
학생들.push(학생성적표('원빈2', 89, 12, 30, 40))
학생들.push(학생성적표('원빈3', 89, 12, 30, 40))
학생들.push(학생성적표('원빈4', 89, 12, 30, 40))
학생들.push(학생성적표('원빈5', 89, 12, 30, 40))

var 결과 = "<hr>이름 총점 평균<br>"
for (var i in 학생들) {
    결과 += 학생들[i].toString() + '<br>'
}
document.write(결과)

function Student(name, korean, math, english, science) {
    this.이름 = name
    this.국어 = korean
    this.수학 = math
    this.영어 = english
    this.과학 = science
    this.getSum = function () {
        return this.과학 + this.국어 + this.수학 + this.영어
    }
    this.getAvg = function () {
        return this.getSum() / 4
    }
    this.toString = function () {
        return this.이름 + " " + this.getSum() + " " + this.getAvg()
    }
}
document.write('<hr>')
var 학생1 = new Student('장동건', 40, 23, 12, 53)
document.write(학생1.toString())

var students = []
students.push(new Student('장동건1', 40, 23, 12, 53))
students.push(new Student('장동건2', 40, 23, 12, 53))
students.push(new Student('장동건3', 40, 23, 12, 53))
students.push(new Student('장동건4', 40, 23, 12, 53))

var 결과 = "<hr>이름 총점 평균<br>"
for (var i in students) {
    결과 += students[i].toString() + '<br>'
}
document.write(결과)


