function Mostrar()
{
//tomo la edad  
var edad;
edad= parseInt(document.getElementById("edad").value);

if(edad<13)
{
    alert("Niño");
}
else if(edad<=17)
{
 alert("Adolecente");   
} 
else
{
 alert("Adulto");
}

}//FIN DE LA FUNCIÓN