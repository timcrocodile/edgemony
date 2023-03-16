import CardList from "./components/cardList";
import Hero from "./components/hero";
import Footer from "./components/footer/Footer";

import Navbar from "./components/navbar";
import { useState } from "react";
import "./App.css";
import MiniCardList from "./components/miniCardList";
import ProductDetail from "./components/productDetail";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [cartList, setCardList] = useState([]);

  const [modalContext, setModalContext] = useState({
    productData: {},
    isVisibile: false,
  });

  const handleSearch = (value) => {
    setSearchValue("/products/category/" + value);
    console.log(value);
  };

  return (
    <div className="App">
      <Navbar cartListLength={cartList.length} searchValue={handleSearch} />
      <div>{searchValue}</div>
      <Hero />

      {searchValue && (
        <MiniCardList title="esercizio1" endpoint={searchValue} />
      )}

      <CardList
        title="Technology"
        endpoint="/products?limit=10"
        setModalContext={setModalContext}
      />

      <CardList
        title="Skincare"
        endpoint="/products?limit=10&skip=10"
        setModalContext={setModalContext}
      />
      <Footer />
      {modalContext.isVisibile && (
        <ProductDetail
          productData={modalContext.productData}
          setCardList={setCardList}
          setModalContext={setModalContext}
        />
      )}
    </div>
  );
}

export default App;
