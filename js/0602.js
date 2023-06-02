var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(Array.isArray(arr))
console.log(arr.indexOf(4))
console.log(arr.lastIndexOf(4))

var out = arr.map((a) => {
    return a * a
})
console.log(out)
var out = arr.map(a => a * a)
console.log(out)

var sum = 0
var out = ''
arr.forEach((a, i, arr) => {
    sum += a
    out += `${i} : ${a} -> ${sum} \n`
})
console.log(out)

var result = arr.some(num => num > 5)
arr.reduce((pre, cur, i, arr) => {
    out += `${i} => ${pre} : ${cur} \n`
})
console.log(out)
// 

var 고양이 = {
    이름: "야옹이",
    나이: "2살"
}
console.log(고양이)
console.log(JSON.stringify(고양이))
console.log(JSON.parse(JSON.stringify(고양이)))

var str = {
    name1: "강감찬",
    name2: "이순신",
    name3: "장보고"
}
var strArr = []
for (var key in strArr) {
    if (str.hasOwnProperty(key))
        atrArr.push(key)
}
console.log(strArr)

var strArr = []
for (var key in str) {
    if (str.hasOwnProperty(key))
        strArr.push(str[key])
}
console.log(strArr)

var 이름 = Object.keys(str)
console.log(이름)
var 값 = Object.values(str)
console.log(값)

var 배열 = Object.keys(str).map(item => str[item])
console.log(배열)

var entry = Object.entries(str)
console.log(entry)
var entries = Object

// 
var heros = {}
Object.defineProperty(heros, "name", {
    value: "수퍼맨",
    writabl: false,
    enumerable: false
})
console.log(heros)
heros.name = "아이언맨"
console.log(heros)

for (var i in heros) {
    console.log(heros[i])
}
Object.defineProperty(heros, "name", {
    get: function () {
        return value
    }
})
console.log(heros.name)

var hero2 = Object.create({}, {
    name: { value: "배트맨" },
    skill: {
        value: "마스크"
    }
})
console.log(hero2)
hero22.age = "40"
console.log(hero2)
Object.preventExtensions

var hero3 = {}
var hero3 = Object.assign(hero3, hero2)
Object.defineProperty(hero3, "skill2", {
    value: "fly..."
})
console.log(hero2)


