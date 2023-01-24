const GET = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data;
};

//   GET("products").then((data) =>
//   data.products.map((product) => wrapperEl.appendChild(productCard(product)))
// );

export { GET };
