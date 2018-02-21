function Mostrar()
{
var sexo = prompt("ingrese f ó m ");
while(sexo != 'f' && sexo != 'm')
{
    sexo= prompt("ingrese f ó m ");
}
 
document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN

/*otra manera de hacerlo
while(sexo != 'f' && sexo != 'm' && sexo != 'F' && sexo!='M')
/* o puede ser de la siguiente forma si quiero que convierta todo dato ingresado a miniscula
var sexo = prompt("ingrese f ó m ");
sexo= sexo.toLowercase();
while(sexo != 'f' && sexo != 'm')
{
    alert("Error. Ingrese f o m");
    sexo= sexo.toLowercase();
}
document.getElementById('Sexo').value=sexo;

/*Si quiero que aparezca Femenino o masculino agregando f o m, se reliza de la siguiente manera.
while(sexo != 'f' && sexo != 'm')
{
//alert("Error. Ingrese f o m");
}
 if(sexo =='f')
 {
     sexo= "Femenino"
 }
 else
 {
     sexo= "Masculina"
 }
//document.getElementById('Sexo').value=sexo;
