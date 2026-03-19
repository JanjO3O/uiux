$(document).ready(function(){
    
    let gnb_x
    $('.header .gnb ul.depth1 > li').on('mouseenter', function(){
        gnb_x = $(this).position().left + ($(this).width() / 2)
        console.log(gnb_x)
        $('.header .gnb .nav_bar').css('left', gnb_x)
    })

    $('.header .gnb ul.depth1 > li').on('mouseenter', function(){
        $(this).find('ul.depth2').slideDown()
    })
    $('.header .gnb ul.depth1 > li').on('mouseleave', function(){
        $(this).find('ul.depth2').slideUp()
    })
    $('.header .util .lang').on('mouseenter', function(){
        $(this).addClass('over')
    })
    $('.header .util .lang').on('mouseleave', function(){
        $(this).removeClass('over')
    })

    

})