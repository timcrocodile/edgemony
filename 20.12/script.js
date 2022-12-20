// # esercizio 1

// Sulla base della lezione del giorno, scrivere un array inizialmente vuoto, e aggiungere al suo interno dieci elementi di tipo `string` a scelta, rispettando i seguenti punti:

// - utilizzare il ciclo for classico

// - sarà l'utente ad inserire queste stringhe (`prompt`)

// - alla fine, quando l'utente avrà inserito tutte e 10 le parole, stamparle in console

let borse = [];

for (let index = 0; index < 10; index++) {
  borse.push(prompt("scrivi 10 nomi di città e poi premi invio oppure ok"));
}

console.log(borse);
