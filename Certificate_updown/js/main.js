$(document).ready(function(){
    $('header nav ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
        $('header nav ul.depth1 > li > ul.depth2').stop().slideDown()
    })
    $('header nav').on('mouseleave', function(){
        $('header nav ul.depth1 > li').removeClass('active')
        $('header nav ul.depth1 > li > ul.depth2').stop().slideUp()
    })
    $('header nav ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav ul.depth1 > li').removeClass('active')
        $('header nav ul.depth1 > li > ul.depth2').stop().slideUp()
    })

    function slide(){
        $('.visual ul').animate({top: "-300px"}, 1000, function(){ //1s동안 slide가 위로 올라감
            $('.visual ul').append($('.visual ul li').first())
            $('.visual ul').css({top: 0})
        })
    }
    setInterval(slide,3000) //3s마다 slide가 전환됨


        /* 좌우 슬라이드 */
    // function slide(){
    //     $('.visual ul').animate({left: "-1200px"}, 1000, function(){
    //         $('.visual ul').append($('.visual ul li').first())
    //         $('.visual ul').css({left: 0})
    //     })
    // }
    // setInterval(slide,3000)

    $('.contents .bbs > ul > li').on('click', function(){
        $('.contents .bbs > ul > li').removeClass('active')
        $(this).addClass('active')
    })

    $('.pop_open').on('click', function(){
        $('.popup').show()
    })
    $('.popup .close button').on('click', function(){
        $('.popup').hide()
    })

})