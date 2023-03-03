import "./index.css";

const Listaprodotti2 = ({ productData, numerello }) => {
  return (
    <div>
      <p> {numerello} </p>
      <img src={productData} alt="fiorellino" />
    </div>
  );
};

export default Listaprodotti2;
