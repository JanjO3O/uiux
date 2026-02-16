$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            
            delay: 5000,  //--> 5s
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//visual_swiper



    $('.header').on('mouseenter', function(){
        console.log('마우스 올림!!')
        $(this).addClass('over')
    })
    $('.header').on('mouseleave', function(){
        console.log('마우스 올렸다 내림!!')
        $(this).removeClass('over')
    })


    let scrolling //스크롤된 값
    let prev_scroll = 0 //이전 스크롤 값
    let move_scroll //얼마나 스크롤 되었는지 변화값

    function header_fixed(){  // 함수의 정의
        scrolling = $(window).scrollTop()
        console.log(scrolling, prev_scroll, prev_scroll-scrolling)
        if(scrolling > 0){
            $('.header').addClass('fixed')
            move_scroll = prev_scroll - scrolling
            if(move_scroll > 0){
                $('.header').removeClass('hide')
            }else{
                $('.header').addClass('hide')
            }
        }else{
            $('.header').removeClass('fixed')
        }
        prev_scroll  = scrolling
    }
    header_fixed()
    $(window).scroll(function(){
        header_fixed()
    })//.header



    // 웹진 START
    // 브레이크포인트는 흔히 1024,768을 주고, 그 아래는 알아서 주면 되는데 여기에선, 540
    // css와는 반대로 js에서는 브레이크 포인트가 위에가 작은 사이즈임

    // - 1 방법 - 지정한 브레이크포인트마다 지정한 상자의 갯수가 적용되고, 상자의 넓이는 계속해서 화면에 100%로 들어가는 방법 
    const webzin_swiper = new Swiper('.webzin .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: '1', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            541: {    /* 768~541 사이일 때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            769: {    /* 769px 부터 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },

    // - 2 방법 - 상자의 사이즈가 250px로 동일한 상태에서, 화면이 줄어들어도 보여지는 상자의 넓이가 전혀 변함이 없음
    // const webzin_swiper = new Swiper('.webzin .swiper', { /* 팝업을 감싼는 요소의 class명 */
    //     slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    //     spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
    //     breakpoints: {
    //         769: {    /* 769px 부터 적용 */
    //             slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
    //             spaceBetween: 24,
    //         },
    //     },


    // - 3 방법 - 화면이 줄어들어도 옆 상자의 끝부분이 계속 동일한 퍼센트로 보이면서, 정중앙에 위치한 하나의 상자의 사이즈가 계속 줄어드는 방법
    // const webzin_swiper = new Swiper('.webzin .swiper', { /* 팝업을 감싼는 요소의 class명 */
        // slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        // spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        // breakpoints: {
        //     769: {    /* 769px 부터 적용 */
        //         slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
        //         spaceBetween: 24,
        //     },
        // },
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 해제 */
        navigation: {
            nextEl: '.webzin .ctrl_wrap .next',
            prevEl: '.webzin .ctrl_wrap .prev',
        },
    });




})//$(document).ready