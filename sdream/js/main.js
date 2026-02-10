$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, //=> 팝업이 돌아가는 시간 -- 5s
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//.visual .swiper


    // /**********************************
    //  * header에 마우스를 올리면(오버하면) over 클래스를 추가
    //  * header에 마우스를 내리면(아웃하면) over 클래스를 삭제
    //  * 브라우저의 스크롤을 내리면 header에 fixed 클래스를 추가
    //  * 브라우저를 다시 맨위로 스크롤하면 fixed 클래스를 삭제
    //  * / 
     
    $('.header').on('mouseenter', function(){
        // console.log('마우스 올렸다!!!')
        $(this).addClass('over')
    })
    $('.header').on('mouseleave', function(){
        // console.log('마우스를 올렸다 내렸다!!!!')
        $(this).removeClass('over')
    })

    let scrolling //브라우저가 스크롤 된 값
    let prev_scroll = 0 //이전에 스크롤한 값
    let move_scroll //얼마나 스크롤 되었는지 변화값


    function header_fixed(){  //함수의 정의
        scrolling = $(window).scrollTop()
        console.log(scrolling, prev_scroll, prev_scroll-scrolling)
        if(scrolling > 0){
            //console.log('0보다 크다')
            $('.header').addClass('fixed')
            move_scroll = prev_scroll - scrolling
            if(move_scroll > 0){
                $('.header').removeClass('hide')
            }else{
                $('header').addClass('hide')
            }
        }else{
            //console.log('0이거나 0보다 작다')
            $('.header').removeClass('fixed')
        }
        prev_scroll = scrolling
    } 
    // 맨 처음 html이 로딩된 이후 단 한 번 실행!!
    header_fixed()
    $(window).scroll(function(){ //브라우저가 스크롤 될 때마다 실행
        header_fixed() 
    })


    /******************************************************
     * 웹진 swiper
     *****************************************************/ 

    const webzin_swiper = new Swiper('.webzin .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            768: {    /* 768px 이상일때 적용 */
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

})//$(document)