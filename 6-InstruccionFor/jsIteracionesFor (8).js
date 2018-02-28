function Mostrar()
{
    var numero;
    var esprimo= true;
    var i;
 
    numero= parseInt(prompt("Ingrese un numero: "));
    for(i=2;i< numero;i++)
    {
        if (  numero % i== 0 )
        {
            esprimo= false;
            break;
        }
    }
    if (esprimo)
    {
        alert( numero+ " es primo.");
    }
    else
    {
        alert(numero+ "  no es primo");
    }

}//FIN DE LA FUNCIÓN