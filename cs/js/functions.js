
function contact_form_validate(t) {
    var e = void 0 !== t && t.length > 0 ? t : $("#contact-valid-form");
    e.each(function() {
        var t = $(this);
        t.find(".field-validation").each(function() {
            $(this).change(function() {
                if ($(this).siblings(".alert").remove().fadeOut("slow", function() {
                    $(this).remove();
                }), "" !== $(this).val().trim()
                ) {
                    var e = contact_field_validation(t, $(this));
                    if (e.length > 0 && void 0 !== e[0].message && "" !== e[0].message && "success" !== e[0].message) {
                        var i = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> ' + e[0].message + "</div>";
                        $(this).after(i), $(this).siblings(".alert").fadeIn("slow");
                    }
                }
            })
        }), t.submit(function(e) {
            e.preventDefault(), $(this).find(".form-loader").fadeIn("slow");

            var i = $(this).attr("action");
            if (void 0 == i && "" == i)
                return !1;
            $(this).find(".alert").remove().fadeOut("fast", function() {
                $(this).remove();
            }), $(this).find(".alert-validate-form").fadeOut("fast", function() {
                $(this).empty();
            });
            var a = !1;
            return $(this).find(".field-validation").each(function() {
                var e = contact_field_validation(t, $(this));
                if (e.length > 0 && void 0 !== e[0].message && "" != e[0].message && "success" != e[0].message) {
                    var i = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> ' + e[0].message + "</div>";
                    $(this).after(i), $(this).siblings(".alert").fadeIn(), a =! 0;

                }
            }), 1 == a ? ($(this).find(".form-loader").fadeOut("fast"), !1) : ($.ajax({
                type: "POST",
                url: i,
                data: $(this).serialize(),
                dataType: "json",
                success: function(e) {
                    t.find(".form-loader").fadeOut("fast");
                    var i = "1" == e.status ? !0 : !1, a = '<div class="alert ';
                    a += 1 == i ? "success" : "error", a += '"><i class="fa fa-check-circle"></i> ' + e.text + '</div>', t.find(".alert-validate-form").html(a).fadeIn("fast", function() {
                        $(this).delay(1e4).fadeOut("fast", function() {
                           // $(this).remove();
                        });
                    }), 1 == i && t.find(".form-control").val("");
                },
                error: function() {
                    t.find(".form-loader").fadeOut("fast");
                    var e = '<div class="alert"><i class="fa fa-exclamation-triangle"></i> An error occured. Please try again later.</div>';
                    t.find(".alert-validate-form").html(e).fadeIn("fast");
                }
            }), void 0)
        })
    })
}
function contact_field_validation(t, e) {
    if (void 0 !== t && t.length > 0) {
        var i = void 0 !== e && e.length > 0 ? e : t.find(".validate"), a = new Array;
        return i.each(function() {
            var t = $(this).attr("data-validation-type"), e = $(this).hasClass("required"), i = $(this).val().trim(), n = new Array;
            n.field_object = $(this), n.message = "success", 1 != e || "" != i && null !== i && void 0 !== i || (n.message = "This field is required"), "string" == t && "" != i && null !== i && void 0 !== i ? null == i.match(/^[a-z0-9 .\-]+$/i) && (n.message = "Invalid characters found.") : "email" == t && "" != i && null !== i && void 0 !== i ? null == i.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) && (n.message = "Please enter a valid email address.") : "phone" == t && "" != i && null !== i && void 0 !== i && null == i.match(/^\(?\+?[\d\(\-\s\)]+$/) && (n.message = "Invalid characters found."), a.push(n)
        }), a
    }
}




/* 
 * ----------------------------------------------------------

 * FUNCTIONS - Page Transitions
 * ----------------------------------------------------------
 */
PageTransitions = (function() {
    
                    var isAnimating = false,
                        endCurrPage = true,
                        endNextPage = false,
                        animEndEventNames = {
                            'WebkitAnimation': 'webkitAnimationEnd',
                            'OAnimation': 'oAnimationEnd',
                            'msAnimation': 'MSAnimationEnd',
                            'animation': 'animationend'
                        },
                        animEndEventName = animEndEventNames[ Modernizr.prefixed('animation') ],
                        support = Modernizr.cssanimations;


        function init(options) {

                        $main = options.pages,
                        $pages = $main.children('section'),
                        menu = options.menu,
                        animcursor = options.animcursor,
                        nextAnimcursor = options.nextAnimcursor,
                        pageStart = getPageActiv(),
                        pageActiv = '',
                        

                        $pages.each(function () {
                            var $page = $(this);
                            if ($page.attr('class')) {
                                pageClass = $page.attr('class');
                            }
                            else {
                                pageClass = "";
                            }
                            $page.data('originalClassList', pageClass);
                        });


                        nextPage(animcursor, pageStart);
                        $(menu+' a[href="'+pageStart+'"]').addClass('active');
                        
                        navigationPage();
                        

        }
    
    
        function navigationPage() {
            
                /* --- CLICK TO PAGE TRANSACTIONS  --- */
                $(document).on("click", ".page-link", function (e) {
                    e.preventDefault();
                   
                    ahref = $(this).attr('href').split("#");
                    ahrefhash = '#'+ahref[1];
                    
                    // validate page
                    if ( ahrefhash === "#"+pageActiv.attr('id') ) {
                       return false;
                    }
                   
                   
                    animcursor = getAnimcursor(animcursor);
                    //location.hash = ahrefhash;
                    nextPage(animcursor, ahrefhash);
                    activeMenuLink( $(this) );
                       
                });
                
                /* --- CLICJ TO PAGE LINK AJAX LOADER  --- */
                $('a.ajax-loader').on("click", function(e) {
                    e.preventDefault();
                    clickToNextPage($(this));

                });
            
            
        }
        
        
        function clickToNextPage(dane) {
                var a = dane;   
                activeMenuLink(a);
                animcursor = getAnimcursor( animcursor );
                
                var wzor = /ajax-loader/;
                
                if( wzor.test(dane.attr('class')) ) {

                var $this = dane,
                $remote = $this.data('remote') || $this.attr('href');
        
                        $.ajax({
                            url: $remote,
                            cache: false,
                            context: document.body
                        })
                        .done(function (html) {

                          $section = $(html).children('section');
                          $section_content = $section.children('div.content');
                          $section_prev = $section.children('a.btn-prev');
                          
                          $($section_prev).addClass('page-link');
                          
                          $('#page-ajax').html($section_prev).append($section_content);
                          $(".loader").fadeOut(1000);
                            nextPage(animcursor, '#page-ajax');
                          })
                        .fail(function () {
                            $('#page-ajax').html('<h1 class="text-center">Error - page not found!</h1>');
                            $(".loader").fadeOut(1000);
                            nextPage(animcursor, '#page-ajax');
                        });

                } else {
                        nextPage(animcursor, a.attr('href'));
                }

        }
        
        function updateAnimcursor(animid) {
            
                animcursor = animid;
                ++animcursor;
                //return animcursor;
        }
        
        function updateNextAnimcursor(animid) {
            
                nextAnimcursor = false;
                if(animid) {
                    nextAnimcursor = true;
                }
                return nextAnimcursor;
                
        }
        
        function getAnimcursor(animcursor) {
            
                if (nextAnimcursor) {
                    ++animcursor;
                    if (animcursor > 67) {
                        animcursor = 1;
                    }
                }
                return animcursor;  
        }
        
        
        function activeMenuLink(pageId) {

                var nameClass = /page-sublink/;            
                if ( !nameClass.test(pageId.attr('class')) ) {

                     $(menu+' li a').removeClass('active');
                     $(menu+' a[href="'+pageId.attr('href')+'"]').addClass('active');
                }
        }
        
        
        function getPageActiv(page) {

               if( location.hash !== "") {
                   return location.hash;
               } 
               else if(page) {
                   return page;
               } 
               else {
                   return '#'+$("section.page-activ").attr('id');
               }
        }
        
        function validatePage(pageId) {
              
               if(document.querySelector(pageId)) {
                   
                  return true; 
               } else {
                  return false; 
               }     
        }

	function nextPage(animation,pageId) {
            
		if( isAnimating ) {
			return false;
		}

		isAnimating = true;
                
               
                if( ! validatePage(pageId) )  {
                    
                    pageId = '#error404';
                    
                }
                
		
                
		var $currPage = $(pageActiv);
		var $nextPage = $(pageId).addClass( 'section-current' ), outClass = '', inClass = '';
                
                animationClass = getClassAnimate(animation);
                
		$currPage.addClass( animationClass.out ).on( animEndEventName, function() {
			$currPage.off( animEndEventName );
			endCurrPage = true;
			if( endNextPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
                        
		} );
                
                
		$nextPage.addClass( animationClass.in ).on( animEndEventName, function() {
			$nextPage.off( animEndEventName );
			endNextPage = true;
			if( endCurrPage ) {
				onEndAnimation( $currPage, $nextPage );
			}
                        
		} );

		if( !support ) {
			onEndAnimation( $currPage, $nextPage );
		}

	}

	function onEndAnimation( $outpage, $inpage ) {
		endCurrPage = false;
		endNextPage = false;
		resetPage( $outpage, $inpage );
		isAnimating = false;
	}

	function resetPage( $outpage, $inpage ) {
            
		$outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
		$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' section-current' );
                pageActiv = $inpage; 
	}
        
        
        function getClassAnimate(idAnimation) {
            
            switch( idAnimation ) {

			case 1:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 2:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 3:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 4:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 5:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 6:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 7:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 8:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 9:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 10:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 11:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 12:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 13:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 14:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 15:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 16:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 17:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 18:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 19:
				utClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 20:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 21:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 22:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 23:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 24:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 25:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 26:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 27:
				outClass = 'pt-page-moveFromTop';
                inClass = 'pt-page-moveFromTop';
				break;
			case 28:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 29:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 30:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 31:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 32:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 33:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 34:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 35:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 36:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 37:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 38:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 39:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 40:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 41:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 42:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 43:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 44:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 45:
				outClass = 'pt-page-moveFromTop';
				inClass = 'pt-page-moveFromTop pt-page-delay180';
				break;
			case 46:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 47:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 48:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 49:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 50:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 51:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 52:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 53:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 54:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 55:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 56:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 57:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 58:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 59:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 60:
				outClass = 'pt-page-rotateSlideOut';
				inClass = 'pt-page-rotateSlideIn';
				break;
			case 61:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 62:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 63:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 64:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 65:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 66:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;
			case 67:
				outClass = 'pt-page-rotateSlideOut';
                inClass = 'pt-page-rotateSlideIn';
				break;

		}
                
                return anim = {
                    'out': outClass,
                    'in': inClass
                };
        
        } 
        


	return { init : init, updateAnimcursor: updateAnimcursor };

})();
