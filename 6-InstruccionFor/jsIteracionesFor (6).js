function Mostrar()
{   var numero;
    var contpares=0;
    var i;
    numero= parseInt(prompt("Ingrese un numero: "));
    for(i=1;i<= numero;i++)
    {
        if (i%2==0)
        {
            contpares++;
            console.log(i);
        }
        /*
        for(i=1;i<= numero;i++)
    {
        if (i%2==1)
        {
            continue;
        }
        contpares++;
            console.log(i);
        */
    }
    console.log("Cantidad de numero pares: " +contpares);
}//FIN DE LA FUNCIÓN