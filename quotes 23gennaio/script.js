import { qS, cE, productCard } from "./utils.js";
import { GET } from "./api.js";

const bodyEl = qS("body");
const wrapperEl = cE("div");
wrapperEl.className = "wrapper";
bodyEl.appendChild(wrapperEl);

GET("quotes").then((data) =>
  data.quotes.reduce((quote, id) =>
    wrapperEl.appendChild(productCard(quote, 1))
  )
);
