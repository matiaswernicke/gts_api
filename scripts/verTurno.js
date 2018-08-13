
function verTurno(id){
	
	console.log('verTurno '+id);
	var swci_url = getCookie('swci_url');
	var json=JSON.stringify({"empresa":"wgts","id":id});
	
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
	var pantalla = '<div class="d-flex p-3 my-3 box-shadow" >'
	var pantalla = pantalla + '<div class="container" style="background-color:#F3F1F1">'
	var pantalla = pantalla + '<div class="row text-left my-3" >'
	var pantalla = pantalla + '<div class="col-12"><strong>Empresa</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_empresa+'</div>'
	var pantalla = pantalla + '<div class="col-12"><strong>E-mail empresa</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_empresa_mail+'</div>'
	var pantalla = pantalla + '</div>'
	var pantalla = pantalla + '<div class="row text-left my-3" style="background-color: darkgray">'
	var pantalla = pantalla + '<div class="col-12"><strong>Apellido y Nombre</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_chofer+'</div>'
	var pantalla = pantalla + '<div class="col-12"><strong>E-mail</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_mail+'</div>'
	var pantalla = pantalla + '<div class="col-12"><strong>Telefono</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_telefono+'</div>'
	var pantalla = pantalla + '<div class="col-12"><strong>Patente 1</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_patente1+'</div>'
	var pantalla = pantalla + '<div class="col-12"><strong>Patente 2</strong></div>'
	var pantalla = pantalla + '<div class="col-12">'+respuesta.tu_patente2+'</div>'
	var pantalla = pantalla + '</div>'	
	var pantalla = pantalla + '</div>'
	var pantalla = pantalla + '</div>'

	console.log('mostrar pantalla')
	
			bootbox.dialog({
 		   	message: pantalla,
			title: "<h3><b>Turno Nro "+id+"</b></h3>",
	    	className: 'successes',
buttons: {
    salir: {
        label: "Volver",
        className: 'btn-primary btn-sm',
        callback: function(){console.log('Fin');}
    },
    anular: {
        label: "Anular",
        className: 'btn-danger btn-sm',
        callback: function(){anular_turno(id,respuesta.tse_nombre,respuesta.tu_patente1,respuesta.tu_patente2,respuesta.tu_hora);;}
    },	
    mail: {
        label: "Enviar Mail",
        className: 'btn-success btn-sm',
        callback: function(){descargar_pdf(id);}
    },
    qr: {
        label: "Código QR",
        className: 'btn-success btn-sm',
        callback: function(){descargar_qr(id);}
    }
}
			//callback: function(){ location.href='menu.html';; }
		});

	
    }
  }
console.log('json ='+json)
xmlhttp.open("POST",swci_url+"/gts_phpApp/leerUnTurno.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.withCredentials = "true";
xmlhttp.send(json);
}