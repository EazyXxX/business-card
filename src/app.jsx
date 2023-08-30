/* eslint-disable react-hooks/exhaustive-deps */
import "./index.css";
import meOne from "./images/me.png";
import meTwo from "./images/hills.png";
import meThree from "./images/rocks.png";
import GradientFlow from "./components/GradientFlow.js";
import AboutMe from "./components/AboutMe";
import MyProjects from "./components/MyProjects";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, Route, Routes } from "react-router-dom";
import FirstSlider from "./components/FirstSlider";

function App() {
  const navigate = useNavigate();
  const [headerTopOpacity, setHeaderTopOpacity] = useState(false);
  const [navAboutMeLocation, setNavAboutMeLocation] = useState(true);
  const [navMyProjectsLocation, setNavMyProjectsLocation] = useState(false);
  const [navContactInfoLocation, setNavContactInfoLocation] = useState(false);

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

  function handleAboutMeClick() {
    setNavAboutMeLocation(true);
    setNavMyProjectsLocation(false);
    setNavContactInfoLocation(false);
    window.localStorage.setItem(
      "navAboutMeLocation",
      JSON.stringify(navAboutMeLocation)
    );
    window.localStorage.setItem(
      "navMyProjectsLocation",
      JSON.stringify(navMyProjectsLocation)
    );
    window.localStorage.setItem(
      "navContactInfoLocation",
      JSON.stringify(navContactInfoLocation)
    );
  }

  function handleMyProjectsClick() {
    setNavAboutMeLocation(false);
    setNavMyProjectsLocation(true);
    setNavContactInfoLocation(false);
    window.localStorage.setItem(
      "navAboutMeLocation",
      JSON.stringify(navAboutMeLocation)
    );
    window.localStorage.setItem(
      "navMyProjectsLocation",
      JSON.stringify(navMyProjectsLocation)
    );
    window.localStorage.setItem(
      "navContactInfoLocation",
      JSON.stringify(navContactInfoLocation)
    );
  }

  function handleContactInfoClick() {
    setNavAboutMeLocation(false);
    setNavMyProjectsLocation(false);
    setNavContactInfoLocation(true);
    window.localStorage.setItem(
      "navAboutMeLocation",
      JSON.stringify(navAboutMeLocation)
    );
    window.localStorage.setItem(
      "navMyProjectsLocation",
      JSON.stringify(navMyProjectsLocation)
    );
    window.localStorage.setItem(
      "navContactInfoLocation",
      JSON.stringify(navContactInfoLocation)
    );
  }

  function setHeaderTopActive() {
    setHeaderTopOpacity(true);
  }

  useEffect(setHeaderTopActive, []);
  useEffect(() => {
    navigate("/about-me");
  }, []);

  return (
    <div className="page">
      <GradientFlow />
      <header className="header">
        <h1
          className={`header__top ${
            headerTopOpacity ? "header__top_type_active" : ""
          }`}
        >
          Welcome to my business-card web page:
        </h1>
        <div className="header__case">
          <FirstSlider
            className="header__photo"
            elements={mes}
          />
          <article className="header__container">
            <h2 className="header__name">Oleg Ostanin</h2>
            <h3 className="header__subname">web-developer</h3>
            <div className="header__info">
              <p className="header__text">Age: 24</p>
              <p className="header__text">Location: Russia, Rostov-on-Don</p>
              <p className="header__text">Occupation: unepmployed</p>
              <p className="header__text header__text_type_underlined">
                Relocation preference: willing to relocate
              </p>
              <p className="header__text">
                Languages: English - C1, Russian - native
              </p>
              <p className="header__text">
                Core skills: HTML, CSS, JavaScript, React
              </p>
              <p className="header__text">
                Core principles: be agile; don't hesitate to ask for help; talk
                to customers; teamwork tendency; learning on a daily basis
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
          About me
        </Link>
        <Link
          className={`navbar__selector ${
            navMyProjectsLocation ? "navbar__selector_type_underlined" : ""
          }`}
          to="/my-projects"
          onClick={handleMyProjectsClick}
        >
          My projects
        </Link>
      </nav>
      <Routes>
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
