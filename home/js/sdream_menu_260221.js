$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            
            delay: 5000,  //--> 5s
            disableOnInteraction: true,
        },

        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//visual_swiper

        
        // pc버전 메뉴
        // .header .gnb .gnb_wrap ul.depth1 > li 한테 마우스를 올리면 over 클래스 추가
        // -- 마우스를 오버한 단 하나의 li에만 over 클래스 추가됨

        // .header에 mouse_over가 추가 - 메뉴에 마우스를 올렸을 때

        let win_w //브라우저의 넓이
        let device_status //지금 pc인지 mobile인지
        let mobile_size = 1024 //1024부터 메뉴는 모바일

        function device_chk(){  //함수의 선언
            win_w = $(window).width()
            // console.log(win_w)
            if(win_w > mobile_size){
                device_status = 'pc'
            }else{
                device_status = 'mobile'
            }
            console.log(device_status)
        }
        device_chk() //문서가 로딩되었을 때 단 1번 실행 - 함수의 실행
        $(window).resize(function(){ //브라우저가 리사이즈 될 때마다 1번씩 실행
            device_chk() //함수의 실행
        })

        $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
            if(device_status == 'pc'){
                // pc가 아니면 아예 안주고 말거라서 else는 없음
                // 오버한 li에만 over 클래스를 주는 방법 - 모든 li에 있는 over를 지우고 오버한 li에만 줌
                // $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
                $(this).addClass('over')
                $('.header').addClass('menu_over')
            }
        })
        $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
            if(device_status == 'pc'){
                $(this).removeClass('over')
            }
        })
        //  header 아래 검은 블러 배경에 마우스 오버하면 메뉴 닫기
        $('.header .gnb_bg').on('mouseenter', function(){
            $('.header').removeClass('menu_over')
        })


        $('.header .gnb .gnb_wrap ul.depth1 > li').on('click', function(){
            if(device_status == 'mobile'){
                $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open')
                $(this).addClass('open')
            }       
        })

        $('.header .gnb .gnb_open').on('click', function(){
            if(device_status == 'mobile'){
                $('.header').addClass('menu_open')
            }
        })
        $('.header .gnb .gnb_wrap .gnb_close').on('click', function(){
            if(device_status == 'mobile'){
                $('.header').removeClass('menu_open')
            }
        })



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


    // - 3 방법 - 화면이 줄어들어도 옆 상자의 끝부분이 계속 동일한 퍼센트로 보이면서, 화면에 보여지는 하나의 상자의 사이즈가 계속 줄어드는 방법
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

    // top 버튼
    $('.footer .top').on('click', function(){
        console.log('클릭')
        // $(window).scrollTop(0)
        $('html,body').animate({
            scrollTop : 0
        }, 500)
    })//.footer .top




})//$(document).ready