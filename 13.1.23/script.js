// Esercizio 1
// Creare uno slider (template via HTML), seguendo il wireframe presente in allegato, seguendo le logiche viste durante la lezione.
// Lo stesso dovrà presentare 3 immagini che si susseguono al click sui relativi pallini identificatori.

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const imgContainer = document.querySelector(".risultatoclick");

btn1.addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "https://youtu.be/SoKB96b3Vfo";
  a.target = "_blank";

  let img = document.createElement("img");
  let imgDesc = document.createElement("p");
  img.src = "foto1.jpg";
  imgDesc.innerHTML =
    "In questa foto sono presenti il coach Tony D'Amato ed il quarterback Willie Beamen";
  img.classList.add("center-img", "small-img");

  a.appendChild(img);
  a.appendChild(imgDesc);
  imgContainer.innerHTML = "";
  imgContainer.appendChild(a);
});

btn2.addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "https://youtu.be/-D4EnIa1y6I";
  a.target = "_blank";

  let img = document.createElement("img");
  let imgDesc = document.createElement("p");
  img.src = "foto2.png";
  imgDesc.innerHTML =
    "Il momento del famoso discorso durante l'intervallo della partita fra degli SHARKS";
  img.classList.add("center-img", "small-img");

  a.appendChild(img);
  a.appendChild(imgDesc);
  imgContainer.innerHTML = "";
  imgContainer.appendChild(a);
});

btn3.addEventListener("click", () => {
  let a = document.createElement("a");
  a.href = "https://youtu.be/MACb9hiHixY";
  a.target = "_blank";

  let img = document.createElement("img");
  let imgDesc = document.createElement("p");
  img.src = "foto3.jpg";
  imgDesc.innerHTML =
    "Il discorso finale del coach dove annuncia che lascerà la città di Miami per accettare una nuova sfida in New Mexico";
  img.classList.add("center-img", "small-img");

  a.appendChild(img);
  a.appendChild(imgDesc);
  imgContainer.innerHTML = "";
  imgContainer.appendChild(a);
});
