// esercizio 1.1
// Sulla base della lezione di oggi, creare un intervallo temporale che simuli un conto alla rovescia, che dopo n secondi:

// mostra il timer in schermo, come visto a lezione;

const bodyEl = document.body;

const timeEl = document.createElement("div");

timeEl.className = "orologio";

bodyEl.appendChild(timeEl);

setTimeout(() => {
  timeEl.textContent = 3;
}, 1000);

setTimeout(() => {
  timeEl.textContent = 2;
}, 2000);

setTimeout(() => {
  timeEl.textContent = 1;
}, 3000);

setTimeout(() => {
  timeEl.textContent = "l'ora esatta è offerta da..";
}, 4000);

setInterval(() => {
  setTimeout(() => {
    timeEl.textContent = new Date();
  }, 5000);
}, 100);

// esercizio 1.2 che allo scadere del timer la pagina deve cambiare colore e il timer stesso deve scomparire;

// setTimeout(() => {
//   timeEl.remove();
// }, 8000);

// esercizio 1.3 la presenza di un pulsante STOP interrompe il flusso temporale, tramite il relativo clearInterval.

const btnEl = document.createElement("button");
btnEl.textContent = "STOP";
btnEl.classList = "bottoncino";

bodyEl.appendChild(btnEl);

btnEl.addEventListener("click", function () {
  clearInterval(ferma);
});

// per fare si che il bottone stop funzioni devo andare a modificare il codice da linea 30 a linea 34 con il codice sotto
// questo perchè il codice sopra era impostato per fare il count-down dopo 5 secondi

// let ferma;
// ferma = setInterval(() => {
//   timeEl.textContent = new Date();
// }, 1000);
