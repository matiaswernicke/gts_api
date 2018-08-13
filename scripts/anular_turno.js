function anular_turno(id,servicio,patente1,patente2,hora)
{

var patentes = patente1
if(patente2.length > 1){var patentes = patentes + ' y '+patente2}
var mensaje = "Esta seguro de anular el turno para el sector "+servicio+" de las "+hora+" para la petente "+patentes+"? ";

bootbox.confirm({
    message: mensaje,
    buttons: {
        confirm: {
            label: 'Aceptar',
            className: 'btn-success'
        },
        cancel: {
            label: 'Cancelar',
            className: 'btn-danger'
        }
    },
    callback: function (result) {
        console.log('This was logged in the callback: ' + result);
		if(result){console.log('Salgo por si');
				   //recibos_imprimir('A','5','30');
				   anular(id);
				  }
		      else{console.log('Salgo por No')}
    }
});
}


function anular(id){
	console.log('anular '+id)
	var swci_url = getCookie('swci_url');
	var xmlhttp;
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
    	value=xmlhttp.responseText;
        	window.sessionStorage.setItem("secion", value );
	        console.log("Respuesta: "+ value);
			$('#procesando').modal('hide');
			//document.getElementById('cargando').style.display = 'none';
			
        	var respuesta = JSON.parse(value);
			if(respuesta.afectados < 1){var texto_pantalla = 'El turno no pudo ser anualdo';var clase = 'error'}
			if(respuesta.afectados > 0){var texto_pantalla = "El turno ha sido anulado";var clase = 'successes'}
        	
			bootbox.alert({
				message: texto_pantalla,
				title: 'Anular Turno',
				className: clase,
				callback: function () {
					location.href='menu.html'; 
					console.log('This was logged in the callback!');
					}
			})

    }
  }

var json = JSON.stringify({"id":id});
console.log('llegue '+json);
xmlhttp.open("POST",swci_url+"gts_turnos/turnos_anular_graba.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);
	
}
