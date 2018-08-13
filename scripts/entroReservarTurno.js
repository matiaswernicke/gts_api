
function entroReservarTurno(){
	console.log('Leer entroBuscarTurno');
	//$respuesta = array("estado"=>1,"principal"=>$principal,"saldo"=>$saldo,"nombre"=>$data_empresa->em_nombre,"email"=>$data_empresa->em_mail,"nombre_empresa"=>$data_empresa->em_nombre,"em_mail_empresa"=>$data_empresa->em_mail,"em_telefono"=>$data_empresa->em_telefono);
	var swci_url = getCookie('swci_url');
	var swci_user = getCookie('swci_user');
	var respuesta = JSON.parse(swci_user);
	var usuario = respuesta.usuario;
	var fecha = getCookie('turno_fecha');
	var turno_vehiculo = getCookie('turno_vehiculo');
	var turno_tipo = getCookie('turno_tipo');
	
	document.getElementById("empresa").value = respuesta.nombre_empresa;
	document.getElementById("email_empresa").value = respuesta.em_mail_empresa;
	document.getElementById("nombre").value = respuesta.nombre;
	document.getElementById("email").value = respuesta.email;
	document.getElementById("telefono").value = respuesta.em_telefono;
	
	if(turno_tipo == 1){var titulo_turno = 'Gomería'}
	if(turno_tipo == 2){var titulo_turno = 'Mecánica'}
	if(turno_tipo == 3){var titulo_turno = 'Lavadero'}
	if(turno_tipo == 5){var titulo_turno = 'Lubricentro'}
	
	if(turno_vehiculo == 1){var titulo_vehiculo = 'Camión'}
	if(turno_vehiculo == 2){var titulo_vehiculo = 'Automovil'}

	var titulo_fecha = fecha.substring(8,10)+'/'+fecha.substring(5,7)+'/'+fecha.substring(0,4);
	
	//var titulo = 'Seleccione el horario para el turno de '+titulo_turno+' para un '+titulo_vehiculo+' para el día '+fecha;
	var titulo = 'Seleccione un horario</br>para el día : '+titulo_fecha+'</br>en el sector  : '+titulo_turno+'</br>Tipo Vehículo : '+titulo_vehiculo;
	document.getElementById("titulo").innerHTML = titulo;
}
