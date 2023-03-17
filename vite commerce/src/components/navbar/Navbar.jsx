import { useState } from "react";
import "./index.css";

const Navbar = ({ cartListLength, searchValue, setModalCartVisibility }) => {
  const [inputValue, setInputValue] = useState("");

  const onHandleInput = (e) => setInputValue(() => e.target.value);

  const onHandleCartClick = () => {
    setModalCartVisibility((prev) => !prev);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // TODO: trasmettere il valore della input (inputValue) all'elemento di ricerca
    searchValue(inputValue);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
      </ul>
      <form onSubmit={onHandleSubmit}>
        <input
          value={inputValue}
          onChange={onHandleInput}
          type="text"
          placeholder="Cerca prodotto ..."
          required
        />
      </form>
      <div className="Navbar__cart">
        <p onClick={onHandleCartClick} className="iconacarr">
          {cartListLength} 🛒
        </p>
      </div>
    </div>
  );
};

export default Navbar;
