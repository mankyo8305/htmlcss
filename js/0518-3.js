// var hearder = document.createElement("h1")
// var text = document.createTextNode("welcome")

// // 노드 연결
// hearder.appendChild(text)
// // document.body.appendChild(hearder)

// var box = document.getElementById("box")
// var box2 = document.getElementById("box2")

// box.appendChild(hearder)
// box2.appendChild(hearder)

// box.innerHTML = hearder.innerHTML
// box2.innerHTML = hearder.innerHTML

var add = document.getElementById("add")
add.addEventListener("click", function () {
    var h2 = document.createElement("h2")
    var text = document.createTextNode("welcome")
    h2.appendChild(text)
    document.body.appendChild(h2)
})
del.addEventListener("click", function () {
    var h2 = document.getElementsByTagName("h2")
    var i = h2.length - 1
    console.log(h2.length)
    if (i < 0) return false
    document.body.removeChild(h2[i])
})