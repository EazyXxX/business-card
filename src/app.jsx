import "./index.css";
import "./css-blocks/colors/colors.css";
import "./css-blocks/colors/colors_active.css";
import me from "./images/me.png";
import { useEffect, useState } from "react";

function App() {
  const [blueRedOpacity, setBlueRedOpacity] = useState(false);
  const [pinkYellowOpacity, setPinkYellowOpacity] = useState(false);
  const [cyanYellowOpacity, setCyanYellowOpacity] = useState(false);
  const [redGreenOpacity, setRedGreenOpacity] = useState(false);
  const [greenBlueOpacity, setGreenBlueOpacity] = useState(false);
  const [cyanPurpleOpacity, setCyanPurpleOpacity] = useState(false);
  const [cyanPinkOpacity, setCyanPinkOpacity] = useState(false);

  const [time, setTime] = useState(false);

  function changeBlueRedOpacity() {
    setBlueRedOpacity(!blueRedOpacity);
  }

  function changePinkYellowOpacity() {
    setPinkYellowOpacity(!pinkYellowOpacity);
  }

  function changeCyanYellowOpacity() {
    setCyanYellowOpacity(!cyanYellowOpacity);
  }

  function changeRedGreenOpacity() {
    setRedGreenOpacity(!redGreenOpacity);
  }

  function changeGreenBlueOpacity() {
    setGreenBlueOpacity(!greenBlueOpacity);
  }

  function changeCyanPurpleOpacity() {
    setCyanPurpleOpacity(!cyanPurpleOpacity);
  }

  function changeCyanPinkOpacity() {
    setCyanPinkOpacity(!cyanPinkOpacity);
  }

  function setAgain() {
    setTime(!time);
    setCyanPinkOpacity(false)
    setCyanPurpleOpacity(false)
    setGreenBlueOpacity(false)
    setRedGreenOpacity(false)
    setCyanYellowOpacity(false)
    setPinkYellowOpacity(false)
    setBlueRedOpacity(false)
  }

  function colorTimer() {
    setTimeout(setAgain, 21001);
    setTimeout(changeCyanPinkOpacity, 21000);
    setTimeout(changeBlueRedOpacity, 18000);
    setTimeout(changePinkYellowOpacity, 14000);
    setTimeout(changeCyanYellowOpacity, 12000);
    setTimeout(changeRedGreenOpacity, 8000);
    setTimeout(changeGreenBlueOpacity, 6000);
    setTimeout(changeCyanPurpleOpacity, 3000);
  }

  useEffect(colorTimer, [time]);

  return (
    <div className="page">
      <div
        className={`app cyanPink ${!cyanPinkOpacity ? "color_active" : ""}`}
      />
      <div className={`app blueRed ${!blueRedOpacity ? "color_active" : ""}`} />
      <div
        className={`app pinkYellow ${!pinkYellowOpacity ? "color_active" : ""}`}
      />
      <div
        className={`app cyanYellow ${!cyanYellowOpacity ? "color_active" : ""}`}
      />
      <div
        className={`app redGreen ${!redGreenOpacity ? "color_active" : ""}`}
      />
      <div
        className={`app greenBlue ${!greenBlueOpacity ? "color_active" : ""}`}
      />
      <div
        className={`app cyanPurple ${!cyanPurpleOpacity ? "color_active" : ""}`}
      />

      <header className="header">
        <h1 className="header__top">Мой сайт-визитка</h1>
        <img src={me} className="header__photo" alt="Моё фото"></img>
        <div className="header__container">
          <h2 className="header__name">Олег Останин</h2>
        </div>
      </header>
      <nav />
      <footer />
    </div>
  );
}

export default App;
