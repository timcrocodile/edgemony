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
        {/* <li>
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/872/872228.png?w=740&t=st=1679230127~exp=1679230727~hmac=e53617751234733e609017925cbadf53ea1c10ee55694c721c58b385b27bf028"
            alt="logo"
          />
        </li> */}
        <li>
          <img
            src="https://cdn-static.dagospia.com/images/layout/home-dago.png"
            alt=""
          ></img>
        </li>
        <li>Contacts</li>
        <li>About us</li>
        <li>
          <img
            src="https://cdn-static.dagospia.com/images/layout/envelope-dago.png"
            alt=""
          ></img>
        </li>
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
      {/* <nav id="top-nav">
        <ul>
          <li>
            <img
              src="https://cdn-static.dagospia.com/images/layout/home-dago.png"
              alt=""
            ></img>
          </li>
          <li>Media e tv</li>
          <li>Politica</li>
          <li>Business</li>
          <li>Cafonal</li>
          <li>Cronache</li>
          <li>Sport</li>
          <li>Viaggi</li>
          <li>Salute</li>
          <li>
            <img
              src="https://cdn-static.dagospia.com/images/layout/envelope-dago.png"
              alt=""
            ></img>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;
