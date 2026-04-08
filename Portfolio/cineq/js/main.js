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
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        speed: 2000,
        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 0,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,  //coverflow 효과로 간격조절 할거라서 0 준거임
            },
        },
        centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        
        effect: 'coverflow',  // css - perspective 속성과 같이 쓰이는 3D 입체 효과를 위한 속성값
        grabCursor: true,
        coverflowEffect: {
            rotate: 10,       // 좌우 회전 각도
            stretch: 0,     // 슬라이드 간격 (겹침 느낌)
            depth: 0,       // Z축 깊이
            modifier: 1,      // 강도
            scale: 1.005,
            slideShadows: false,   //slide 그림자 적용 여부
        },

        watchSlidesProgress: true,

        on: {
            // progress: function () {
            //     this.slides.forEach((slide) => {
            //         let progress = slide.progress;

            //         // 여기서 커스텀 시작
            //         let angle = progress * Math.PI / 5000000; // 각도 범위 조절 --> 값 크면 더 크게 휘어짐 / 작으면 완만한 곡선
            //         let radius = 400; // 원 반지름 --> 크면 완만한 곡선 / 작으면 급격한 곡선

            //         // 원형 좌표 계산
            //         let x = radius * Math.sin(angle);
            //         let y = radius * (1 - Math.cos(angle)); // 아래쪽 기준으로 보정


            //         // let x = progress * 280; // 좌우 이동
            //         // let y = -Math.pow(progress, 2) * 120; // 위로 올라가는 곡선
            //         let scale = 1 - Math.pow(Math.abs(progress), 1.2) * 4;  //끝으로 갈수록 더 자연스럽게 줄어듦
            //         let rotateY = progress * 0;
            //         // let rotate = progress * 50;
            //         let zIndex = 100 - Math.abs(progress) * 10;
            //         let opacity = 1 - Math.abs(progress) * 0; /* 마지막 숫자 값이 0.5면 좌우에 0.5씩 이미지가 투명해짐 */
            //         let blur = Math.abs(progress) * 0.5;

            //         slide.style.transform = `
            //             translateX(${x}px)
            //             translateY(${y}px)
            //             scale(${scale})
            //             rotateY(${rotateY}deg)
            //         `;
            //         slide.style.zIndex = zIndex;
            //         slide.style.opacity = opacity;
            //         slide.style.filter = `blur(${blur}px)`;
            //     });
            // },
            // setTransition: function (duration) {
            //     this.slides.forEach((slide) => {
            //         slide.style.transition = duration + 'ms';
            //     });
            // },
        },
    
	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	
});

})