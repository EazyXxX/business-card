/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import meOne from "./images/me.jpg";
import meTwo from "./images/hills.jpg";
import meThree from "./images/rocks.jpg";
import GradientFlow from "./components/GradientFlow.js";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useLocation } from "react-router-dom";
import FirstSlider from "./components/FirstSlider";
import StaticGradient from "./components/StaticGradient";

function App() {
  const location = useLocation();
  const [headerTopOpacity, setHeaderTopOpacity] = useState(false);
  const [navAboutMeLocation, setNavAboutMeLocation] = useState(false);
  const [navMyProjectsLocation, setNavMyProjectsLocation] = useState(false);
  const [language, setLanguage] = useState(true);
  const [mes, setMes] = useState([
    <img
      className="caurosel__image caurosel__image_type_big"
      alt="an image of mine"
      src={meOne}
    />,
    <img
      className="caurosel__image caurosel__image_type_big"
      alt="me in the mountains"
      src={meTwo}
    />,
    <img
      className="caurosel__image caurosel__image_type_big"
      alt="me who sits on a rock"
      src={meThree}
    />,
  ]);

  const MOBILE_WIDTH = 800;

  function handleAboutMeClick() {
    setNavAboutMeLocation(true);
    setNavMyProjectsLocation(false);
    window.localStorage.setItem("aboutMe", true);
    window.localStorage.setItem("myProjects", false);
  }
  function handleMyProjectsClick() {
    setNavAboutMeLocation(false);
    setNavMyProjectsLocation(true);
    window.localStorage.setItem("aboutMe", false);
    window.localStorage.setItem("myProjects", true);
  }

  function setHeaderTopActive() {
    setHeaderTopOpacity(true);
  }

  function handleClickRussian() {
    setLanguage(false);
    window.localStorage.setItem("language", false);
  }
  function handleClickEnglish() {
    setLanguage(true);
    window.localStorage.setItem("language", true);
  }

  useEffect(setHeaderTopActive, []);
  useEffect(() => {
    setLanguage(JSON.parse(window.localStorage.getItem("language")));
    setNavAboutMeLocation(JSON.parse(window.localStorage.getItem("aboutMe")));
    setNavMyProjectsLocation(
      JSON.parse(window.localStorage.getItem("myProjects"))
    );
  }, []);
  useEffect(() => {
    if (location.pathname === "/") {
      setNavAboutMeLocation(false);
      setNavMyProjectsLocation(false);
    }
  }, []);

  return (
    <div className="page">
      {window.innerWidth < 1200? <StaticGradient /> : <GradientFlow />}
      <header className="header">
        <h1
          className={`header__top ${
            headerTopOpacity ? "header__top_type_active" : ""
          }`}
        >
          {`${
            language
              ? "Welcome to my CV web page:"
              : "Добро пожаловать в моё веб-резюме:"
          }`}
        </h1>
        <div className="header__case">
          <div className="header__language-box">
            <button
              onClick={handleClickRussian}
              className={`header__button ${
                language ? "" : "header__button_type_underlined"
              } ${headerTopOpacity ? "header__button_type_active" : ""}`}
            >
              Ru
            </button>
            <button
              onClick={handleClickEnglish}
              className={`header__button ${
                language ? "header__button_type_underlined" : ""
              } ${headerTopOpacity ? "header__button_type_active" : ""}`}
            >
              En
            </button>
          </div>
          <FirstSlider className="header__photo" elements={mes} />
          <article className="header__container">
            <h2 className="header__name">{`${
              language ? "Oleg Ostanin" : "Олег Останин"
            }`}</h2>
            <h3 className="header__subname">{`${
              language ? "web-developer" : "веб-разработчик"
            }`}</h3>
            <div className="header__info">
              <p className="header__text">
                {" "}
                {`${language ? "Age: 24" : "Возраст: 24"}`}
              </p>
              <p className="header__text">{`${
                language
                  ? "Location: Russia, Rostov-on-Don"
                  : "Местонахождение: Россия, Ростов-на-Дону"
              }`}</p>
              <p className="header__text">{`${
                language ? "Occupation: unepmployed" : "Занятость: безработный"
              }`}</p>
              <p
                className={`header__text ${
                  language ? "header__text_type_underlined" : ""
                }`}
              >
                {`${
                  language
                    ? "Relocation preference: willing to relocate"
                    : "Переезд: готов к переезду"
                }`}
              </p>
              <p className="header__text">
                {`${
                  language
                    ? "Languages: English - C1, Russian - native"
                    : "Языки: Английский - C1, Русский - родной"
                }`}
              </p>
              <p className="header__text">
                {`${
                  language
                    ? "Core skills: HTML, CSS, JavaScript, React, NodeJS"
                    : "Ключевые навыки: HTML, CSS, JavaScript, React, NodeJS"
                }`}
              </p>
            </div>
          </article>
        </div>
      </header>
      <nav className="navbar">
        <Link
          className={`navbar__selector ${
            navAboutMeLocation ? "navbar__selector_type_underlined" : ""
          }`}
          to="/about-me"
          onClick={handleAboutMeClick}
        >
          {`${language ? "About me" : "Обо мне"}`}
        </Link>
        <Link
          className={`navbar__selector ${
            navMyProjectsLocation ? "navbar__selector_type_underlined" : ""
          }`}
          to="/my-projects"
          onClick={handleMyProjectsClick}
        >
          {`${language ? "My projects" : "Мои проекты"}`}
        </Link>
      </nav>
      <Routes>
        <Route path="/about-me" element={<AboutMe language={language} />} />
        <Route
          path="/my-projects"
          element={<MyProjects language={language} mobile={MOBILE_WIDTH} />}
        />
      </Routes>
      <Footer language={language} />
    </div>
  );
}

export default App;
