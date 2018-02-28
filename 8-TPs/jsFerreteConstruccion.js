/*2. Para el departamento de Construcción:
A.	Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var rectangulo;
    var total;
    largo= parseInt(document.getElementById("Largo").value);
    ancho= parseInt(document.getElementById("Ancho").value);
    rectangulo= (largo+ ancho)*2;
    total= rectangulo*3
    alert("Cantidad de alambre para el rectangulo " +total);
}
function Circulo () 
{
	var radio;
    var perimetro;
    var total;
    radio= parseInt(document.getElementById("Radio").value);
    perimetro= 2 * radio * Math.PI;
    total= perimetro*3 ;
    alert("Cantidad de alambre para el Circulo " +total);
}
function Materiales () 
{
    /* terminar*/
	var largo;
    var ancho;
    var rectangulo;
    var total;
    largo= parseInt(document.getElementById("Largo").value);
    ancho= parseInt(document.getElementById("Ancho").value);
    rectangulo= largoancho;
    total= rectangulo*3
    alert("Cantidad de alambre para el rectangulo " +total);
}