/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var resultado;
    var descuento;
    importe = parseInt(document.getElementById("importe").value);
    resultado = importe * 25 /100;
    descuento = importe - resultado;
	document.getElementById("resultado").value = descuento;
}
