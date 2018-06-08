
function buscarTurno(){
	console.log('buscarTurno');
	var turno_tipo = getCookie('turno_tipo');
	var turno_vehiculo = getCookie('turno_vehiculo');
	var fecha = getCookie('turno_fecha');
	
	var error = '';
	if(turno_vehiculo < 1){error = error+"<p>Debe seleccionar un tipo de vehiculo</p>"};
	if(turno_tipo < 1){error = error+"<p>Debe seleccionar un tipo de turno</p>"};
		if(error.length > 5){
		bootbox.alert({
    		message: error,
			title: "Los siguientes datos son obligatorios",
    		className: 'error'
		});
		return;}
	
	fecha = document.getElementById("fecha").value;
	console.log("fecha="+fecha)
	setCookie('turno_fecha', fecha, 1000);
	location.href='buscarTurno.html';
}
