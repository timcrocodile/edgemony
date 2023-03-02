import { useState } from "react";
import "./index.css";
import Listaprodotti2 from "../listaprodotti2/Listaprodotti2";

const Gallery = ({ listData, titolo }) => {
  const [name, setName] = useState(1);
  const handleClick = () => {
    setName(2);
  };
  const [count, setCount] = useState(4);
  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }
  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="nuovagalleria">
      <button onClick={handleClick}> cambia</button>

      <p className="ciao">{titolo}</p>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      {listData.map((product) => (
        <Listaprodotti2
          const
          numerello={count}
          // numerello={name}
          productData={product.image}
          key={product.key}
        />
      ))}
    </div>
  );
};

export default Gallery;
