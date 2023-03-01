import { productsList } from "./mocks/productsList";
import Control from "./components/control";
import Hero from "./components/hero";
import ListProducts from "./components/listProducts/ListProducts";
import Gallery from "./components/gallery";
import { nuovagalleria } from "./mocks/newgallery";
import Dark from "./components/dark";
import "./main.css";

const Main = () => {
  return (
    <div className="Main">
      <Hero title="Store" />
      <Dark text="dark mode" />
      <Gallery listData={nuovagalleria} />
      <Control listDataLength={productsList.length} />

      <ListProducts listData={productsList} />
    </div>
  );
};

export default Main;
