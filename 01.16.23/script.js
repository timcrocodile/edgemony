// Seguendo quello fatto oggi a lezione effettuate una chiamate fetch() alla seguente API web: https://api.escuelajs.co/api/v1/products e stampate in console nome e descrizione del prodotto simile a questo formato

// --------------
// Tasty Rubber Soap
// The Football Is Good For Training And Recreational Purposes
// --------------
// Modern Bronze Chair
// New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

// State molto attendi all'asincronicità della PROMISE

//risoluzione del primo esercizio

// fetch("https://api.escuelajs.co/api/v1/products")
//   .then((res) => res.json())
//   .then((data) => stampa(data));

// const stampa = (data) => {
//   data.forEach((item, index) => {
//     console.log(item.title);
//     console.log(item.description);
//   });
// };

//AVANZATO

const productElement = document.querySelector(".productList");
const downloaddataBtn = document.querySelector(".button");
const loaderElement = document.querySelector(".loader");
const priceElement = document.querySelector(".price");
const descriptionElement = document.querySelector(".description");

downloaddataBtn.addEventListener("click", () => {
  loaderElement.textContent = "loading...";
  fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => stampa(data));
});

const stampa = (data) => {
  loaderElement.textContent = "";
  data.forEach((item, index) => {
    const divContainer = document.createElement("div");
    divContainer.className = "card";

    const titleElement = document.createElement("h1");
    titleElement.textContent = "title" + item.title;

    const indexContainer = document.createElement("p");
    indexContainer.textContent = item.id;

    const priceElement = document.createElement("p");
    priceElement.textContent = "price$" + item.price;
    priceElement.style = "background-color : black ;  color : white  ";

    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = "description :" + item.description;

    divContainer.append(
      titleElement,
      indexContainer,
      priceElement,
      descriptionElement
    );
    productElement.appendChild(divContainer);
  });
};
