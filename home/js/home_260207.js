$(document).ready(function(){


    /***************************** 
    * 브라우저 scroll값이 0보다 크면 header에 fixed 클래스를 줬다/뺐다
    * -- 로딩됐을 때(=처음), 스크롤 됐을 때 모두 체크
    * ==> 아래로 스크롤 중이면 header 에 hide 클래스 추가됨
    * ==> 위로 스크롤 되면 hide 클래스가 삭제
    * ----> 이전 스크롤값 - 현재 스크롤값
    *       0보다 작으면 아래로 내려가는 중
    *       0보다 크면 위로 올라가는 중
    *****************************/ 

    let scrolling  //현재 스크롤 된 값
    let prew_scroll = 0 //이전에 스크롤한 값
    let move_scroll //얼마나 스크롤 되었는지 변화값
    function header_fixed(){  //함수의 선언
        scrolling = $(window).scrollTop()
        console.log(scrolling, prew_scroll, prew_scroll-scrolling)
        if(scrolling > 0){ //만약에 스크롤 값이 0보다 크면
            $('.header').addClass('fixed')
            move_scroll = prew_scroll - scrolling
            if(move_scroll > 0){
                $('.header').removeClass('hide')
            }else{
                $('.header').addClass('hide')
            }
        }else{ //0과 같거나 0보다 작으면
            $('.header').removeClass('fixed')
        }
        prew_scroll = scrolling //이전 스클로 값에 현재 스크롤 값을 계산 끝나고 줌
    }


    header_fixed() //gkatndml tlfgod (html이 로딩된 이후 단 한 번만 실행)
    $(window).scroll(function(){ //브라우저가 스크롤 될 떄마다 1번 실행
        header_fixed() //함수의 실행
    })
    
})//$(document).ready