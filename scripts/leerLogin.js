
function leerVariables(){
            var swci_user = getCookie('swci_user');
			var respuesta = JSON.parse(swci_user);
			if(respuesta.conectado == true){location.href='menu.html';}else{location.href='login.html';}
}
