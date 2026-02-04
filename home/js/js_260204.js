$(document).ready(function(){

    $('.tour .list ul li').on('mouseenter', function(){
        $('.tour .list ul li').removeClass('active')
        $(this).addClass('active')
    })

    $('.culture .list ul li').on('mouseenter', function(){
        console.log('오버함')
        $('.culture .list ul li').removeClass('active')  //-->removeClass를 먼저 줘서 모든 li의 active 클래스를 삭제하고
        $(this).addClass('active') //-->this로 하나의 li에만 active 클래스를 줌
        
    })
})//$(document).ready
console.log('완료')
