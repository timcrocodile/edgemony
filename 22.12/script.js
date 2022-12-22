// # Esercizio 1

// Sulla base della lezione del giorno, creare una nuova funzione che funzioni esattamente come il metodo `parseInt`che preso un numero come parametro lo ritorni senza virgola,
// es: 23.23323 => 23

// Al fine di risolvere l'esercizio non utilizzare il `parseInt` chiaramente, ma trovare una alternativa possibile, già vista a lezione oppure nuova cercando sulla rete.

// L'esercizio inoltre deve svilupparsi nell'osservanza dei concetti riguardo allo scope in javascript, quindi attenzione alla tipologia di varibili (var, let e const).

// prima idea di getto "errata" che mi era venuta

// function toglivirgola ( num.puntini ) {
//     if puntini true {
//         console.log (66)
//     }
// }

//cercando su google ho visto il concetto di resto che può essere usato per togliere le virgole in javascript.. veramente avevo trovato anche math floor e math ceilma sinceramente non li ho capiti molto, invece con il resto mi sembra abbastanza fluido ( almeno a me )

function toglivirgola(numero) {
  let novirgola;
  if (numero >= 0) {
    novirgola = numero - (numero % 1);
  }
  return novirgola;
}
console.log(
  toglivirgola(
    prompt("inserisci numero con il puntino per inserire i decimali ")
  )
);

// ho un problema poichè se inserisco il numero con la virgola mi da undefinded, invece con il puntino funziona ...
