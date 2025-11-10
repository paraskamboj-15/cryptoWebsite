(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_progress.default', function(){
	       
	        $('.ova-percent').appear(function(){
   				var that 		= $(this);
   				var percent 	= that.data('percent');
   				var percentage 	= that.closest('.ova-percent-view').find('.percentage')

   				that.animate({
			        width: percent + "%"
			        },1000, function() {
			        	var show_percent = percentage.data('show-percent');
			        	if ( show_percent == 'yes' ) {
			        		percentage.show();
			        		percentage.css('left', (percent - 5) + '%');
			        	}
			        }
		        );
   			});

   			// Version 2
   			$('.ova-percent-v2').appear(function(){
   				var that 		= $(this);
   				var percent 	= that.data('percent');
   				var data_point 	= that.closest('.ova-pervent-view-v2').find('.percent-point');
   				var show_point 	= data_point.data('point');
   				var point 		= data_point.find('.point');

   				that.animate({
			        width: percent + "%"
			        },990, function() {}
		        );

   				if ( show_point == 'yes' ) {
   					data_point.css('width', percent + '%');
   					point.show();
   					point.animate({
				        right: -1,
				        },1000, function() {}
			        );
   				}
   			});

        });


   });

})(jQuery);
