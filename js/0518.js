var actor = {
    name: "neymaru",
    age: 31,
}
console.log(actor)
console.log(actor.name)
console.log(actor.age)
console.log(actor['name'])

actor.gender = "man"
actor["hat"] = "black"
console.log(actor)

for (var pre in actor) {
    // document.write(`${pre} `)
    // document.write(actor[pre])
    document.write(`${pre} : ${actor[pre]} <br>`)
}

console.log('age' in actor)

delete actor.hat
console.log(actor)

var car = "에스턴마틴"

var 차 = {
    차종: car,
    연식: 2019,

}
console.log(차)

var marvel = function (name, age, ability) {
    return {
        Name: name,
        Age: age,
        Ability: ability,
        fly: function () {
            console.log(`${this.name}이 날아갑니다.`)
        }
    }
}

var spiderman = marvel('스파이더맨', 20, 'fly')
console.log(spiderman)
var superman = marvel('슈퍼맨', 34, 'fly')
console.log(superman)
var ironman = marvel('아이언맨', 45, 'fly')
var ironman = {
    name: name,
    fly: function () {
        console.log(`${this.name}이 날라갑니다.`)
    }
}
console.log(ironman)
ironman.fly()

var batman = {
    name: '베트맨',
    fly: function () {
        console.log(`${this.name}이 날라가버립니다.`)
    }
}
batman.fly()

// 리턴값이 있는 화살푷함수

var text = (txt, count) => txt.repeat(count)
console.log(text("well", 3))



var fruits = ["apple", "banana", "orange", "mellon", "strawberry"]

function myFuc(array) {
    for (var i = 0; i < array.length; i++) {
        document.write("<br>" + array[i])
        document.write("<hr>")
    }

}
console.time("start")
myFuc(fruits)
fruits.forEach(function (ele, index, array) {
    document.write("a =" + ele + "<br>")
    document.write("b =" + index + "<br>")
    document.write("c =" + array + "<br>")
    document.write("<hr>")
})
console.timeEnd("start")

function avengers(...hero) {
    for (var i = 0; i < hero.length; i++) {
        document.write("<br>" + hero[i] + "<hr>")
    }
}
avengers("iron", "captin", "cat", "hurk", "Roky")
//

function market(ele, index) {
    document.write("fruit =" + ele + "<br>")
    document.write("index =" + index + "<br>")
    document.write("<hr>")
}

fruits.forEach(market)

var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

var user = {
    "squadName": "Super hero squad",
    "homeTown": "Metro City",
    "formed": 2016,
    "secretBase": "Super tower",
    "active": true,
    "members": [
        {
            "name": "Molecule Man",
            "age": 29,
            "secretIdentity": "Dan Jukes",
            "powers": [
                "Radiation resistance",
                "Turning tiny",
                "Radiation blast"
            ]
        },
        {
            "name": "Madame Uppercut",
            "age": 39,
            "secretIdentity": "Jane Wilson",
            "powers": [
                "Million tonne punch",
                "Damage resistance",
                "Superhuman reflexes"
            ]
        },
        {
            "name": "Eternal Flame",
            "age": 1000000,
            "secretIdentity": "Unknown",
            "powers": [
                "Immortality",
                "Heat Immunity",
                "Inferno",
                "Teleportation",
                "Interdimensional travel"
            ]
        }
    ]
}
for (var i = 0; i < user.length; i++) {
    document.write("members :" + user[i].squadName)
    document.write("<br>")
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
