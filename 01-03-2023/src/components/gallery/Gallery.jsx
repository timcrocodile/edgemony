import "./index.css";
import Listaprodotti2 from "../listaprodotti2/Listaprodotti2";

const Gallery = ({ listData }) => {
  return (
    <div className="nuovagalleria">
      {listData.map((product) => (
        <Listaprodotti2 productData={product} key={product.id} />
      ))}
    </div>
  );
};

export default Gallery;
