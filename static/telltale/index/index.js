/*
* @Author: jade
* @Date:   2016-07-05 19:23:10
* @Last Modified by:   jade
* @Last Modified time: 2016-07-10 21:12:57
*/

'use strict';
(function($){
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
})(jQuery);