/*
* @Author: jade
* @Date:   2016-07-05 19:23:10
* @Last Modified by:   jade
* @Last Modified time: 2016-07-17 01:24:53
*/

'use strict';
(function($){
    var inited = false;
    $("img.lazy").lazyload({
        event : "sporty"
    });
    $(window).bind("load", function() {
        !inited && $("img.lazy").trigger("sporty");
        
        inited = true;
    });
    setTimeout(function() {
        !inited && $("img.lazy").trigger("sporty");
        inited = true;
    }, 5000)
    var winW = $(window).width();
    var winH = $(window).height();
    if(winW < 1200) {
        winW = 1200;
    }
    $('.page1').css({
        height: $(window).height() - 49
    })
    $(document).ready(function () {
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            keyboardControl: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        });
    });
    $('.free-btn').click(function() {
        $('.mask, .dialog').show();
    });
    $('.dialog .close').click(function() {
        $('.mask, .dialog').hide();
    });
    $('.dialog .btn').click(function() {
        var email = $.trim($('.dialog input[name="email"]').val())
        if(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(email)) {
            alert('success')
            $('.mask, .dialog').hide();
        }
    })

    //出来p3_1
    var p3_1W = winW * 313/1200;
    var p3_1H = winW * 185/1200;
    $('.p3_1').css({
        width: p3_1W,
        height: p3_1H,
        'margin-left': -p3_1W/2 + 2,
        'margin-top': -p3_1H/2
    });
    $('.p3_2').css({
        'margin-top': p3_1H * 0.6
    });
    var p3_1_1W = winW - 600
    $('.bg.p3_1_1_bg').css({
        width: p3_1_1W,
        height: p3_1_1W
    });
    $('.p3_3_text').css({
        'padding-top': (p3_1_1W - 490)/2
    })

})(jQuery);