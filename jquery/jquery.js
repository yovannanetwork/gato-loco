$(document).ready(init);
//la seccion esta en null
var sectionActual = null;

var name1;
var name2;
var idActualJuego;

function init(){
	sectionActual = $('#init-section');
	$('#init-play').click(clickGoPlayer);
	$('#start-play').click(clickGoAccion);
	$('#ir-historial').click(goToHistorial);
	
	$('#enviar-comment').click(clickBtnComment)
	
	$('#list-objet').on('click', '.btn', clickBotonItemJuego);
}
// funcion para ir a la siguiente seccion a travez de um
function clickBotonItemJuego(_idGame){
	//console.log($(this).parent().data(_idGame));
	var idGame = $(this).parent().data(_idGame);
	irNextSection('comentarios');
	getComentarios(_idGame);
	idActualJuego = idGame;
}
function clickBtnComment(){
	var name = $('#name-comment').val();
	var commentText = $('#area-comment').val();
	postComment(idActualJuego, name, commentText);
}
function postComment(_idGame, _name, _content){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type: 'POST',
		data: {comment:{name: _name, content: _content, game_id: _idGame }}
	}).success(function(_data){
		console.log(_data)
		getComentarios(_idGame);
	})
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
function goToHistorial(evt){
	evt.preventDefault();
	irNextSection('historial');
	getHistorial();
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
	$('.yovanna').text(name1+':').val();
	$('.paola').text(name2+':').val();
}
//  funcion AJAX
function getHistorial(){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games',
		type: 'GET'
	}).success(function(_data){
		//console.log(_data);
		dibujarHistorial(_data);
	})
}
function getComentarios(_idGame){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type: 'GET'
	}).success(function(_datos){
		//console.log(_datos);
		dibujarComentario(_datos);
	})
}
// create a game 
function getNewGame(_winner, _loser, _turn){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games',
		type: 'POST',
		data: {game: {winner_player:_winner, loser_player:_loser, number_of_turns_to_win:_turn }}
	}).success(function(_data){
		console.log(_data);
	});
}
function dibujarHistorial(_datos){
	var listaGame = $('#list-objet');
	for(var i in _datos){
		var html = '<li class="list-group-item">'+_datos[i].winner_player+' gano a '+_datos[i].loser_player+' en '+_datos[i].number_of_turns_to_win+' movimientos '+'<button class="btn">comentar</button>';
		listaGame.append(html);
	}
}
function dibujarComentario(_datos){
	var listComment = $('#lista-comment');
	for(var i in _comment){
		var html = '<li class="list-group-item">'+_datos[i].name +' dice:<p>'+_datos[i].content+'</p></li>';
		listComment.append(html);
	}
}


























