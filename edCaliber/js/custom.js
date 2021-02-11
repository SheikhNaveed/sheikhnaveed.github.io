//========================= Count Navigation quantity ==================================            
var left = '.ln li.expanded.left';
var actLsn = '.ln li.activeLesson';
var right = '.ln li.expanded.right';
var leftArrow = '<li class="left arrow"><i class="icon icon-arrow-left"></i></li>';
var rightArrow = '<li class="right arrow"><i class="icon icon-arrow-right"></i></li>';

//========================= Expander button script ==================================
function handler1() {
	var $new = $(this).closest('nav').find('ul');

	if ($new.hasClass('expandable')) {
		$new.addClass('expanded').removeClass('ha expandable');
		//		$new.equalize();
		$new.each(function() {
			$(this).children().matchHeight();
		});
		console.log(this);
		console.log('chikna londa');

	} else {
		$new.addClass('ha expandable').removeClass('expanded');
		console.log(this);
	}

	$(this).toggleClass('minus');
	$(this).one('click', handler2);
	console.log(this);
}

function handler2() {
	var $london = $(this).closest('nav').find('ul');

	if ($london.hasClass('expanded')) {
		$london.addClass('ha expandable').removeClass('expanded');
		console.log(this);

	} else {
		$london.addClass('expanded').removeClass('ha expandable');
		//		$london.equalize();
		$london.each(function() {
			$(this).children().matchHeight();
		});
		console.log(this);
	}

	$(this).toggleClass('minus');
	$(this).one('click', handler1);
}

$('.mod .inner').one('click', handler1);

// =============================== Expander of Lesson Navigation ========================
function handler3() {
	var $paris = $(this).closest('nav').find('ul');

	if ($('.ln li:last-child').is('.active') && $('.ln ul').hasClass('expanded')) {
		console.log(this);
	}

	if ($paris.hasClass('expandable')) {
		$paris.addClass('expanded').removeClass('ha expandable');
		$('.arrow,.inactiveArrow').remove();
		//         $(this).closest('nav').find('li.assess').attr('class', 'assess');
		$(actLsn).addClass('active').removeClass('activeLesson');
		$(this).closest('nav').find('li.assess').addClass('assess').removeClass('expanded left right dn');
		//         $(actLsn).attr('class', 'active');
		$(this).closest('nav').find('li').not('.active').not('.assess').attr('class', '');
		//		$paris.equalize();
		console.log(this);

	} else {
		$paris.addClass('ha expandable').removeClass('expanded');
		$('.ln li.active').attr('class', 'activeLesson');
		$(actLsn).prev().attr('class', 'expanded left');
		$(actLsn).next().attr('class', 'expanded right');
		$(actLsn).after(rightArrow).before(leftArrow);
		console.log(this);
	}

	if ($('.ln li:last-child').is('.right') && $('.ln ul').hasClass('expandable')) {
		$('.arrow,.inactiveArrow').remove();
		$('.ln li').not('.activeLesson').attr('class', '');
		$(actLsn).prev().attr('class', 'expanded left');
		$(actLsn).prev().prev().attr('class', 'expanded left');
		$(actLsn).after(rightArrow).before(leftArrow);
		$('.arrow.right').attr('class', 'inactiveArrow');
		console.log(this);
	}

	if ($('.ln li:eq(1)').hasClass('activeLesson')) {
		$('.ln li:eq(4)').addClass('expanded right');
		$('.ln li:eq(0)').attr('class', 'inactiveArrow');
		console.log(this);
	}

	$(this).toggleClass('minus');
	$(this).one('click', handler4);
	console.log(this);
}

function handler4() {
	var $pak = $(this).closest('nav').find('ul');

	if ($pak.hasClass('expanded')) {
		$pak.addClass('ha expandable').removeClass('expanded');
		$('.ln li.active').addClass('activeLesson').removeClass('active');
		$(actLsn).prev().addClass('expanded left').removeClass('dn');
		$(actLsn).next().addClass('expanded right').removeClass('dn');
		$(actLsn).after(rightArrow).before(leftArrow);
		console.log(this);

	} else {
		$pak.addClass('expanded').removeClass('ha expandable');
		$('.arrow,.inactiveArrow').remove();
		$(actLsn).siblings().not('.activeLesson').not('.assess').attr('class', '');
		$(actLsn).attr('class', 'active');
		$('.assess').removeClass('expanded left right');
		//		$pak.equalize();
		console.log(this);
	}

	if ($('.ln li:first-child').is('.left') && $('.ln ul').hasClass('expandable')) {
		$('.arrow,.inactiveArrow').remove();
		$('.ln li').not('.activeLesson').attr('class', '');
		$(actLsn).next().attr('class', 'expanded right brw');
		$(actLsn).next().next().attr('class', 'expanded right');
		$(actLsn).after(rightArrow).before(leftArrow);
		$('.arrow.left').attr('class', 'inactiveArrow');
		console.log(this);
	}

	if ($('.ln li:eq(-2)').hasClass('activeLesson')) {
		$('.ln li:eq(-5)').addClass('expanded left');
		$('.ln li:eq(-1)').attr('class', 'inactiveArrow');
		console.log(this);
	}

	$(this).toggleClass('minus');
	$(this).one('click', handler3);
	console.log(this);
}

$('.ln .inner').one('click', handler3);

// ========= If 'list item' is clicked in non-expanded version ========= 
$('.mod').on('click', 'li', function() {
	$(this).parents('ul').find('.active').toggleClass('active');
	$(this).toggleClass('active');
	//     $(this).parents('nav').next().find('.active').toggleClass();
	$(this).parents('nav').next().find('.active').removeClass('active');
	$(this).parents('nav').next().addClass('vv').removeClass('vh');
	$(this).parents('nav').next().next().addClass('vh').removeClass('vv');
	return false;
});

$('.mod.unit').on('click', 'li', function() {
	var assess = '.ln li.assess';
	$('.ln').addClass('initial');
	$('.arrow,.inactiveArrow').remove();
	$('.ln li').not('.assess').attr('class', '');
	$(assess).attr('class', 'assess');

	console.log(this);
});

// ========= If 'list item' is clicked in expanded version ========= 
$('.mod').on('click', '.expanded li', function() {
	$(this).parents('.lesson-nav').find('ul').attr('class', 'expandable clearfix');
	$(this).closest('.lesson-nav').find('.inner').attr('class', 'inner');
	console.log(this);
});

// ========== Left / Right arrows for lesson ================== 
$('.ln').on('click', '.right.arrow', function() {
	$('.arrow,.inactiveArrow').remove();
	if ($('li:last-child').hasClass('expanded right')) {
		$(actLsn).attr('class', 'expanded left');
		$(right).attr('class', 'activeLesson');
		$(actLsn).after(rightArrow).before(leftArrow);
		$('.arrow.right').attr('class', 'inactiveArrow');
		console.log(this);

	} else if ($('li:first-child').hasClass('activeLesson')) {
		$(actLsn).attr('class', 'expanded left');
		$(left).next().attr('class', 'activeLesson');
		$(actLsn).next().attr('class', 'expanded right');
		$(actLsn).after(rightArrow).before(leftArrow);
		console.log(this);

	} else {
		$(left).attr('class', 'dn');
		$(actLsn).attr('class', 'expanded left');
		$(right).attr('class', 'activeLesson');
		$(actLsn).next().attr('class', 'expanded right');
		$(actLsn).after(rightArrow).before(leftArrow);
		console.log(this);
		//         $(actLsn).before(leftArrow);

	}
});

// ========== Left arrows for lesson ================== 
$('.ln').on('click', '.left.arrow', function() {
	$('.arrow,.inactiveArrow').remove();

	if ($('li:first-child').hasClass('expanded left')) {
		$(actLsn).attr('class', 'expanded right');
		$(left).attr('class', 'activeLesson');
		$(actLsn).after(rightArrow).before(leftArrow);
		$('.arrow.left').attr('class', 'inactiveArrow');
		// console.log('.left.arrow first-child');
		console.log(this);

	} else if ($('li:last-child').hasClass('activeLesson')) {
		$(actLsn).attr('class', 'expanded right');
		$(right).prev().attr('class', 'activeLesson');
		$(actLsn).after(rightArrow).before(leftArrow);
		$('.arrow.right').attr('class', 'inactiveArrow');
		// console.log('.left.arrow last-child');
		console.log(this);

	} else {
		$(right).attr('class', 'dn');
		$(actLsn).attr('class', 'expanded right');
		$(left).attr('class', 'activeLesson');
		$(actLsn).prev().attr('class', 'expanded left');
		$(actLsn).after(rightArrow).before(leftArrow);
		// console.log('.left.arrow all');
		console.log(this);
	}
});

$('.ln ').on('click', 'li', function() {
	$(this).closest('div').removeClass('initial');
	console.log(this);
});


$('.ln ').on('click', '.expandable li', function() {
	if ($(this).is(".arrow,.inactiveArrow,.activeLesson")) {
		console.log(this);
		return false;
	}

	$('.arrow, .inactiveArrow').remove();
	console.log(this);

	if (($(this).is(':last-child')) && ($(this).is(':last-child'))) {
		$(this).addClass('activeLesson').removeClass('expanded left right');
		$(this).prev().attr('class', 'expanded left');
		$(this).prev().prev().attr('class', 'expanded left');
		$(this).before(leftArrow);
		$(this).after(rightArrow);
		$('.arrow.right').attr('class', 'inactiveArrow');
		console.log(this);

	} else if ($(this).is(':first-child')) {
		$(this).addClass('activeLesson').removeClass('expanded left right');
		$(this).next().attr('class', 'expanded right brw');
		$(this).next().next().attr('class', 'expanded right');
		$(this).before(leftArrow);
		$(this).after(rightArrow);
		$('.arrow.left').attr('class', 'inactiveArrow');
		console.log(this);

	} else if ($(this).is('.assess')) {
		$('.ln li').not('.assess').attr('class', 'dn');
		$('.ln li.assess').attr('class', 'dn assess');
		// .attr('class', 'dn')
		$(this).attr('class', 'activeLesson assess');
		$(this).prev().addClass('expanded left');
		$(this).next().addClass('expanded right');
		$(this).before(leftArrow);
		$(this).after(rightArrow);
		console.log(this);

	} else {
		$('.ln li').not('.assess').attr('class', 'dn');
		$('.ln li.assess').attr('class', 'dn assess');
		// .attr('class', 'dn')
		$(this).attr('class', 'activeLesson');
		$(this).prev().addClass('expanded left');
		$(this).next().addClass('expanded right');
		$(this).before(leftArrow);
		$(this).after(rightArrow);
		console.log(this);
	}

});

$('.ln ').on('click', '.expandable li', function() {
	if ($(this).is(".arrow,.inactiveArrow,.activeLesson")) {
		return false;
	}

	$('.arrow, .inactiveArrow').remove();
	$('.ln li').not('.assess').attr('class', 'dn');
	$('.ln li.assess').attr('class', 'dn assess');

	if (($(this).is('.assess')) && (!$(this).is(':last-child')) && (!$(this).is(':first-child'))) {
		$(this).attr('class', 'activeLesson assess');
		$(this).prev().addClass('expanded left');
		$(this).next().addClass('expanded right');
		$(this).before(leftArrow).after(rightArrow);
		console.log(this);

	} else if (($(this).is(':last-child')) && ($(this).is('.assess'))) {
		$(this).attr('class', 'activeLesson assess');
		$(this).prev().addClass('expanded left');
		$(this).prev().prev().addClass('expanded left');
		$(this).before(leftArrow).after(rightArrow);
		console.log(this);

	} else if (($(this).is(':first-child')) && ($(this).is('.assess'))) {
		$(this).attr('class', 'activeLesson assess');
		$(this).next().addClass('expanded right');
		$(this).next().next().addClass('expanded right');
		$(this).before(leftArrow).after(rightArrow);
		console.log(this);

	} else if (($(this).is(':last-child')) && (!$(this).is('.assess'))) {
		$(this).attr('class', 'activeLesson');
		$(this).prev().attr('class', 'expanded left');
		$(this).prev().prev().attr('class', 'expanded left');
		$(this).before(leftArrow).after(rightArrow);
		$('.arrow.right').attr('class', 'inactiveArrow');
		console.log(this);

	} else if (($(this).is(':first-child')) && (!$(this).is('.assess'))) {
		$(this).attr('class', 'activeLesson');
		$(this).next().attr('class', 'expanded right brw');
		$(this).next().next().attr('class', 'expanded right');
		$(this).before(leftArrow).after(rightArrow);
		$('.arrow.left').attr('class', 'inactiveArrow');
		console.log(this);
	} else {
		$(this).attr('class', 'activeLesson');
		$(this).prev().addClass('expanded left');
		$(this).next().addClass('expanded right');
		$(this).before(leftArrow).after(rightArrow);
		console.log(this);
	}

	if ($(this).is(':last-child')) {
		$('.arrow.right').attr('class', 'inactiveArrow');
		console.log(this);
	} else if ($(this).is(':first-child')) {
		$('.arrow.left').attr('class', 'inactiveArrow');
		console.log(this);
	}
});

// ========= If 'list item' is clicked in expanded version ========= 
$('.ln').on('click', '.expanded li', function() {

	$(this).closest('div').removeClass('initial');
	$(this).parents('.lesson-nav').find('ul').attr('class', 'expandable clearfix');
	$(this).closest('.lesson-nav').find('.inner').attr('class', 'inner');
	$(this).siblings().not('.assess').attr('class', 'dn');
	$(this).addClass('activeLesson').removeClass('active');

	if ($(this).is(':last-child')) {

		$(this).prev().attr('class', 'expanded left');
		$(this).prev().prev().attr('class', 'expanded left');
		$(this).before(leftArrow).after(rightArrow);
		$('.arrow.right').attr('class', 'inactiveArrow');
		console.log(this);

	} else if ($(this).is(':first-child')) {

		$(this).next().attr('class', 'expanded right brw');
		$(this).next().next().attr('class', 'expanded right');
		$(this).before(leftArrow).after(rightArrow);
		$('.arrow.left').attr('class', 'inactiveArrow');
		console.log(this);

	} else {

		$(this).next().addClass('expanded right').removeClass('active activeLesson');
		$(this).prev().addClass('expanded left').removeClass('active activeLesson');
		$(this).before(leftArrow).after(rightArrow);
		console.log(this);
	}

});

$('.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12').addClass('clearfix');

$('.lesson-nav ul').each( function() {
	var lis = $(this).find('li');
	lis.css("width", 100 / lis.length + '%' );
});

$('.lesson-nav .mod').not('.unit').not('.less').find('li').each(function(i) {
	$(this).prepend( '<i>'+('M'+(i+1))+'</i><b>MODULE '+(i+1)+'</b>' );
});

$('.lesson-nav .mod.unit').not('.less').find('li').each(function(i) {
	$(this).prepend( '<i>'+('U'+(i+1))+'</i><b>UNIT '+(i+1)+'</b>' );
});

$('.lesson-nav .mod.unit.less').find('li').each(function(i) {
	$(this).prepend( '<i>'+(i+1)+'</i><b>L'+(i+1)+'</b>' );
});

$('.material').hover(
	function() { 
		$('.options').addClass(' animated fadeIn db').removeClass('fadeOut');
		$('.info').addClass(' animated fadeIn db').removeClass('fadeOut');
	},
	function() { 
		$('.options').removeClass('fadeIn').addClass('fadeOut');
		$('.info').removeClass('fadeIn').addClass('fadeOut'); 
	}
);

new WOW().init();

$('.eqHeighter').each(function() {
	$(this).children().matchHeight();
});

$('.expanded').each(function() {
	$(this).children().matchHeight();
});