
function leerDocumento(){
	var swci_user = getCookie('swci_user');
	setCookie('swci_apynom', '', 1000);
	var respuesta = JSON.parse(swci_user);
	document.getElementById("usuario").value = respuesta.usuario;
}
