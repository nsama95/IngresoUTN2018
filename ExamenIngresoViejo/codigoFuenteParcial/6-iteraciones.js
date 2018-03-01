//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
    var importe_mayor;
    var importe_menor;
    var flag=0;
    
    for(i=1;i<=7;i++)
    {
    importe= parseFloat(prompt("Ingrese el importe: "));
    while(importe<=0)
    {
    importe= parseFloat(prompt("Error.Ingrese el importe: "));
    }
    if(importe>importe_mayor||flag==0)
    {
        importe_mayor=importe;
    }
    if(importe<importe_menor || flag ==0)
        importe_menor=importe;
        flag=1;
    }
    alert("La mayor venta es  "+importe_mayor+"  y la menor venta es de  " +importe_menor);
}