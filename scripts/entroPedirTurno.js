
function entroPedirTurno(){
	console.log('Leer entroPedirTurno');
	setCookie('turno_tipo', 0, 1000);
	setCookie('turno_vehiculo', 0, 1000);
	setCookie('hora', 0, 1000);
	
	var date = new Date();
	
	var dia = date.getDay()
	//console.log('El dia es '+dia)
	if (dia == 0){date.setDate(date.getDate() + 1);}
	//console.log('La fecha es '+date)
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();

	if (month < 10) month = "0" + month;
	if (day < 10) day = "0" + day;

	var today = year + "-" + month + "-" + day;       
	document.getElementById("fecha").value = today;
}
