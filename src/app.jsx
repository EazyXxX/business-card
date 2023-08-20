/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import me from "./images/me.png";
import { useEffect, useState } from "react";

function App() {
  //gradient states
  const [blueRedOpacity, setBlueRedOpacity] = useState(false);
  const [pinkYellowOpacity, setPinkYellowOpacity] = useState(false);
  const [cyanYellowOpacity, setCyanYellowOpacity] = useState(false);
  const [redGreenOpacity, setRedGreenOpacity] = useState(false);
  const [greenBlueOpacity, setGreenBlueOpacity] = useState(false);
  const [cyanPurpleOpacity, setCyanPurpleOpacity] = useState(false);
  const [cyanPinkOpacity, setCyanPinkOpacity] = useState(false);
  //gradient states

  const [time, setTime] = useState(false);

  //gradient switchers
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
  //gradient switchers

  function setColorsActiveAgain() {
    setTime(!time);
    setCyanPinkOpacity(false);
    setCyanPurpleOpacity(false);
    setGreenBlueOpacity(false);
    setRedGreenOpacity(false);
    setCyanYellowOpacity(false);
    setPinkYellowOpacity(false);
    setBlueRedOpacity(false);
  }

  function colorTimer() {
    setTimeout(setColorsActiveAgain, 70001);
    setTimeout(changeBlueRedOpacity, 70000);
    setTimeout(changeRedGreenOpacity, 60000);
    setTimeout(changePinkYellowOpacity, 50000);
    setTimeout(changeCyanYellowOpacity, 40000);
    setTimeout(changeGreenBlueOpacity, 30000);
    setTimeout(changeCyanPurpleOpacity, 20000);
    setTimeout(changeCyanPinkOpacity, 10000);
  }

  useEffect(colorTimer, [time]);

  return (
    <div className="page">
      <div
        className={`app app__color_type_blue-red ${
          !blueRedOpacity ? "app__color_type_active" : ""
        }`}
      />
      <div
        className={`app app__color_type_red-green ${
          !redGreenOpacity ? "app__color_type_active" : ""
        }`}
      />
      <div
        className={`app app__color_type_pink-yellow ${
          !pinkYellowOpacity ? "app__color_type_active" : ""
        }`}
      />
      <div
        className={`app app__color_type_cyan-yellow ${
          !cyanYellowOpacity ? "app__color_type_active" : ""
        }`}
      />

      <div
        className={`app app__color_type_green-blue ${
          !greenBlueOpacity ? "app__color_type_active" : ""
        }`}
      />
      <div
        className={`app app__color_type_cyan-purple ${
          !cyanPurpleOpacity ? "app__color_type_active" : ""
        }`}
      />
      <div
        className={`app app__color_type_cyan-pink ${
          !cyanPinkOpacity ? "app__color_type_active" : ""
        }`}
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
