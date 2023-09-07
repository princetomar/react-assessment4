import HomePage from "./components/homePage/HomePage";
import "./App.css";
import FormPage from "./components/formPage/FormPage";

function App() {
  return (
    <div className="App">
      <HomePage
        imgURL={
          "https://miro.medium.com/v2/resize:fit:1200/1*y6C4nSvy2Woe0m7bWEn4BA.png"
        }
      ></HomePage>
      <div className="formPage">
        <FormPage></FormPage>
      </div>
    </div>
  );
}

export default App;
