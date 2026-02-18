$(document).ready(function(){

    $('.recruit .list ul li').on('mouseenter', function(){
        console.log('오버함!!')
        $('.recruit .list ul li').removeClass('active')
        $(this).addClass('active')
    })



    
    // function recruitActive(){

    //     let winWidth = $(window).width(window > 1025);

    //     // 기존 이벤트 제거 (중복 방지)
    //     $(".recruit .list ul li").off("click");

    //     if(winWidth > 1025){

    //         $(".recruit .list ul li").on("click", function(){

    //             $(".recruit .list ul li").removeClass("active");
    //             $(this).addClass("active");

    //         });

    //     }

    // }

    // // 처음 실행
    // recruitActive();

    // // 리사이즈 시 다시 체크
    // $(window).on("resize", function(){
    //     recruitActive();
    // });


});//$(document)