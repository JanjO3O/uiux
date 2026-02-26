$(document).ready(function(){
    let visual_bar_w
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000,
            disableOnInteraction: false, //얘를 false로 줘야 이전다음버튼을 눌렀을 때에도 팝업의 바의 게이지가 다시 0에서 100까지 찬다
        },

        //effect: "fade", /* fade 효과 */

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
                // progress: 1 -> 0 
                // 0% -> 100%로 되어야 함 (가상선택자인 before,after는 제어가 안됨)
                visual_bar_w = 100 - (100 * progress)
                $('.visual .ctrl_left .bar span').width(visual_bar_w + '%')
            }
        }

    });

    $('.visual .ctrl_left .stop').on('click', function(){
        // console.log('정지!!')
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()  //일시정지를 누르면 일시정지를 숨기고 
        $('.visual .ctrl_left .play').show()  //재생이 보임

    })
     $('.visual .ctrl_left .play').on('click', function(){
        // console.log('재생!!')
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()  //재생을 누르면 재생을 숨기고
        $('.visual .ctrl_left .stop').show()  //일시정지 보임
    })


    /*********************************************************************************
     * 1차 지금 현재 넓이가 pc버전인지 mobile 버전인지 구분(메뉴만 1025px 이상은 pc / 1024px 이하는 mobile)
     *     ==> 브라우저의 넓이값을 구해서 1024보다 큰지 작은지 구분
     *     ==> 첫번째 로딩됐을 때 계산, 그리고 브라우저가 리사이즈 될 때마다 브라우저 넓이 체크
     *         동일한 계산을 두 번해야 하는 경우, 함수로 정의한 다음에 호출해서 사용하는 방식을 씀
     * 
     * 
     * 모바일 메뉴의 규칙
     * 1. 메뉴를 클릭하면 하위메뉴가 열림
     * 2. 오직 하나의 메뉴만 열림
     * 3. 열린 메뉴를 다시 클릭하면 닫힘
     * pc에서는 1차메뉴를 클릭하면 첫 번째 하위메뉴로 이동 (href에 링크 주소가 있음)
     * 하지만 모바일에선 1차메뉴를 클릭하면 하위메뉴를 열어줘야 함 (링크 X)
     * ==> 그럼 href에 입력된 값은???????
     * 반드시 1차메뉴의 a를 선택자로 해서 href 이벤트를 정지시켜야 함(수업자료 js에 있으ㅡㅁ)
     * ====> 이것때문에 귀찮아서 1차 메뉴에 링크를 pc부터 아예 안하기도 하고 pc/mobile 메뉴를 나눠서 코딩하거나, pc도 클릭하면 하위메뉴가 나오게 함
     *********************************************************************************/
    let win_w //브라우저 넓이
    let mobile_size = 1024 //모바일 사이즈 시작(경계)
    let device_status //pc, mobile 두개의 값 저장

    function device_chk(){  //함수의 정의(선언)
        win_w = $(window).width() //window 넓이 측정
        if(win_w > mobile_size){ //win 넓이가 모바일보다 크면
            device_status = 'pc'  //브라우저 사이즈의 상태 = pc를 넣어(= 하나만 있으면)
        }else{
            device_status = 'mo'  //아니면 모바일
        }
        console.log(device_status)  //브라우저 상태
    }
    device_chk() //함수의 실행 -- 문서가 로딩되고 단 1번($(document).ready 안에서 선언되었기 때문)
    $(window).resize(function(){
        device_chk() //함수의 실행 -- 브라우저가 리사이즈될 때마다 1번씩
    })


    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){ //키보드접근성 떄문에 focusin,focusout을 줌 -> 키보드 Tab 키로 조절 가능
        if(device_status == 'pc'){ //if문은 선택자를 부른 다음에 써줘야 함(그럼 브라우저 사이즈가 모바일에서 새로고침됐다가 pc로 리사이즈 되어도 실행됨)
            $(this).addClass('over')
            $('.header').addClass('menu_over')
        } //pc가 아니면 아예 안할거라 else는 없음
    })
    $('.header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave focusout', function(){
        if(device_status == 'pc'){ 
            $(this).removeClass('over')
        } 
    })
    $('.header .gnb .gnb_bg').on('mouseenter', function(){  //검정블러배경에 마우스 올리면 메뉴 오버 클래스 삭제
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })
    $('.header').on('mouseleave', function(){ //헤더에서 마우스가 아웃되면 매뉴 오버 클래스 삭제
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })
    $('.header .util .search .search_open').on('focusin', function(){  //키보드접근성 tab키를 이용해서 search에 가면 메뉴 오버 클래스 삭제
        if(device_status == 'pc'){ 
            $('.header').removeClass('menu_over')
        }
    })

    $('.header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mo'){
            e.preventDefault() //href 링크 이동을 막는 명령
            // 내가 클릭한 a를 감싸는 li에 open 클래스가 있는지 확인
            let gnb_open = $(this).parents('li').hasClass('open')
            // console.log(gnb_open)
            if(gnb_open == true){ //열려있는 경우
                $(this).parents('li').removeClass('open') //하나만 열기
                $(this).next().slideUp(300, function(){
                    //slideUp 끝나고 나서 그 다음에 실행  
                    // -- 이 함수 안에선 효과를 주는 $(this).next() -> $(this)가 됨
                    // slideup으로 메뉴를 접으면 html에 style=display:none;이 쓰여서
                    // 다른 스타일이 적용되지 않음 그래서 아예 지워버림
                    $(this).removeAttr('style') 
                })
            }else{ //li가 닫힌 경우
                $('.header .gnb .gnb_wrap ul.depth1 > li').removeClass('open') //모든 li 닫고
                $('.header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp(300, function(){
                    //slideUp 끝나고 나서 그 다음에 실행
                    $(this).removeAttr('style')
                })
                $(this).parents('li').addClass('open')  //클릭한 하나만 열기
                $(this).next().slideDown()
            }
        }
    })

    $('.header .gnb .gnb_open').on('click', function(){ //모바일메뉴 
        $('.header').addClass('menu_open')
    })
    $('.header .gnb .gnb_wrap .gnb_close').on('click', function(){ //모바일메뉴
        $('.header').removeClass('menu_open')
    })


    /************************************************************
     * 브라우저가 스크롤되면 header에 fixed 클래스를 추가
     * 단, 다시 맨 위로 올라가면 fixed 클래스를 사가제
     * 처음에 로딩되었을 때와 브라우저가 스크롤될 때마다 체크
    ************************************************************/
    let scrolling //현재 스크롤값

    function scroll_chk(){ //함수의 정의
        scrolling = $(window).scrollTop()
        // console.log(scrolling)
        if(scrolling > 0){
            $('.header').addClass('fixed')
        }else{
            $('.header').removeClass('fixed')
        }
    }
   
    scroll_chk() //함수의 선언 - 문서가 로딩되고 단 1번만 실행
    $(window).scroll(function(){ //함수의 선언 - 브라우저가 스크롤될 때마다 실행
        scroll_chk() 
    })



    // book swiper 팝업
    const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값(250px)이 적용됨 */
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

    
    
    /***********************************
     * story
     **********************************/ 

    const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            // 451: {    /* 451px 이상일때 적용 */
            //     slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
            //     spaceBetween: 24,
            // },
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
            1025: {    /* 1025px 이상일때 적용 */
                slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        navigation: {
            nextEl: '.story .next',
            prevEl: '.story .prev',
        },
    });

    /* aos.animation */
    AOS.init({
        offset: 200, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });


}) //$(document).ready