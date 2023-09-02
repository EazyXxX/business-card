import "../index.css";
import SecondSlider from "./SecondSlider";
import bigMoviesOne from "../images/movies-one.jpg";
import bigMoviesTwo from "../images/movies-two.jpg";
import bigMoviesThree from "../images/movies-three.jpg";
import moviesOne from "../images/movies-one-mobile.jpg";
import moviesTwo from "../images/movies-two-mobile.jpg";
import moviesThree from "../images/movies-three-mobile.jpg";

import bigMestoOne from "../images/mesto-one.jpg";
import bigMestoTwo from "../images/mesto-two.jpg";
import bigMestoThree from "../images/mesto-three.jpg";
import mestoOne from "../images/mesto-one-mobile.jpg";
import mestoTwo from "../images/mesto-two-mobile.jpg";
import mestoThree from "../images/mesto-three-mobile.jpg";

import bigRussiaTravelOne from "../images/russia-one.jpg";
import bigRussiaTravelTwo from "../images/russia-two.jpg";
import bigRussiaTravelThree from "../images/russia-three.jpg";
import russiaTravelOne from "../images/russia-one-mobile.jpg";
import russiaTravelTwo from "../images/russia-two-mobile.jpg";
import russiaTravelThree from "../images/russia-three-mobile.jpg";

import { useState } from "react";

function MyProjects({ language, mobile }) {
  const [bigMovies, setBigMovies] = useState([
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from movies-explorer web-page"
        src={moviesOne}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from movies-explorer web-page"
        src={bigMoviesOne}
      />
    ),
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from movies-explorer web-page"
        src={moviesTwo}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from movies-explorer web-page"
        src={bigMoviesTwo}
      />
    ),
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from movies-explorer web-page"
        src={moviesThree}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from movies-explorer web-page"
        src={bigMoviesThree}
      />
    ),
  ]);
  const [bigMestos, setBigMestos] = useState([
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from mesto web-page"
        src={mestoOne}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from mesto web-page"
        src={bigMestoOne}
      />
    ),
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from mesto web-page"
        src={mestoTwo}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from mesto web-page"
        src={bigMestoTwo}
      />
    ),
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from mesto web-page"
        src={mestoThree}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from mesto web-page"
        src={bigMestoThree}
      />
    ),
  ]);
  const [bigRussias, setBigRussias] = useState([
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from russian-travel web-page"
        src={russiaTravelOne}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from russian-travel web-page"
        src={bigRussiaTravelOne}
      />
    ),
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from russian-travel web-page"
        src={russiaTravelTwo}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from russian-travel web-page"
        src={bigRussiaTravelTwo}
      />
    ),
    window.innerWidth < mobile ? (
      <img
        className="caurosel__image"
        alt="a screenshot from russian-travel web-page"
        src={russiaTravelThree}
      />
    ) : (
      <img
        className="caurosel__image"
        alt="a screenshot from russian-travel web-page"
        src={bigRussiaTravelThree}
      />
    ),
  ]);

  return (
    <section>
      <ul className="about-me__list about-me__list_type_no-padding">
        <li className="about-me about-me_type_no-list">
          <h3 className="about-me__title about-me__title_type_fat">
            Movies explorer
          </h3>
          <p className="about-me__text">
            {`${
              language
                ? "Movies explorer is a search engine for various arthouse films. There you can choose which of the film cards you can add to the 'saved' tab, as well as to divide films into long and short ones. All user information is stored on the NodeJS server, to which the client part of the application is connected."
                : "Movies explorer — система поиска различных артхаус-фильмов. Здесь вы можете выбрать, какие из карточек фильмов хотите добавить во вкладку «сохраненные», а также разделить фильмы на длинные и короткие. Вся информация о пользователе хранится на сервере NodeJS, к которому подключена клиентская часть приложения."
            }`}
          </p>
          <p className="about-me__text">
            {`${language ? "Applied technologies" : "Используемые технологии"}`}
            :
          </p>
          <ul>
            <li className="about-me__text_type_small">HTML, CSS, JavaScript</li>
            <li className="about-me__text_type_small">React, CRA</li>
            <li className="about-me__text_type_small">
              NodeJS, Express, Mongoose, MongoDB
            </li>
          </ul>
          <p className="about-me__text_type_small">
            {`${language ? "Link" : "Ссылка"}`}:{" "}
            <a
              className="about-me__link"
              href="https://eazy.movies-explorer.nomoredomains.rocks/profile"
            >
              https://eazy.movies-explorer.nomoredomains.rocks
            </a>
          </p>
          <p className="about-me__text_type_small">
            {`${language ? "Screenshots" : "Скриншоты"}`}:
          </p>
          <SecondSlider elements={bigMovies} />
        </li>
        <li className="about-me about-me_type_no-list">
          <h3 className="about-me__title about-me__title_type_fat">Mesto</h3>
          <p className="about-me__text">
            {`${
              language
                ? "This project is an SPA. Here you can post cards containing images of various attractions (or any other pictures), add their names or signatures and give these cards likes. Every user's information is stored on the server to which REST requests are sent."
                : "Данный проект является одностраничным веб-приложением. Здесь вы можете публиковать различные карточки с изображениями тех или иных мест (или с любыми другими картинками). Также можно добавлять карточкам названия и ставить лайки. Пользовательская информация, касающаяся учётной записи, опубликованных карточек и поставленных лайков, хранится на NodeJS сервере, куда каждый раз с клиента посылаются REST запросы."
            }`}
          </p>
          <p className="about-me__text">
            {`${language ? "Applied technologies" : "Используемые технологии"}`}
            :
          </p>
          <ul>
            <li className="about-me__text_type_small">HTML, CSS, vanilla JS</li>
            <p className="about-me__text_type_small">
              {`${
                language
                  ? "I've also made a vanilla JS version of Mesto. Here's a link:"
                  : "Я также сделал Mesto на ванильном JS. Вот ссылка:"
              }`}{" "}
              <a
                className="about-me__link"
                href="https://github.com/EazyXxX/mesto"
              >
                https://github.com/EazyXxX/mesto
              </a>
            </p>
            <li className="about-me__text_type_small">React, CRA</li>
            <li className="about-me__text_type_small">
              NodeJS, Express, Mongoose, MongoDB
            </li>
          </ul>
          <p className="about-me__text_type_small">
            {`${language ? "Link" : "Ссылка"}`}:{" "}
            <a
              className="about-me__link"
              href="https://eazyxxx.front.nomoredomains.monster"
            >
              https://eazyxxx.front.nomoredomains.monster
            </a>
          </p>
          <p className="about-me__text_type_small">
            {`${language ? "Screenshots" : "Скриншоты"}`}:
          </p>
          <SecondSlider noPadding={true} elements={bigMestos} />
        </li>
        <li className="about-me about-me_type_no-list">
          <h3 className="about-me__title about-me__title_type_fat">
            Russian travel
          </h3>
          <p className="about-me__text">
            {`${
              language
                ? "This is my very first web project. At its core, this is just an adaptive landing page without any scripts. Pure CSS. With it's help, I learned how to create adative layouts"
                : "Это мой самый первый веб-проект. По существу это всего лишь адаптивная лендинговая страничка, код которой не содержит скриптов. Тут только чистый CSS. Благодаря Russian travel я познакомился с медиа запросами и научился верстать адаптивно"
            }`}
            .
          </p>
          <p className="about-me__text">
            {`${language ? "Applied technologies" : "Используемые технологии"}`}
            :
          </p>
          <ul>
            <li className="about-me__text_type_small">HTML, CSS</li>
          </ul>
          <p className="about-me__text_type_small">
            {`${language ? "Link" : "Ссылка"}`}:{" "}
            <a
              className="about-me__link"
              href="https://eazyxxx.github.io/russian-travel/index.html"
            >
              https://eazyxxx.github.io/russian-travel/index.html
            </a>
          </p>
          <p className="about-me__text_type_small">
            {`${language ? "Screenshots" : "Скриншоты"}`}:
          </p>
          <SecondSlider noPadding={true} elements={bigRussias} />
        </li>
      </ul>
    </section>
  );
}

export default MyProjects;
