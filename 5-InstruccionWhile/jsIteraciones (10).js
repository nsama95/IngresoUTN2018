/*Al presionar el botón pedir números hasta que el usuario quiera, mostar:
ok Suma de los negativos. 
ok 2-Suma de los positivos.
 ok 3-Cantidad de positivos.
  ok 4-Cantidad de negativos.
   ok 5-Cantidad de ceros. 
   ok 6-Cantidad de números pares.
   ok 7-Promedio de positivos.
	ok 8-Promedios de negativos.
	  9-Diferencia entre positivos y negativos, (positvos-negativos)*/
function Mostrar()
{	var sumaPos=0;
	var sumaNeg=0;
	var contPos=0;
	var contNeg=0;
	var contCeros=0;
	var contPares=0;
	var promPos;
	var promNeg;
	var diferencia;
	var numero;
	var respuesta;

	
	do{
		numero=parseInt(prompt("Ingrese un numero:  "));
	
		if(numero>0)
		{
			sumaPos= sumaPos + numero;
			contPos++;
			
		}
		else if (numero<0)
		{
			sumaNeg= sumaNeg+ numero;
			contNeg++;
			
		}
	   else
		{
			contCeros++;
		}
		if (numero %2==0)
		{
			contPares++;
		}
		
		respuesta= prompt("Desea continuar? ");
	}while(respuesta=='s')
	promPos= sumaPos/contPos;
	promNeg= sumaNeg/contNeg;
	diferencia= sumaPos-sumaNeg;
		
document.write("La suma de Positivos es:  " +sumaPos+ "<br/>");
document.write("La suma de Negativos es:  " +sumaNeg+ "<br/>");
document.write("La cantidad de Positivos es:  " +contPos+ "<br/>");
document.write("La cantidad de Negativos es:  " +contNeg+ "<br/>");
document.write("La cantidad de Ceros es:  " +contCeros+ "<br/>");
document.write("El promedio de Positivos es:  " +promPos+ "<br/>");
document.write ("El promedio de Negativos es:  " +promNeg+ "<br/>");
document.write("La cantidad de Pares es:  " +contPares+ "<br/>");
document.write("La diferencia entre positivos y negativos es:  " +diferencia+ "<br/>");
}//FIN DE LA FUNCIÓN