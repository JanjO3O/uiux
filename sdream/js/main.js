$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */

        autoplay: {  /* 팝업 자동 실행 */
            delay: 5000, //=> 팝업이 돌아가는 시간 -- 5s
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });//.visual .swiper

})//$(document)