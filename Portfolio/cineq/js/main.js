$(document).ready(function(){
    const visual_swiper_pc = new Swiper('.visual .swiper_pc', {

        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
        },

        // effect: "fade", /* fade 효과 */

        // loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
            el: '.paging', /* 해당 요소의 class명 */
            clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
            // type: 'fraction',  /* type fraction을 주면 paging이 숫자로 표시됨 */
            renderBullet: function (index, className) {   /* paging에 특정 코드 넣기 */
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
    });

    
    
    $('.visual .swiper_pc .paging .swiper-pagination-bullet').text('')


    const visual_swiper_mo = new Swiper('.visual .swiper_mo', {

        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: false,
        },

        effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

        navigation: {  /* 이전, 다음 버튼 */
            nextEl: '.visual .swiper_mo .next',  /* 다음 버튼의 클래스명 */
            prevEl: '.visual .swiper_mo .prev',  
        },
    })


    
    
    const Box_Office_swiper = new Swiper('.Box_Office .swiper', {
        slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 5, /* 팝업과 팝업 사이 여백 */
        // speed: 5000,
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 0,
        // },
        disableOnInteraction: false,
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 5,  //coverflow 효과로 간격조절 할거라서 0 준거임
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        
        effect: 'coverflow',  // css - perspective 속성과 같이 쓰이는 3D 입체 효과를 위한 속성값
        grabCursor: true,
        coverflowEffect: {
            rotate: 10,       // 좌우 회전 각도
            stretch: 5,     // 슬라이드 간격 (겹침 느낌)
            depth: -70,       // Z축 깊이
            modifier: 1.5,      // 강도
            scale: 1,
            slideShadows: false,   //slide 그림자 적용 여부
        },

        watchSlidesProgress: true,

        
    
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
    });






    let tab_list = $('.biz .tab_list ul li')
    let tab_name

    tab_list.on('click', function(){
        tab_list.removeClass('active')
        tab_list.attr('aria-selected', 'false')
        tab_list.find('button em').text('')
        $(this).addClass('active')
        $(this).attr('aria-selected', 'true')
        $(this).find('button em').text('선택됨')
        tab_name = $(this).attr('aria-controls')

        $('.biz .tab_conts .tab_item').removeClass('active')
        $('.biz .tab_conts').find('#' + tab_name).addClass('active')
    })


    let line_area = $('.biz')  //해당 영역
    let line1 = $('.biz .line1')
    let line2 = $('.biz .line2')

    let win_h //브라우저 높이
    let head_h //header 높이
    
    let line1_start  //line1 시작 위치
    let line1_end  //line1 종료 위치
    let line2_start  //line2 시작 위치
    let line2_end  //line2 종료 위치
    
    let scrolling //현재 스크롤 된 값
    let line_diff  //시작 이후에 얼마나 스크롤 되었는지


    function change(){
        scrolling = $(window).scrollTop() //브라우저 스크롤 값
        win_h = $(window).height()
        head_h = $('.header_wrap').height()

        line1_start = line_area.offset().top
        line1_end = line_area.offset().top + win_h/3

        line2_start = line_area.offset().top + win_h/3 //line1 종료지점에서부터 시작
        line2_end = line_area.offset().top + win_h/2  //반띵한 높이에서  종료

        if(line1_end < scrolling){
            line1.css('transform', 'translateX(0)')
            // console.log('끝')
        }else if(line1_start > scrolling){
            // console.log('시작 전')
            line1.css('transform', 'translateX(-100%)')
        }else{
            // console.log('진행중')
            line_diff = scrolling - line1_start
        }

        if(line2_end < scrolling){
            line2.css('transform', 'translateX(0)')
            // console.log('끝')
        }else if(line2_start > scrolling){
            // console.log('시작 전')
            line2.css('transform', 'translateX(100%)')
        }else{
            // console.log('진행중')
            line_diff = scrolling - line2_start
        }   
    }

    change()  //문서가 로딩되고 단 한 번 실행
    $(window).scroll(function(){ 
        change() //스크롤 될 때마다
    })


    const biz_swiper = new Swiper('.biz .swiper', {
        slidesPerView: 1, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 12, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            501: {    /* 501px 이상일때 적용 */
                slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 12,
            },
            651: {    /* 651px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 12,
            },
        },
        loop: false,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 2500,
        //     disableOnInteraction: true,
        // },
    });



    AOS.init({
        offset: 150, // 해당 콘텐츠가 하단에서 몇 px 위로 올라와에 나타나는 효과가 나타날지 셋팅하는 값
        duration: 500, // 애니메이션 효과가 작동되는 시간
        easing: 'ease', // 가속도
    });



})