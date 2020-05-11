$(document).ready(function(){
openMenu()

function openMenu(){
	let counter = 1;

	$('.menu-button').click(function(){
		if (counter % 2 == 1) {

			$('#mySidenav').css('width','14vw');
			$("body").css('marginLeft','14vw');

		} else {
			
			$('#mySidenav').css('width','0');
			$("body").css('marginLeft','0');			
		
		};
		counter++;

	});

}

})