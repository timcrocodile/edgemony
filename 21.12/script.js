// # Esercizio 1

// Sulla base della lezione del giorno:

// - scrivere una prima funzione che presa un stringa come argomento, ritorni la stessa stringa + la parola `bootcamp`;

function esercizio1(string) {
  console.log(string + " bootcamp");
  return string + " bootcamp";
}
esercizio1("ecco la stringa iniziale + ");

// Esercizio 2

// - scrivere un oggetto col vostro nome che vi identifichi in proprietà (nome, cognome, ecc...) e per metodi (es. possono anche essere semplici console.log di voi che eseguite un hobby)

const tim = {
  name: "tim",
  surname: "crocodile",
  age: 99,
  tifoso: si,
  calcio: function () {
    console.log("amo addentare palle da calcio!");
  },
  dieta: function () {
    console.log(
      "sono vegano.. perchè mangio solo umani che lo sono a sua volta"
    );
  },
};
