
function leerLogin(){
	//setCookie('swci_url', 'http://localhost/gts/', 10000);
	setCookie('swci_url', 'http://66.175.217.139/', 10000);
	//setCookie('swci_url', 'http://66.175.217.139/', 100);
	var swci_user = getCookie('swci_user');
	var swci_url  = getCookie('swci_url');
		console.log('swci_user = '+swci_user+'   swci_url = '+swci_url);
		if(!swci_user)
			{location.href=swci_url+'gts_app/login.html'}
			else
			{var respuesta = JSON.parse(swci_user);
			 	if(respuesta.conectado == true)
					{location.href=swci_url+'gts_app/menu.html'}
					else
					{location.href=swci_url+'gts_app/login.html'}
			}
}
