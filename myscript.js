'use strict';

$(function(){
	
	$('#birthdate').focusout(function() {
    	var dob = $('#birthdate').val();
    	var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    	if (dob == null || dob == "" || !pattern.test(dob)) {
        	$('.hidden').css('display', 'block');
            $('#birthdate').attr('aria-invalid', 'true')
    	}
    	else {
        	$('.hidden').css('display', 'none');
            $('#birthdate').attr('aria-invalid', 'false')
    	}
	});

	$('#submit').click(function(){
		$('form').before('<div role="alert" id="alert">Submitted!</p></div>');
	});

	$("form").submit(function() { return false; });


});
