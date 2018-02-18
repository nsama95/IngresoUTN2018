/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numdividendo;
    var numdivisor;
    var resultado;
    var resto;
    numdividendo = parseInt(document.getElementById("numeroDividendo").value);
    numdivisor = parseInt(document.getElementById("numeroDivisor").value);
    resultado = numdividendo/ numdivisor;
    resto= numdividendo % numdivisor;
    alert ("El resto es  " + resto);	
}
