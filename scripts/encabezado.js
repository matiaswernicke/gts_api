// JavaScript Document
//var nombre = 'appellido y nombre'
var swci_user  = getCookie('swci_user');
var respuesta = JSON.parse(swci_user);
var encabezado = `<nav class="navbar navbar-expand-lg fixed-top" style="background:#FFC400">
			<div class="col-2 col-sm-2">
		      <img src="images/logo_empresa.png" alt="" width="30" height="30">
			</div>
    		<div class="col-7 col-sm-7 text-right ">`+
    	  		respuesta.nombre
			+`</div>
			<div class="col-3  col-sm-3 text-right">
 				<button type="button" class="close" data-dismiss="modal" onClick="salir()">×</button>
			</div>
	    </nav>`
document.write(encabezado)
