$(document).ready(function(){
    
    let device_status //브라우저 상태 -> pc인지 모바일인지
    let mobile_size = 768 //모바일 사이즈
    let window_w  //브라우저 넓이

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mo'
        }
        console.log(device_status)
    }
    device_chk()  //문서 로딩되고 단 한 번 실행
    $(window).resize(function(){  //리사이즈 될 때마다 실행
        device_chk()
    })

    let gnb = $('.header .gnb')
    let gnb_open = $('.header .gnb .gnb_open')
    let gnb_close = $('.header .gnb .gnb_wrap .gnb_close')
    let gnb_wrap = $('.header .gnb.open .gnb_wrap')

    gnb_open.on('click focusin', function(){
        gnb.addClass('open')
    })
    gnb_close.on('click focusin', function(){
        gnb.removeClass('open')
    })

})