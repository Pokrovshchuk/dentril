$(function() {
$('.my-popup2').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		mainClass: 'my-mfp-slide-bottom'
	});


	$(".callback").submit(function() {
		var th = $(this);
		$.ajax({
		type: "POST",
		url: "send-letter.php", 
		data: th.serialize()
		}).done(function() {
		$(".success").addClass("visible");			
		});
		return false;
	});


	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
};
$("img, a").on("dragstart", function(event) { event.preventDefault(); });
});