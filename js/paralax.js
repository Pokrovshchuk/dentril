$(window).scroll(function(){
	var st = $(this).scrollTop();

	$(".paralax").css({
		"transform" : "translate(0%, " + st/55 + "%"
	});
});