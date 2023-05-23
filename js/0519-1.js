console.log('fetch로 통신하기')
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json() })
    .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) { return response.json() })
    .then(data => {
        console.log(data)
        document.write(`사용자아이디 : ${data.userId}<br> 타이틀 : ${data.title}<br>`)
    })
console.log('fetch로 통신하기 끝')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) { return response.json() })
    .then(data => {
        console.log(data)
        for (var i in data) {
            document.write(data[i].name + '>>>' + data[i].phone + '>>>' + data[i].email)
            document.write('<br>')

        }
        console.log(data)
    })
document.write('<hr>')
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) { return response.json() })
    .then(data => {
        document.write("<table border='1'>")
        document.write('<tr>')
        document.write('<th>아이디</th><th>타이틀</th><th>바디</th>')
        document.write('</tr>')
        for (var i in data) {
            for (var i = 0; i < 10; i++) {
                document.write('<tr>')
                document.write("<td>" + data[i].id + '</td><td>' + data[i].title + '</td><td>' + data[i].body + '</td>')
                document.write('</tr>')
            }
            break;
        }
        document.write('</table>')
        console.log(data)

    })