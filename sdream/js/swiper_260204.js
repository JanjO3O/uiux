$(document).ready(function(){
    const swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, /* 5s */
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 / 뉴스나 최근소식의 팝업은 마지막에서 멈춰야 함 => true말고 false로 하면 됨 */
        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.visual .ctrl_wrap .paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            // renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
            //     return '<span class="' + className + '">' + (index + 1) + "</span>";
            // },
        },
        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .ctrl_wrap .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .ctrl_wrap .prev',  /* 이전 버튼의 클래스명 */
        },

    });
    
    $('.visual .ctrl_wrap .stop').on('click', function(){
        // console.log('정지버튼을 눌렀어요!!!!!')
        // stop 숨김 play 보임
        swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap .play').show()
    })
    $('.visual .ctrl_wrap .play').on('click', function(){
        // console.log('재생버튼을 눌렀어요!!!!!')
        // play 숨김 stop 보임
        swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap .stop').show()
    })

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일에서 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 - 모바일에서 */
        breakpoints: {
            500: {    /* 500px 이상일때 적용 - pc에서 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,
            },
            769: {    /* 769px 이상일때 적용 - pc에서 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.news .ctrl_wrap .next',
            prevEl: '.news .ctrl_wrap .prev',
        },
    });

    const notice_swiper = new Swiper('.notice .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 'auto' 라고 쓰면 css에서 적용한 넓이값이 적용됨 */ 
        spaceBetween: 16, 
        breakpoints: {
            769: {    /* 769px 이상일때 적용 - pc에서 */
                slidesPerView: 3,   /* 브라우저에 한 번에 보일 팝업의 수 */
                spaceBetween: 24,   /* 팝업과 팝업 사이 여백 */
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        
        navigation: {
            nextEl: '.notice .ctrl_wrap .next',
            prevEl: '.notice .ctrl_wrap .prev',
        },
    });



})//(document).ready