
$( document ).ready(function( $ ) {
	
		$( '#silderbox' ).sliderPro({
            width:'100%',
            height: 840 ,
			autoHeight: true,
			touchSwipe:false,
			slideDistance:0
		});
		$( '#silderbox2' ).sliderPro({
            width:'100%',
            height: 450 ,
            autoHeight: true,
            touchSwipe:false,
			slideDistance:0
		});
		$( '#silderbox3' ).sliderPro({
            width:'100%',
            height: 'auto' ,
			autoHeight: true,
			touchSwipe:true,
			arrows: true,
			buttons: true,
			slideDistance:0
		});

		//tab
		$("#idTabs > ul ").idTabs();

		//Q&A

		// 幫 #qaContent 的 ul 子元素加上 .accordionPart
		// 接著再找出 li 中的第一個 div 子元素加上 .qa_title
		// 並幫其加上 hover 及 click 事件
		// 同時把兄弟元素加上 .qa_content 並隱藏起來
		$('.qabox ol').addClass('accordionPart').find('li div:nth-child(1)').hover(function(){
			$(this).addClass('qa_title_on');
		}, function(){
			$(this).removeClass('qa_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它，同時隱藏其它已經展開的項目
			// 反之則隱藏
			var $qa_content = $(this).next('div.qa_content');
			if(!$qa_content.is(':visible')){
				$('.qabox ol li div.qa_content:visible').slideUp();$('this >li').removeClass('activeon');				
				$('.qabox ol li:visible').removeClass('activeon');
				$('.qabox ol li strong.number').show();
			}
			$qa_content.slideToggle();
			$qa_content.parent().addClass('activeon');
			//$(this).addClass('activeon');


		}).siblings().addClass('qa_content').hide();
		$('.qabox ol').find('li > strong').removeClass('qa_content').css('display','inline-block');

		new Vue({
	  		el: '#example',	  		
	  		data: {
    			slides: 5
  			},
 		 	components: {
    			'carousel-3d': Carousel3d.Carousel3d,
    			'slide': Carousel3d.Slide
  			}
		});	
		
		$('.lightbox').hide();
		$('.Banner').click(function(event) {
			/* Act on the event */
			$('.lightbox').hide();
			$(this).prev().show();
			$(this).parent('.layout').addClass('active');
		});
		$('.lightbox div').click(function(){
			$('.lightbox').hide();
			$('.lightbox').parent('.layout').removeClass('active');
		})
		$('.menulist li a').click(function() {
			/* Act on the event */
			$('#menubox').removeClass('active');
		});

		//選單滑動
		$('a[href=#silderbox]').click(function() {
            $('html,body').animate({
            	scrollTop:$('#silderbox').offset().top
            }, "show");
            return false;
        });
        $('a[href=#iconbox]').click(function() {
            $('html,body').animate({
            	scrollTop:$('#iconbox').offset().top
            }, "show");
            return false;
        });
        $('a[href=#solidbox]').click(function() {
            $('html,body').animate({
            	scrollTop:$('#solidbox').offset().top
            }, "show");
            return false;
        });
        $('a[href=#cardbox]').click(function() {
            $('html,body').animate({
            	scrollTop:$('#cardbox').offset().top
            }, "show");
            return false;
        });
        $('a[href=#QandA]').click(function() {
            $('html,body').animate({
            	scrollTop:$('#QandA').offset().top
            }, "show");
            return false;
        });



	//圖片高度開合
/*
		GETHIGHT();
		//選單的卷軸高度
		function GETHIGHT(){				
			var I=$('.allBanner > img').height();
			var H=I/2 +'px';			
			$('.allBanner').css('height',H);
		}
		
		function allBannerHEIGHT(){
			$('.allBanner').css('height',100+ '%');
		}

		$('.showBun').click(function() {
			$(this).parent().toggleClass('active');	
			if($(this).parent().hasClass('active')){
				allBannerHEIGHT();
			}else{
				GETHIGHT();
			}
		});
*/

	});	
