function seleccionar(tipo){
	setCookie('turno_tipo', tipo, 1000);
	console.log('Tipo turno = '+tipo);
	if(tipo === 1){document.getElementById("gomeria").className = "img-responsive";}
					else
				  {document.getElementById("gomeria").className = "img-responsive no_select";}

	if(tipo === 3){document.getElementById("lavado").className = "img-responsive";}
					else
				  {document.getElementById("lavado").className = "img-responsive no_select";}

	if(tipo === 5){document.getElementById("lubricentro").className = "img-responsive";}
					else
				  {document.getElementById("lubricentro").className = "img-responsive no_select";}

	if(tipo === 2){document.getElementById("servicio").className = "img-responsive";}
					else
				  {document.getElementById("servicio").className = "img-responsive no_select";}

}
