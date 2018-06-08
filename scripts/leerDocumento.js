
function leerDocumento(){
	var swci_user = getCookie('swci_user');
	var respuesta = JSON.parse(swci_user);
	document.getElementById("usuario").value = respuesta.usuario;
}
