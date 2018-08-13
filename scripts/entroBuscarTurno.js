
function entroBuscarTurno(){
	console.log('Leer entroBuscarTurno');
	var swci_url = getCookie('swci_url');
	var swci_user = getCookie('swci_user');
	var respuesta = JSON.parse(swci_user);
	var usuario = respuesta.usuario;
	
	var turno_tipo = getCookie('turno_tipo');
	var turno_vehiculo = getCookie('turno_vehiculo');
	var fecha = getCookie('turno_fecha');
	
	console.log('turno_tipo = '+turno_tipo+'  fecha='+fecha+' turno_vehiculo='+turno_vehiculo);
	
	var json=JSON.stringify({"empresa":"wgts","usuario":usuario,"fecha":fecha,"turno_tipo":turno_tipo});
	
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
/*######################################
### buscar datos y armar la pantalla ###
#####################################*/
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
	var value = xmlhttp.responseText;
	console.log('Respuesta :'+value);
	var respuesta = JSON.parse(xmlhttp.responseText);
	var i = 0;
	var pantalla = '';
	for(items in respuesta){
		//alert("Nombre:"+z[items].nombre+"  "+"id:"+z[items].id)
		// btn-outline-success - btn-outline-danger
		i = i + 1;
		//console.log(respuesta[items].hora+'  '+respuesta[items].estado)
		if(respuesta[items].estado == 1){var clase_estado = 'btn-danger'
										 var accion = ''
										 }
										else
										{var clase_estado = 'btn-outline-success'
										var accion = 'onClick="seleccionarHora(\''+respuesta[items].hora+'\')" '
										}
		pantalla = pantalla + '<div class="col-6">'
        pantalla = pantalla + '<button class="btn '+clase_estado+' my-6 my-sm-6" data-toggle="modal" '+accion+' >'+respuesta[items].hora+'</button>'
		pantalla = pantalla + '</div>'
		//console.log(pantalla)
		}	
	document.getElementById('mostrar_horarios').innerHTML = pantalla

	/**************************
	*** Generar la pantalla ***
	**************************
	var pant = '<table id="muestra_comprobante" class="table table-striped"><thead><tr><td>Comprob. Nro</td><td>Cliente</td><td>Total</td></tr>    </thead><tbody>'
	
	var z = respuesta.comprobantes
	var i = 0;
	for(items in z){
	pant += '<tr style="font-size:80%" onclick="mostrarComprobante('+z[items].id+')"><td>'+z[items].comprobante+'</td><td>'+z[items].nombre+'</td><td>'+z[items].importe+'</td></tr>'

	}
		pant += '</tbody></table>';
		document.getElementById("tab_comprobante").innerHTML=pant;
		*/
    }
  }
xmlhttp.open("POST",swci_url+"/gts_phpApp/leerTurnos.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.withCredentials = "true";
xmlhttp.send(json);

	
}
