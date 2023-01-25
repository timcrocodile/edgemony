// ### Esercizio 1

// Sulla base della lezione del giorno, creare un mock in formato `JSON`.
// Riprendere uno degli esercizi passati (es. generatore di una card prodotto), eliminare eventuale chiamata fetch ed utilizzare il mock JSON creato per popolare i dati.

import myJson from "./mock.json" assert { type: "json" };

const quotes = myJson.quotes;

for (let i = 0; i < quotes.length; i++) {
  const quote = quotes[i];

  const card = document.createElement("div");
  card.classList.add("card");

  const quoteText = document.createElement("p");
  quoteText.classList.add("quote-text");
  quoteText.innerText = quote.quote;

  const quoteAuthor = document.createElement("p");
  quoteAuthor.classList.add("quote-author");
  quoteAuthor.innerText = quote.author;

  card.appendChild(quoteText);
  card.appendChild(quoteAuthor);

  document.body.appendChild(card);
}
