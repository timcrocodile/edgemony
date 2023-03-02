import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts/ListProducts";
import Gallery from "./components/gallery";
import { nuovagalleria } from "./mocks/newgallery";
import Dark from "./components/dark";
import "./main.css";
import { useState } from "react";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("mario");
  const handleClick = () => {
    setName("luigi");
  };

  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}>
      <Hero title="Store" />
      <Dark text="dark mode" />
      <Gallery listData={nuovagalleria} titolo={name} />
      <button onClick={handleClick}>cliccami</button>
      <Control listDataLength={productsList.length} />

      <ListProducts listData={productsList} />
      <button
        className="toggle-mode"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {isDarkMode ? "☀️" : "🌙"}
      </button>
    </div>
  );
};

export default Main;
