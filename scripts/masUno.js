
function masUno(){
	
	console.log('Entro masUno');
	var swci_url = getCookie('swci_url');
	var swci_user = getCookie('swci_user');
	var respuesta = JSON.parse(swci_user);
	var usuario = respuesta.usuario;
	var usu_id  = respuesta.usu_id;
	var fecha = getCookie('fecha_misTurnos');
	console.log('Fecha de cooki = '+fecha)
	var sw_fecha = fecha.split("-");
	console.log(sw_fecha[0]+' '+sw_fecha[1]+' '+sw_fecha[2])
	var date = new Date(sw_fecha[0],sw_fecha[1]-1,sw_fecha[2]);
	console.log(date)
	
	var dia = date.getDay()
	console.log('El dia es '+dia)
	date.setDate(date.getDate() + 1)
	console.log('El dia +1 es '+date)
	if (dia == 0){date.setDate(date.getDate() + 1);}

	var fecha = new Date(date.getFullYear(),date.getMonth(),date.getDate()).toJSON().slice(0,10);
	setCookie('fecha_misTurnos', fecha, 1000);
	
	console.log('usuario = '+usuario+' swci_url = '+swci_url+' swci_user='+swci_user+' usu_id='+usu_id+' Fecha='+fecha );
	
	var json=JSON.stringify({"empresa":"wgts","usu_id":usu_id,"fecha":fecha});
	
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
	var devuelto = JSON.parse(xmlhttp.responseText);
	var fecha = devuelto.fecha_desde
	var respuesta = devuelto.devolver
	var titulo_fecha = fecha.substring(8,10)+'/'+fecha.substring(5,7)+'/'+fecha.substring(0,4);
	var titulo = 'Mis turnos del '+titulo_fecha;
	document.getElementById("titulo").innerHTML = titulo;
	entroMisTurnosPantalla(respuesta)
		
    }
  }
console.log('json ='+json)
xmlhttp.open("POST",swci_url+"/gts_phpApp/misTurnos.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.withCredentials = "true";
xmlhttp.send(json);
}