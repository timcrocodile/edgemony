let operation = prompt(
  "benvenuto nella tua applicazione di calcolo personale... quale operazione di calcolo vorresti effettuare ? scrivilo nel riquadro sceglieno fra queste quattro ADDIZIONE-SOTTRAZIONE-MOLTIPLICAZIONE-DIVISIONE"
);

let num1 = prompt("inserisci il primo numero");
num1 = parseInt(num1);

let num2 = prompt("inserisci il secondo numero");

num2 = parseInt(num2);

//esercizio base con if ed else if

if (operation === "addizione") {
  console.log(num1 + num2);
} else if (operation === "sottrazione") {
  console.log(num1 - num2);
} else if (operation === "moltiplicazione") {
  console.log(num1 * num2);
} else if (operation === "divisione") {
  console.log(num1 / num2);
} else {
  console.log("hai sbagliato qualcosa");
}

// questo sotto invece è l'avanzato con lo switch

// switch (operation) {
//     case addizione:
//       console.log("num1+num2");
//       break;
//     case sottrazione:
//       console.log("num1-num2");
//       break;
//     case moltiplicazione:
//       console.log("num1*num2");
//       break;
//     case divisione:
//       console.log("num1/num2");
//       break;
//     default:
//       console.log("probabilmente hai scritto male l'operatore o uno dei numeri");
//   }

//quest'ultimo con l'operatore ternario

// let risultato =
// operation === "addizione"
//   ? num1 + num2
//   : operation === "sottrazione"
//   ? num1 - num2
//   : operation === "moltiplicazione"
//   ? num1 * num2
//   : operation === "divisione"
//   ? num1 / num2
//   : "operazione non riconosciuta";

// console.log(risultato);
