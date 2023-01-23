const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const productCard = (data) => {
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const quoteEl = cE("h1");
  const authorEl = cE("h2");
  wrapperEl.className = "product-card";
  quoteEl.textContent = data.quote;
  authorEl.textContent = data.author;
  wrapperEl.append(quoteEl, authorEl);
  return wrapperEl;
};

export { cE, qS, productCard };
