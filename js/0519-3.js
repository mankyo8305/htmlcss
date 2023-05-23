img.style.width = "200px"
img.style.height = "150px"

var i = 0
function change() {
    if (i % 2 == 0) {
        img.src = "./imgs/sky.jpg"
    } else {
        img.src = "./imgs/sight3.jpg"
    }
    i++
}

function hide() {
    img.style.visibility = "hidden"
    console.log("hide");
}
function show() {
    img.style.visibility = "visible"
    console.log("show");
}
function changeStyle() {
    var h2 = document.querySelector('h2')
    // h2.style.background = "gold"
    // h2.style.fontStyle = "italic"
    // h2.style.color = "tomato"
    // h2.style.fontSize = "2em"
    h2.style = {
        background: "gold",
        fontStyle: "italic",
        color: "tomato",
        fontSize: "2em"
    }
}