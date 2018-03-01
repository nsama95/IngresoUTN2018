//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
    var iva;
    var preciofinal;
    numero= parseInt(prompt("Ingrese el importe del producto:"));
    iva= numero*21/100
    preciofinal= numero+iva;
    document.getElementById("importe").value = preciofinal;
}

