// Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
//- va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
// Questo richiederà un minimo di ricerca.

const Distanza = prompt("Quanti km vuoi fare?");
const Anni = prompt("Quanti anni hai?");

// Calcolo del prezzo base
let PrezzoBigliettoTot = Distanza * 0.21;

// Controllo età e applico lo sconto
if (Anni < 18) {
    PrezzoBigliettoTot *= 0.80; // Sconto del 20%
} else if (Anni > 65) {
    PrezzoBigliettoTot *= 0.60; // Sconto del 40%
}

// Visualizzazione del prezzo finale con massimo due decimali
console.log("Il prezzo del biglietto è: €" + PrezzoBigliettoTot.toFixed(2));




