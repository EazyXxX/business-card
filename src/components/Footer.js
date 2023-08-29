import "../index.css";
import telegram from "../images/telegram_transparent.png";
import linkedin from "../images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__message">Contact me if you like my profile</h2>
      <div className="footer__container">
        <a
          rel="noreferrer"
          className="footer__link"
          href="https://t.me/hatton_romero"
          target="_blank"
        >
          <img className="footer__image" src={telegram} alt="Telegram logo" />{" "}
          <p className="footer__text">Telegram</p>
        </a>
        <a
          rel="noreferrer"
          className="footer__link"
          href="https://www.linkedin.com/in/olegostanin"
          target="_blank"
        >
          <img className="footer__image" src={linkedin} alt="LinkedIn logo" />{" "}
          <p className="footer__text">LinkedIn</p>
        </a>
      </div>
      <p className="footer__text">e-mail: ostanin.ol2@gmail.com</p>
    </footer>
  );
}

export default Footer;
