function descargar_qr(id){
	
	//startLoadingAnimation();
	console.log('Descargar qr')
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
		pantalla = '<div class="row">'
		pantalla = pantalla + '<div class="col-md-12 col-sm-12">'
		pantalla = pantalla + '<img src="'+swci_url+'gts_turnos/'+respuesta.qr+'" class="img-responsive centrar_imagen" width="100%">'
		pantalla = pantalla + '</div>'
		pantalla = pantalla + '</div>'
		console.log(pantalla)
		bootbox.alert({
    		message: pantalla,
			title: "Turno Nro "+id,
    		className: 'successes'
		});

    }
  }

		//alert(www  +"/app_ver_factura.php " + json);
		xmlhttp.open("POST",swci_url+"gts_turnos/app_turnos_pdf.php",true);
		xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
		//xmlhttp.withCredentials = "true";
		xmlhttp.send(json);


}
