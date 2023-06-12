var li = $('#wrapper>li')
li.addClass(function (i) {
    return 'color' + i
})
$('button').eq(2).click(function () {
    li.toggleClass(function (i) {
        return 'color' + i
    })
})
$('img').attr('width', 200)
$('img').attr('width', function (i) {
    return 100 * (i + 1)
})
$('img').attr({
    'width': function (i) {
        return 100 * (i + 1)
    },
    'height': 250
})
$('input').attr('value', '이름을 입력하세요')
$('input').focus(function () {
    $(this).removeAttr('value')
})

$('p').css('background', function (i) {
    return color[i]
})
$('p').css({
    'background': function (i) {
        return color[i]
    },
    'color': 'white'
})
// html, text
$('h1').first().html('<span>span추가')
$('h1').last().text('<span>span추가')
$('li').html(function (i) {
    return$(this).html() + '-' + i + '☆'
})
$('#wrapper').css('border', '2px solid')
$('li').text(function (i) {
    return $(this).text() + '-' + '<b>'
})
$('<img>').attr('src', '../imgs/just.png').appendTo('#wrapper')
$('<img>', {
    src: '../imgs/just.png',
    width: 100,
    height: 100
}).appendTo('#wrapper')
$('#wrapper').append("welcom")
$('wellcome').appendTo("#wrapper")