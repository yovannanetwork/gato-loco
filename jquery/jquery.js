$(document).ready(init);
//la seccion esta en null
var sectionActual = null;
var name1;
var name2;

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
	
}
function localStorageSet(evt){
	var jugador1 = $('#name1').val();
	var jugador2 = $('#name2').val();
	localStorage.setItem('primerJugador', jugador1);
	localStorage.setItem('segundoJugador', jugador2);
}
function localStorageGet(){
	name1 = localStorage.getItem('primerJugador');
	name2 = localStorage.getItem('segundoJugador');
	$('.yovanna').text(name1).val();
	$('.paola').text(name2).val();
}
//  funcion iniciar juego






























