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
    $('.header .gnb .gnb_bg').on('mouseenter', function(){
        if(device_status == 'pc'){
            $('.header').removeClass('menu_over')
        }
    })
    $('.header .util .search .search_open').on('focusin', function(){
        if(device_status == 'pc'){ 
            $('.header').removeClass('menu_over')
        }
    })


}) //$(document).ready