import myJson from "./mock.json" assert { type: "json" };

let classifica = [
  { id: 1, squadra: "napoli", punti: 60 },
  {
    id: 2,
    squadra: "juventus",
    punti: 50,
  },
  { id: 3, squadra: "inter", punti: 45 },
  { id: 4, squadra: "sampdoria", punti: 15 },
  { id: 5, squadra: "sassuolo", punti: 20 },
  { id: 6, squadra: "roma", punti: 66 },
];



function calcolaPunti(classifica) {
  let puntiMeno47 = 0;
  let puntiPiu47 = 0;

  classifica.forEach(function (squadra) {
    if (squadra.punti < 47) {
      puntiMeno47 += squadra.punti;
    } else {
      puntiPiu47 += squadra.punti;
    }
  });

  return { puntiMeno47: puntiMeno47, puntiPiu47: puntiPiu47 };
}

let risultato = calcolaPunti(classifica);
console.log(
  "le squadre che hanno totalizzato meno di 47 punti in tutto hanno totalizzato: " +
    risultato.puntiMeno47
);
console.log(
  "le squadre che hanno totalizzato più di 47 punti in tutto hanno totalizzato: " +
    risultato.puntiPiu47
);



const puntiBarra = (calcolaPunti(classifica)) => {
    const wrapper = document.createElement("div");
    const textEl = document.createElement("h4");
    const statusEl = document.createElement ("div");

    wrapper.className = "puntibarra";
    text.textContent = classifica;
    statusEl.className = "puntibarra_status";
    statusEl.style.height = "0px";

        status.style.height = `${punti*10}px`;

    wrapper.append(textEl,statusEl);
    return wrapper;
}