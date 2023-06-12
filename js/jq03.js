$('h2').css('background', 'orange').filter(':even')
    .css('color', 'white').end().filter(':odd').css('color', 'red')

$('h2').eq(2).css('border', '2px solid black')
$('h2').first().css('border', '5px solid black')
$('h2').last().css('border', '5px solid black')
$('h2').eq(-1).css('padding', '10px')
$('h2').css('font-size', '40px').add('h3')
    .css('margin', 0).css('font-style', 'italic')
$('h2').each(function () {
    if ($(this).is('.select')) {
        $(this).css('border-radius', '30px')
            .css({ textAlign: 'center' })
    }
})
$('h2').slice(2, 5).css('margin', '5px')
var h2length = $('h2').size()
console.log(h2length)
$('<h3>' + $('h2').size()).appendTo($('body'))
$('<h3>' + h2length).appendTo($('body'))
$(`<h3>${h2length}`).appendTo($('body'))
$('body').append(`<h3>${h2length}`)
$("h3:contains('내일')").css('border', '2px solid')
$("h3:has('b')").css('background', 'red')
$('h3').not(":has('b')").css('background', 'gold')
$('h3').click("div").css('border', '5px double')
    .css('padding', '10px')
$('#box').css('border', '2px solid')
    .css('background', 'gray')
    .css('height', '100px')
    .css('width', '200px')
// 쇼, 하이드, 토글
$('button').eq(0).click(function () {
    $('#box').show()
})
$('button').eq(1).click(function () {
    $('#box').hide()
})
$('button').eq(2).click(function () {
    $('#box').toggle()
})
$('button').each(function () {
    $(this).click(function () {
        var html = $(this).html()
        var exec = "$('#box')" + html + '()'
        eval(exec)
    })
})






