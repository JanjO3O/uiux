/*********************************************
 * header와 footer 공통 사항에 들어가는 스크립트
*********************************************/
$(document).ready(function(){
    let device_status //mo , pc
    let mobile_size = 1024
    let window_w //브라우저 넓이

    function device_chk(){ //함수의 정의
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mo'
        }
        console.log(device_status)
    } 

    device_chk() //함수의 선언 - 문서 로딩되고 딱 한 번
    $(window).resize(function(){
        device_chk(); //브라우저 리사이즈될 때마다
    })

    $('.header .gnb ul.depth1 > li:has(ul.depth2)').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $(this).addClass('over')
            $(this).find('ul.depth2').slideDown() //find -> 모든 하위 레벨의 element 중 ul.depth2가 있는 element를 선택해서 slideDown
        }
    })
    $('.header .gnb ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
            $(this).find('ul.depth2').slideUp()
        }
    })
    $('.header').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })
    $('.header .util .mypage').on('focusin', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li:has(ul.depth2)').removeClass('over')
            $('.header .gnb ul.depth1 > li:has(ul.depth2) > ul.depth2').slideUp()
        }
    })


    let scrolling

    function scroll_chk(){ //함수의 선언
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }

    scroll_chk() //문서가 로딩되고 단 한 번 실행
    $(window).scroll(function(){
        scroll_chk() //스크롤 될 때마다 실행
    })

    $('.header .util .sitemap_btn').on('click', function(){
        $('.header').toggleClass('menu_open')
        if($('.header').hasClass('menu_open') == true){
            $(this).attr('title', '메뉴 닫기') //attr-> 주어진 조건에 맞는 속성값을 갖고오는건데,, 여기선 sitemap_btn에 있는 title값을 '메뉴 닫기'값으로 변경하라는 뜻
        }else{
            $(this).attr('title', '메뉴 열기')
        }
    })

})//$(document)