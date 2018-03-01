//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var notas;
var sexo;
var promedio;
var contNotas=0;
var notamenor;
var cantVarones=0;
var flag=0;


for(i=1;i<6;i++)
{
    nota= parseInt(prompt("ingrese nota del alumno: "));
    while(notas<0 && notas>10)
    {
        nota= parseInt(prompt("Error.ingrese nota del alumno: "));
    }
    sexo= prompt("Ingrese el sexo m/f: ");
    while(sexo!= 'f' || sexo != 'm')
    {
    sexo= prompt("Error.Ingrese el sexo m/f: ");
    }
    contNotas=notas;

    if(nota<notamenor || flag==0)
    {
        notamenor=nota;
        flag=1;
    }
    if(sexo="m" && nota>=6)
    {
        cantVarones++;
    }
}
promedio= contNotas/6;
alert("El promedio total de notas es de  " +promedio+ "\n La nota más baja es: "+notamenor+ "\nLa cantidad de varones con nota menor o igual a 6 es de : " +cantVarones)
}
