function validar_usuario(){
	var swci_url  = getCookie('swci_url'); // http://localhost/gts/
	var usuario = document.getElementById("usuario").value;
	var clave = document.getElementById("password").value;
	//var conectado = document.getElementById("conectado").value;
	var conectado = document.getElementById("conectado").checked;
	
	if(usuario.indexOf('@') != -1)
			{var programa = swci_url+"gts_turnos/validacion_chofer.php"}
			else
			{var programa = swci_url+"gts_turnos/validacion_empresa.php"}
	
	console.log('Programa = '+programa);

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
				//array("estado"=>1,"principal"=>$principal,"saldo"=>$saldo,"nombre"=>"","email"=>"","nombre_empresa"=>$data_empresa->em_nombre,"em_mail_empresa"=>$data_empresa->em_mail,"em_telefono"=>$data_empresa->em_telefono);
				var respuesta = JSON.parse(xmlhttp.responseText);
				if(respuesta.estado==0){
					bootbox.alert({
    				message: 'La clave y el usuario ingresado no se corresponden.',
					title: "Error de acceso",
    				className: 'error'
					});
					return;}
					else
					{var json=JSON.stringify({"usuario":usuario,"clave":clave,"conectado":conectado,"id_usu":respuesta.id_usu,"nombre":respuesta.nombre,"email":respuesta.email,"nombre_empresa":respuesta.nombre_empresa,"em_mail_empresa":respuesta.em_mail_empresa,"em_telefono":respuesta.em_telefono,"usu_id":respuesta.usu_id});
					 console.log("json = "+json)
					 setCookie('swci_user', json, 1000);
					 setCookie('swci_apynom', respuesta.nombre, 1000);
					 location.href='menu.html'; }
    		  	}
     		}
			//----------------------
			console.log('Programa = '+programa)
			xmlhttp.open("POST",programa,true);
			xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
			//xmlhttp.withCredentials = "true";
			xmlhttp.send(json);
}
