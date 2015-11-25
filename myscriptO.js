'use strict';

$(function(){
	
	$('#birthdate').focusout(function() {
    	var dob = $('#birthdate').val();
    	var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    	if (dob == null || dob == "" || !pattern.test(dob)) {
        	$('.hidden').css('display', 'block');
    	}
    	else {
        	$('.hidden').css('display', 'none');
    	}
	});

	$('#submit').click(function(){
		$('form').before('<div id="alert">Submitted!</p></div>');
	});

	$("form").submit(function() { return false; });


});
