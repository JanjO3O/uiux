$(document).ready(function(){

    let visual_bar_w
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
        // effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.swiper-pagination', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_right .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_right .prev',  
        },
        on: {
            autoplayTimeLeft(s, time, progress) {
                // console.log(progress)
                // 1 -> 0  progress값
                // 0 -> 100%  내가 원하는 값
                visual_bar_w = 100 - (100 * progress)
                $('.visual .ctrl_left .bar span').width(visual_bar_w + '%')
            }
        }
    });
    

    $('.visual .ctrl_left .stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_left .play').show()
    })
    $('.visual .ctrl_left .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_left .stop').show()
    })


    // 메뉴 오버

    let win_w //브라우저 넓이
    let mobile_size = 1024 //모바일 사이즈 시작
    let device_status

    function device_chk(){
        win_w = $(window).width()
        if(win_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mo'
        }
        console.log(device_status)
    }
    device_chk()
    $(window).resize(function(){
        device_chk()
    })


    
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            $(this).addClass('over')
            $('.header').addClass('menu_over')
        }
    })
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave  focusout', function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
        }
    })

    $('.header').on('mouseleave',function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })
    $('.header .gnb .gnb_bg').on('mouseenter',function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })
    $('.header .util .search .search_open').on('focusin', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })

    
    $('.header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mo'){
            e.preventDefault();
        //    let gnb_open = $(this).parent().hasClass('open')
        //    console.log(gnb_open)
            if($(this).parent().hasClass('open')){
                $(this).parent().removeClass('open')
                $(this).next().slideUp(300, function(){
                    $(this).removeAttr('style') 
                })
            }else{
                $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $('.header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp(300, function(){
                    $(this).removeAttr('style') 
                })
                $(this).parent().addClass('open')
                $(this).next().slideDown()
            }
        }
    })

    $('.header .gnb .gnb_open').on('click', function(){
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_wrap .gnb_close').on('click', function(){
        $('.header').removeClass('menu_open')
    })

    let scrolling

    function scroll_chk(){
        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }

    scroll_chk()
    $(window).scroll(function(){
        scroll_chk()
    })




    // book 팝업
    const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        navigation: {
            nextEl: '.book .next',
            prevEl: '.book .prev',
        },
    });


    //story swiper

    const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 1024 ~ 769px 일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            1025: {    /* 1025px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        navigation: {
            nextEl: '.story .next',
            prevEl: '.story .prev',
        },
    });


    // aos.animate
    AOS.init({
        offset: 500, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });



})/*$(document).ready*/