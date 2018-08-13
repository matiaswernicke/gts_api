function entroMisTurnosPantalla(respuesta){
		// Inicio mostara pantalla
	
	var pantalla = '<div class="row text-center ">'
	pantalla = pantalla + '<div class="col-xs-12 col-md-12 col-lg-12 text-center">'
	pantalla = pantalla + '<table class="table table-striped small" border="1">'
	pantalla = pantalla + '<thead class="bg-auto">'
	pantalla = pantalla + '<tr>'
	//pantalla = pantalla + '<th width="5%"  scope="col" class="text-center">Nro</th>'
	pantalla = pantalla + '<th with="20%" scope="col" class="text-center">Fecha</th>'
	pantalla = pantalla + '<th with="20%" scope="col" class="text-center">Hora</th>'
	pantalla = pantalla + '<th with="60%" scope="col" class="text-center">Sector</th>'
	pantalla = pantalla + '</tr>'
	pantalla = pantalla + '</thead>'
	pantalla = pantalla + '<tbody>'
	
	//pantalla = pantalla + '<div class="col-3">Fecha</div>';
	//pantalla = pantalla + '<div class="col-xs-4 col-md-4 col-lg-4">Hora</div>'
    //pantalla = pantalla + '<div class="col-xs-8 col-md-8 col-lg-8">Sector</div>'
	//pantalla = pantalla + '<div class="col-4">No se</div>';
	//pantalla = pantalla + '</div>';
	//var pantalla = '';
	var estilo = 'style="background: #A3A3A3"'
	//var pantalla = '';
	for(items in respuesta){
				
		if(estilo == 'style="background: #A3A3A3"'){var estilo = 'style="background: #A3AFFF"'}else{var estilo = 'style="background: #A3A3A3"' }
		
		
		pantalla = pantalla + '<tr '+estilo+' onClick="verTurno('+respuesta[items].tu_id+')">'
		pantalla = pantalla + '<th scope="col" class="text-center">'+respuesta[items].fecha+'</th>'
		pantalla = pantalla + '<th scope="col" class="text-center">'+respuesta[items].hora+'</th>'
		pantalla = pantalla + '<th scope="col" class="text-center">'+respuesta[items].nombre+'</th>'
		pantalla = pantalla + '</tr>'
		pantalla = pantalla + '<tr '+estilo+' onClick="verTurno('+respuesta[items].tu_id+')">'
		pantalla = pantalla + '<th scope="col" class="text-center">Patentes</th>'
		pantalla = pantalla + '<th scope="col" class="text-center">'+respuesta[items].patente1+'</th>'
		pantalla = pantalla + '<th scope="col" class="text-center">'+respuesta[items].patente2+'</th>'
		pantalla = pantalla + '</tr>'
		
		/*
		pantalla = pantalla + '<div class="row">'
		pantalla = pantalla + '<div class="col-xs-6 col-md-6 col-lg-6">Hora</div>'
		pantalla = pantalla + '<div class="col-xs-6 col-md-6 col-lg-6">'+respuesta[items].hora+'</div>'
		pantalla = pantalla + '</div>'

 		pantalla = pantalla + '<div class="row text-left">'
		pantalla = pantalla + '<div class="col-xs-6 col-md-6 col-lg-6">Sector</div>'
		pantalla = pantalla + '<div class="col-xs-6 col-md-6 col-lg-6">'+respuesta[items].nombre+'</div>'
		pantalla = pantalla + '</div>'
		*/
		 		
	}	
		pantalla = pantalla + '</tbody></table>'
		document.getElementById('mostrar_turnos').innerHTML = pantalla
		// fin mostrar pantalla 

	
}