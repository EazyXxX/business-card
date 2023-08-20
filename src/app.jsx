/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import me from "./images/me.png";
import PhotoSlider from "./components/PhotoSlider";
import GradientFlow from "./components/GradientFlow.js";

function App() {
  return (
    <div className="page">
      <GradientFlow />
      <header className="header">
        <h1 className="header__top">Welcome to my business-card web page:</h1>
        <img src={me} className="header__photo" alt="Моё фото"></img>
        <div className="header__container">
          <h2 className="header__name">Oleg Ostanin</h2>
          <h3 className="header__subname">web-developer</h3>
        </div>
      </header>
      <nav />
      <footer />
    </div>
  );
}

export default App;
