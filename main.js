/* :puntare_a_destra: Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
:puntare_a_destra:  Palidroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
:boolean-hug: Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
non partiamo a bomba con la scrittura delle funzioni, ma prima scriviamo la logica come facciamo di solito, poi passiamo al refactoring e cerchiamo di capire cosa sia meglio creare come funzione */


/* pari e dispari */

/* esecuzione */

/* 
-chiedere all' utente di scegliere con un prompt pari o dispari

-chiedere all' utente di scegliere con un prompt un numero da 1 a 5

-uso if else per validare o meno entrambi i prompt

-genero un numero random per il computer da 1 a 5

-metto il numero generato nella funzione

-sommiamo i 2 numeri

-creiamo if/else per determinare se sono pari o dispari

-li mettiamo dentro la funzione

-dichiariamo il vincitore



*/

let sceltaUtente = prompt ('Preferisci pari o dispari?');

if (sceltaUtente !== 'pari' && sceltaUtente !== 'dispari') {
    alert ('scegli un valore valido');
}

let numeroUtente = Number (prompt ('Scegli un numero compreso tra 1 e 5'));

if (numeroUtente < 1 || numeroUtente > 5) {
    alert ('scegli un valore valido');
} 

let numeroComputer = Math.floor(Math.random() * 5) + 1;



function sommaNumeriFunzione (numeroUtente , numeroComputer) {
    return numeroComputer += numeroUtente
}

const sommaNumeri = sommaNumeriFunzione (numeroUtente , numeroComputer)
console.log(numeroComputer);
console.log(sommaNumeri);

function pariDispari(sommaNumeri) {
    if (sommaNumeri % 2 === 0) {
        return true
    } else {
        return false
    }
}

let pariOdispari;

if (pariDispari (sommaNumeri)) {
    console.log('il risultato è pari');
    pariOdispari = 'pari'

} else {
    console.log('il risultato è dispari');
    pariOdispari = 'dispari'
}


if (sceltaUtente === 'pari' && pariOdispari === 'pari') {
    console.log('Congratulazioni, il risultato che hai scelto è pari come avevi previsto');
} else if (sceltaUtente === 'dispari' && pariOdispari === 'dispari') {
    console.log('Congratulazioni, il risultato che hai scelto è dispari come avevi previsto');
} else {
    console.log('Mi dispiace ma questa volta il risultato che è uscito è diverso da quello che hai scelto, perchè è ' + pariOdispari);
}





