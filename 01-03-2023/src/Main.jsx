import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts/ListProducts";
import Gallery from "./components/gallery";
import { nuovagalleria } from "./mocks/newgallery";
import Dark from "./components/dark";
import "./main.css";
import { useState, useEffect } from "react";

const Main = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("mario");
  let [breed, setBreed] = useState("hound");

  const handleClick = () => {
    setName("luigi");
  };
  const [dogImage, setDogImage] = useState(false);
  useEffect(() => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())

      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.message.length);
        setDogImage(data.message[randomIndex]);
      });
  }, [breed]);

  return (
    <div className={`Main ${isDarkMode && "dark-mode"}`}>
      <Hero title="Store" />
      <Dark text="dark mode" />
      <div className="breeds">
        <section className="buttons">
          <button onClick={() => setBreed("affenpinscher")}>
            Affenpinscher
          </button>
          <button onClick={() => setBreed("african")}>african</button>
          <button onClick={() => setBreed("airedale")}>airedale</button>
          <button onClick={() => setBreed("akita")}>Akita</button>
          <button onClick={() => setBreed("appenzeller")}>Appenzeller</button>
          <button onClick={() => setBreed("hound")}>Hound</button>
        </section>
        {dogImage && <img className="cane" src={dogImage}></img>}
      </div>

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
