/*
* @Author: jade
* @Date:   2016-07-05 19:23:10
* @Last Modified by:   jade
* @Last Modified time: 2016-07-12 23:27:55
*/

'use strict';
(function($){
    var winW = $(window).width();
    var winH = $(window).height();
    $('.page1').css({
        height: $(window).height() - 78
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

    var p3_1W = winW * 0.26;
    var p3_1H = winW * 0.26/1.68;
    $('.p3_1').css({
        width: p3_1W,
        height: p3_1H,
        'margin-left': -p3_1W/2,
        'margin-top': -p3_1H/2
    });
    $('.p3_2').css({
        'margin-top': p3_1H * 0.6
    })
})(jQuery);