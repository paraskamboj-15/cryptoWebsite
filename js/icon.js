(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_icon.default', function(){
	       
	        $('.ova-icon').each( function() {
	        	var that = $(this);

	        	var video_active 	= that.find('.video_active');
	        	var modal_container = that.find('.modal-container');
	        	var modal_close 	= that.find('.ovaicon-cancel');
	        	var modal_video 	= that.find('.modal-video');

	        	// btn video clicj
	        	video_active.on( 'click', function() {
	        		var btn_video 	= $(this).find('.video-btn')
	        		var url 		= get_url( btn_video.data('src') );
	        		var autoplay 	= btn_video.data('autoplay');
	        		var mute 		= btn_video.data('mute');
	        		var loop 		= btn_video.data('loop');
	        		var controls 	= btn_video.data('controls');
	        		var modest 		= btn_video.data('modest');
	        		var showinfo 	= btn_video.data('show_info');
	        		var option		= '?';
	        		option += ( 'yes' == autoplay ) ? 'autoplay=1' 	: 'autoplay=0';
	        		option += ( 'yes' == mute ) 	? '&mute=1' 	: '&mute=0';
	        		option += ( 'yes' == loop ) 	? '&loop=1' 	: '&loop=0';
	        		option += ( 'yes' == controls ) ? '&controls=1' : '&controls=0';
	        		option += ( 'yes' == showinfo ) ? '&showinfo=1' : '&showinfo=0';
	        		option += ( 'yes' == modest ) 	? '&modestbranding=1' : '&modestbranding=0';

	        		if ( url != 'error' ) {
	        			modal_video.attr('src', "https://www.youtube.com/embed/" + url + option );
	        			modal_container.css('display', 'flex');
	        		}
	        	});

	        	// close video
	        	modal_close.on('click', function() {
	        		modal_container.hide();
	        		modal_video.removeAttr('src');
	        	});

	        	// window click
	        	$(window).click( function(e) {
	        		if ( e.target.className == 'modal-container' ) {
	        			modal_container.hide();
	        			modal_video.removeAttr('src');
	        		}
				});
	        });

    		function get_url( url ) {
			    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
			    var match = url.match(regExp);

			    if (match && match[2].length == 11) {
			        return match[2];
			    } else {
			        return 'error';
			    }
			}
        });
   });

})(jQuery);
