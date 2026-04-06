$(document).ready(function(){
    
    let lang_wrap = $('.header_wrap .header_banner .lang_wrap')
    let lang_list = $('.header_wrap .header_banner .lang_wrap .lang_list')
    let header_action = $('.header_wrap .header_banner .header_action')

    $(lang_wrap).on('click focusin', function(e){
        e.stopPropagation()
        $(this).addClass('open')
        $(this).find(lang_list).show()
    })
    $(lang_list).find('li > a').on('click', function(e){
        e.stopPropagation()
        lang_wrap.removeClass('open')
        lang_list.hide()
    })
    $(header_action).on('focusin', function(){
        lang_wrap.closest('open')
        lang_list.hide()
    })



    

    $('.header_wrap .header_bot .gnb ul.depth1 > li').on('mouseenter ', function(){
        $('.header_wrap .header_bot .gnb ul.depth1 > li').removeClass('over')
        $(this).addClass('over')
        $('.header_wrap .header_bot .gnb ul.depth1 > li > ul.depth2').hide()
        $(this).find('ul.depth2').show()
        $('.header_wrap .header_bot .gnb .depth2_bg').slideDown()
        $('.header_wrap .header_bot .gnb .depth2_bg .Q_logo').show()
    })
    $('.header_wrap .header_bot .gnb').on('mouseleave ', function(){
        $('.header_wrap .header_bot .gnb ul.depth1 > li').removeClass('over')
        $('.header_wrap .header_bot .gnb ul.depth1 > li > ul.depth2').hide()
        $('.header_wrap .header_bot .gnb .depth2_bg').slideUp()
        $('.header_wrap .header_bot .gnb .depth2_bg .Q_logo').hide()
    })
    
    
})