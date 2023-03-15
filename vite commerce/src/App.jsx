import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar";
import { useState } from "react";
import "./App.css";
import MiniCardList from "./components/miniCardList";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="App">
      <Navbar searchValue={handleSearch} />
      {/* <div>{searchValue}</div> */}
      <Hero />

      {/* <MiniCardList
        title="esercizio1"
        endpoint={searchValue}
      /> */}

      {/* non funziona però, era per risolvere l'avanzato questo..
       */}

      <MiniCardList title="esercizio1" endpoint="/products" />
      <CardList title="Technology" endpoint="/products?limit=10" />

      <CardList title="Skincare" endpoint="/products?limit=10&skip=10" />
      <Footer />
    </div>
  );
}

export default App;
