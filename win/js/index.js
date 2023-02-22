 var swiper = new Swiper('.section-box1-slide .swiper-container', {
     effect: 'fade',
     pagination: '.swiper-pagination',
     autoplay: 3000,
     paginationClickable: true,
     loop: true
 });

 var swiper = new Swiper('.swiper-container2', {
     slidesPerView: 10,
     loop: false,
     nextButton: '.swiper-button-next',
     prevButton: '.swiper-button-prev',
     // init: false,


     breakpoints: {
         1300: {
             slidesPerView: 9,
         },
         1200: {
             slidesPerView: 8,
         },
         1100: {
             slidesPerView: 6,
         },
         1024: {
             slidesPerView: 4,
         },
         768: {
             slidesPerView: 3,
         },
         640: {
             slidesPerView: 2,
         },
         400: {
             slidesPerView: 1,
         }
     }
 });

 function noticeUp(obj, top, time) {
     $(obj).animate({
         marginTop: top
     }, time, function() {
         $(this).css({ marginTop: "0" }).find(":first").appendTo(this);
     })
 }
 $(function() {
     // 调用 公告滚动函数
     setInterval("noticeUp('.notice ul','-35px',500)", 3000);
 });
 $(function() {



     //tab 切换
     $(".J-nav-tab").each(function() {
         var tthis = $(this)
         $(this).find("a").click(function() {
             var $this = $(this);
             var $obj = $this.attr("href");
             tthis.find("a").removeClass("on")
             $this.addClass("on");
             $($obj).show().siblings().hide()
             return false;
         })
     })




     $(".loginbtn-click").click(function() {
         $(".login-form").toggle()
     })

     $(".btn-menu").click(function() {
         $(".nav-bar").toggleClass("on")
         $("#greybg").toggle();
     })




     $(".gototop").click(function() {
         $('html,body').animate({
             scrollTop: 0
         })
     })


     $(document).on("click", "#greybg", function() {
         hideMenu();
     })


 })

 function showMenu() {
     $(".pop-lottery-box").show()
     $("#greybg").fadeIn();
 }

 function hideMenu() {
     $(".pop-lottery-box").hide()
     $(".nav-bar").toggleClass("on")
     $("#greybg").fadeOut();
 }
 $(window).scroll(function() {
     var winWidth = $(window).width(),
         topWindow = $(window).scrollTop();
     if (topWindow > 0 && winWidth > 1024) {
         $('.fix-top').addClass("whit-alpha");
         $('.nav-bar').addClass("small-height");
         $('.header').addClass("pa10");
         $('.banner-ma-151').addClass("hei");
         $('.logo').stop(true, true).addClass("logo-few").animate({ 'height': '35px' }, { duration: 50, queue: false });

     } else {
         $('.fix-top').removeClass("whit-alpha");
         $('.nav-bar').removeClass("small-height");
         $('.header').removeClass("pa10");
         $('.banner-ma-151').removeClass("hei");
         $('.logo').stop(true, true).removeClass("logo-few").animate({ 'height': '64px' }, { duration: 50, queue: false });
     }

 });


 $('.fastbet.bet_now.pc').load(function() {
     $(document).ready(function() {
         var $iframe = $(this),
             $contents = $iframe.contents();
         var winWidth = $(window).width();
         if (winWidth < 1300) {
             $contents.find('.betnow .caibox-content ').addClass("pa-50");
             $contents.find('.betnow .caiboxs ').addClass("overflow-auto");
         } else {
             $contents.find('.betnow .caibox-content ').removeClass("pa-50");
             $contents.find('.betnow .caiboxs ').removeClass("overflow-auto");
         }
         $(window).resize(function() {
             var winWidth = $(window).width();
             if (winWidth < 1300) {
                 $contents.find('.betnow .caibox-content ').addClass("pa-50");
                 $contents.find('.betnow .caiboxs ').addClass("overflow-auto");
             } else {
                 $contents.find('.betnow .caibox-content ').removeClass("pa-50");
                 $contents.find('.betnow .caiboxs ').removeClass("overflow-auto");
             }
         });
     });
 });

//  setInterval(function(){ 
// 	window.location.reload();
// }, 3000);
