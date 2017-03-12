$(document).ready(init);
//la seccion esta en null
var sectionActual = null;

//para inicializar  en la seccion init-section
function init(){
	sectionActual = $('#init-section');
	$('#init-play').click(clickGoPlayer);
	$('#start-play').click(clickGoAccion);
}
function irNextSection(_idVisible){
	var visible = $('.visible');
	sectionActual.removeClass(visible);
	var nextSection = $('.'+_idVisible);
	nextSection.addClass('visible');
	sectionActual = nextSection;
}
function clickGoPlayer(){
	irNextSection('names');
	$('#name1, #name2').change(localStorageSet);
}
function clickGoAccion(){
	irNextSection('game');
	localStorageGet();
	startGame();
}
function localStorageSet(evt){
	var jugador1 = $('#name1').val();
	var jugador2 = $('#name2').val();
	localStorage.setItem('primerJugador', jugador1);
	localStorage.setItem('segundoJugador', jugador2);
}
function localStorageGet(){
	var name1 = localStorage.getItem('primerJugador');
	var name2 = localStorage.getItem('segundoJugador');
	$('.yovanna').text(name1);
	$('.paola').text(name2);
}

function startGame(){
	var conbinatioToWin = [
    // Horizontals
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    // Verticals
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    // Diagonals
    [0, 4, 8],
    [2, 4, 6]
  ];
	var cuadradoElegido = {
		'X': [],
		'O': []
	}
	var actualJugador = 'X';
	$('td').on('click', function(evt){
		//sconsole.log('bhdbv');
		var cuadrado = $(evt.currentTarget);
		cuadrado.addClass('cuadrado'+cuadradoElegido);
		if(cuadradoElegido === 'X'){
			cuadradoElegido = 'O';
		}else{
			cuadradoElegido = 'X';
		}
	});
	$.each(conbinatioToWin, function(_index, _conbination){
		var hasAllSquare = true;
		$.each(_conbination, function(_index, _square){
			if($.inArray(_square, cuadradoElegido) === -1){
				hasAllSquare = false;
			}
		});
		if(hasAllSquare){
			alert(cuadradoElegido+' dbbjcb');
		}
	})
}

























/*function clickCuadrado(){
	$('td').click(function(){
		$(this).html('<span>x</span>')
	});
}*/







