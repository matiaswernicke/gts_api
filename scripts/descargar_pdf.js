function descargar_pdf(id){
	
	var swci_url = getCookie('swci_url');
	var json=JSON.stringify({"empresa":"wgts","turno":id});
	console.log(json+'  '+id)
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
		//closeLoadingAnimation();
        console.log(value)
		respuesta = JSON.parse(xmlhttp.responseText);
		respuesta = JSON.parse(xmlhttp.responseText);
		
	
		pantalla = '<div class="embed-responsive embed-responsive-1by1">'
		pantalla = pantalla + '<iframe class="embed-responsive-item" src="'+swci_url+'gts_turnos/'+respuesta.pdf+'"></iframe>'
		pantalla = pantalla + '</div>'

		console.log(pantalla)
		bootbox.alert({
    		message: 'Se ha enviado el mail a la casilla de correo que figura el en el pedido de turno.',
			title: "Turno Nro "+id,
    		className: 'successes'
		});

		//document.location = swci_url+'gts_turnos/'+respuesta.qr;

    }
  }

		//alert(www  +"/app_ver_factura.php " + json);
		xmlhttp.open("POST",swci_url+"gts_turnos/app_turnos_pdf.php",true);
		xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
		//xmlhttp.withCredentials = "true";
		xmlhttp.send(json);


}
