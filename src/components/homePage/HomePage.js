import "./HomePage.css";
import AlertButton from "../AlertButton";

function HomePage({ imgURL }) {
  return (
    <div className="mainContainer">
      <img src={imgURL} alt="HomePage" className="img"></img>
      <AlertButton />
    </div>
  );
}

export default HomePage;
