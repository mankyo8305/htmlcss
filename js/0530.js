// div.addEventListener('click', function(){
//     console.log("div Click")
// })
// span.addEventListener('click', function(){
//     console.log("span Click")
// })
// BigInt.addEventListener('click',function(){
//     console.log("btn Click")
// })

// div.addEventListener('click', function (e) {
//     var id = e.target.id
//     console.log(e.currentTarget)
//     console.log(e.target)
//     if (id == "div") {
//         console.log("div Click")
//     } else if (id == "span") {
//         console.log("span Click")
//     } else if (id == "btn") {
//         console.log("btn Click")
//     }
//     var tagName = e.target.tagName
//     if (tagName == "div") {
//         console.log("div Click")
//     } else if (tagName == "span") {
//         console.log("span Click")
//     } else if (tagName == "btn") {
//         console.log("btn Click")
//     }
// })
div.addEventListener('click', function (e) {
    // console.log(e.srcElement)
    var target = e.target || e.srcElement
    if (e.target.tagName == "DIV") {
        console.log("div Click")
    } else if (e.target.tagName == "SPAN") {
        console.log("span Click")
    } else if (e.target.tagName == "BUTTON") {
        console.log("btn Click")
    }
})

window.onkeydown = (e) => {
    console.log(e.keyCode)
    console.log(String.fromCharCode(e.keyCode))
    if (e.keyCode == 65) {
        document.querySelector('body').style.background = 'red'
    }
    if (e.keyCode == 66) {
        document.querySelector('body').style.background = 'blue'
    }
    if (e.keyCode == 67) {
        document.querySelector('body').style.background = 'lime'
    }
    if (e.keyCode == 68) {
        document.querySelector('body').style.background = 'pink'
    }
}
window.onload = () => {
    var count = 0
    var image = document.getElementById('image')
    var frames = [
        'just5.jpg', 'nf.jpg', 'just.png', 'just2.jpg',
        'just3.jpg', 'mountain.jpg', 'sight.jpg'
    ]
    setInterval(function () {
        image.src = "js/" + frames[count % frames.length]
        count = count + 1
        image.width = 200
        image.height = 200
    }, 2000)
}

var outer = document.querySelector('.outer')
var outer = document.querySelector('.inner')

outer.onmouseover = function () {
    document.body.append('<h1>mouseover')
}
outer.onmouseout = function () {
    document.body.append('<h1>mouseout')
}
outer.onmouseseenter = function () {
    document.body.append('<h1>mouseseenter')
}
outer.onmouseleave = function () {
    document.body.append('<h1>mouseleave')
}
var input_1 = document.querySelectorAll('input')[0]
var input_2 = document.querySelectorAll('input')[1]
input_1.onkeydown = function () {
    if (6 <= input_1.value.length) {
        input_2.focus()
    }
}
input_2.onkeydown = function (event) {
    var event = event || window.event
    if (event.keyCode == 8 && input_2.value.length == 0) {
        input_1.focus()
    }
}