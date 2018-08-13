function reservarTurnoConfirma()
{

var empresa = document.getElementById("empresa").value;
var email_empresa = document.getElementById("email_empresa").value;
var turno_vehiculo = getCookie('turno_vehiculo');
var turno_tipo = getCookie('turno_tipo');
var hora = getCookie('hora');
var fecha = getCookie('turno_fecha');
var nombre = document.getElementById("nombre").value;
var email = document.getElementById("email").value;
var telefono = document.getElementById("telefono").value;

var swci_url  = getCookie('swci_url'); // http://localhost/gts/
var respuesta = JSON.parse(swci_user);
var usu_id = respuesta.usu_id;
	
	
var patente1 = document.getElementById("patente1").value;
var patente2 = document.getElementById("patente2").value;

var error = '';
if(nombre.length < 1){error = error+'- Apellido y nombre es obligatorio.</br>'}
if(email.length < 1){error = error+'- email es obligatorio.</br>'}
if(telefono.length < 1){error = error+'- telefono es obligatorio.</br>'}
if(patente1.length < 1 && patente2.length < 1 ){error = error+'* Debe ingresar al menos una patente'}

	if(turno_tipo == 1){var titulo_turno = 'Gomeria'}
	if(turno_tipo == 2){var titulo_turno = 'Taller'}
	if(turno_tipo == 3){var titulo_turno = 'Lavadero'}
	if(turno_tipo == 5){var titulo_turno = 'Lubricentro'}
	
	if(turno_vehiculo == 1){var titulo_vehiculo = 'camion'}
	if(turno_vehiculo == 2){var titulo_vehiculo = 'auto'}

//alert('estoy')
//bootbox.alert('Danger!!' ).find('.modal-content').css({'background-color': '#f99', 'font-weight' : 'bold', color: '#000', 'font-size': '2em', 'font-weight' : 'bold'} );
if(error.length > 4){
	bootbox.alert({
    	message: error,
		title: "Los siguientes datos son obligatorios",
    	className: 'error'
	});
	return;
	}
/**********************
*** Grabar el turno ***
**********************/
$('#modalTurnos').modal('hide');
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
 	console.log("recibo: "+ xmlhttp.responseText);
	window.sessionStorage.setItem("secion", value );
	respuesta = JSON.parse(xmlhttp.responseText);
	// Mensaje de grabacion
	if(respuesta.afectados > 0){
		bootbox.alert({
 		   	message: "<p>Su turno para el día "+fecha+" a las "+hora+" ha sido reservad.</p><p>Debe concurrir 30 minutos antes con el comprobante de reserva.</p><p>Se ha enviado un mail a "+email+". Si no lo encuentra en su casilla de recibidos, revise la casilla de Spam.",
			title: "<h3><b>Turno Asignado</b></h3>",
	    	className: 'successes',
			callback: function(){ location.href='menu.html';; }
		});
		console.log('Continuara....')
		turnos_pdf(respuesta.id)
	} // respuesta.afectados
		else {bootbox.alert({
 		   	message: "<p>Su turno para el día "+fecha+" a las "+hora+" No se ha podido reservar.</p>.",
			title: "<h3><b>Turno Rechazado</b></h3>",
	    	className: 'error',
			
		}
		);
		console.log('Volver al menu.')
		}

    }
  }
console.log(1);
var json=JSON.stringify({"vehiculo":titulo_vehiculo,"tipo_turno":titulo_turno,"hora":hora,"nombre":nombre,"email":email,"telefono":telefono,"patente1":patente1,"patente2":patente2,"fecha":fecha,"empresa":empresa,"email_empresa":email_empresa,"usu_id":usu_id});
console.log("json vehiculo = "+titulo_vehiculo+" tipo_turno = "+titulo_turno+" hora = "+hora+" nombre = "+nombre+" email = "+email+" telefono = "+telefono+" patente1 = "+patente1+" patente2 = "+patente2+" fecha = "+fecha+" empresa = "+empresa+" email_empresa"+email_empresa+" usu_id="+usu_id);
console.log(21);
xmlhttp.open("POST",swci_url+"gts_turnos/turnos_graba.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);

}
