$('h3').on('click', function () {
    // $('h3').html('환영합니다')
    $(this).html(function (i, e) {
        i++
        return e + i
    })
})
$('h3').on({
    mouseenver: function () {
        $(this).addClass('bg')
    },
    mouseleave: function () {
        $(this).removeClass('bg')
    }
})
var i = 0
$('img').on({
    mouseenter: function () {
        $(this).attr('src', ' ../imgs/just.png')
    },
    mouseleave: function () {
        $(this).attr('src', ' ../imgs/just3.jpg')
    },
    click: function () {
        i++
        (i % 2) == 0 ? $(this).attr('src', ' ../imgs/just4.jpg')
            : $(this).attr('src', ' ../imgs/just5.jpg')
    },
    dblclick: function () {
        $(this).off()
    }
})

$('li').click(function () {
    $(this).find('span').css('background', 'red')
    $('span', this).html('Monday')
})

$(document).mousemove(function (e) {
    var x = e.pageX
    var y = e.pageY
    $('p').html(`x: ${x} y:${y}`)
})
// $('li').click()

// setInterval(() => {
//     $('img').click()
// }, 2000)

// setInterval(() => {
//     $('h3').trigger('mouseenter')
// }, 2000)
// setInterval(() => {
//     $('h3').trigger('mouseleave')
// }, 3000)

$('section,div,p').css({
    border: '1px solid',
    margin: '10px',
    padding: '10px'
})
$('section').on('click', function () {
    $(this).css('background', 'pink')
})
$('div').on('click', function (e) {
    $(this).css('background', 'blue')
    // e.preventDefault()
    // e.stopPropagation()
    return false
})
$('p').on('click', function (e) {
    $(this).css('background', 'gold')
    // e.preventDefault()
    // e.stopPropagation()
    return false
})
// 동적인요소도 이벤트를 연결할때
$('section').on('click', 'p', function () {
    $(this).css('background', 'blue')
    return false
})

$('textarea').keyup(function () {
    var 입력글자 = $(this).val().length
    var 남은글자 = 30 - 입력글자
    $('h5').html(입력글자 + 'EA')
    if (남은글자 >= 0) {
        $(this).css('color', 'blue')
    } else {
        // $(this).attr('disabled', true)
        $('h5').css('color', 'red').html('그만입력하세요')
        this.returnValue = false
        $(this).val('')
    }
})
///////////////////////////////////////
$(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log(scrollTop)
    var windowHeight = $(window).height()
    var 문서높이 = $(document).height()
    var 스크롤높이 = scrollTop + windowHeight

    if (스크롤높이 >= 문서높이 - 100) {
        for (var i = 0; i < 10; i++) {
            $('<h1>무한스크롤' + i + '</h>').appendTo('body')

        }
    }
})

















