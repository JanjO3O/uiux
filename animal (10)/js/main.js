/***************************************************
 * main.js 는 메인페이지에서만 구동되는 스크립트 저장함
****************************************************/

$(document).ready(function(){
    $('.visual .popup_wrap .popup').slick({
        autoplay: true, //팝업 자동 실행
        autoplaySpeed: 5000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도(0.5s)
        //fade: true,  //페이드 효과 적용
        dots: true, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
    });

    
    

    $('.visual .ctrl_wrap .stop').on('click', function(){
        $('.visual .popup_wrap .popup').slick('slickPause');  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap .play').show()
    })
    $('.visual .ctrl_wrap .play').on('click', function(){
        $('.visual .popup_wrap .popup').slick('slickPlay');  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_wrap .stop').show()
    })


    /*********************************
     * tab 메뉴 구현
     * 1. li에 있는 active 클래스를 클릭한 li에만 줘야 함
     * 2. 클릭한 li만 aria-selected를 "true"로 변경 (나머지는 false)
     * 3. 선택된 li의 button에만 <em>선택됨</em> 이라고 씀
     * 4. 선택된 li의 aria-controls에 써있는 속성값을 가져다가
     *    .tab_conts의 tab_conts들 중에 id가 같은 요소에만 active 클래스를 줌
     ********************************/ 

    let tab_list = $('.find .tab_list ul li')
    let tab_name //tab_conts의 id를 불러온 tab_list

    tab_list.on('click', function(){
        tab_list.removeClass('active')
        tab_list.attr('aria-selected', 'false')
        tab_list.find('button em').text('')
        $(this).addClass('active')
        $(this).attr('aria-selected', 'true')
        $(this).find('button em').text('선택됨')
        tab_name = $(this).attr('aria-controls')
        // console.log(tab_name)
        $('.find .tab_conts .tab_item').removeClass('active')
        $('.find .tab_conts').find('#'+tab_name).addClass('active')

        $('.find .tab_conts .tab_item.active .tab_conts_list').slick('setPosition')
    })


    $('.find .tab_conts .animal .tab_conts_list').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
                breakpoint: 1281, //1280px 이하
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 901, //900 이하
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769, //768 이하
                settings: {
                    variableWidth: true, //넓이를 자유롭게 설정 -> css에서 준 width: 240px; 모바일 사이즈가 여기서부터 적용됨
                }
            },
        ]
    });
    $('.find .tab_conts .people .tab_conts_list').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: true,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
                breakpoint: 1281, //1280px 이하
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 901, //900 이하
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 769, //768 이하
                settings: {
                    variableWidth: true, //넓이를 자유롭게 설정 -> css에서 준 width: 240px; 모바일 사이즈가 여기서부터 적용됨
                }
            },
        ]
    });


    /***********************************
     * message는 높이가 높고 그 안에 inner가 sticky로 고정으로 있음
     * message가 스크롤 되는 동안 p strong span 태그가 넓이가 넓어지면서 색상 바뀜
     **********************************/ 

    let color_obj = $('.message p strong')  // 얘는 strong, span 두개 다 포함
    let color_area = $('.message')
    let color_resizer = 'span'
    let color_line = color_obj.length //몇줄인지
    let color_w //넓이
    let color_header  //header의 높이
    let color_win_h  //브라우저의 높이

    let color_start  //색상을 변경하기 시작하는 위치
    let color_end  //색상 변경이 종료되는 위치
    let color_total  //색상 변경 전체 길이
    let color_diff  //색상이 변경되기 시작한 이후에 얼마나 스크롤 되었는지
    let color_count  //몇 줄 완성하는지

    let scrolling  //현재 스크롤 된 값

    // ▽ 3번째 strong의 span 태그의 넓이를 50% ▽
    // color_obj.eq(2).find(color_resizer).width('50%') //eq는 카운트를 0부터 시작함

    function color_change(){
        scrolling = $(window).scrollTop()  //브라우저가 스크롤 되는 값
        color_win_h = $(window).height()
        color_header = $('.header').height()
        
        // color_start = color_area.offset().top  //--> header와 상관없이 .message가 브라우저의 상단의 딱 맞닿는 지점에서부터 색 변경 시작됨
        // color_end = color_area.offset().top + color_area.height()

        // color_obj.eq(2).find(color_resizer).width('50%')
        // //-->3번째 strong의 span 넓이 50% -eq는 nth-child 와 같은 기능인데, 0부터 시작함


        color_start = color_area.offset().top - color_win_h/2  // 색 변경 시작 = .message한테 document의 top의 0 값에서부터(=즉, 메세지가 브라우저의 상단의 딱 맞닿는 지점에서) - 브라우저의 높이의 반띵 한 지점에서부터 색 변경 시작
        color_end = color_area.offset().top + color_area.height() - color_win_h/2


        if(color_end < scrolling){
            console.log('끝')
            color_obj.find(color_resizer).width('100%')
        }else if(color_start > scrolling){
            console.log('시작전')
            color_obj.find(color_resizer).width('0')
        }else{
            console.log('진행중')
            color_total = color_end - color_start
            color_diff = scrolling - color_start
            color_count = color_diff / color_total * 100
            console.log(color_count)
            for(i=0; i<color_line; i++){
                color_w = (color_count - (100/color_line) * i) * color_line
                if(color_w > 100){
                    color_w = 100
                }
                color_obj.eq(i).find(color_resizer).width(color_w + '%')
            }
        //     color_obj.each(function(index){

        //     if(index < Math.floor(color_count)){
        //         // 이미 완료된 줄
        //         $(this).find(color_resizer).width('100%')

        //     }else if(index === Math.floor(color_count)){
        //         // 현재 진행중인 줄
        //         let percent = (color_count - Math.floor(color_count)) * 100
        //         $(this).find(color_resizer).width(percent + '%')

        //     }else{
        //         // 아직 시작 안한 줄
        //         $(this).find(color_resizer).width('0')
        //     }

        // })
            
        }
    }
    
    color_change()  //문서가 로딩되고 단 1번 실행
    $(window).scroll(function(){ 
        color_change()  //스크롤될 때마다 실행
    })



    /* adopt slick */ 
    $('.adopt .list_wrap .list').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        infinite: true, //무한반복
        variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 6, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
                breakpoint: 769, //768px 이하
                settings: {
                    centerMode: false,
                }
            },
        ]
    });


    // review slick

    $('.review .list_wrap .list').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스호버시 일시정지
        //infinite: false, //무한반복
        //variableWidth: true, //넓이를 자유롭게 설정
        slidesToShow: 4, //한번에 보일 팝업 수
        //slidesToScroll: 1, //한번 드래그에 움직이는 슬라이드 제한
        swipeToSlide: true, //드래그한만큼 슬라이드 움직이기
        //centerMode: true, //가운데정렬(가운데가 1번)
        responsive: [
            {
            breakpoint: 1300, //1300px 이하
            settings: {
                slidesToShow: 4
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 375,
            settings: {
                slidesToShow: 1
            }
            },
        ]
    });

})//$(document)