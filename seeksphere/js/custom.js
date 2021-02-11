(function($) {
	"use strict";

		// Hero slider
		$('.carousel').carousel({
		  interval: 5000,
		  keyboard: true
		})

		// Carousel
		$('.slick-slider').slick({
		    infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false,
			dots: true
		});

		// Wrap body content
	    $("body").wrapInner( "<div class='wrapper'></div>");

		// Customer Carousel
		if ($(window).width() < 768) {
			$('.customer-slider').slick({
			    infinite: true,
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 8000,
				arrows: false,
				dots: true
			});
		} else {
			$('.customer-slider').slick({
			    infinite: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: true,
				autoplaySpeed: 8000,
				arrows: false,
				dots: true
			});
		}

		// Smooth scrolling
		/* from http://imakewebthings.com/jquery-waypoints/ Wicked credit to http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html */
		var scrollElement = 'html, body';
		jQuery('html, body').each(function () {
			var initScrollTop = jQuery(this).attr('scrollTop');
			jQuery(this).attr('scrollTop', initScrollTop + 1);
			if (jQuery(this).attr('scrollTop') == initScrollTop + 1) {
				scrollElement = this.nodeName.toLowerCase();
				jQuery(this).attr('scrollTop', initScrollTop);
				return false;
			}    
		});
		
		// Smooth scrolling for internal links
		jQuery(".nav a[href^='#'], .top a[href^='#']").click(function(event) {
			event.preventDefault();
			
			var jQuerythis = jQuery(this),
			target = this.hash,
			jQuerytarget = jQuery(target);
			
			jQuery(scrollElement).stop().animate({
				'scrollTop': jQuerytarget.offset().top
			}, 1500, 'swing', function() {
				window.location.hash = target;
			});
			
		});

		// Back to op link
		$(document).scroll(function () {
			var y = $(this).scrollTop();
		    if (y > 2000) {
		        $('.top').fadeIn("slow");
		    } else {
		        $('.top').fadeOut("slow");
		    }
		});

		// Tabs
		$( "#tabs, #horz_tabs" ).tabs();

		// Accordion
		$( "#accordion" ).accordion();

	    // Wrap body content
		$('.play').on('click', function(ev) {
			$(this).parent().find('.video').addClass('player');
			$(this).fadeOut(300);
			$(this).parent().find(".video").attr('src', $(".video").attr('src') + '?autoplay=1'); 
		});

	    // Equal height pricing
	    $('.price, .response > div').matchHeight();

	    // Set button width inside pricing tables
	    var width = $('.price').width();
		$('.price .btn').width(width - 60);

	    $(window).resize(function() {

		    var width = $('.price').width();
			$('.price .btn').width(width - 60);

		});

		// Burger icon
		$('.menu').click(function(){
	        $(this).find('#nav_icon').toggleClass('open');
	        $('.nav').toggleClass('opennav');
	        $('.hero').toggleClass('open');
	    });

		// Open map
	    $('.open-map a').click(function(e){
            $("#map").slideToggle(300);
            $(this).text(function(i, text){
	        	return text === "Our location" ? "Hide map" : "Our location";
	      	});

	      	// Google maps

			GMaps.prototype.addStyle = function(options){		
				var styledMapType = new google.maps.StyledMapType(options.styles, options.styledMapName);
				this.map.mapTypes.set(options.mapTypeId, styledMapType);
			};

			GMaps.prototype.setStyle = function(mapTypeId){		
				this.map.setMapTypeId(mapTypeId);
			};

			// If map div exists
			if ($("#map").length > 0){
		    	var map = new GMaps({
					div: "#map",
					lat: 41.895465,
					lng: 12.482324,
					zoom: 12, 
					zoomControl : true,
					zoomControlOpt: {
						style : "SMALL",
						position: "TOP_LEFT"
					},
					panControl : true,
					streetViewControl : true,
					mapTypeControl: true,
					overviewMapControl: true,
				});
				
				/* Replace with style */
				var styles = [{"featureType":"water","stylers":[{"saturation":43},{"lightness":-11},{"hue":"#0088ff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"hue":"#ff0000"},{"saturation":-100},{"lightness":99}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#808080"},{"lightness":54}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ece2d9"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ccdca1"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#767676"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","stylers":[{"visibility":"on"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#EBE5E0"}]},{"featureType":"poi.park","stylers":[{"visibility":"on"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"on"}]}];
				
				map.addStyle({
				    styledMapName:"Styled Map",
				    styles: styles,
				    mapTypeId: "map_style"  
				});
				
				map.setStyle("map_style");
			}
	    });

})(jQuery);