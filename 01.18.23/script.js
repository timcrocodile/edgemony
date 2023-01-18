//mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmdssmmsmmsmsmsmmsms

const heroEl = document.querySelector(".hero");

const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");

const img1 = document.querySelector("#img-1");
const img2 = document.querySelector("#img-2");
const img3 = document.querySelector("#img-3");

const hamburgerBtn = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");
const productsList = document.querySelector(".products");
const cart = [];
// const loaderElement = document.querySelector(".loader");

// const rimuoviBtn = document.querySelector(".rimuovi");

btn1.addEventListener("click", () => {
  img1.classList.add("show");
  img2.classList.remove("show");
  img3.classList.remove("show");

  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
});

btn2.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.add("show");
  img3.classList.remove("show");

  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
});

btn3.addEventListener("click", () => {
  img1.classList.remove("show");
  img2.classList.remove("show");
  img3.classList.add("show");

  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
});

hamburgerBtn.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

fetch("https://api.escuelajs.co/api/v1/products")
  // loaderElement.textContent = "loading...";
  .then((res) => res.json())
  .then((data) =>
    data.forEach((element) => {
      cardCreator(element);
    })
  );

const cardCreator = (item) => {
  const cardEl = document.createElement("div");
  cardEl.className = "card";
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", item.images);
  imgEl.setAttribute("alt", "#");

  const h1El = document.createElement("h1");
  h1El.className = "titolo";
  //   - Con il metodo giusto per la manipolazione delle stringe limitiamo il titolo della card a solo 10 caratteri
  h1El.textContent = item.title.slice(0, 10);

  const priceEl = document.createElement("p");
  priceEl.className = "price";
  priceEl.textContent = item.price;

  const descEl = document.createElement("p");
  descEl.className = "description";
  //   Con il metodo giusto per la manipolazione delle stringe limitiamo  la descrizione della card a soli 30.
  descEl.textContent = item.description.slice(0, 30);

  const addBtn = document.createElement("button");
  addBtn.textContent = "aggiungi alla sacca";

  addBtn.addEventListener("click", () => {
    // alert("sciccherria aggiunta al acrrello");
    // cart.push(item);
    cartPopulator(item);
  });

  cardEl.append(imgEl, h1El, priceEl, descEl, addBtn);
  productsList.appendChild(cardEl);
};

const cartCreation = () => {
  tendina.innerHTML = "";
  cart.forEach((item, index) => {
    const cartEl = document.createElement("div");
    // const rimuoviBtn = document.createElement("button");
    cartEl.className = "cartRow";
    cartEl.innerHTML = `<p>Q.ty: ${item.qty}</p><p>${item.title}</p><p>${item.price}</p>`;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "x";
    deleteBtn.addEventListener("click", () => {
      cartEl.remove();
      cart.splice(index, 1);
    });
    cartEl.append(deleteBtn);
    tendina.appendChild(cartEl);
  });
};

const cartPopulator = (item) => {
  const newObj = {
    id: item.id,
    title: item.title,
    price: item.price,
    qty: 1,
  };
  const search = cart.filter((element) => {
    if (element.id === newObj.id) {
      element.qty++;
      return element;
    }
  });

  if (search.length === 0) {
    cart.push(newObj);
  }

  //  if (cart.length === 0 ) {
  //   cart.push(newObj);
  //  }

  // console.log("elemento trovato", ricerca);

  // cart.push(newObj);
  console.log(cart);
  cartCreation();
};
