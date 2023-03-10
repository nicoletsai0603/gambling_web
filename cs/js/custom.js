
(function($) {
 "use strict";

 $(window).load(function() {
             
    /*==========================================
       PRELOADER & PAGE TRANSITIONS (requires: functions.js)
    =====================================================*/
        var configPageTransitions = {
            pages: $('.page-wrapper'),
            menu: 'ul.menu',
            animcursor: 40, // 1 - 60
            nextAnimcursor: true  // true, false
        };

        $(".preloader").delay().fadeOut("200", function () {

            $("nav").addClass('activ'); // active menu
            
            var myTimer = setTimeout(function () {
                
                    PageTransitions.init(configPageTransitions);
                    clearTimeout(myTimer);
                    
            }, 700); 
            
        
        });
        
        
    /*==========================================
       MASONRY (requires: masonry.pkgd.min.js)
    =====================================================*/

    var containerBlog = document.querySelector('.blog-masonry');
    if (containerBlog) {

        var blogMasonry = new Masonry(containerBlog, {
            itemSelector: '.item',
            columnWidth: containerBlog.querySelector('.item-sizer')
        });

    }
    
           
}); // end window load    

$(document).ready(function() {

 
    /*==========================================
       LOAD FULL SCREEN BG (requires: backstretch.min.js)
    =====================================================*/




    /*==========================================
       TEXT ROTATOR (requires: owl-carousel.min.js)
     =====================================================*/

    $('.rotate-text').owlCarousel({
        loop:true,
        dots: false,
        nav: false,
        margin: 0,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        animateOut: 'fadeIn',
        animateIn: 'fadeIn'
    });
      
 
    /*==========================================
       PORTFOLIO HOVERDIR (requires: jquery.hoverdir.js)
     =====================================================*/

    $('.portfolio-colum > figure').each(function () {
        $(this).hoverdir({
            hoverDelay: 75
        });
    });
   
    
    /*==========================================
       CONTACT FORM VALID (requires: functions.js)
     =====================================================*/
    contact_form_validate();
    
    
    /*==========================================
       TOOLTIP (requires: bootstrap.min.js)
    =====================================================*/
    $("body").tooltip({selector: '[data-toggle=tooltip]'});
    

});

    
})(jQuery);
