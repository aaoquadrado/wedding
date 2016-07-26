(function($) {
	"use strict";

	$(document).ready(function() {


		var encrypted = {iv:'b0mS5M66f0BoRsXMxgaf3w==',v:1,iter:1000,ks:128,ts:64,mode:'ccm',adata:'',cipher:'aes',salt:'HEia7ilXvGg=',ct:'YBfIo19GW85vmIsPI5JC5Msxaf2SUKHrlytO4igAIIau8umsyIBMyhzkhNrkbPWKRRbRY4hJo7cejc4gxMtKKz6dr0apOCM9f/fZ882JttJUs+5yTh2d'};
		encrypted = JSON.stringify(encrypted);

		// ====================================================================

		// Navbar position

		$(window).scroll(function(){
			if ($(this).scrollTop() > $(window).height()) {
				$('.navbar').addClass('fixed');
				$('body').css('padding-top', '97px');
			} else {
				$('.navbar').removeClass('fixed');
				$('body').css('padding-top', '0');
			}
		});
		
		// ====================================================================

		// Smooth Scroll on Menu Click

		$('.navbar a[href^=#]').on("click",function(){
			var t= $(this.hash);
			var t=t.length&&t||$('[name='+this.hash.slice(1)+']');
			if(t.length){
				var tOffset=(t.offset().top - 90);
				$('html,body').animate({scrollTop:tOffset},'slow');
				return false;
			}
		});

		// ====================================================================

		// Superslides

		$('#pass').keyup(function(a){
			var pass = $('#pass').val();
			try {
				var decrypted = sjcl.decrypt(pass, encrypted);
				var array = decrypted.split('-');
				var first = array[0];
				var second = array[1];
				$('#passContainer').remove();
				$('#header2').remove();
				document.getElementById("header").innerHTML = "Obrigado pela vossa presença!";
				document.getElementById("foto").innerHTML = "Fotos Fotógrafo: <a href='" + first + "' target='_blank'>" + first + "</a>";
				document.getElementById("photo").innerHTML = "Fotos Photobooth: <a href='" + second + "' target='_blank'>" + second + "</a>";

			}catch (e){
				console.error(e);
			}
		});

		$('#slides').superslides({
			play: false,
			animation_speed: 2000,
			animation: 'fade',
			pagination: false
		});

		// ====================================================================

		// Countdown
		
		//var weddingDate = new Date();
		//var weddingDate = new Date(weddingDate.getFullYear() + 1, 1 - 1, 1);
		var weddingDate = new Date("June 10, 2016 15:00:00")
		$(".countdown").countdown({
			until: weddingDate,
			format: 'ODHMS'
		});

		// ====================================================================

		// Owl Carousel

		$("#registry .owl-carousel").owlCarousel({
			items: 6,
			itemsDesktop: [1199,5],
			itemsDesktopSmall: [991,4],
			itemsTablet: [767,3],
			slideSpeed: 800
		});

		// ====================================================================

		// Parallax

		$('.parallax').scrolly({bgParallax: true});

		// ====================================================================

		// Fun Facts Counter

		var flag = 0;

	    $(window).scroll(function() {
	        if (flag == 1){
	           return false;
	        }
	        else{
	           var bh = $(window).height();
	           var st = $(window).scrollTop();
	           var el = $('.timer');
	           var eh = el.height();
	           if ( st >= (100 + eh) - bh ) {
	               el.countTo({
	                   speed: 2000,
	                   refreshInterval: 20
	               });
	           }
	           flag = 1;
	        }
	    });

		// ====================================================================

		// Fancybox

		$('.fancybox').fancybox({
			openEffect: 'none'
		});

		// ====================================================================

		// Scroll Reveal

		if ($(window).width() > 767) {

			// The starting defaults.
			var config = {
				after: '0s',
				enter: 'top',
				move: '50px',
				over: '0.66s',
				easing: 'ease-in-out',
				viewportFactor: 0.33,
				reset: false,
				init: true
			};

			window.scrollReveal = new scrollReveal({reset: true});
		}

	})

})(jQuery);
