function Mostrar()
{
//tomo la edad  
var edad;
edad= parseInt(document.getElementById("edad").value);
if (!(edad >= "13" && edad <= "18"))
{
    alert("Usted NO es adolecente");
}

}//FIN DE LA FUNCIÓN