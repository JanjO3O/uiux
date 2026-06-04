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
        1번이 보일 때  ul의 left값 : 0
        2번이 보일 때  ul의 left값 : -1200px
        3번이 보일 때  ul의 left값 : -2400px
    */
   let idx = 1
   let obj_left = 0
   setInterval(function(){
        if(idx < 3){
            idx++ //현재 idx값에 1을 추가
        }else{
            idx = 1
        }
        obj_left = (idx-1) * (-1200)
        console.log(idx,obj_left)
        
        $('.visual ul').css('left',obj_left)
   }, 3000)

   $('.bbs > ul > li').on('click', function(){
        $('.bbs > ul > li').removeClass('active')
        $(this).addClass('active')
   })

   $('.pop_open').on('click', function(){
        $('.popup').show()
   })
   $('.popup .close button').on('click', function(){
        $('.popup').hide()
   })
})