import Button from "../button";
import "./index.css";

const Dark = ({ text }) => {
  const hello = () => {
    // alert(`Il numero di prodotti corrisponde a: ${darkmode}`);
    var element = document.body;
    element.classList.toggle("dark-mode");
  };
  return (
    <div className="dark">
      <h4>{text}</h4>
      <Button text="darkmodal" clickFunc={hello} isDisabled={false} />
    </div>
  );
};

export default Dark;

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }
