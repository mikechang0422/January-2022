$(document).ready(function () {
    // sec1
    $('#showSpan1Btn').on('click', function () {
        // $('#showSpan1').toggleClass('hidden')
        // 也可以改寫成
        $(this).next().next().toggleClass('hidden') //因為有br所以要再多一次next

    })

    $('#showUl1Btn').on('click', function () {
        $('#showUl1').slideToggle()
    })


    // sec3
    $.ajax({
        url: '../json/LearnJQ.json',
        dataType: 'json'
    })
        .done(function (data) {
            $(data).each(function () {
                if (this.crowded === 'yes') {
                    let idName = '#' + this.id
                    $(idName).find('.check').addClass('crowded')
                }
            })
        })
        .fail(function (err) {
            alert('讀取錯誤: ' + err)
        })
    
    $('.check').on('click',function(){
        if($(this).hasClass('crowded')){
            $(this).text('名額已滿').addClass('red')
        } else {
            $(this).text('參加').addClass('green')
        }
    })
})