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















