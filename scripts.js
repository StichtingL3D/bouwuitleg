$(document).ready(function(){
	$(".explain").each(function(){
		$(this).hide();
	});
	$(".step").each(function(){
		$(this).click(function(){
			var step_id = $(this).attr('id');
			$("#" + step_id + " .explain").toggle();
		});
	});
});
