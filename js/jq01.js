$('input:submit').css('color', 'red')
$('input:text').css('color', 'red')
$('input:button').css('color', 'red')

$('input:focus').css('background', 'gold')

// setInterval(function () {
//     $('input:focus').css('background', 'gold')
// }, 1000)

$('input:text').blur(function () {
    $(this).css('background', 'blue')
})

$('input:text').focus(function () {
    $(this).css('background', 'red')
})

$('select').change(function () {
    var 동물 = $('option:selected').val()
    $('#info').html(동물 + "좋아요")
})

$('ul>li:odd').css('background', 'steelblue')
$('ul>li:even').css('background', 'cyan')
$('ul>li:last').css('background', 'steelblue')
$('ul>li:first').css('background', 'steelblue')

$('li:eq(5)').css('padding', '10px')
$('li:lt(3)').css('font-size', '20px')
$('li:gt(3)').css('font-size', '30px')
$('li:nth-child(2n)').css('color', 'blue')
$('li:nth-of-type(2n+1)').css('color', '10px')

