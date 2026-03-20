/********************
 * header와 footer 공통 사항에 들어가는 스크립트
 *********************************/
$(document).ready(function(){
    let device_status //브라우저 상태 -> pc인지 모바일인지
    let mobile_size = 1024 //모바일 사이즈
    let window_w  //브라우저 넓이

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mo'
        }
        console.log(device_status)
    }
    device_chk()  //문서 로딩되고 단 한 번 실행
    $(window).resize(function(){  //리사이즈 될 때마다 실행
        device_chk()
    })
    
    let gnb_x
    $('.header .gnb ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            gnb_x = $(this).position().left + ($(this).width() / 2)
            // console.log(gnb_x)
            $('.header .gnb .nav_bar').css('left', gnb_x)
        }
    })
    $('.header .gnb ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $('.header').addClass('menu_over')
            $(this).find('ul.depth2').slideDown()
        }
    })
    $('.header .gnb ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
            $(this).find('ul.depth2').slideUp()
        }
    })
    $('.header .util .lang').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(this).addClass('over')
            $('.header').removeClass('menu_over')
            $('.header .gnb ul.depth1 > li > ul.depth2').slideUp()
        }
    })
    $('.header .util .lang').on('mouseleave focusout', function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
        }
    })
    $('.header .util .sitemap_btn').on('click', function(){
        $('.header').toggleClass('menu_open')
        if($('.header').hasClass('menu_open') == true){   //hasClass => class 있는지 여부 확인
            $(this).attr('title', '메뉴 닫기')  //attr-> 주어진 조건에 맞는 속성값을 갖고오는건데,, 여기선 sitemap_btn에 있는 title값을 '메뉴 닫기'값으로 변경하라는 뜻
        }else{
            $(this).attr('title', '메뉴 열기')
        }
    })
    

    let scrolling   //현재 스크롤된 값
    let prev_scroll = 0  //이전 스크롤 값
    let move_scroll  //얼마나 스크롤 되었는지 변화값
    function header_fixed(){
        scrolling = $(window).scrollTop()
        if(scrolling > 0){
            $('.header').addClass('fixed')
            move_scroll = prev_scroll - scrolling   // 마이너스가 내려가는 중 / 플러스가 올라가는 중
            if(move_scroll > 0){   // +++++  -> 올라가는 중
                $('.header').removeClass('hide')
            }else{   // ---- -> 내려가는 중
                $('.header').addClass('hide')
            }
        }else{
            $('.header').removeClass('fixed')
        }
        prev_scroll = scrolling
    }
    
    header_fixed()  //로딩되고 단 한 번 실행
    $(window).scroll(function(){  //스크롤 될 때마다 실행
        header_fixed()
    })
    


    let sitemap_wrap_y
    let li_h
    let dot_h
    let li_top
    $('.header .sitemap .sitemap_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            li_h = $(this).outerHeight()  //padding을 포함한 높이
            dot_h = 18   //원의 높이
            li_top = $(this).position().top    //li의 top 값
            sitemap_wrap_y = li_top + (li_h / 2) - (dot_h / 2)   //li의 정중앙에 위치하기 위한 값
            // console.log(sitemap_wrap_y)
            $('.header .sitemap .sitemap_wrap .sitemap_nav_bar').css('top', sitemap_wrap_y + 'px')
        }
    })


    $('.header .sitemap .sitemap_wrap ul.depth1 > li').on('click', function(){
        if(device_status == 'mo'){
            if($(this).hasClass('open') == true){
                $(this).removeClass('open')
                $(this).find('ul.depth2').slideUp(300, function(){
                    $(this).removeAttr('style')
                })
            }else{
                $('.header .sitemap .sitemap_wrap ul.depth1 > li').removeClass('open')
                $('.header .sitemap .sitemap_wrap ul.depth1 > li > ul.depth2').slideUp(300, function(){
                    $(this).removeAttr('style')
                })
                $(this).addClass('open')
                $(this).find('ul.depth2').slideDown()
            }
        }
    })

    $('.header .sitemap .sitemap_bg').on('click', function(){
        if(device_status == 'mo'){
            $('.header').removeClass('menu_open')
        }
    })

    let btn_h
    let btn_top
    let nav_b = $('.header .sitemap .sitemap_wrap .sitemap_nav_bar')
    $('.header .sitemap .sitemap_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'mo'){
            btn_h = $(this).outerHeight()
            dot_h = 12
            btn_top = nav_b.css(top: 51px;)
            console.log(btn_top)
            sitemap_wrap_y = btn_top + (btn_h / 2) - (dot_h / 2)
            // console.log(sitemap_wrap_y)
            $('.header .sitemap .sitemap_wrap .sitemap_nav_bar').css('top', sitemap_wrap_y + 'px')
        }
    })

    

})