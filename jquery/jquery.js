$(document).ready(init);
function init(){
	$('.boton-init').on('click', getonClick);
	//validateName();
}
function getonClick(){
	var html = '<div class="container">'+
				  '<div class="row">'+
					'<form class="form-horizontal">'+
					  '<div class="form-group">'+
						'<label class="control-label col-sm-2" for="name">'+'Ingrese el nombre del jugador 2:'+'</label>'+
						'<div class="col-sm-10">'+
						  '<input type="name1" class="form-control" id="name" placeholder="Emmanuel" autofocus>'+
						'</div>'+
					  '</div>'+
					  '<div class="form-group">'+
						'<label class="control-label col-sm-2" for="pwd">'+'Ingrese el nombre del jugador 1:'+'</label>'+
						'<div class="col-sm-10">'+ 
						  '<input type="name" class="form-control" id="name2" placeholder="irene">'+
						'</div>'+
					  '</div>'+
					  '<div class="form-group enviar">'+ 
						'<div class="col-sm-offset-2 col-sm-10">'+
						  '<button type="submit" class="btn btn-default" id="comenzar"><a href="jugador.html">comenzar</a></button>'+
						'</div>'+
					  '</div>'+
					'</form>'+
				  '</div>'+
				'</div>';
	$('.welcome').html(html);
	validateName();
}
// validar campo nombre de los jugadores
function validateName(){
	$('#comenzar').click(function(){
		var name1 = $('#name');
		var name2 = $('#name1');
		if(name1 != 0 && name2 != 0){
			$('input').after('<span style="color: red;" id="span"><small>Ingresa tu nombre</small></span>');
			name1.focus();
		}else{
			$('#span').remove();
		}
	});
}
















