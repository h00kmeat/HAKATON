$(document).ready(function(){
openMenu()

function openMenu(){
	let counter = 1;

	$('.menu-button').click(function(){
		if (counter % 2 == 1) {

			$('#mySidenav').css('width','14vw');

		} else {
			
			$('#mySidenav').css('width','0');
						
		
		};
		counter++;

	});

}

})