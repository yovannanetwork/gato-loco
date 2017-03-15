$(document).ready(init);
var tabla = new Array(9);
var turn = name2;
//var turnGeneral;
var turnX = 0;
var turnO = 0;
 var idAtualGame;
function init(){
	$('.mytab').on('click', '.Cuadrado', clickCudros);
	$(document).ready(clearNewGame);
	//getHistorial();
	//$('#list-objet').on('click', '.btn', getSingleGame);
	//singleGame();
	//$('#enviar-comment').on('click', sendComment);
}
/*function getSingleGame(){
	var idJuego = $(this).parent().data('idGame');
	//console.log(idJuego);
	getComment(idJuego);
	idAtualGame = idJuego;
	//singleGame();
}
function sendComment(){
	//alert('jcbjdbc');
	postComment(idAtualGame, $('#name-comment').val(), $('#area-comment').val());
}
function postComment(_idGame, _name, _content){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games/'+ _idGame+'/comments',
		type: 'POST',
		data: {comment: {name: _name, content: _content, idegame: _idGame}}
	}).done(function(){
		getComment(_idGame)
	});
}*/
function winningConbination(_texto){
	if(
		(tabla[0] == _texto && tabla[1]==_texto && tabla[2]== _texto) || (tabla[3] == _texto && tabla[4]==_texto && tabla[5]== _texto) || (tabla[6] == _texto && tabla[7]==_texto && tabla[8]== _texto) || (tabla[0] == _texto && tabla[3]==_texto && tabla[6]== _texto) || (tabla[1] == _texto && tabla[4]==_texto && tabla[7]== _texto) || ( tabla[2] == _texto && tabla[5]==_texto && tabla[8]== _texto) || (tabla[0] == _texto && tabla[4]==_texto && tabla[8]== _texto) || (tabla[2] == _texto && tabla[4]==_texto && tabla[6]== _texto) )
	{
		$('#message').html('<img src="https://lh6.googleusercontent.com/-NCq90ipEcvs/VRYBbBCjVgI/AAAAAAAAbh0/2H7BB8nzno4/s800/mi-villano-favorito-02.gif" alt="">'+ 'Gano '+ _texto);
	} 
	
}

function clickCudros(evt){
	var celda = evt.target;
	var identificador = evt.target.id;
	//alert(identificador);
	var idCeldasPosicion = identificador[1]-1;
	//turnGeneral = turn%2;
	//alert(idCeldasPosicion);
	if(turn == name1){
		celda.innerHTML = 'X';
		tabla[idCeldasPosicion]= name1;
		winningConbination(name1);
		//turn = 'o';
		turnX++;
		$('#mov1').text(turnX);
		turn = name2;
	}else{
		celda.innerHTML = 'O';
		tabla[idCeldasPosicion] = name2;
		winningConbination(name2);
		//turn = 'x';
		turnO++;
		$('#mov2').text(turnO);
		turn = name1;
	}
	console.log(turn);
}
function clearNewGame(){
	$('#new-game').click(function(){
		//alert(tabla);
		$('.Cuadrado').empty();
		$('img').remove();
		$('#message').remove();
	});
}
/*function getHistorial(){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games',
		
	}).done(function(_data){
		//console.log(_data);
		dibujarHistorial(_data);
	})
}
function singleGame(_idGame){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games/'+_idGame
		
	}).done(function(_dato){
		//console.log(_dato);
		dibujarHistorial(_dato);
	});
}
function getComment(_idComment){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games/'+_idComment+'/comments',
		type: 'GET'
	}).success(function(_data){
		//console.log(_data);
		dibujarComentario(_data);
	});
}

function dibujarHistorial(_datos){
	var lista = $('#list-objet');
	lista.html(_datos);
	for(var i in _datos){
		//console.log(_datos[i].id);
		var html = '<li idGame="'+_datos[i].id+'" class="list-group-item">'+_datos[i].winner_player+' gano a '+_datos[i].loser_player+' en '+_datos[i].number_of_turns_to_win
+' movimientos '+'<button class="btn">Comentar</button>'+'</li>';
		lista.append(html);
	}
}

function dibujarComentario(_dato){
	var listComment = $('#lista-comment');
	listComment.empty();
	for(var i in _dato){
		var html = '<li class="list-group-item">'+ _dato[i].name+' dice:'+'<p class="text-comment">'+ _dato[i].content+'</p></li>';
		listComment.append(html);
	}
	
}*/














