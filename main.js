const switchButton = document.getElementById('switch');

switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 
    switchButton.classList.toggle('active');
});



$(document).ready(main);

var contador = 1;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});
}
