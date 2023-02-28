import myJson from "./todos.json" assert { type: "json" };
import myDate from "./date.json" assert { type: "json" };
import myOra from "./ora.json" assert { type: "json" };

const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

//map per aggiungere priorità,data ed orario

function random_item(items) {
  return items[Math.floor(Math.random() * items.length)];
}

const updatedArray = myJson.map((element) => ({
  ...element,
  Priority: Math.floor(Math.random() * 4 + 1),

  Date: random_item(myDate),
  Ora: random_item(myOra),
}));

console.log(random_item(myDate));

//per adattare al formato DD.MM.YYYY
const oggi = new Date()
  .toLocaleDateString("it-IT", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  })
  .split("/")

  .join(".");

//con filter vado a distinguere in base alla data ed alla variabile impostata prima

const oggettiOdierni = updatedArray.filter(
  (updatedArray) => updatedArray.Date.data === oggi
);

const oggettifuturi = updatedArray.filter(
  (updatedArray) => updatedArray.Date.data > oggi
);
console.log(oggettifuturi);

const oggettipassati = updatedArray.filter(
  (updatedArray) => updatedArray.Date.data < oggi
);

console.log(oggettipassati);

//funzione che seleziona gli appuntamenti di oggi, anche in base all'orario (ordine crescente)
//  e priorità (se ci dovessero essere più appuntamenti nello stesso orario) ed in caso di data, orario e priorità uguali
//andrà a selezionare l'oggetto che incontra per primo perchè in teoria ha effettuato la prenotazione prima

const cardContainer = qS(".oggis");

if (oggettiOdierni.length === 0) {
  const noAppuntamenti = cE("h2");
  noAppuntamenti.textContent = "Oggi non ci sono appuntamenti.";
  noAppuntamenti.classList = "noapp";
  cardContainer.appendChild(noAppuntamenti);
} else {
  const oggettiPerData = {};
  oggettiOdierni.forEach((obj) => {
    const data = obj.Date.data;
    if (!oggettiPerData[data]) {
      oggettiPerData[data] = [];
    }
    oggettiPerData[data].push(obj);
  });

  Object.keys(oggettiPerData).forEach((data) => {
    const oggettiStessoOrario = {};
    oggettiPerData[data].forEach((obj) => {
      const orario = obj.Ora.orario;
      if (!oggettiStessoOrario[orario]) {
        oggettiStessoOrario[orario] = obj;
      } else if (obj.Priority < oggettiStessoOrario[orario].Priority) {
        oggettiStessoOrario[orario] = obj;
      }
    });
    const oggetti = Object.values(oggettiStessoOrario);
    oggetti.sort((a, b) => {
      if (a.Ora.orario < b.Ora.orario) {
        return -1;
      } else if (a.Ora.orario > b.Ora.orario) {
        return 1;
      } else {
        return 0;
      }
    });
    oggetti.forEach((obj) => {
      const card = cE("div");
      const title = cE("h5");
      const userId = cE("p");
      const id = cE("p");
      const completed = cE("p");
      const priority = cE("p");
      const date = cE("h3");
      const time = cE("h1");

      title.textContent = `Titolo : ${obj.title}`;
      userId.textContent = `UserId: ${obj.userId}`;
      id.textContent = `Id: ${obj.id}`;
      completed.textContent = `Completo: ${obj.completed}`;
      priority.textContent = `Priority: ${obj.Priority}`;
      date.textContent = `Date: ${obj.Date.data}`;
      time.textContent = `Time: ${obj.Ora.orario}`;

      card.classList.add("card");
      title.classList.add("title");
      date.classList.add("date");
      time.classList.add("time");
      priority.classList.add("priority");
      completed.classList.add("completed");
      id.classList.add("id");
      userId.classList.add("userId");

      card.append(time, date, priority, completed, id, userId, title);

      cardContainer.appendChild(card);
    });
  });
}
//con questa funzione vai a valorizzare i campi con l' id da cancellare e di conseguenza vado a rifare la funziona che sta sopra
//affinchè la mia agenda rischeduli un appuntamento per quell'ora libera che si è creata (sempre con gli stessi criteri della funzione sopra)
const deleteButton = qS("#delete-button");
const inputField = qS("#id-input");

function cancellaOggetto(id) {
  for (let i = 0; i < oggettiOdierni.length; i++) {
    if (oggettiOdierni[i].id == id) {
      oggettiOdierni.splice(i, 1);
      break;
    }
  }
}

function visualizzaOggetti() {
  cardContainer.innerHTML = "";

  if (oggettiOdierni.length === 0) {
    const noAppuntamenti = cE("h2");
    noAppuntamenti.textContent = "Oggi non ci sono appuntamenti.";
    noAppuntamenti.classList = "noapp";
    cardContainer.appendChild(noAppuntamenti);
  } else {
    const oggettiPerData = {};
    oggettiOdierni.forEach((obj) => {
      const data = obj.Date.data;
      if (!oggettiPerData[data]) {
        oggettiPerData[data] = [];
      }
      oggettiPerData[data].push(obj);
    });

    Object.keys(oggettiPerData).forEach((data) => {
      const oggettiStessoOrario = {};
      oggettiPerData[data].forEach((obj) => {
        const orario = obj.Ora.orario;
        if (!oggettiStessoOrario[orario]) {
          oggettiStessoOrario[orario] = obj;
        } else if (obj.Priority < oggettiStessoOrario[orario].Priority) {
          oggettiStessoOrario[orario] = obj;
        }
      });
      const oggetti = Object.values(oggettiStessoOrario);
      oggetti.sort((a, b) => {
        if (a.Ora.orario < b.Ora.orario) {
          return -1;
        } else if (a.Ora.orario > b.Ora.orario) {
          return 1;
        } else {
          return 0;
        }
      });
      oggetti.forEach((obj) => {
        const card = cE("div");
        const title = cE("h5");
        const userId = cE("p");
        const id = cE("p");
        const completed = cE("p");
        const priority = cE("p");
        const date = cE("h3");
        const time = cE("h1");

        title.textContent = `Titolo : ${obj.title}`;
        userId.textContent = `UserId: ${obj.userId}`;
        id.textContent = `Id: ${obj.id}`;
        completed.textContent = `Completo: ${obj.completed}`;
        priority.textContent = `Priority: ${obj.Priority}`;
        date.textContent = `Date: ${obj.Date.data}`;
        time.textContent = `Time: ${obj.Ora.orario}`;

        card.classList.add("card");
        title.classList.add("title");
        date.classList.add("date");
        time.classList.add("time");
        priority.classList.add("priority");
        completed.classList.add("completed");
        id.classList.add("id");
        userId.classList.add("userId");

        card.append(time, date, priority, completed, id, userId, title);

        cardContainer.appendChild(card);
      });
    });
  }
}

deleteButton.addEventListener("click", () => {
  const id = inputField.value;
  cancellaOggetto(id);
  visualizzaOggetti();
});

//qui vado a selezionare gli appuntamenti passati, ordinadoli in maniera che i primi visualizzati saranno i più recenti e sopratutto verranno visualizzati solo
//gli appuntamenti effettivamente svolti cioè quelli con codice priority più basso (in caso di data ed orario coincidenti)

const cardContainer2 = qS(".passato");

if (oggettipassati.length === 0) {
  const noAppuntamenti = cE("h2");
  noAppuntamenti.textContent = "non hai avuto nessun appuntamento in passato";
  noAppuntamenti.classList = "noapp";
  cardContainer2.appendChild(noAppuntamenti);
} else {
  const oggettiPerDatapassata = {};
  oggettipassati.forEach((obj) => {
    const data = obj.Date.data;
    if (!oggettiPerDatapassata[data]) {
      oggettiPerDatapassata[data] = [];
    }
    oggettiPerDatapassata[data].push(obj);
  });

  const sortedDates = Object.keys(oggettiPerDatapassata).sort((a, b) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });

  sortedDates.forEach((data) => {
    const oggettiStessoOrario = {};
    oggettiPerDatapassata[data].forEach((obj) => {
      const orario = obj.Ora.orario;
      if (!oggettiStessoOrario[orario]) {
        oggettiStessoOrario[orario] = obj;
      } else if (obj.Priority < oggettiStessoOrario[orario].Priority) {
        oggettiStessoOrario[orario] = obj;
      }
    });
    const oggetti = Object.values(oggettiStessoOrario);
    oggetti.sort((a, b) => {
      if (a.Ora.orario < b.Ora.orario) {
        return -1;
      } else if (a.Ora.orario > b.Ora.orario) {
        return 1;
      } else {
        return a.Priority - b.Priority;
      }
    });
    oggetti.forEach((obj) => {
      const card = cE("div");
      const title = cE("h5");
      const userId = cE("p");
      const id = cE("p");
      const completed = cE("h1");
      const priority = cE("p");
      const date = cE("h4");
      const time = cE("h3");

      title.textContent = obj.title;
      userId.textContent = `UserId: ${obj.userId}`;
      id.textContent = `Id: ${obj.id}`;
      completed.textContent = `Completo: ${obj.completed}`;
      priority.textContent = `Priority: ${obj.Priority}`;
      date.textContent = `Date: ${obj.Date.data}`;
      time.textContent = `Time: ${obj.Ora.orario}`;

      card.classList.add("card2");
      title.classList.add("title");
      date.classList.add("date");
      time.classList.add("time2");
      priority.classList.add("priority");
      completed.classList.add("completed");
      id.classList.add("id");
      userId.classList.add("userId");

      card.append(completed, date, time, priority, id, userId, title);

      cardContainer2.appendChild(card);
    });
  });
}

//con questa funzione vengono visualizzati gli appuntamenti futuri, andando sempre ad eliminare gli appuntamenti che si accavallano
//con il principio di priorità (più è bassa è più importante)

const cardContainer3 = qS(".futuro");

if (oggettifuturi.length === 0) {
  const noAppuntamenti = cE("h2");
  noAppuntamenti.textContent = "non avrai appuntamenti prossimamente";
  noAppuntamenti.classList = "noapp";
  cardContainer3.appendChild(noAppuntamenti);
} else {
  const oggettiPerDatafutura = {};
  oggettifuturi.forEach((obj) => {
    const data = obj.Date.data;
    if (!oggettiPerDatafutura[data]) {
      oggettiPerDatafutura[data] = [];
    }
    oggettiPerDatafutura[data].push(obj);
  });

  Object.keys(oggettiPerDatafutura)
    .sort()
    .forEach((data) => {
      const oggettiStessoOrario = {};
      oggettiPerDatafutura[data].forEach((obj) => {
        const orario = obj.Ora.orario;
        if (!oggettiStessoOrario[orario]) {
          oggettiStessoOrario[orario] = obj;
        } else if (obj.Priority < oggettiStessoOrario[orario].Priority) {
          oggettiStessoOrario[orario] = obj;
        }
      });
      const oggetti = Object.values(oggettiStessoOrario);
      oggetti.sort((a, b) => {
        if (a.Ora.orario < b.Ora.orario) {
          return -1;
        } else if (a.Ora.orario > b.Ora.orario) {
          return 1;
        } else {
          return 0;
        }
      });
      oggetti.forEach((obj) => {
        const card = cE("div");
        const title = cE("h5");
        const userId = cE("p");
        const id = cE("p");
        const completed = cE("p");
        const priority = cE("p");
        const date = cE("h3");
        const time = cE("h3");

        title.textContent = obj.title;
        userId.textContent = `UserId: ${obj.userId}`;
        id.textContent = `Id: ${obj.id}`;
        completed.textContent = `Completo: ${obj.completed}`;
        priority.textContent = `Priority: ${obj.Priority}`;
        date.textContent = `Date: ${obj.Date.data}`;
        time.textContent = `Time: ${obj.Ora.orario}`;

        card.classList.add("card2");
        title.classList.add("title");
        date.classList.add("date2");
        time.classList.add("time2");
        priority.classList.add("priority");
        completed.classList.add("completed");
        id.classList.add("id");
        userId.classList.add("userId");

        card.append(date, time, priority, completed, id, userId, title);

        cardContainer3.appendChild(card);
      });
    });
}

const deleteButtonfut = qS("#delete-buttonfut");
const inputFieldfut = qS("#id-inputfut");

function cancellaOggettofut(id) {
  for (let i = 0; i < oggettifuturi.length; i++) {
    if (oggettifuturi[i].id == id) {
      oggettifuturi.splice(i, 1);
      break;
    }
  }
}

function visualizzaOggettifut() {
  cardContainer3.innerHTML = "";

  if (oggettifuturi.length === 0) {
    const noAppuntamenti = cE("h2");
    noAppuntamenti.textContent = "you have no appointments in the future";
    noAppuntamenti.classList = "noapp";
    cardContainer.appendChild(noAppuntamenti);
  } else {
    const oggettiPerDatafutura = {};
    oggettifuturi.forEach((obj) => {
      const data = obj.Date.data;
      if (!oggettiPerDatafutura[data]) {
        oggettiPerDatafutura[data] = [];
      }
      oggettiPerDatafutura[data].push(obj);
    });

    Object.keys(oggettiPerDatafutura)
      .sort()
      .forEach((data) => {
        const oggettiStessoOrario = {};
        oggettiPerDatafutura[data].forEach((obj) => {
          const orario = obj.Ora.orario;
          if (!oggettiStessoOrario[orario]) {
            oggettiStessoOrario[orario] = obj;
          } else if (obj.Priority < oggettiStessoOrario[orario].Priority) {
            oggettiStessoOrario[orario] = obj;
          }
        });
        const oggetti = Object.values(oggettiStessoOrario);
        oggetti.sort((a, b) => {
          if (a.Ora.orario < b.Ora.orario) {
            return -1;
          } else if (a.Ora.orario > b.Ora.orario) {
            return 1;
          } else {
            return 0;
          }
        });
        oggetti.forEach((obj) => {
          const card = cE("div");
          const title = cE("h5");
          const userId = cE("p");
          const id = cE("p");
          const completed = cE("p");
          const priority = cE("p");
          const date = cE("h3");
          const time = cE("h3");

          title.textContent = `Titolo : ${obj.title}`;
          userId.textContent = `UserId: ${obj.userId}`;
          id.textContent = `Id: ${obj.id}`;
          completed.textContent = `Completo: ${obj.completed}`;
          priority.textContent = `Priority: ${obj.Priority}`;
          date.textContent = `Date: ${obj.Date.data}`;
          time.textContent = `Time: ${obj.Ora.orario}`;

          card.classList.add("card");
          title.classList.add("title");
          date.classList.add("date2");
          time.classList.add("time2");
          priority.classList.add("priority");
          completed.classList.add("completed");
          id.classList.add("id");
          userId.classList.add("userId");

          card.append(date, time, priority, completed, id, userId, title);

          cardContainer3.appendChild(card);
        });
      });
  }
}

deleteButtonfut.addEventListener("click", () => {
  const id = inputFieldfut.value;
  cancellaOggettofut(id);
  visualizzaOggettifut();
});
