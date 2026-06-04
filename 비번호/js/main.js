$(document).ready(function(){
    $('header nav ul.depth1 > li').on('mouseenter focusin', function(){
        $('header nav ul.depth1 > li').removeClass('active')
        $(this).addClass('active')
    })
    $('header nav').on('mouseleave', function(){
        $('header nav ul.depth1 > li').removeClass('active')
    })
    $('header nav ul.depth1 > li:last-child > ul.depth2 > li:last-child').on('focusout', function(){
        $('header nav ul.depth1 > li').removeClass('active')
    })

    /*
        자기 혼자 실행
        2 > 3 > 1 > 2 > 3 > 1 > 2 > 3 - loop
        처음에는 이미 1이 보이니까..
    */
   $('.visual ul li').hide()
   $('.visual ul li:first-child').show()
        setInterval(function(){
                $('.visual ul li:first-child')
                .fadeOut(1000)
                .next('li')
                .fadeIn(1000)
                .end()
                .appendTo('.visual ul')
            }, 3000)
        })