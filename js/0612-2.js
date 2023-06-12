$('#all-check').change(function () {
    if (this.checked) {
        $('#item').children('input').attr('checked', true)
    } else {
        $('#item').children('input').attr('checked', false)
    }
})

