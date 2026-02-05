$(document).ready(function(){

    /******************************
     * header에 fixed 클래스를 줬다/뺐다
     * 브라우저 scroll값이 0보다 크면
     * --로딩되었을 때=처음, 스크롤되었을 때 모두 체크
     * ==> 아래로 스크롤중이면 header에 hide 클래스 추가됨
     * ==> 위로 스크롤되면 hide 클래스가 삭제됨
     * ----> 이전 스크롤값 - 현재 스크롤값
     *       0보다 작으면, 아래로 내려가는 중
     *       0보다 크면, 위로 올라가는 중
     ******************************/ 

    let scrolling //현재 스크롤된 값  /* let -> 변수를 의미함 */
    let prev_scroll = 0 //이전에 스크롤한 값
    let move_scroll //얼마나 스크롤 되었는지 변화값
    function header_fixed(){ //함수의 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling, prev_scroll, prev_scroll-scrolling)  /* console.log -> 브라우저의 console 창에 뜨는 상태값 */ 
        if(scrolling > 0){ //만약에 스크롤 값이 0보다 크면 (1이상)
            $('.header').addClass('fixed')
            move_scroll = prev_scroll - scrolling
            if(move_scroll > 0){
                $('.header').removeClass('hide')
            }else{
                $('.header').addClass('hide')
            }
            
        }else{ //0과 같거나 0보다 작으면
            $('.header').removeClass('fixed')
        }
        prev_scroll = scrolling //이전 스크롤 값에 현재 스크롤 값을 계산 끝나고 줌
    }


    header_fixed()//함수의 실행 (html이 로딩된 이후에 단 한 번만 실행)
    $(window).scroll(function(){ //브라우저가 스크롤될 때마다 1번 실행
        header_fixed() //함수의 실행
    })



    /*************************************
     * tour에 li에 마우스를 올리면 마우스를 올린 li에만 active 클래스 추가
     * 1. 무조건 하나의 li에는 active가 있는 상태 (맨 처음에는 html에 active가 써있음)
     * 2. 이전에 오버했던 li의 active 클래스를 빼고 오버한 li에만 active 클래스 추가
     *************************************/

    $('.tour .list ul li').on('mouseenter', function(){
        console.log('오버했니??')
        $('.tour .list ul li').removeClass('active')
        $(this).addClass('active')
    })

})//$(document).ready