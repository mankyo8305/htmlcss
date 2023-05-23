var h2 = document.getElementsByTagName('h2')

var add = document.querySelector('.add')
var del = document.querySelector('.del')
var h2a = document.querySelectorAll('h2')

add.onclick = function () {
    for (var i of h2)
        i.classList.add('active')
}
del.addEventListener('click', function () {
    for (var i = 0; i < h2.length; i++)
        h2[i].classList.remove('active')
})

var a = 0;
var tog = document.querySelector('.toggle')

// tog.addEventListener('click', function () {
//     var h2a = document.querySelectorAll('h2');
//     console.log(a);

//     if (a % 2 == 0) {
//         //  console.log(k);
//         for (var i = 0; i < h2a.length; i++) {
//             h2a[i].classList.add('active');
//             console.log(i);
//         }
//     } else {
//         //  console.log(k);
//         for (var i = 0; i < h2a.length; i++) {
//             h2a[i].classList.remove('active')
//             console.log("000" + i);
//         }
//     }
//     a++;
// });
tog.addEventListener('click', toggle)
function toggle() {
    var h2a = document.querySelectorAll('h2');
    console.log(a);

    if (a % 2 == 0) {
        //  console.log(k);
        for (var i = 0; i < h2a.length; i++) {
            h2a[i].classList.add('active');
            console.log(i);
        }
    } else {
        //  console.log(k);
        for (var i = 0; i < h2a.length; i++) {
            h2a[i].classList.remove('active')
            console.log("000" + i);
        }
    }
    a++;
}

for (var s of h2) {
    s.onclick = function () {
        for (var c of h2) {
            c.style.border = " 5px solid tomato"
        }
    }
}


