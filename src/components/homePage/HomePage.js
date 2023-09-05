import "./HomePage.css";

function HomePage({ imgURL }) {
  return (
    <div className="mainContainer">
      <img src={imgURL} alt="HomePage" className="img"></img>
    </div>
  );
}

export default HomePage;
