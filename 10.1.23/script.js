function createHero(title, image, description) {
  const bodyEl = document.body;

  const cardEl = document.createElement("div");

  const imgEl = document.createElement("img");

  const titleEl = document.createElement("h2");

  const descriptionEl = document.createElement("p");

  cardEl.className = "nuovo";

  imgEl.setAttribute("src", image);

  titleEl.className = "card_title";
  titleEl.textContent = title;

  descriptionEl.className = "card_description";
  descriptionEl.textContent = description;

  cardEl.append(imgEl, titleEl, descriptionEl);

  bodyEl.appendChild(cardEl);
}

createHero("ciao", "https://picsum.photos/200/300", "eccalal");
