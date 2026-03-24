/****************************
 * main.js는 메인페이지에서만 구동되는 스크립트임
 ***************************/ 
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: false,  //이게 false여야 마우스로 넘겼다가 떼도 swiper가 자동재생됨
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });




    let tab_list = $('.exhibition .tab_list ul li')
    let tab_name

    tab_list.on('click', function(){
        tab_list.removeClass('active')
        tab_list.attr('aria-selected', 'false')
        tab_list.find('button em').text('')
        $(this).addClass('active')
        $(this).attr('aria-selected', 'true')
        $(this).find('button em').text('선택됨')
        tab_name = $(this).attr('aria-controls')
        // console.log(tab_name)
        $('.exhibition .tab_conts .tab_item').removeClass('active')
        $('.exhibition .tab_conts').find('#' + tab_name).addClass('active')
        
        $('.exhibition .tab_conts .tab_item.active swiper-wrapper').swiper('setPosition')
    })

    const exh01_swiper = new Swiper('.exhibition #exh_conts01 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 840 ~ 769px 적용 */
                slidesPerView: 2,
                spaceBetween: 12,
            },
            841: {  /* 1024 ~ 841 사이 */
                slidesPerView: 'auto',      /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 12,
            },
            1025: { /* 1025 이상 */
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        effect: "slide",

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.exhibition #exh_conts01 .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });

    
    const exh02_swiper = new Swiper('.exhibition #exh_conts02 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            841: {
                slidesPerView: 'auto',
                spaceBetween: 12,
            },
            1025: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
        loop: false,
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        effect: "slide",
        
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.exhibition #exh_conts02 .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });
        
    const exh03_swiper = new Swiper('.exhibition #exh_conts03 .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            841: {
                slidesPerView: 'auto',
                spaceBetween: 12,
            },
            1025: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
        loop: false,
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 1000,
        //     disableOnInteraction: false,
        // },
        effect: "slide",
        
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.exhibition #exh_conts03 .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
        },
    });


})//$(document).ready
