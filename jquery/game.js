$(document).ready(init);
var tabla = new Array(9);
var turn = name1;
//var turnGeneral;
var turnX = 0;
var turnO = 0;

function init(){
	$('.mytab').on('click', '.Cuadrado', clickCudros);
	$(document).ready(clearNewGame);
}
function winningConbination(_texto){
	if(
		(tabla[0] == _texto && tabla[1]==_texto && tabla[2]== _texto) || (tabla[3] == _texto && tabla[4]==_texto && tabla[5]== _texto) || (tabla[6] == _texto && tabla[7]==_texto && tabla[8]== _texto) || (tabla[0] == _texto && tabla[3]==_texto && tabla[6]== _texto) || (tabla[1] == _texto && tabla[4]==_texto && tabla[7]== _texto) || ( tabla[2] == _texto && tabla[5]==_texto && tabla[8]== _texto) || (tabla[0] == _texto && tabla[4]==_texto && tabla[8]== _texto) || (tabla[2] == _texto && tabla[4]==_texto && tabla[6]== _texto) )
	{
		$('#message').html('<img src="https://lh6.googleusercontent.com/-NCq90ipEcvs/VRYBbBCjVgI/AAAAAAAAbh0/2H7BB8nzno4/s800/mi-villano-favorito-02.gif" alt="">'+_texto);
	} 
}

function clickCudros(evt){
	var celda = evt.target;
	var identificador = evt.target.id;
	//alert(id);
	var idCeldasPosicion = identificador[1]-1;
	//turnGeneral = turn%2;
	//alert(idCeldasPosicion);
	if(turn == name1){
		celda.innerHTML = 'X';
		tabla[idCeldasPosicion]= 'X';
		winningConbination('X');
		//turn = 'o';
		//turnX++;
		turn = name2;
	}else{
		celda.innerHTML = 'O';
		tabla[idCeldasPosicion] = 'O';
		winningConbination('O');
		//turn = 'x';
		//turnO++;
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



















