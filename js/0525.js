var user = {
    name: "원빈",
    age: 40
}
var user2 = {
    name: "원빈",
    age: 40,
}
user.hoby = "운동"

var user2 = user
console.log(user)
console.log(user2)
console.log(user == user2)


var user3 = Object.assign({}, user)
console.log(user3)
console.log(user == user3)
user3.name = "이정재"
console.log(user3)
console.log(user)

var user4 = Object.assign({ gender: "남성" }, user)
console.log(user4)
var user5 = { name: "강호동" }
var info1 = { 나이: 23 }
var info2 = { gender: "여성" }

var user6 = Object.assign(user5, info1, info2)
console.log(user6)

console.log(Object.keys(user6))
console.log(Object.values(user6))
console.log(Object.entries(user6))
var user7 = Object.entries(user6)
console.log(user7)
console.log(user7[0][1])

var user8 = Object.fromEntries(user7)
console.log(user8)

function makeObj(key, val) {
    return {
        [key]: val
    }
}
var obj = makeObj("나이", 33)
console.log(obj)
var obj = new makeObj("성별", "남성")
console.log(obj)

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (i of arr) {
    var result = 0
    result += i
    console.log(result)

}
console.log(result)

var userList = [
    { name: "won1", age: 10 },
    { name: "won2", age: 20 },
    { name: "won3", age: 30 },
    { name: "won4", age: 40 },
    { name: "won5", age: 50 },
    { name: "won6", age: 60 },
    { name: "won7", age: 70 }
]

var result = userList.reduce((prev, cur) => {
    if (cur.age >= 30) {
        prev.push(cur.name)
    }
    return prev
}, [])
console.log(result)
var result = userList.reduce((prev, cur) => {
    return prev += cur.age
}, 0)
console.log(result)
var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90,]

var result = arr.filter((a) => {
    return a >= 40
})
console.log(result)

var result = result.filter((a) => {
    return a != 60
})
console.log(result)
// 
// 
// 
var [x, y] = [1, 2]
console.log(x, y)
var 배우들 = ['원빈', '장동건', '이정재']
var [배우1, 배우2, 배우3] = 배우들
console.log(배우1)
console.log(배우2)
console.log(배우3)
console.log(배우들)
console.log(배우들[0])

var 가수 = "소녀시대-원더걸스-BUT"
var [가수1, 가수2, 가수3] = 가수.split('-')
console.log(가수1)
console.log(가수2)
console.log(가수3)

var a = 100
var b = 200
var c

console.log(a, b)
console.log(a, b)

// 

var user = {
    name: "welcom",
    age: 40
}
var { name, age } = user
var name = user.name
var age = user.age
console.log(name)
console.log(age)

var { name: userName, age: userAge } = user
console.log(userName)
console.log(userAge)
var userName = user.name
// 
function showName(...name) {
    document.write(name + "<br>")
    console.log(name)
}
// reset parameter
showName("원빈")
showName("원빈", "장동건")
showName()

function showName(...name) {
    var name = null || "강호동"
    document.write(name + "<br>")
    console.log(name)
}
showName2()
showName2("원빈")

function showName2(name = "강호동") {
    document.write(name + "<br>")
    console.log(name)
}
showName2()
showName2("원빈")

function User(name, age, ...skills) {
    this.name = name
    this.age = age
    this.skills = skills
    this.toString = function () {
        return this.name + " " + this.age + " " + this.skills + "<br>"
    }
}
const use1 = new User("우너비", 30, "html")
const use2 = new User("강호동", 66, "css", "html")
const use3 = new User("유재석", 17, "js")

document.write(use1.toString())
console.log(use1.toString())
console.log(use1)
document.write(use2.toString())
console.log(use2.toString())
console.log(use2)
document.write(use3.toString())
console.log(use3.toString())
console.log(use3)

var arr1 = [1, 2, 3]
var arr2 = [4, 5, 6]
var arr3 = [...arr1, ...arr2]

document.write(arr3)

var user = { name: "mike" }
var mike = { ...user, age: 20 }
console.log(mike)
var user4 = { ...user }
var user5 = { ...mike, gender: ",남성" }
console.log(user4)
console.log(user5)

var arr5 = [1, 2, 3]
var arr6 = [4, 5, 6]
arr6.reverse().forEach((num) => { arr5.unshift(num) })
console.log(arr5)

var 사용자 = {
    name: "원빈"
}
var 사용자 = {
    name: "원빈"
}
var 사용자 = {
    name: "원빈"
}
var user = {
    ...사용자,
    ...정보,
    기술: [...it, ...언어]
}

var user1 = Object.assign({}, 사용자, 정보, { 기술: [] })
console.log(user1)
it.forEach((a) => {
    user1.기술.push(a)
})


















