import Button from "../button";
import "./index.css";

const Dark = ({ text }) => {
  const hello = () => {
    var element = document.body;
    element.classList.toggle("dark-modality");
  };
  return (
    <div className="dark">
      <h4>{text}</h4>
      <Button text="darkmodal" clickFunc={hello} isDisabled={false} />
    </div>
  );
};

export default Dark;
