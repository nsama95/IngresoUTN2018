function Mostrar()
{
//rehacerlo!
	var numero;
	numero= parseInt(prompt("ingrese un número entre 0 y 10."));
	while(!(numero>=0 && numero<=10))
	{
		numero=parseInt(prompt("ingrese nuevamente un número entre 0 y 10."));
	}
	alert("Correcto");
}//FIN DE LA FUNCIÓN