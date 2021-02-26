// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

//creaiamo una function di controllo per una parola palindroma

function controllo(var1)
{   //creiamo un valore invertito della variabile
    var newvar = var1.split("").reverse("").join("");
    //diaciamo alla funzione di controllare se il valore inserito è uguale allo stesso valore invertito.
    //in caso positivo diciamo che la funzione è vera
    if( var1 == newvar)
    {
        return true;
    }
    else
    {
        return false;
    }
}

//diamo all'utente la possibilità di inserire la sua parola

var valoreUtente = prompt("Inserisci la tua parola");

//chiediamo al programma di fare la verifica e dare riscontro tramite un alert
if(controllo(valoreUtente))
{
    alert( valoreUtente + " è palindroma!");
}
else
{
    alert( valoreUtente + " non è palindroma!");
}