$(document).ready(function(){

    $('.recruit .list ul li').on('mouseenter', function(){
        console.log('오버함!!')
        $('.recruit .list ul li').removeClass('active')
        $(this).addClass('active')
    })
});//$(document)