import "../index.css";
import { useEffect, useState } from "react";

function GradientFlow() {
  const [blueRedOpacity, setBlueRedOpacity] = useState(false);
  const [pinkYellowOpacity, setPinkYellowOpacity] = useState(false);
  const [cyanYellowOpacity, setCyanYellowOpacity] = useState(false);
  const [redGreenOpacity, setRedGreenOpacity] = useState(false);
  const [greenBlueOpacity, setGreenBlueOpacity] = useState(false);
  const [cyanPurpleOpacity, setCyanPurpleOpacity] = useState(false);
  const [cyanPinkOpacity, setCyanPinkOpacity] = useState(false);

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
    setTimeout(setColorsActiveAgain, 105001);
    setTimeout(changeBlueRedOpacity, 105000);
    setTimeout(changeRedGreenOpacity, 90000);
    setTimeout(changePinkYellowOpacity, 75000);
    setTimeout(changeCyanYellowOpacity, 60000);
    setTimeout(changeGreenBlueOpacity, 45000);
    setTimeout(changeCyanPurpleOpacity, 30000);
    setTimeout(changeCyanPinkOpacity, 15000);
  }

  useEffect(colorTimer, [time]);

  return (
    <>
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
    </>
  );
}

export default GradientFlow;
