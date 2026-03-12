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


})//$(document)