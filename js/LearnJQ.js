$(document).ready(function(){
    // sec1
    $('#showSpan1Btn').on('click',function(){
        // $('#showSpan1').toggleClass('hidden')
        // 也可以改寫成
        $(this).next().next().toggleClass('hidden') //因為有br所以要再多一次next

    })


    $('#showUl1Btn').on('click',function(){
        $('#showUl1').slideToggle()
    })
})