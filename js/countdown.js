(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_countdown.default', function(){
	       
	       	$('.ova-countdown').each( function() {
	       		
	       		var that 		= $(this);
	       		var time 		= that.data('time');
	       		var date 		= new Date(time*1000);
	       		var format 		= that.data('format');
	       		var show_label 	= that.data('show-lable');
	       		var message 	= that.data('message');
	       		var url 		= that.data('url');
	       		var label_align = that.data('label-align');
	       		var layout 		= '';

	       		var show_separator 	= that.data('show-separator');
	       		var sep             = '<span class="countdown-separator">:</span>';

	       		if ( format.indexOf('d') >= 0 || format.indexOf('D') >= 0 ) {
	       			var dnn = '<span class="countdown-day ova-number">{dnn}</span>';
	       			var dl 	= '<span class="countdown-label">{dl}</span>';
	       			layout += 	'<div class="ova-countdown-item ova-countdown-day">';

	       			if ( label_align && label_align == 'top' ) {
						if ( show_label == 'yes' ) {
							layout += dl;
						}
						layout += dnn;
	       			} else {
	       				layout += dnn;
						if ( show_label == 'yes' ) {
							layout += dl;
						}
	       			}
	       			layout +=	'</div>';
	       			if ( show_separator == 'yes' ) {
						layout += sep;
					}
	       		}

	       		if ( format.indexOf('h') >= 0 || format.indexOf('H') >= 0 ) {
	       			var hnn = '<span class="countdown-hour ova-number">{hnn}</span>';
	       			var hl 	= '<span class="countdown-label">{hl}</span>';
	       			layout += 	'<div class="ova-countdown-item ova-countdown-hour">';

	       			if ( label_align && label_align == 'top' ) {
	       				if ( show_label == 'yes' ) {
							layout += hl;
						}
						layout += hnn;
	       			} else {
	       				layout += hnn;
	       				if ( show_label == 'yes' ) {
							layout += hl;
						}
	       			}
					layout +=	'</div>';
					if ( show_separator == 'yes' ) {
						layout += sep;
					}
	       		}

	       		if ( format.indexOf('m') >= 0 || format.indexOf('M') >= 0 ) {
	       			var mnn = '<span class="countdown-minute ova-number">{mnn}</span>';
	       			var ml 	= '<span class="countdown-label">{ml}</span>';
	       			layout += 	'<div class="ova-countdown-item ova-countdown-minute">';

	       			if ( label_align && label_align == 'top' ) {
	       				if ( show_label == 'yes' ) {
							layout += ml;
						}
						layout += mnn;
	       			} else {
	       				layout += mnn;
	       				if ( show_label == 'yes' ) {
							layout += ml;
						}
	       			}
					layout +=	'</div>';
					if ( show_separator == 'yes' ) {
						layout += sep;
					}
	       		}

	       		if ( format.indexOf('s') >= 0 || format.indexOf('S') >= 0 ) {
	       			var snn = '<span class="countdown-second ova-number">{snn}</span>';
	       			var sl 	= '<span class="countdown-label">{sl}</span>';
	       			layout += 	'<div class="ova-countdown-item ova-countdown-second">';

	       			if ( label_align && label_align == 'top' ) {
	       				if ( show_label == 'yes' ) {
							layout += sl;
						}
						layout += snn;
	       			} else {
	       				layout += snn;
	       				if ( show_label == 'yes' ) {
							layout += sl;
						}
	       			}
					layout +=	'</div>';
	       		}

	       		var data = {
	       			until: date,
					format: format,
					layout: layout,
	       		};

	       		var data_label 	= that.data('labels');
	       		if ( data_label ) {
	       			var label 	= data_label['label'];
	       			if ( label ) {
	       				data['labels1'] = label;
	       			}

	       			var labels 	= data_label['labels'];
	       			if ( labels ) {
	       				data['labels'] = labels;
	       			}
	       		} else {
	       			data['labels'] = ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'];
	       			data['labels1'] = ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'];
	       		}

	       		var expire = that.data('expire');

	       		if ( expire == 'hide' ) {
	       			data['onExpiry'] = liftOff;
	       		}

	       		if ( message && expire == 'message' ) {
	       			data['expiryText'] = layout + '<div class="ova-message">' + message + '</div>';
	       		}

	       		if ( url && expire == 'redirect' ) {
	       			data['expiryUrl'] = url;
	       		}

				$(that).countdown(data);
				
				var redirect = that.data('redirect');
				// Hide
				if ( 'hide' == expire && redirect == 1 ) {
					that.hide();
				}

				// Redirect
				if ( 'redirect' == expire && url && redirect == 1 ) {
					window.location.replace(url);
				}

				function liftOff() {
					that.hide();
				}
	       	});
        });


   });

})(jQuery);
