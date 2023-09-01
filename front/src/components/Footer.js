import "../index.css";
import telegram from "../images/telegram_transparent.png";
import github from "../images/github.png";

function Footer({language}) {
  return (
    <footer className="footer">
      <h2 className="footer__message">{`${
          language ? "Contact me if you like my profile" : "Свяжитесь со мной, если вам понравился мой профиль"
        }`}</h2>
      <div className="footer__container">
        <a
          rel="noreferrer"
          className="footer__link"
          href="https://t.me/hatton_romero"
          target="_blank"
        >
          <img className="footer__image" src={telegram} alt="Telegram logo" />{" "}
          <p className="footer__text">{`${
          language ? "Telegram" : "Телеграм"
        }`}</p>
        </a>
        <a
          rel="noreferrer"
          className="footer__link"
          href="https://github.com/EazyXxX"
          target="_blank"
        >
          <img className="footer__image" src={github} alt="GitHub logo" />{" "}
          <p className="footer__text">GitHub</p>
        </a>
      </div>
      <p className="footer__text">{`${
          language ? "e-mail: ostanin.ol2@gmail.com" : "эл. почта: ostanin.ol2@gmail.com"
        }`}</p>
    </footer>
  );
}

export default Footer;
