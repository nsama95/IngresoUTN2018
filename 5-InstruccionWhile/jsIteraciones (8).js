// fijarse que en los neg me da 1 y no tiene que aparecer nada//
function Mostrar()
{

	var numero;
	var positivo=0;
	var negativo=1;
	var respuesta="si";
	var contadorneg;
	while( respuesta =="si")
	{
		numero= parseInt(prompt("Ingrese un numero."));
		
		if(numero>=0)
		{
			positivo= positivo + numero;
		}
		else 
		{
			negativo= negativo*numero;
			contadorneg++;
		}
		respuesta= prompt("Desea continuar?");
	}
document.getElementById('suma').value=positivo;
if(contadorneg == 0)
		{
			negativo= 0;
		}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN