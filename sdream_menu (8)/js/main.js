$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, //=> 팝업이 돌아가는 시간 -- 5s
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//.visual .swiper


     
    /**************************************************
     * pc 버전 메뉴
     * .header .gnb .gnb_wrap ul.depth1 > li 한테 마우스를 올리면 over 클래스 추가
     * --> 마우스를 오버한 단 1개의 li에만 over 클래스가 추가됨
     * 
     * .header에 menu_over 추가 -- 메뉴에 마우스를 올렸을 때
     **************************************************/ 
    
    let win_w //브라우저의 넓이
    let device_status //지금 pc인지 mobile 저장
    let mobile_size = 1024 //1024부터 모바일

    function device_chk(){ //함수의 선언
        win_w = $(window).width()
        // console.log(win_w)
        if(win_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    device_chk() //(--함수의 선언)문서가 로딩되었을 때 단 1 번 실행
    $(window).resize(function(){ //브라우저가 리사이즈될 떄마다 1번씩 실행
        device_chk()
    })

    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter', function(){
        if(device_status == 'pc'){
            /* 오버한 li에만 over 클래스를 주는 방법
               모든 li에 있는 over를 지우고 오버한 li에만 줌 */ 
            //$('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $(this).addClass('over')
            $('.header').addClass('menu_over')
        } //else는 없음 왜냐 pc가 아니면 아예 안할거기 때문에
    })
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        if(device_status == 'pc'){
            $(this).removeClass('over')
        }
    })
    /* header 아래 검은 영역에 마우스 오버하면 메뉴 닫기 */ 
    $('.header .gnb_bg').on('mouseenter', function(){
        $('.header').removeClass('menu_over')
    })

    $('.header .gnb .gnb_wrap ul.depth1 > li').on('clock', function(){
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




    /******************************************************
     * 웹진 swiper
     *****************************************************/ 
    const webzin_swiper = new Swiper('.webzin .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            540: {    /* 768-540px 사이일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 16,  /* 여백 */ 
            },
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,  /* 여백 */ 
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        loop: false,  /* 뉴스는 돌면 안되고, 마지막에서 멈춰야 함.(마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기) */
        navigation: {
            nextEl: '.webzin .ctrl_wrap .next',
            prevEl: '.webzin .ctrl_wrap .prev',
        },
    });//webzin_swiper




    /***********************************************************
     * top버튼을 클릭하면 상단으로(맨위로) 스크롤
     ***********************************************************/ 
    $('.footer .top').on('click', function(){
        console.log('클릭')
       //$(window).scrollTop(0)  //0211오전 11:30분 강의
       $('html,body').animate({
        scrollTop : 0
       }, 500)
    })//.footer .top

})//$(document)