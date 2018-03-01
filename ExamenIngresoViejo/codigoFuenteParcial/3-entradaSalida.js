//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
    var largo;
    var perimetro;
    var alambre;
    ancho= parseInt(document.getElementById("ancho").value);
    largo= parseInt(document.getElementById("ancho").value);
    perimetro= ancho*2 +largo*2;
    alambre= perimetro*6;
    alert("Se necesita de alambre  "+alambre+ "  mt.");
}

