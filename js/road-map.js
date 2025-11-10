(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_road_map.default', function(){
	       
	        /* Add your code here */
	      	$('.ova-invisible').each(function() {
	      		var that = $(this);

	      		if ( $(window).width() <= 1024 ) {
	      			that.removeClass('ova-invisible')
	      		} else {
	      			that.appear(function(){
		   				var data_animation = that.data('animation');

		   				if ( data_animation ) {
		   					var animation 	= data_animation['animation'];
		   					var duration 	= data_animation['duration'];
		   					var delay 		= data_animation['delay'] ? data_animation['delay'] : 0;

		   					setTimeout(function () {
		   						that.removeClass('ova-invisible').addClass('animated').addClass(animation);
		   						if ( duration ) {
		   							that.addClass(  'animated-' + duration );
		   						}
						    }, delay);
		   				}
		   			});
	      		}
	      	});
        });


   });

})(jQuery);
