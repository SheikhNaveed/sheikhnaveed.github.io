jQuery(document).ready(function() {
	left_height = $('.left-col').height();
	right_height = $('.right-col').height();
	if (left_height>right_height) {
		$('.right-col').css("height", Left_height+"px")	
	} else {
		$('.left-col').css("height", right_height+"px")
	}
	
	 // The slider being synced must be initialized first
	$('#carousel').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 0,
		itemMargin: 0,
		asNavFor: '#slider'
	});
	 
	$('#slider').flexslider({
		animation: "slide",
		controlNav: false,
		animationLoop: false,
		slideshow: false,
		itemWidth: 820,
		sync: "#carousel"
	});
	
	$('#carousel li').click(function(){
		$('#carousel.flexslider li').removeClass('flex-active-slide');
		$(this).addClass('flex-active-slide')
		
	})	
});