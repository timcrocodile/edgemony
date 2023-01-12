const buttonAdd = document.getElementById("add");
const lists = document.getElementById("lists");
const textInput = document.querySelector(".textInput");

buttonAdd.addEventListener("click", generateList);

function generateList(event) {
  event.preventDefault();

  if (textInput.value === "") return;

  if (textInput.value.toLowerCase() === "buffon") {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("hai un'ottima memoria cumpà ;)"));
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "totti") {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("er capitano de sti lupacchiotti!"));
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "grosso") {
    const p = document.createElement("p");
    p.appendChild(
      document.createTextNode("se non c'era lui manco ci arrivavamo..")
    );
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "gattuso") {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("ringhio gattusa, ringhia per noi"));
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "camoranesi") {
    const p = document.createElement("p");
    p.appendChild(
      document.createTextNode("s'è fatto pelato finita la partita..")
    );
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "materazzi") {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("bomber!!"));
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "perrotta") {
    const p = document.createElement("p");
    p.appendChild(
      document.createTextNode(
        "zio perrotta titolare è l'emblema dell'italia campione del mondo !"
      )
    );
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "toni") {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("amante del bel calcio"));
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "pirlo") {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode("mago!"));
    document.body.appendChild(p);
  }

  if (textInput.value.toLowerCase() === "zambrotta") {
    const p = document.createElement("p");
    p.appendChild(
      document.createTextNode(
        "un frecciarossa sulla fascia destra non fa mai male !"
      )
    );
    document.body.appendChild(p);
  }

  const li = document.createElement("li");
  lists.appendChild(li);
  li.appendChild(document.createTextNode(textInput.value));

  const buttonDelete = document.createElement("button");
  buttonDelete.className = "delete";
  buttonDelete.appendChild(document.createTextNode("riprova"));

  const names = [
    "buffon",
    "materazzi",
    "zambrotta",
    "cannavaro",
    "grosso",
    "gattuso",
    "pirlo",
    "perrotta",
    "totti",
    "toni",
    "camoranesi",
  ];
  if (names.indexOf(textInput.value.toLowerCase()) !== -1) {
    buttonDelete.innerHTML = "E' Giusto!! Sei a Berlino anche tu!";
  }

  li.appendChild(buttonDelete);

  textInput.value = "";

  buttonDelete.addEventListener("click", (event) => {
    const parentNodeEl = event.target.parentNode;
    setTimeout(() => {
      parentNodeEl.remove();
    }, 500);
  });
}
