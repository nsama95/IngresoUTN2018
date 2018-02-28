function Mostrar()
{
    var numero;
    var contdivisores=0;
    var i;
    numero= parseInt(prompt("Ingrese un numero: "));
    for(i=1;i<= numero;i++)
    {
        if (numero%i==0)
        {
            contdivisores++;
            console.log(i);
        }
    }
    console.log("Cantidad de numero divisores: " +contdivisores);
//FIN DE LA FUNCIÓN