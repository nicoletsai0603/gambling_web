new WOW().init();

$(window).load(function() {
    $("#bacc").fadeOut(1000);
})


var wid = $(window).width();
        $('.hamburger').click(function() {
            $('#mobile_nav').stop().css({ 'display': 'blcok' });
            $(this).toggleClass('is-active');
            if ($(this).hasClass('is-active')) {
                $('#mobile_menu_labIcon').addClass("absolute-right");
                $('#mobile_nav').addClass("slideright");
                $('nav').addClass("slideLeft");
                $('.mo_logo').addClass("none");
                $('.mo_flex').addClass("relative");

            } else {
                $('#mobile_menu_labIcon').removeClass("absolute-right");
                $('#mobile_nav').removeClass("slideright");
                $('nav').removeClass("slideLeft");
                $('.mo_logo').removeClass("none");
                $('.mo_flex').removeClass("relative");
            }
        });
        if (wid < 992) {

            $('nav .navi-scroll .navi-col ul.menu li.html a').click(function() {
                $('#mobile_nav').removeClass("slideright");
                $('#mobile_menu_labIcon').removeClass("absolute-right");
                $('nav').removeClass("slideLeft");
                $('.mo_logo').removeClass("none");
                $('.mo_flex').removeClass("relative");
                $('.hamburger').stop().removeClass('is-active');
            });
        }
