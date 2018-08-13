
function seleccionarVehiculo(tipo){
	setCookie('turno_vehiculo', tipo, 1000);
	console.log('turno_vehiculo = '+tipo);
	if(tipo === 2){document.getElementById("auto").className = "img-responsive";}
					else
				  {document.getElementById("auto").className = "img-responsive no_select";}

	if(tipo === 1){document.getElementById("camion").className = "img-responsive";}
					else
				  {document.getElementById("camion").className = "img-responsive no_select";}

}
