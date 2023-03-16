import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import MiniCard from "../miniCard/miniCard";
import SpinnerLoading from "../spinnerLoading/SpinnerLoading";
import "./index.css";

const MiniCardList = ({ title, endpoint }) => {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setMiniCards(() => data.products));
  }, [endpoint]);

  return (
    <div className="miniCardList">
      <h2>{title}</h2>
      <div className="miniCardList__list">
        {miniCards.length ? (
          miniCards.map((card) => (
            <MiniCard
              imgSrc={card.thumbnail}
              imgAlt={card.title}
              key={card.id}
            />
          ))
        ) : (
          <SpinnerLoading />
        )}
      </div>
    </div>
  );
};

export default MiniCardList;
