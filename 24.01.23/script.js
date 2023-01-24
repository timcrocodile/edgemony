const quoteCard = (data) => {
  const quoteEl = document.createElement("div");
  const quoteTextEl = document.createElement("h3");
  const quoteAuthorEl = document.createElement("p");
  const quoteAgeEl = document.createElement("h2");
  const idEl = document.createElement("h5");

  quoteEl.className = "quote";
  quoteEl.setAttribute = ("id", data.id);
  quoteTextEl.textContent = data.firstName;
  quoteAuthorEl.textContent = data.lastName;
  quoteAgeEl.textContent = data.age;
  idEl.textContent = data.id;

  quoteEl.append(quoteTextEl, quoteAuthorEl, quoteAgeEl, idEl);
  return quoteEl;
};

const bodyEl = document.body;
const searchInputEl = document.createElement("input");
let searchedValue = "";

bodyEl.appendChild(searchInputEl);

// fetch("https://dummyjson.com/users/1")
//   .then((res) => res.json())
//   .then((quote) => bodyEl.appendChild(quoteCard(quote)));

// fetch("https://dummyjson.com/users/2")
//   .then((res) => res.json())
//   .then((quote) => bodyEl.appendChild(quoteCard(quote)));

// fetch("https://dummyjson.com/users/3")
//   .then((res) => res.json())
//   .then((quote) => bodyEl.appendChild(quoteCard(quote)));

for (let i = 1; i <= 30; i++) {
  fetch(`https://dummyjson.com/users/${i}`)
    .then((res) => res.json())
    .then((quote) => bodyEl.appendChild(quoteCard(quote)));
}

searchInputEl.addEventListener("input", (e) => searchedValue(e.target.value));
