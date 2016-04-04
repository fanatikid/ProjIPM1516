
$(document).ready(function() {

	$('#keyboard').css({ opacity: 0});

	$('.form-container').submit(function() {
		
		$('#keyboard').css({ 
			opacity: '1', 
			'max-height': '100%',
			'max-width': '100%'
		});
		
		return false;
	
	});


});
