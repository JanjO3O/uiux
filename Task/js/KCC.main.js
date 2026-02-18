$(document).ready(function(){

    // $('.recruit .list ul li').on('mouseenter', function(){
    //     console.log('오버함!!')
    //     $('.recruit .list ul li').removeClass('active')
    //     $(this).addClass('active')
    // })


    // let win_w //브라우저의 넓이
    // let device_status //지금 pc인지 mobile 저장
    // let mobile_size = 1024 //1024부터 모바일

    // function device_chk(){ //함수의 선언
    //     win_w = $(window).width()
    //     // console.log(win_w)
    //     if(win_w > mobile_size){
    //         device_status = 'pc'
    //     }else{
    //         device_status = 'mobile'
    //     }
    //     console.log(device_status)
    // }
    // device_chk() //(--함수의 선언)문서가 로딩되었을 때 단 1 번 실행
    // $(window).resize(function(){ //브라우저가 리사이즈될 떄마다 1번씩 실행
    //     device_chk()
    // })

    // $('.recruit .list ul li').on('mouseenter', function(){
    //     if(device_status == 'pc'){
    //         $('.recruit .list ul li').removeClass('active')
    //         $(this).addClass('active')
    //     } //else는 없음 왜냐 pc가 아니면 아예 안할거기 때문에
    // })





    $('.recruit .list ul li').on('mouseenter', function() {
    // 윈도우 창의 너비가 1024px보다 클 때만 실행 (모바일/태블릿에서는 실행 안 됨)
    if ($(window).width() > 1024) {
        console.log('오버함!!');
        $('.recruit .list ul li').removeClass('active');
        $(this).addClass('active');
        }
    });

});//$(document)