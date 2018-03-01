//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
		var numero_uno;
        var numero_dos;
        var multiplicacion=0;
        var suma=0;
        var resta=0;
        numero_uno= parseInt(prompt("Ingrese un numero: "));
        numero_dos= parseInt(prompt("Ingrese otro numero: "));
        
        if(numero_uno == numero_dos)
        {
            multiplicacion= numero_uno*numero_dos;
        }
        else if (numero_uno>numero_dos)
        {
            resta= numero_uno - numero_dos;
        }
        else
        {
            suma=numero_uno + numero_dos;    
        }
        document.write("La multiplicacion es de: " +multiplicacion+ "<br/>");
        document.write("La resta es de: " +resta+ "<br/>");
        document.write("La suma es de: " +suma+ "<br/>");
        
}

