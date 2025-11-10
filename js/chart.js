(function($){
	"use strict";
	

	$(window).on('elementor/frontend/init', function () {
		
        elementorFrontend.hooks.addAction('frontend/element_ready/cryptlight_elementor_chart.default', function(){
	       	
	        $('.ova-chart').each( function( index ) {
	        	var that = $(this);

	        	var radius 				= that.data('chart-radius');
	        	var data_chart 			= that.data('chart');
	        	var id 					= that.data('id');
	        	var border 				= that.data('border');
	        	var border_color 	   	= that.data('border-color');
	        	if ( !border_color ) {
	        		border_color = '#FFFFFF';
	        	}
	        	var border_color_hover 	= that.data('border-color-hover');
	        	if ( !border_color_hover ) {
	        		border_color_hover = '#F8FBFE';
	        	}
	        	var canvas 		= that.data('canvas');
	        	var size 		= that.data('canvas-size');
	        	if ( !size ) {
	        		size = 100;
	        	}
	        	var canvas_bg 	= that.data('canvas-bg');
	        	if ( !canvas_bg ) {
	        		canvas_bg = 'rgba(223, 175, 245, 0.15)';
	        	}

	        	var labels = [], percents = [], colors = [];

	        	// Label
	        	if ( data_chart['label'] ) {
					labels = data_chart['label'];
	        	}

	        	// Percent
	        	if ( data_chart['percent'] ) {
					percents = data_chart['percent'];
	        	}

	        	// Color
	        	if ( data_chart['color'] ) {
					colors = data_chart['color'];
	        	}

	        	const data = {
					labels: labels,
					datasets: [{
						label: 'Chart',
						data: percents,
						backgroundColor: colors,
						cutout: radius,
						hoverOffset: 0,
						borderWidth: border,
						borderColor: border_color,
						hoverBorderColor: border_color_hover,
					}]
				};
				const config = {
					type: 'doughnut',
					data: data,
					options: {
				    	plugins: {
					      	legend: {
					        	display: false,
					      	}
					    }
				  	},
				};

				if ( 'yes' == canvas ) {

					function roundRect( ctx, x, y, width, height, radius ) {
						if ( width < 2 * radius ) radius = width / 2;
					  	if ( height < 2 * radius ) radius = height / 2;
					  	ctx.beginPath();
						ctx.moveTo(x + radius, y);
						ctx.arcTo(x + width, y, x + width, y + height, radius);
						ctx.arcTo(x + width, y + height, x, y + height, radius);
						ctx.arcTo(x, y + height, x, y, radius);
						ctx.arcTo(x, y, x + width, y, radius);
						ctx.closePath();
					}

					const plugin = {
					  	id: 'ova_canvas_background_color',
					  	beforeDraw: (chart) => {
						    const ctx = chart.canvas.getContext('2d');
						    const {top, left, width, height} = chart.chartArea;
						    ctx.fillStyle = canvas_bg;
						    roundRect(ctx, left + width / 2 - size / 2, top + height / 2 - size / 2, size, size, 50);
						    ctx.fill();
					  	}
					};
					config['plugins'] = [plugin];
				}
				
				if ( $.inArray( id , chart_ids) == -1 ) {
					chart_ids.push(id)
					var ctx = document.getElementById(id).getContext('2d');
					id = new Chart( ctx, config );
				}
	        });
        });
   });

})(jQuery);
