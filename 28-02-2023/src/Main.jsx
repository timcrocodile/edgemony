import Header from "./components/Header";
import Footer from "./components/Footer";
import Dinamico from "./components/dinamic";
import "./main.css";

const Main = () => {
  return [
    <div className="Main">
      {/* <p>primo</p>
      <p>secondo</p> */}
      <Header />
    </div>,
    <div>
      <Footer />
    </div>,
    <div>
      <Dinamico />
    </div>,
  ];
};

export default Main;
