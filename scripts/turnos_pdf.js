function turnos_pdf(turno)
{
var xmlhttp;
console.log('turnos_pdf')
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
    //document.getElementById("mostrarPDF").innerHTML=xmlhttp.responseText;
	//$('#ModalImprimirPDF').modal('show')
	delete_cookie('turno_vehiculo');
	delete_cookie('turno_tipo');
	delete_cookie('hora');
	delete_cookie('turno_fecha');
	
	//location.href='menu.html';
    }
  }
var swci_url  = getCookie('swci_url'); // http://localhost/gts/
var json=JSON.stringify({"turno":turno});
xmlhttp.open("POST",swci_url+"gts_turnos/turnos_pdf.php",true);
xmlhttp.setRequestHeader("Content-type","application/json;charset=UTF-8");
xmlhttp.send(json);

}
