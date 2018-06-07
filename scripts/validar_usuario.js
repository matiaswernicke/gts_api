function validar_usuario(){
	var usuario = document.getElementById("usuario").value;
	var clave = document.getElementById("password").value;
	//var conectado = document.getElementById("conectado").value;
	var conectado = document.getElementById("conectado").checked;
	console.log('Conectado 01 = '+conectado);
	var error = '';
	if(usuario.length < 1){error = error+"<p>El campo <b>Usuario</b> es obligatorio</p>"};
	if(clave.length < 1){error = error+"<p>El campo <b>clave</b> es obligatorio</p>"};

	if(error.length > 5){
		bootbox.alert({
    		message: error,
			title: "Los siguientes datos son obligatorios",
    		className: 'error'
		});
		return;
	}					

	var json=JSON.stringify({"usuario":usuario,"clave":clave,"conectado":conectado});
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
				//alert('xmlhttp.readyState = '+xmlhttp.readyState+' xmlhttp.status = '+xmlhttp.status);
  				if (xmlhttp.readyState==4 && xmlhttp.status==200)
   			 {
				console.log('respuesta '+xmlhttp.responseText)
				var respuesta = JSON.parse(xmlhttp.responseText);
				if(respuesta.estado==0){
					bootbox.alert({
    				message: 'La clave y el usuario ingresado no se corresponden.',
					title: "Error de acceso",
    				className: 'error'
					});
					return;}
					else
					{setCookie('swci_user', json, 100);
					 location.href='menu.html'; }
    		  	}
     		}
			//----------------------
			xmlhttp.open("POST","http://localhost/gts/gts_turnos/validacion.php",true);
			xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
			//xmlhttp.withCredentials = "true";
			xmlhttp.send(json);
}
