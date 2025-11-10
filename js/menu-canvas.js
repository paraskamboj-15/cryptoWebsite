(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
        
		
		/* Menu */
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_menu_canvas.default', function(){
	        
	        $('.menu-canvas .menu-toggle').on('click', function () {
	        	$(this).closest( '.menu-canvas' ).toggleClass('toggled');
	            
	        });

	        
	        if( $('.site-overlay').length > 0 ){
	        	$('.site-overlay').on('click', function () {
		        	$(this).closest( '.menu-canvas' ).toggleClass('toggled');
		        });
	        }

	        if( $('.close-menu').length > 0 ){
	        	$('.close-menu').on('click', function () {
		        	$(this).closest( '.menu-canvas' ).toggleClass('toggled');
		        });
	        }

	        var $menu = $('.menu-canvas');
	        if ( $menu.length > 0 ) {
	            $menu.find('.menu-item-has-children > a, .page_item_has_children > a').each((index, element) => {
	                var $dropdown = $('<button class="dropdown-toggle"></button>');
	                $dropdown.insertAfter(element);

	            });
	            
	            $(document).on('click', '.menu-canvas .dropdown-toggle', function (e) {
	                e.preventDefault();
	                $(e.target).toggleClass('toggled-on');
	                $(e.target).siblings('ul').stop().toggleClass('show');
	            });
	            $(document).on('click', '.menu-canvas .close-menu', function (e) {
	                e.preventDefault();
	                $(e.target).toggleClass('toggled-on');
	                $(e.target).siblings('ul').stop().toggleClass('show');
	            });
	        }

	      

        });


   });

})(jQuery);
