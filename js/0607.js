$(document).ready(function () {
    $('*').css({ margin: 0, padding: 0 })
    $('a').css({
        'color': 'black',
        'text-decoration': 'none',
        padding: '10px',
        display: 'block'
    })
    $('li').css('list-style', 'none')
    $('ul').css('display', 'flex')
    $('ul>li').css({
        'flex': 1,
        textAlign: 'center',
        background: 'orange'
    })
    $('ol').css({
        'background': 'orange',
        'display': 'none'
    })

    $('ul>li').hover(function () {
        $(this).css('background', 'gray')
        $(this).find('ol').show()
    }, function () {
        $(this).find('ol').hide()
        $(this).css('background', 'orange')
    })
    $('ul > li').css('position', 'relative')
    $('ol').css('position', 'absolute')
        .css('width', '100%')

    $('ol>li').hover(function () {
        $(this).css('background', 'steelblue')
    }, function () {
        $(this).css('background', 'orange')
    })
})
$('h2').attr('title', '마우스를 올려보세요')
$('ul>li').attr('title', '마우스를 올려보세요')

$('div span').css('display', 'inline-block')
    .css('padding', '10px')
    .css('cusor', 'pointer')
$('div>span').first().click(function () {
    $('#img img').attr('src', '../imgs/just2.jpg')
        .attr('width', '200px')
        .attr('height', '200px')
})
$('div>span').last().click(function () {
    $('#img img').attr('src', '../imgs/just3.jpg')
        .attr('width', '200px')
        .attr('height', '200px')
})
$('div>span').eq(1).click(function () {
    $('#img img').attr('src', '../imgs/just.png')
})