function salir(){
	console.log('Leer Variables');
	var swci_user = getCookie('swci_user');
	var respuesta = JSON.parse(swci_user);
	var json=JSON.stringify({"usuario":respuesta.usuario,"clave":'',"conectado":''});
	setCookie('swci_user', json, 100);
	setCookie('swci_apynom', '', 1000);
	location.href='login.html';
}
