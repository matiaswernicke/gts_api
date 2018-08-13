
function seleccionarHora(hora){
	console.log('Hora = '+hora)
	setCookie('hora', hora, 10000);
	//location.href=swci_url+'gts_app/menu.html'
	location.href='reservarTurno.html'
}
