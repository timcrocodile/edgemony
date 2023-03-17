import "./index.css";

const Cart = ({ cartList, setModalCartVisibility, setCartList }) => {
  const handleCloseCart = () => {
    setModalCartVisibility((prev) => !prev);
  };

  const onHandleClick = (cartProduct) => {
    const filteredCartList = cartList.filter(
      (product) => product.id !== cartProduct.id
    );

    setCartList(() => filteredCartList);

    localStorage.setItem("cartList", JSON.stringify(filteredCartList));
  };

  // const onHandleCartClick = () => {
  //   setModalCartVisibility((prev) => !prev);
  // };

  return (
    <div className="Cart">
      <p>Prodotti presenti nel carrello 🛒 :</p>
      {cartList.map((product) => (
        <div className="Cartproduct">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="immaginecarrello"
          />
          <h4>Modello: {product.title}</h4>
          <h4>Prezzo: {product.price}$</h4>
          <button
            onClick={() => onHandleClick(product)}
            className="Cart__product--delete"
          >
            ❌
          </button>
        </div>
      ))}
      <button className="closecart" onClick={handleCloseCart}>
        Chiudi il carrello
      </button>
      <h3>
        Totale: {cartList.reduce((acc, product) => acc + product.price, 0)}$
      </h3>
      Payment Methods :
      <div className="payment">
        <button>💳</button>
        <button>💵</button>
      </div>
    </div>
  );
};

export default Cart;
