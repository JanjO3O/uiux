$(document).ready(function(){

    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')
        $(this).addClass('active')
    })

    $('.culture .list ul li').on('mouseenter', function(){
        $('.culture .list ul li').removeClass('active')  //-->removeClass를 먼저 줘서 모든 li의 active 클래스를 삭제하고
        $(this).addClass('active') //-->this로 하나의 li에만 active 클래스를 줌
        
    })


    var abc = '123'
    var bcd = 56
    var bcd = 11
    var sum = abc + bcd
    // console.log('sum')
    // console.log(sum)

    let aaa = 11
    // let bbb= 22 
    aaa = 22
    // console.log(aaa)
    
    let scrolling
    header_fixed()

    function header_fixed(){
        scrolling = $(window).scrollTop()
        console.log(scrolling)

        if(scrolling > 0){
        $('.header').addClass('fixed')
        }else{
        $('.header').removeClass('fixed')
        }
    }

    $(window).scroll(function(){
    header_fixed()
    })
    
})//$(document).ready
