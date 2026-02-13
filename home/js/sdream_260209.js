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
    // const webzine_swiper = new Swiper('.webzine .swiper', { /* 팝업을 감싼는 요소의 class명 */
    //     slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
    //     spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
    //     breakpoints: {
    //         768: {    /* 768px 이상일때 적용 */
    //             slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
    //             spaceBetween: 24,
    //         },
    //     },
    //     loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 해제 */
    //     autoplay: {  /* 팝업 자동 실행 */
    //         delay: 2500,
    //         disableOnInteraction: false,
    //     },
    //     navigation: {
    //         nextEl: '.webzine .ctrl_wrap .next',
    //         prevEl: '.webzine .ctrl_wrap .prev',
    //     },
    // });




})//$(document).ready