/*L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo se l'utente ha vinto.*/

/*instauriamo una funzione che ci permetta di identificare se la somma è pari o dispari.*/

function risultato (var1)
{
    if (var1 %2 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

/* Creiamo una variabile che generi un numero casuale*/
function randomNumber (min, max)
{
    return Math.floor( Math.random() * (max - min) + min );
}
// diamo all'utente la possibilità di inserire il numero e la sua scelta

var numero = parseInt( prompt("inserire un numero da 1 a 5"));
var scelta = prompt("secondo te è pari o dispari?(scrivere pari o dispari)");
// creiamo una variabile che sia la somma del numero utente e di un numero casuale.

var somma = numero + randomNumber(1, 5)

console.log(numero);
console.log(randomNumber(1,5));
console.log(somma);

//diamo al programma delle scelte in base alle quali verificare se l'utente abbia vinto o meno.
if( risultato(somma) && scelta == "pari")
{
    alert("complimenti hai vinto!");
}
else if ( risultato(somma) == false && scelta == "dispari" )
{
    alert("complimenti hai vinto!");
}
else 
{
    alert("peccato hai perso!");
}