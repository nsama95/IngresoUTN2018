/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var resultado;
    var aumento;
    sueldo = parseInt(document.getElementById("sueldo").value);
    resultado = sueldo * 10 /100;
    aumento = sueldo + resultado;
	document.getElementById("resultado").value = aumento;
}
