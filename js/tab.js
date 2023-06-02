var LI = document.querySelectorAll('ul>li')
var DIV = document.querySelectorAll('section>div')

LI.forEach(function (li, i) {
    li.setAttribute('data-index', i)
})

// for (var i = 0; i < LI.length; i++) {
//     LI[i].onclick = function () {

//         var index = this.getAttribute('data-index')
//         console.log(index)
//         LI.forEach((li) => {
//             li.classList.remove('active')
//         })
//         this.classList.add('active')

//         DIV.forEach((div) => {
//             div.classList.remove('display')
//         })
//         DIV[index].classList.add('display')
//     }
// }
// 

var UL = document.querySelector('ul')
UL.addEventListener('click', function (e) {
    console.log(e.target.nodeName)
    if (e.target.nodeName == "LI") {
        var index = e.target.getAttribute('data-index')

        LI.forEach((li) => {
            li.classList.remove('active')
        })
        console.log(this)
        e.target.classList.add('active')
        DIV.forEach((div) => {
            div.classList.remove('display')
        })
        DIV[index].classList.add('display')
    }
})

