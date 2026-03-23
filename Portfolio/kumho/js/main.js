/****************************
 * main.js는 메인페이지에서만 구동되는 스크립트임
 ***************************/ 
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: 3000,
            disableOnInteraction: false,  //이게 false여야 마우스로 넘겼다가 떼도 swiper가 자동재생됨
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
})//$(document).ready
